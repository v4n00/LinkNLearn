import { errorToast } from '@/components/Toasts';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { APIURL } from '@/constants/const';
import { QuestionEditType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionEditor from '../components/QuestionEditor';

const QuestionManager = () => {
	const { user } = useAuth();
	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };

	const { quizId } = useParams();
	const [filter, setFilter] = useState('');
	const [onChange, setOnChange] = useState(false);

	const { data, refetch } = useQuery({
		queryKey: ['questionManage'],
		queryFn: (): Promise<QuestionEditType[]> =>
			axios
				.get(`${APIURL}/question/${quizId}`, headers)
				.then((res) => {
					res.data.forEach((question: QuestionEditType, i: number) => {
						question.options.forEach((option, j) => {
							if (option === null) res.data[i].options[j] = undefined;
						});

						return question;
					});

					return res.data;
				})
				.catch((e) => {
					if ((e as AxiosError).response?.status === 404) return [] as QuestionEditType[];
					else errorToast(`Error: ${(e as AxiosError).response?.data}`);
				}),
		gcTime: 0,
		retry: 0,
		enabled: quizId !== undefined || user?.token === undefined,
	});

	useEffect(() => {
		if (onChange) {
			refetch();
			setOnChange(false);
			setFilter('');
		}
	}, [onChange, refetch]);

	if (quizId === undefined) return;

	const filterQuestions = () => {
		if (data) {
			return data.filter((question) => question.text.toLowerCase().includes(filter.toLowerCase()));
		}
		return [] as QuestionEditType[];
	};

	return (
		<main>
			<h1>Manage questions</h1>
			<div className="flex flex-col justify-between items-center gap-5">
				<QuestionEditor setOnChange={setOnChange} quizId={parseInt(quizId)} question={{} as QuestionEditType} />
				<Input
					placeholder="Search..."
					onChange={(event) => {
						setFilter(event.target.value);
					}}
					value={filter}
				/>
				{/* prettier-ignore */}
				<ScrollArea className="h-[250px] border rounded-lg px-5 py-2 gap-y-5">
					{data 
						? filterQuestions().length > 0
							? filterQuestions().map((question) => <QuestionEditor key={question.id} question={question} setOnChange={setOnChange} quizId={parseInt(quizId)} />)
							: <p className="w-[600px] text-center mt-10">No questions found</p>
						: <Loader2 className="w-[600px] animate-spin mt-10" />}
				</ScrollArea>
			</div>
		</main>
	);
};

export default QuestionManager;
