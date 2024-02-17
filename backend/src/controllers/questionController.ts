import { QuestionText } from '../constants/interfaces';
import question, { QuestionModel } from '../models/question';

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
