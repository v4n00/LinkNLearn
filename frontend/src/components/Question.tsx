import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { QuestionType } from '@/constants/interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Card } from './ui/card';

const Question = ({ question }: { question: QuestionType }) => {
	const noAnswers = Object.keys(question.options).length;
	const options = JSON.parse(JSON.stringify(question.options));

	const FormSchema = z.object({
		type: z.enum(options, {
			required_error: 'You need to select an answer.',
		}),
	});

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
	}

	// const Option = ({ option }: { option: string }) => {
	//     return (

	//     );
	// };
	// https://ui.shadcn.com/docs/components/radio-group

	return (
		<Card>
			<div>
				<h2>{question.text}</h2>
			</div>
			<div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}>
						<FormField
							control={form.control}
							name="type"
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="all" />
												</FormControl>
												<FormLabel className="font-normal">All new messages</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</div>
		</Card>
	);
};

export default Question;
