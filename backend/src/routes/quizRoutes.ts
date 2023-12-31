import express from 'express';
import { QuestionText } from '../config/interfaces';
import { createQuiz, deleteQuiz, getQuizWithQuestionsById, getQuizzes, updateQuiz } from '../controllers/quizController';
import { verifyAdminToken, verifyToken } from '../middlewares/auth';
import { QuestionModel } from '../models/question';
import { Quiz, QuizModel } from '../models/quiz';
import handleErrorWithResponse from '../utils/errorHandler';

const quizRoutes = express.Router();

quizRoutes.route('/quiz/:id/verify').post(verifyToken, async (req, res) => {
	const id = parseInt(req.params.id);
	const { answers } = req.body;
	if (isNaN(id) || !answers) return res.status(400).json('Bad Request');
	if (!Array.isArray(answers)) return res.status(400).json('Answers must be an array');

	try {
		const quiz: QuizModel = await getQuizWithQuestionsById(id, true);

		if (!quiz) return res.status(404).json('No quiz found');
		if (!quiz.dataValues.questions) return res.status(404).json('No questions found');

		let score = 0;
		quiz.dataValues.questions.forEach((q: QuestionModel, i: number) => {
			if ((q.dataValues.options as QuestionText).answer === answers[i]) score++;
		});

		// TODO: add quizz progress here

		return res.status(200).json({ score: score, total: quiz.dataValues.questions.length });
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

quizRoutes.route('/quiz').post(verifyToken, verifyAdminToken, async (req, res) => {
	const { title }: Quiz = req.body;
	if (!title) return res.status(400).json('Bad Request');

	try {
		await createQuiz({ title });
		return res.status(201).json('Quiz created');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

quizRoutes.route('/quiz').get(verifyToken, async (req, res) => {
	try {
		let quizzes: QuizModel[] = await getQuizzes();

		if (quizzes.length !== 0) return res.status(200).json(quizzes);
		else return res.status(404).json('No quizzes found');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

quizRoutes.route('/quiz/:id').get(verifyToken, async (req, res) => {
	const id = parseInt(req.params.id);
	if (isNaN(id)) return res.status(400).json('Bad Request');

	try {
		const quiz: QuizModel = await getQuizWithQuestionsById(id, false);

		if (quiz) return res.status(200).json(quiz);
		else return res.status(404).json('No quiz found');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

quizRoutes.route('/quiz/:id').patch(verifyToken, verifyAdminToken, async (req, res) => {
	const id = parseInt(req.params.id);
	const updateData = req.body;
	if (!id || isNaN(id) || !updateData) return res.status(400).json('Bad Request');

	try {
		await updateQuiz(id, updateData);
		return res.status(200).json('Quiz updated');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

quizRoutes.route('/quiz/:id/publish').patch(verifyToken, verifyAdminToken, async (req, res) => {
	const id = parseInt(req.params.id);
	if (isNaN(id)) return res.status(400).json('Bad Request');

	try {
		await updateQuiz(id, { isPublished: true });
		return res.status(200).json('Quiz published');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

quizRoutes.route('/quiz/:id').delete(verifyToken, verifyAdminToken, async (req, res) => {
	const id = parseInt(req.params.id);
	if (isNaN(id)) return res.status(400).json('Bad Request');

	try {
		await deleteQuiz(id);
		return res.status(200).json('Quiz deleted');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

export default quizRoutes;
