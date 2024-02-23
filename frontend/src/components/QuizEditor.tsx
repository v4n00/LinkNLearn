import { APIURL } from '@/constants/const';
import { QuizEditType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Edit, Save, Trash } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { errorToast, successToast } from './Toasts';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { Input } from './ui/input';

const QuizEditor = ({ quiz, setOnChange }: { quiz?: QuizEditType; setOnChange: Dispatch<SetStateAction<boolean>> }) => {
	const { user } = useAuth();
	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };

	const deleteQuiz = useMutation({
		mutationFn: (id: number) => {
			return axios.delete(`${APIURL}/quiz/${id}`, headers);
		},
		onSuccess: () => successToast('Quiz deleted'),
		onError: (e) => errorToast(`Error: ${(e as AxiosError).response?.data}`),
	});

	const addQuiz = useMutation({
		mutationFn: (quiz: QuizEditType) => {
			return axios.post(`${APIURL}/quiz`, quiz, headers);
		},
		onSuccess: () => successToast('Quiz added'),
		onError: (e) => errorToast(`Error: ${(e as AxiosError).response?.data}`),
	});

	const updateQuiz = useMutation({
		mutationFn: (quiz: QuizEditType) => {
			return axios.patch(`${APIURL}/quiz/${quiz.id}`, quiz, headers);
		},
		onSuccess: () => successToast('Quiz updated'),
		onError: (e) => errorToast(`Error: ${(e as AxiosError).response?.data}`),
	});

	const formSchema = z.object({
		id: z.number().optional(),
		title: z.string().min(1),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			id: quiz?.id || undefined,
			title: quiz?.title || '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const id = form.getValues('id');
		if (id) {
			if (quiz?.title === values.title) {
				errorToast('No changes made');
				return;
			}
			updateQuiz.mutate(values, { onSuccess: () => setOnChange(true) });
		} else {
			addQuiz.mutate(values, { onSuccess: () => setOnChange(true) });
			form.resetField('title');
		}
	}

	function onDelete() {
		const id = form.getValues('id');
		if (id) {
			deleteQuiz.mutate(id, { onSuccess: () => setOnChange(true) });
		} else {
			form.resetField('title');
		}
	}

	return (
		// the copy paste is real with this one ngl
		// hope nobody sees this :D
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Card className="w-[600px] h-[50px] flex flex-row justify-start items-center gap-2 mb-2">
					<FormField
						control={form.control}
						name="id"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input className="h-[40px] w-[50px] ml-2 text-center text-lg" disabled placeholder="ID" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<div className="flex flex-col gap-2 justify-between h-[40px] w-[400px]">
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input className="h-[40px]" placeholder="title" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					<div className="flex flex-row gap-2 justify-between h-[40px] mr-2">
						<Button className="size-[40px] p-0" variant="success" type="submit">
							<Save size={25} />
						</Button>
						<Dialog>
							<DialogTrigger asChild>
								<Button className="size-[40px] p-0" variant="warning" disabled={form.getValues('id') === undefined}>
									<Edit size={25} />
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Manage questions</DialogTitle>
								</DialogHeader>
								{/* question editor here */}
							</DialogContent>
						</Dialog>
						<Button className="size-[40px] p-0" variant="destructive" type="reset" onClick={onDelete}>
							<Trash size={25} />
						</Button>
					</div>
				</Card>
			</form>
		</Form>
	);
};

export default QuizEditor;
