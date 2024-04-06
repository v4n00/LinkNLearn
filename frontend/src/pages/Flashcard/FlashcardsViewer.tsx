import FlashcardNavigator from '@/components/Flashcard/FlashcardNavigator';
import { errorToast } from '@/components/Toasts';
import { APIURL } from '@/constants/const';
import { FlashcardType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';

interface FlashcardViewerType {
	type: 'Default' | 'Custom' | 'All';
}

const FlashcardsViewer = ({ type }: FlashcardViewerType) => {
	useEffect(() => {
		document.title = 'LinkNLearn - Flashcards';
	}, []);
	const { user } = useAuth();

	const path = type === 'Default' ? '/flashcard' : type === 'Custom' ? '/flashcard/user' : '/flashcard/all';
	const queryFn = (): Promise<FlashcardType[]> =>
		axios
			.get(`${APIURL}${path}`, { headers: { Authorization: `Bearer ${user?.token}` } })
			.then((res) => res.data)
			.catch((e) => {
				if ((e as AxiosError).response?.status === 404) return [] as FlashcardType[];
				else errorToast(`Error: ${(e as AxiosError).response?.data}`);
			});

	const { error, data } = useQuery({
		queryKey: ['flashcards'],
		queryFn: queryFn,
		gcTime: 0,
		retry: 0,
		refetchOnWindowFocus: false,
	});

	if (error) {
		setTimeout(() => {
			errorToast(`Error: ${(error as AxiosError).response?.data}`);
		}, 1000);
	}

	return (
		<div>
			<p className="page-title">{type} flashcards</p>
			<FlashcardNavigator flashcards={data} />
		</div>
	);
};

export default FlashcardsViewer;
