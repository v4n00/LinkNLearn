import FlashcardEditor from '@/components/Flashcard/FlashcardEditor';
import { errorToast } from '@/components/Toasts';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { APIURL } from '@/constants/const';
import { FlashcardType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const FlashcardsManager = () => {
	useEffect(() => {
		document.title = 'LinkNLearn - Flashcards';
	}, []);
	const { user } = useAuth();
	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };
	const [onChange, setOnChange] = useState(false);
	const [filter, setFilter] = useState('');

	const { data, refetch } = useQuery({
		queryKey: ['flashcardsManage'],
		queryFn: (): Promise<FlashcardType[]> =>
			axios
				.get(`${APIURL}/flashcard/user`, headers)
				.then((res) => res.data)
				.catch((e) => {
					if ((e as AxiosError).response?.status === 404) return [] as FlashcardType[];
					else errorToast(`Error: ${(e as AxiosError).response?.data}`);
				}),
		gcTime: 0,
		retry: 0,
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		if (onChange) {
			refetch();
			setOnChange(false);
			setFilter('');
		}
	}, [onChange, refetch]);

	const filterFlashcards = () => {
		if (data) {
			return data.filter((flashcard) => {
				return flashcard.frontSide.toLowerCase().includes(filter.toLowerCase()) || flashcard.backSide.toLowerCase().includes(filter.toLowerCase());
			});
		}
		return [] as FlashcardType[];
	};

	return (
		<div className="h-full flex flex-col">
			<p className="page-title">Manage flashcards</p>
			<div className="flex flex-col justify-between items-center gap-5 h-full">
				<FlashcardEditor setOnChange={setOnChange} />
				<Input
					placeholder="Search..."
					onChange={(event) => {
						setFilter(event.target.value);
					}}
					value={filter}
				/>
				{/* prettier-ignore */}
				<ScrollArea className="mb-5 h-0 grow border rounded-lg px-5 py-2 gap-y-5">
						{data
							? filterFlashcards().length > 0
								? filterFlashcards().map((flashcard) => <FlashcardEditor key={flashcard.id} flashcard={flashcard} setOnChange={setOnChange} />)
								: <p className="w-[600px] text-center mt-10">No flashcards found</p>
							: <Loader2 className="w-[600px] animate-spin mt-10" />}
					</ScrollArea>
			</div>
		</div>
	);
};

export default FlashcardsManager;
