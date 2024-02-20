import Question from '@/components/Question';
import { useParams } from 'react-router-dom';

const question = {
	id: 1,
	quizId: 1,
	text: 'What is the capital of France?',
	options: ['London', 'Paris', 'New York', 'Madrid'],
};

const QuizzesTaker = () => {
	const { quizId } = useParams();
	return <Question question={question} />;
};

export default QuizzesTaker;
