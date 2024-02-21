import Question from '@/components/Question';
import QuizScores from '@/components/QuizScore';
import { errorToast } from '@/components/Toasts';
import { Card } from '@/components/ui/card';
import { APIURL } from '@/constants/const';
import { AnswerType, QuizResultType, QuizType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { Progress } from '@radix-ui/react-progress';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const QuizzesTaker = () => {
	const { quizId } = useParams();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const { user } = useAuth();
	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };

	const { data } = useQuery({
		queryKey: ['quiz', quizId],
		queryFn: (): Promise<QuizType> =>
			axios
				.get(`${APIURL}/quiz/${quizId}`)
				.then((res) => res.data)
				.catch((e) => {
					errorToast(`Error: ${(e as AxiosError).response?.data}`);
				}),
		gcTime: 0,
		retry: 0,
	});

	const submitAnswersToServer = useMutation({
		mutationFn: (answers: AnswerType[]): Promise<QuizResultType> =>
			axios
				.post(`${APIURL}/quiz/${quizId}/verify`, { answers }, headers)
				.then((res) => res.data)
				.catch((e) => {
					errorToast(`Error: ${(e as AxiosError).response?.data}`);
				}),
		gcTime: 0,
		retry: 0,
	});

	const clearAnswersFromLocalStorage = (): void => {
		localStorage.removeItem(`answers-${quizId}`);
	};
	const getAnswersFromLocalStorage = (): AnswerType[] => {
		return JSON.parse(localStorage.getItem(`answers-${quizId}`) || '[]');
	};
	const addAnswerToLocalStorage = (answer: AnswerType): void => {
		const answers = JSON.parse(localStorage.getItem(`answers-${quizId}`) || '[]');
		answers.push(answer);
		localStorage.setItem(`answers-${quizId}`, JSON.stringify(answers));
		setCurrentQuestionIndex(currentQuestionIndex + 1);
	};
	const submitAnswers = (answer: AnswerType): void => {
		addAnswerToLocalStorage(answer);
		let answers = getAnswersFromLocalStorage();

		// remove duplicate answers
		answers = answers.filter((answer, index, self) => index === self.findIndex((t) => t.questionId === answer.questionId));

		submitAnswersToServer.mutate(answers);

		clearAnswersFromLocalStorage();
	};

	return (
		<main>
			<h1>{data?.title ?? ' '}</h1>
			<div>
				{data !== undefined ? (
					data.questions.length > 0 ? (
						currentQuestionIndex < data.questions.length - 1 ? (
							<Question buttonText="Next" question={data.questions[currentQuestionIndex]} doOnSubmit={addAnswerToLocalStorage} />
						) : currentQuestionIndex > data.questions.length - 1 ? (
							<QuizScores score={submitAnswersToServer.data?.score} maxScore={submitAnswersToServer.data?.maxScore} />
						) : (
							<Question buttonText="Submit" question={data.questions[currentQuestionIndex]} doOnSubmit={submitAnswers} />
						)
					) : (
						<Card className="w-[500px] h-[550px] flex justify-center items-center">This quiz has no questions.</Card>
					)
				) : (
					<Card className="w-[500px] h-[550px] flex justify-center items-center">
						<Loader2 className="animate-spin" />
					</Card>
				)}
			</div>
			{/* fix this */}
			<Progress value={33} />
		</main>
	);
};

export default QuizzesTaker;
