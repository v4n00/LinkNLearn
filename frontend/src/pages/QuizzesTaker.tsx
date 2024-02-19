import Question from '@/components/Question';
import { useParams } from 'react-router-dom';

const question = {
	id: 1,
	quizId: 1,
	text: 'What is the capital of France?',
	options: {
		option1: 'New York',
		option2: 'London',
		option3: 'Paris',
		option4: 'Dublin',
	},
};

const QuizzesTaker = () => {
	const { quizId } = useParams();
	return <Question question={question} />;
};

export default QuizzesTaker;
