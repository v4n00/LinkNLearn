import FlashcardEditor from '@/components/FlashcardEditor';
import { ScrollArea } from '@/components/ui/scroll-area';
import { APIURL } from '@/constants/const';
import { FlashcardType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const FlashcardsManager = () => {
	const { user } = useAuth();
	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };
	const [onChange, setOnChange] = useState(false);
	const { data, isPending, refetch } = useQuery({
		queryKey: ['flashcardsManage'],
		queryFn: (): Promise<FlashcardType[]> => axios.get(`${APIURL}/flashcard/user`, headers).then((res) => res.data),
		gcTime: 0,
		retry: 0,
	});

	useEffect(() => {
		if (onChange) {
			refetch();
			setOnChange(false);
		}
	}, [onChange, refetch]);

	return (
		<main>
			<h1>Manage flashcards</h1>
			<div className="flex flex-col justify-between items-center gap-5">
				<FlashcardEditor setOnChange={setOnChange} />
				<ScrollArea className="h-[400px] border rounded-lg px-5 py-2 gap-y-5">{data ? data.map((flashcard) => <FlashcardEditor key={flashcard.id} flashcard={flashcard} setOnChange={setOnChange} />) : isPending ? <Loader2 className="w-[642px] m-10 animate-spin" /> : null}</ScrollArea>

				{/* verific aici ce-i gresit cu loader */}
				{/* edge case: delete last custom flashcard */}
			</div>
		</main>
	);
};

export default FlashcardsManager;
