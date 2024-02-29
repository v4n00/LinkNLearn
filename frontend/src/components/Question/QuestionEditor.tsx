import { APIURL } from '@/constants/const';
import { QuestionEditType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Save, Trash } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { errorToast, successToast } from '../Toasts';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Form, FormControl, FormField, FormItem } from '../ui/form';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const QuestionEditor = ({ question, setOnChange, quizId }: { question: QuestionEditType; setOnChange: Dispatch<SetStateAction<boolean>>; quizId: number }) => {
	// im tying a fucking rope with this one
	const { user } = useAuth();
	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };

	const deleteQuestion = useMutation({
		mutationFn: (id: number) => {
			return axios.delete(`${APIURL}/question/${id}`, headers);
		},
		onSuccess: () => successToast('Question deleted'),
		onError: (e) => errorToast(`Error: ${(e as AxiosError).response?.data}`),
	});

	const addQuestion = useMutation({
		mutationFn: (question: QuestionEditType) => {
			return axios.post(`${APIURL}/question`, question, headers);
		},
		onSuccess: () => successToast('Question added'),
		onError: (e) => errorToast(`Error: ${(e as AxiosError).response?.data}`),
	});

	const updateQuestion = useMutation({
		mutationFn: (question: QuestionEditType) => {
			return axios.patch(`${APIURL}/question/${question.id}`, question, headers);
		},
		onSuccess: () => successToast('Question updated'),
		onError: (e) => errorToast(`Error: ${(e as AxiosError).response?.data}`),
	});

	const findOptionsIndex = () => {
		if (question.options && question.answer !== undefined) {
			if (question.options[0] === question.answer) return '0';
			if (question.options[1] === question.answer) return '1';
			if (question.options[2] === question.answer) return '2';
			if (question.options[3] === question.answer) return '3';
		}
		return undefined;
	};
	const resetFormFields = () => {
		form.resetField('text');
		form.resetField('options');
		form.setValue('answer', '0');
	};

	const formSchema = z.object({
		id: z.number().optional(),
		quizId: z.number(),
		text: z.string().min(1),
		options: z.tuple([z.string().min(1), z.string().min(1)]).rest(z.string().optional()),
		answer: z.enum(['0', '1', '2', '3']),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			id: question?.id || undefined,
			quizId: quizId,
			text: question.text || '',
			options: question.options || ['', '', '', ''],
			answer: findOptionsIndex() || '0',
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		const questionSubmit = values as QuestionEditType;

		questionSubmit.options = questionSubmit.options.filter((v) => v !== '');
		if (new Set(questionSubmit.options).size !== questionSubmit.options.length) {
			errorToast('Error: Options must be unique');
			return;
		}

		if (parseInt(questionSubmit.answer) + 1 > questionSubmit.options.length) {
			errorToast('Error: Answer must be within the options');
			return;
		}

		questionSubmit.answer = questionSubmit.options[parseInt(questionSubmit.answer)];

		if (values.id) {
			if (question.text === values.text && question.answer === values.answer && question.options.every((v, i) => v === values.options[i])) {
				errorToast('Error: No changes made');
				return;
			}
			updateQuestion.mutate(questionSubmit, { onSuccess: () => setOnChange(true) });
			resetFormFields();
		} else {
			addQuestion.mutate(questionSubmit, { onSuccess: () => setOnChange(true) });
			resetFormFields();
		}
	}

	function onDelete() {
		const id = form.getValues('id');
		if (id) {
			deleteQuestion.mutate(id, { onSuccess: () => setOnChange(true) });
		} else {
			resetFormFields();
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Card className="w-[600px] h-full flex flex-col justify-start mb-2 py-1">
					<div className="h-full flex flex-row justify-start gap-2 mb-1 mx-2">
						<FormField
							control={form.control}
							name="id"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input className="h-[40px] w-[50px] text-center text-lg" disabled placeholder="ID" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="text"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input className="h-[40px] w-[425px]" placeholder="question" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<div className="flex flex-row gap-2 justify-between h-[40px]">
							<Button className="size-[40px] p-0" variant="success" type="submit">
								<Save size={25} />
							</Button>
							<Button className="size-[40px] p-0" variant="destructive" type="reset" onClick={onDelete}>
								<Trash size={25} />
							</Button>
						</div>
					</div>
					<div className="flex flex-row gap-1 px-2">
						<div>
							<FormField
								control={form.control}
								name="answer"
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<RadioGroup className="flex flex-col gap-1" onValueChange={field.onChange} defaultValue={field.value}>
												{Array.from({ length: 4 }).map((_, i) => (
													<FormItem key={i} className="w-[50px] h-[40px] w-items-center flex justify-center items-center">
														<FormControl>
															<RadioGroupItem value={`${i}`} checked={field.value === `${i}`} />
														</FormControl>
													</FormItem>
												))}
											</RadioGroup>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<div className="flex flex-col gap-1 w-full ml-1">
							{Array.from({ length: 4 }).map((_, i) => (
								<div key={i}>
									<FormField
										control={form.control}
										name={`options.${i}`}
										render={({ field }) => (
											<FormItem>
												<FormControl>
													<Input placeholder={`option ${i + 1}`} {...field} />
												</FormControl>
											</FormItem>
										)}
									/>
								</div>
							))}
						</div>
					</div>
				</Card>
			</form>
		</Form>
	);
};

export default QuestionEditor;
