import { APIURL } from '@/constants/const';
import { FlashcardType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Save, Trash } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { errorToast, successToast } from './Toasts';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { Input } from './ui/input';

const FlashcardEditor = ({ flashcard, setOnChange }: { flashcard?: FlashcardType; setOnChange: Dispatch<SetStateAction<boolean>> }) => {
	const { user } = useAuth();
	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };

	const deleteFlashcard = useMutation({
		mutationFn: (id: number) => {
			return axios.delete(`${APIURL}/flashcard/${id}`, headers);
		},
		onSuccess: () => successToast('Flashcard deleted'),
		onError: (e) => errorToast(`Error: ${(e as AxiosError).response?.data}`),
	});

	const addFlashcard = useMutation({
		mutationFn: (flashcard: FlashcardType) => {
			return axios.post(`${APIURL}/flashcard`, flashcard, headers);
		},
		onSuccess: () => successToast('Flashcard added'),
		onError: (e) => errorToast(`Error: ${(e as AxiosError).response?.data}`),
	});

	const updateFlashcard = useMutation({
		mutationFn: (flashcard: FlashcardType) => {
			return axios.patch(`${APIURL}/flashcard/${flashcard.id}`, flashcard, headers);
		},
		onSuccess: () => successToast('Flashcard updated'),
		onError: (e) => errorToast(`Error: ${(e as AxiosError).response?.data}`),
	});

	const formSchema = z.object({
		id: z.number().optional(),
		frontSide: z.string().min(1),
		backSide: z.string().min(1),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			id: flashcard?.id || undefined,
			frontSide: flashcard?.frontSide || '',
			backSide: flashcard?.backSide || '',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		if (values.id) {
			if (flashcard?.frontSide === values.frontSide && flashcard?.backSide === values.backSide) {
				errorToast('Error: No changes made');
				return;
			}
			updateFlashcard.mutate(values, { onSuccess: () => setOnChange(true) });
		} else {
			addFlashcard.mutate(values, { onSuccess: () => setOnChange(true) });
			form.resetField('frontSide');
			form.resetField('backSide');
		}
	}

	function onDelete() {
		const id = form.getValues('id');
		if (id) {
			deleteFlashcard.mutate(id, { onSuccess: () => setOnChange(true) });
		} else {
			form.resetField('frontSide');
			form.resetField('backSide');
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Card className="w-[600px] h-[100px] flex flex-row justify-start items-center gap-5 mb-2">
					<FormField
						control={form.control}
						name="id"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input className="size-[80px] ml-5 text-center text-2xl" disabled placeholder="ID" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<div className="flex flex-col gap-2 justify-between h-[80px] w-[400px]">
						<FormField
							control={form.control}
							name="frontSide"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input className="h-[35px]" placeholder="frontside" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="backSide"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input className="h-[35px]" placeholder="backside" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
					</div>
					<div className="flex flex-col gap-2 justify-between h-[80px] mr-5">
						<Button className="size-[80px] p-0" variant="success" type="submit">
							<Save size={25} />
						</Button>
						<Button className="size-[80px] p-0" variant="destructive" type="reset" onClick={onDelete}>
							<Trash size={25} />
						</Button>
					</div>
				</Card>
			</form>
		</Form>
	);
};

export default FlashcardEditor;
