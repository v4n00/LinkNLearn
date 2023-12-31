import quiz, { Quiz, QuizModel } from '../models/quiz';
import { getQuestions } from './questionController';

export async function createQuiz(data: Quiz): Promise<any> {
	try {
		await quiz.create(data);
	} catch (e) {
		throw e;
	}
}

export async function publishQuiz(id: number): Promise<any> {
	try {
		await quiz.update({ isPublished: true }, { where: { id } });
	} catch (e) {
		throw e;
	}
}

export async function getQuizWithQuestionsById(id: number, hasAnswer: boolean): Promise<any> {
	try {
		const returnQuiz: QuizModel | null = await quiz.findOne({ where: { id } });
		if (!returnQuiz || !returnQuiz.dataValues.id) return null;
		returnQuiz.dataValues.questions = await getQuestions(returnQuiz.dataValues.id, hasAnswer);
		return returnQuiz;
	} catch (e) {
		throw e;
	}
}

export async function getQuizzes(): Promise<any> {
	try {
		return await quiz.findAll({ where: { isPublished: true } });
	} catch (e) {
		throw e;
	}
}

export async function updateQuiz(id: number, data: Partial<Quiz>): Promise<any> {
	try {
		await quiz.update(data, { where: { id } });
	} catch (e) {
		throw e;
	}
}

export async function deleteQuiz(id: number): Promise<any> {
	try {
		await quiz.destroy({ where: { id } });
	} catch (e) {
		throw e;
	}
}
