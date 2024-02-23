import { QuizType } from '@/constants/interfaces';
import { useEffect } from 'react';

const QuizzesManager = ({ quizzes }: { quizzes?: QuizType[] }) => {
	useEffect(() => {
		document.title = 'LinkNLearn - Quizzes';
	}, []);

	return (
		<main>
			<h1>Manage Quizzes</h1>
			<div className="flex flex-col justify-between items-center gap-5"></div>
		</main>
	);
};

export default QuizzesManager;
