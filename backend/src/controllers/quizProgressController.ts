import quizProgress, { QuizProgress, QuizProgressModel } from '../models/quizProgress';

export async function getQuizProgressByUserId(userId: number): Promise<QuizProgressModel[] | null> {
	const quizProgresses = await quizProgress.findAll({
		where: {
			userId,
		},
	});
	return quizProgresses;
}

export async function createQuizProgress(data: QuizProgress): Promise<void> {
	try {
		await quizProgress.create(data);
	} catch (e) {
		throw e;
	}
}
