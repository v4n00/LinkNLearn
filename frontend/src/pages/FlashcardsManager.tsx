import FlashcardEditor from '@/components/FlashcardEditor';
import { APIURL } from '@/constants/const';
import { FlashcardType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const FlashcardsManager = () => {
	const { user } = useAuth();
	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };
	const { data, isPending } = useQuery({
		queryKey: ['flashcardsManage'],
		queryFn: (): Promise<FlashcardType[]> => axios.get(`${APIURL}/flashcard/user`, headers).then((res) => res.data),
		gcTime: 0,
		retry: 0,
	});
	// https://tanstack.com/query/latest/docs/framework/react/guides/paginated-queries

	return (
		<main>
			<h1>Manage flashcards</h1>
			<div className="flex flex-col justify-between items-center gap-5">
				<FlashcardEditor />
				{data ? data.map((flashcard) => <FlashcardEditor key={flashcard.id} flashcard={flashcard} />) : isPending ? <Loader2 className="animate-spin" /> : null}
			</div>
		</main>
	);
};

export default FlashcardsManager;
