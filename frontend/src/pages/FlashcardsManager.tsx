import FlashcardEditor from '@/components/FlashcardEditor';
import { ScrollArea } from '@/components/ui/scroll-area';
import { APIURL } from '@/constants/const';
import { FlashcardType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const FlashcardsManager = () => {
	const { user } = useAuth();
	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };
	const [onChange, setOnChange] = useState(false);
	const { data, refetch } = useQuery({
		queryKey: ['flashcardsManage'],
		queryFn: (): Promise<FlashcardType[]> =>
			axios
				.get(`${APIURL}/flashcard/user`, headers)
				.then((res) => res.data)
				.catch((e) => {
					if ((e as AxiosError).response?.status === 404) return [] as FlashcardType[];
				}),
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
				{/* prettier-ignore */}
				<ScrollArea className="h-[400px] border rounded-lg px-5 py-2 gap-y-5">
					{data
						? data.length > 0
							? data.map((flashcard) => <FlashcardEditor key={flashcard.id} flashcard={flashcard} setOnChange={setOnChange} />)
							: <p className="w-[600px] text-center mt-10">No flashcards found</p>
						: <Loader2 className="w-[600px] animate-spin mt-10" />}
				</ScrollArea>
			</div>
		</main>
	);
};

export default FlashcardsManager;
