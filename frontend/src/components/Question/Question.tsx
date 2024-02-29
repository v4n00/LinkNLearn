import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { AnswerType, QuestionType } from '@/constants/interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader } from '../ui/card';

interface QuestionProps {
	question: QuestionType;
	doOnSubmit: (answer: AnswerType) => void;
	buttonText: string;
}

const Question = ({ question, doOnSubmit, buttonText }: QuestionProps) => {
	const options = JSON.parse(JSON.stringify(question.options));

	const FormSchema = z.object({
		answer: z.enum(options, {
			required_error: 'You need to select an answer.',
		}),
	});
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			answer: undefined,
		},
	});
	function onSubmit(data: z.infer<typeof FormSchema>) {
		doOnSubmit({ questionId: question.id, answer: data.answer });
		form.resetField('answer');
	}

	return (
		<Card className="max-w-[700px] max-h-[550px] min-w-[500px]">
			<CardHeader className="text-center p-6">
				<h2>{question.text}</h2>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="answer"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<div>
											{options.map((option: string) => (
												<FormItem key={option}>
													<FormControl>
														<input {...field} type="radio" value={option} checked={field.value === option} hidden />
													</FormControl>
													<FormLabel>
														<Card className={`cursor-pointer mt-2 ${field.value === option ? 'bg-muted' : 'bg-inherit'}`}>
															<CardContent className={`max-w-full flex items-center text-xl p-4`}>{option}</CardContent>
														</Card>
													</FormLabel>
												</FormItem>
											))}
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full my-2">
							{buttonText}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

export default Question;
