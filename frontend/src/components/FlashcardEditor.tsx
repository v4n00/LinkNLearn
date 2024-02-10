import { FlashcardType } from '@/constants/interfaces';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save, Trash } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';

const FlashcardEditor = ({ flashcard }: { flashcard?: FlashcardType }) => {
	const formSchema = z.object({
		id: z.number(),
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
		console.log(values);
	}

	return (
		<Card className="h-[100px] flex flex-row justify-start items-center gap-5">
			<Input className="size-[80px] ml-5 text-center text-2xl" disabled placeholder="ID" />
			<div className="flex flex-col gap-2 justify-between h-[80px] w-[400px]">
				<Input className="h-[35px]" placeholder="frontside" />
				<Input className="h-[35px]" placeholder="backside" />
			</div>
			<div className="flex flex-col gap-2 justify-between h-[80px] mr-5">
				<Button className="size-[80px] p-0" variant="success">
					<Save size={25} />
				</Button>
				<Button className="size-[80px] p-0" variant="destructive">
					<Trash size={25} />
				</Button>
			</div>
		</Card>
	);
};

export default FlashcardEditor;
