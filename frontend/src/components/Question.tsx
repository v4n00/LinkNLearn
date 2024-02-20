import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { QuestionType } from '@/constants/interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

const Question = ({ question }: { question: QuestionType }) => {
	const options = JSON.parse(JSON.stringify(question.options));

	const FormSchema = z.object({
		answer: z.enum(options, {
			required_error: 'You need to select an answer.',
		}),
	});
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
	}

	return (
		<Card>
			<CardContent className="flex flex-col items-center p-6">
				<h2>{question.text}</h2>
			</CardContent>
			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="answer"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
											{options.map((option: string) => (
												<Option key={option} option={option} field={field} />
											))}
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit">Next</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};

const Option = ({
	option,
	field,
}: {
	option: string;
	field: ControllerRenderProps<
		{
			answer?: unknown;
		},
		'answer'
	>;
}) => {
	return (
		<FormItem key={option}>
			<FormControl>
				<RadioGroupItem value={option} hidden />
			</FormControl>
			<FormLabel>
				<Card>
					<CardContent className={`${field.value === option ? 'text-7xl' : 'text-2xl'}`}>{option}</CardContent>
				</Card>
			</FormLabel>
		</FormItem>
	);
};

export default Question;
