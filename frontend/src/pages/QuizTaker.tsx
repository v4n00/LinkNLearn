import Question from '@/components/Question';
import QuizScores from '@/components/QuizScore';
import { errorToast, successToast } from '@/components/Toasts';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { APIURL } from '@/constants/const';
import { AnswerType, QuizResultType, QuizType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const QuizTaker = () => {
	const { quizId } = useParams();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
	const [questionIndexOffset, setQuestionIndexOffset] = useState<number>(0);
	const { user } = useAuth();
	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };

	useEffect(() => {
		document.title = 'LinkNLearn - Quiz';
	}, []);

	const { data } = useQuery({
		queryKey: ['quiz', quizId],
		queryFn: (): Promise<QuizType> =>
			axios
				.get(`${APIURL}/quiz/${quizId}`)
				.then((res) => {
					// randomly shuffle the questions
					(res.data as QuizType).questions = (res.data as QuizType).questions.sort(() => Math.random() - 0.5);
					// randomyl shuffle the options for each question
					(res.data as QuizType).questions.forEach((question) => {
						question.options = question.options.sort(() => Math.random() - 0.5);
					});
					return res.data;
				})
				.catch((e) => {
					errorToast(`Error: ${(e as AxiosError).response?.data}`);
				}),
		gcTime: 0,
		retry: 0,
	});

	const submitAnswersToServer = useMutation({
		mutationFn: (answers: AnswerType[]): Promise<QuizResultType> =>
			axios
				.post(`${APIURL}/quiz/${quizId}/verify`, { answers }, user?.token ? headers : undefined)
				.then((res) => res.data)
				.catch((e) => {
					errorToast(`Error: ${(e as AxiosError).response?.data}`);
				}),
		gcTime: 0,
		retry: 0,
	});

	useEffect(() => {
		if (data) {
			const savedAnswers = getAnswersFromLocalStorage();
			if (savedAnswers.length > 0) {
				// filter data.questions to only include questions that are not in savedAnswers and also increment the currentQuestionIndex
				if (savedAnswers.length < data.questions.length) {
					const questions = data.questions.filter((question) => !savedAnswers.some((answer) => answer.questionId === question.id));
					data.questions = questions;
					setQuestionIndexOffset(savedAnswers.length);
					successToast('Answers successfully restored');
				} else {
					clearAnswersFromLocalStorage();
				}
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	const removeDuplicateAnswers = (answers: AnswerType[]): AnswerType[] => {
		return answers.filter((answer, index, self) => index === self.findIndex((t) => t.questionId === answer.questionId));
	};
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
		const answers = removeDuplicateAnswers(getAnswersFromLocalStorage());

		submitAnswersToServer.mutate(answers);
		clearAnswersFromLocalStorage();
	};

	return (
		<div>
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
						<Card className="w-[500px] h-[350px] flex justify-center items-center">This quiz has no questions.</Card>
					)
				) : (
					<Card className="w-[500px] h-[350px] flex justify-center items-center">
						<Loader2 className="animate-spin" />
					</Card>
				)}
			</div>
			<Progress className="mt-10 rounded-md" value={data && ((currentQuestionIndex + questionIndexOffset) / (data.questions.length + questionIndexOffset)) * 100} />
		</div>
	);
};

export default QuizTaker;
