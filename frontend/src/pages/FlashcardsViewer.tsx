import FlashcardsNavigator from '@/components/FlashcardsNavigator';
import { errorToast } from '@/components/Toasts';
import { APIURL } from '@/constants/const';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

interface FlashcardViewerType {
	type: 'Default' | 'Custom' | 'All' | 'Manage';
}

const FlashcardsViewer = ({ type }: FlashcardViewerType) => {
	const { user } = useAuth();
	let queryFn = () => axios.get(`${APIURL}/flashcard`).then((res) => res.data);

	if (type !== 'Default') {
		const headers = { headers: { Authorization: `Bearer ${user?.token}` } };
		if (type === 'Custom' || type === 'Manage') {
			queryFn = () => axios.get(`${APIURL}/flashcard/user`, headers).then((res) => res.data);
		} else {
			queryFn = () => axios.get(`${APIURL}/flashcard/all`, headers).then((res) => res.data);
		}
	}

	const { isPending, error, data } = useQuery({
		queryKey: ['flashcards'],
		queryFn: queryFn,
		gcTime: 0,
		retry: 0,
	});

	if (type === 'Manage') {
		console.log('manage');
	} else {
		if (error) {
			setTimeout(() => {
				errorToast(`Error: ${(error as AxiosError).response?.data}`);
			}, 1000);
		}

		return (
			<main>
				<h1>{type} flashcards</h1>
				{isPending ? <FlashcardsNavigator flashcards={[]} /> : <FlashcardsNavigator flashcards={data} />}
			</main>
		);
	}
};

export default FlashcardsViewer;
