import express from 'express';
import { isLoggedIn } from '../controllers/authController';
import { createQuiz, deleteQuiz, getQuizWithQuestionsById, getQuizzes, updateQuiz } from '../controllers/quizController';
import { createQuizProgress, getQuizProgressByUserId } from '../controllers/quizProgressController';
import { verifyAdminToken, verifyToken } from '../middlewares/auth';
import { AnswerType } from '../models/question';
import { Quiz, QuizModel } from '../models/quiz';
import handleErrorWithResponse from '../utils/errorHandler';

const quizRoutes = express.Router();

quizRoutes.route('/quiz/:quizId/verify').post(async (req, res) => {
	const quizId = parseInt(req.params.quizId);
	const { answers }: { answers: AnswerType[] } = req.body;
	if (isNaN(quizId) || !answers) return res.status(400).json('Bad Request');
	if (!Array.isArray(answers)) return res.status(400).json('Answers must be an array');

	try {
		const quiz: QuizModel | null = await getQuizWithQuestionsById(quizId, true);
		if (!quiz) return res.status(404).json('No quiz found');

		const questions = quiz.dataValues.questions;
		if (!questions) return res.status(404).json('No questions found');

		// calculate score
		let score = 0;
		answers.forEach((answer) => {
			const question = questions.find((q) => q.dataValues.id === answer.questionId);
			if (question && question.dataValues.answer === answer.answer) score++;
		});

		// quiz progress
		if (isLoggedIn(req)) {
			const userId = (req as any).decodedToken.userId;
			await createQuizProgress({ userId: userId, quizId: quizId, score: score, maxScore: questions.length, dateTaken: new Date() });
		}

		return res.status(200).json({ score: score, maxScore: questions.length });
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

quizRoutes.route('/quiz/:userId/progress/').get(verifyToken, async (req, res) => {
	const userId = parseInt(req.params.userId);
	if (isNaN(userId)) return res.status(400).json('Bad Request');

	try {
		const quizProgresses = await getQuizProgressByUserId(userId);
		if (quizProgresses && quizProgresses.length !== 0) return res.status(200).json(quizProgresses);
		else return res.status(404).json('No quiz progress found');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

quizRoutes.route('/quiz').get(async (req, res) => {
	try {
		let quizzes: QuizModel[] | null = await getQuizzes();

		if (quizzes && quizzes.length !== 0) return res.status(200).json(quizzes);
		else return res.status(404).json('No quizzes found');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

quizRoutes.route('/quiz/:id').get(async (req, res) => {
	const id = parseInt(req.params.id);
	if (isNaN(id)) return res.status(400).json('Bad Request');

	try {
		const quiz: QuizModel | null = await getQuizWithQuestionsById(id, false);

		if (quiz) return res.status(200).json(quiz);
		else return res.status(404).json('No quiz found');
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
