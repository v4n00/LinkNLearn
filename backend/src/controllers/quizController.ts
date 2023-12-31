import question, { Question } from '../models/question';
import quiz, { Quiz } from '../models/quiz';

// default functions for CRUD operations

export async function createQuiz(data: Quiz): Promise<any> {
	try {
		await quiz.create(data);
	} catch (e) {
		throw e;
	}
}

export async function getQuizById(id: number): Promise<any> {
	try {
		return await quiz.findOne({ where: { id } });
	} catch (e) {
		throw e;
	}
}

export async function getQuizzes(): Promise<any> {
	try {
		return await quiz.findAll();
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

// question operations

export async function addQuestion(quizId: number, data: Question): Promise<any> {
	try {
		data.quizId = quizId;
		data.options = JSON.stringify(data.options);
		await question.create(data);
	} catch (e) {
		throw e;
	}
}

export async function getQuestions(quizId: number): Promise<any> {
	try {
		return await question.findAll({ where: { quizId } });
	} catch (e) {
		throw e;
	}
}

export async function getQuestionById(id: number): Promise<any> {
	try {
		return await question.findOne({ where: { id } });
	} catch (e) {
		throw e;
	}
}

export async function updateQuestion(id: number, data: Partial<Question>): Promise<any> {
	try {
		await question.update(data, { where: { id } });
	} catch (e) {
		throw e;
	}
}

export async function deleteQuestion(id: number): Promise<any> {
	try {
		await question.destroy({ where: { id } });
	} catch (e) {
		throw e;
	}
}
