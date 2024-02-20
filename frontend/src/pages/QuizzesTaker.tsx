import Question from '@/components/Question';
import { APIURL } from '@/constants/const';
import { AnswerType, QuizType } from '@/constants/interfaces';
import { Progress } from '@radix-ui/react-progress';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const QuizzesTaker = () => {
	const { quizId } = useParams();
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

	const { data } = useQuery({
		queryKey: ['quiz', quizId],
		queryFn: (): Promise<QuizType> => axios.get(`${APIURL}/quiz/${quizId}`).then((res) => res.data),
		gcTime: 0,
		retry: 0,
	});

	const submitAnswersToServer = useMutation({
		mutationFn: (answers: AnswerType[]) => axios.post(`${APIURL}/quiz/${quizId}/verify`, { answers }),
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
			{/* if index oob show submit or smth */}
			<div>{data && data.questions && <Question buttonText="Next" question={data.questions[currentQuestionIndex]} doOnSubmit={addAnswerToLocalStorage} />}</div>
			{/* fix this */}
			<Progress value={33} />
		</main>
	);
};

export default QuizzesTaker;
