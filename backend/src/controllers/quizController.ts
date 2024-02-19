import quiz, { Quiz, QuizModel } from '../models/quiz';
import { getQuestions } from './questionController';

export async function createQuiz(data: Quiz): Promise<void> {
	try {
		await quiz.create(data);
	} catch (e) {
		throw e;
	}
}

export async function getQuizWithQuestionsById(id: number, hasAnswer: boolean): Promise<QuizModel | null> {
	try {
		const returnQuiz: QuizModel | null = await quiz.findOne({ where: { id } });
		if (!returnQuiz || !returnQuiz.dataValues.id) return null;

		const questions = await getQuestions(returnQuiz.dataValues.id, hasAnswer);
		if (questions) returnQuiz.dataValues.questions = questions;
		return returnQuiz;
	} catch (e) {
		throw e;
	}
}

export async function getQuizzes(): Promise<QuizModel[] | null> {
	try {
		return await quiz.findAll();
	} catch (e) {
		throw e;
	}
}

export async function updateQuiz(id: number, data: Partial<Quiz>): Promise<void> {
	try {
		await quiz.update(data, { where: { id } });
	} catch (e) {
		throw e;
	}
}

export async function deleteQuiz(id: number): Promise<void> {
	try {
		await quiz.destroy({ where: { id } });
	} catch (e) {
		throw e;
	}
}
