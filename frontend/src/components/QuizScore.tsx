import useAuth from '@/hooks/useAuth';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Card } from './ui/card';

const QuizScores = ({ score, maxScore }: { score?: number; maxScore?: number }) => {
	const { user } = useAuth();
	const navigate = useNavigate();

	return (
		<div>
			{score && maxScore ? (
				<Card className="flex flex-col justify-center items-center p-4 gap-4 min-h-[300px] min-w-[400px]">
					<div className="flex flex-col justify-center items-center">
						<div className="text-4xl font-bold">Congratulations!</div>
						<div className="text-l text-muted-foreground/70">You have completed the quiz.</div>
					</div>
					<div className="flex flex-col justify-center items-center">
						<div className="text-3xl font-bold">
							{score}/{maxScore}
						</div>
						<div className="text-l text-muted-foreground/70">You scored {((score / maxScore) * 100).toFixed(1)}%</div>
					</div>
					<div className="text-md italic">{user ? 'The result has been saved to your account.' : 'Log in in order to save your result.'}</div>
				</Card>
			) : (
				<Card className="flex flex-col justify-center items-center p-6 min-h-[300px] min-w-[400px]">
					<Loader2 className="animate-spin" />
				</Card>
			)}
			<Button className="mt-4 w-full" onClick={() => navigate(-1)}>
				Go back to quizzes
			</Button>
		</div>
	);
};

export default QuizScores;
