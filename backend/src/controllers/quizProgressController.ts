import quizProgress, { QuizProgressModel } from '../models/quizProgress';

export async function getQuizProgressByUserId(userId: number): Promise<QuizProgressModel[]> {
	const quizProgresses = await quizProgress.findAll({
		where: {
			userId,
		},
	});
	return quizProgresses;
}
