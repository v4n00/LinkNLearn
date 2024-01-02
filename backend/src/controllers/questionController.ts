import { QuestionText } from '../config/interfaces';
import question, { Question, QuestionModel } from '../models/question';

export async function addQuestion(data: Question): Promise<void> {
	try {
		data.options = JSON.stringify(data.options);
		await question.create(data);
	} catch (e) {
		throw e;
	}
}

export async function getQuestions(quizId: number, hasAnswer: boolean): Promise<QuestionModel[] | null> {
	try {
		const questions = await question.findAll({ where: { quizId } });
		questions.map((q: QuestionModel) => {
			q.dataValues.options = JSON.parse(q.dataValues.options as string);
			if (!hasAnswer) delete (q.dataValues.options as QuestionText).answer;
			return q;
		});
		return questions;
	} catch (e) {
		throw e;
	}
}

export async function updateQuestion(id: number, data: Partial<Question>): Promise<void> {
	try {
		if (data.quizId) throw new Error('Cannot change ownership of question');
		if (data.options) data.options = JSON.stringify(data.options);
		await question.update(data, { where: { id } });
	} catch (e) {
		throw e;
	}
}

export async function deleteQuestion(id: number): Promise<void> {
	try {
		await question.destroy({ where: { id } });
	} catch (e) {
		throw e;
	}
}

export function isValidQuestionText(question: any): boolean {
	const allowedProps = new Set(['option1', 'option2', 'option3', 'option4', 'answer']);
	const questionProps = new Set(Object.keys(question));

	if (!questionProps.has('option1') || !questionProps.has('option2') || !questionProps.has('answer')) {
		return false;
	}

	for (let prop of questionProps) {
		if (!allowedProps.has(prop)) {
			return false;
		}
	}

	return true;
}
