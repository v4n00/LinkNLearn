import QuizEditor from '@/components/QuizEditor';
import { errorToast } from '@/components/Toasts';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { APIURL } from '@/constants/const';
import { QuizType } from '@/constants/interfaces';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const QuizzesManager = () => {
	useEffect(() => {
		document.title = 'LinkNLearn - Quizzes';
	}, []);
	const [filter, setFilter] = useState('');
	const [onChange, setOnChange] = useState(false);

	const { data, refetch } = useQuery({
		queryKey: ['quizManage'],
		queryFn: (): Promise<QuizType[]> =>
			axios
				.get(`${APIURL}/quiz`)
				.then((res) => res.data)
				.catch((e) => {
					if ((e as AxiosError).response?.status === 404) return [] as QuizType[];
					else errorToast(`Error: ${(e as AxiosError).response?.data}`);
				}),
		gcTime: 0,
		retry: 0,
	});

	useEffect(() => {
		if (onChange) {
			refetch();
			setOnChange(false);
			setFilter('');
		}
	}, [onChange, refetch]);

	const filterQuizzes = () => {
		if (data) {
			return data.filter((quiz) => quiz.title.toLowerCase().includes(filter.toLowerCase()));
		}
		return [] as QuizType[];
	};

	return (
		<main>
			<h1>Manage Quizzes</h1>
			<div className="flex flex-col justify-between items-center gap-5">
				<QuizEditor setOnChange={setOnChange} />
				<Input
					placeholder="Search..."
					onChange={(event) => {
						setFilter(event.target.value);
					}}
					value={filter}
				/>
				{/* prettier-ignore */}
				<ScrollArea className="h-[375px] border rounded-lg px-5 py-2 gap-y-5">
					{data 
						? filterQuizzes().length > 0
							? filterQuizzes().map((quiz) => <QuizEditor key={quiz.id} quiz={quiz} setOnChange={setOnChange} />)
							: <p className="w-[600px] text-center mt-10">No flashcards found</p>
						: <Loader2 className="w-[600px] animate-spin mt-10" />}
				</ScrollArea>
			</div>
		</main>
	);
};

export default QuizzesManager;
