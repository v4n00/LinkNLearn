import FlashcardsNavigator from '@/components/FlashcardsNavigator';
import { errorToast } from '@/components/Toasts';
import { APIURL } from '@/constants/const';
import { FlashcardType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

interface FlashcardViewerType {
	type: 'Default' | 'Custom' | 'All';
}

const FlashcardsViewer = ({ type }: FlashcardViewerType) => {
	const { user } = useAuth();
	let queryFn = (): Promise<FlashcardType[]> => axios.get(`${APIURL}/flashcard`).then((res) => res.data);

	if (type !== 'Default') {
		const headers = { headers: { Authorization: `Bearer ${user?.token}` } };
		if (type === 'Custom') {
			queryFn = (): Promise<FlashcardType[]> => axios.get(`${APIURL}/flashcard/user`, headers).then((res) => res.data);
		} else {
			queryFn = (): Promise<FlashcardType[]> => axios.get(`${APIURL}/flashcard/all`, headers).then((res) => res.data);
		}
	}

	const { error, data } = useQuery({
		queryKey: ['flashcards'],
		queryFn: queryFn,
		gcTime: 0,
		retry: 0,
	});

	if (error) {
		setTimeout(() => {
			errorToast(`Error: ${(error as AxiosError).response?.data}`);
		}, 1000);
	}

	return (
		<main>
			<h1>{type} flashcards</h1>
			<FlashcardsNavigator flashcards={data ?? []} />
		</main>
	);
};

export default FlashcardsViewer;
