import express from 'express';
import { addQuestion, deleteQuestion, getQuestions, updateQuestion } from '../controllers/questionController';
import { verifyAdminToken, verifyToken } from '../middlewares/auth';
import handleErrorWithResponse from '../utils/errorHandler';

const questionRoutes = express.Router();

questionRoutes.route('/question').post(verifyToken, verifyAdminToken, async (req, res) => {
	const { quizId, text, options, answer } = req.body;
	if (!quizId || !text || !options || !answer) return res.status(400).json('Bad Request');
	if (!Array.isArray(options) || options.length < 2) return res.status(400).json('Options array error');
	if (!options.includes(answer)) return res.status(400).json('Answer not in options');

	try {
		await addQuestion({ quizId, text, options, answer });
		return res.status(201).json('Question created');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

questionRoutes.route('/question/:quizId').get(verifyToken, verifyAdminToken, async (req, res) => {
	const quizId = parseInt(req.params.quizId);
	if (isNaN(quizId)) return res.status(400).json('Bad Request');

	try {
		let questions = await getQuestions(quizId, true);

		if (questions && questions.length !== 0) return res.status(200).json(questions);
		else return res.status(404).json('No questions found');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

questionRoutes.route('/question/:questionId').patch(verifyToken, verifyAdminToken, async (req, res) => {
	const questionId = parseInt(req.params.questionId);
	const updateData = req.body;
	if (!questionId || isNaN(questionId) || !updateData) return res.status(400).json('Bad Request');

	try {
		delete updateData.quizId;
		await updateQuestion(questionId, updateData);
		return res.status(200).json('Question updated');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

questionRoutes.route('/question/:questionId').delete(verifyToken, verifyAdminToken, async (req, res) => {
	const questionId = parseInt(req.params.questionId);
	if (isNaN(questionId)) return res.status(400).json('Bad Request');

	try {
		await deleteQuestion(questionId);
		return res.status(200).json('Question deleted');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

export default questionRoutes;
