import express from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { RequestWithToken } from '../config/interfaces';
import { createFlashcard, deleteFlashcard, getFlashcardById, getFlashcards, updateFlashcard } from '../controllers/flashcardController';
import { verifyToken } from '../middlewares/auth';
import { verifyFlashcardOwnership } from '../middlewares/flashcardOwnership';
import { Flashcard, FlashcardModel } from '../models/flashcard';
import handleErrorWithResponse from '../utils/errorHandler';

const flashcardRoutes = express.Router();

flashcardRoutes.route('/flashcard/user').get(verifyToken, async (req, res) => {
	const userId = ((req as RequestWithToken).decodedToken as JwtPayload).userId;

	try {
		let flashcards: FlashcardModel[] = await getFlashcards(userId);

		return res.status(200).json(flashcards);
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

flashcardRoutes.route('/flashcard/:id').get(verifyToken, async (req, res) => {
	const id = parseInt(req.params.id);
	if (isNaN(id)) return res.status(400).json('Bad Request');

	try {
		const flashcard: FlashcardModel = await getFlashcardById(id);

		if (flashcard) return res.status(200).json(flashcard);
		else return res.status(404).json('No flashcard found');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

flashcardRoutes.route('/flashcard').get(verifyToken, async (req, res) => {
	try {
		let flashcards: FlashcardModel[] = await getFlashcards();

		return res.status(200).json(flashcards);
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

flashcardRoutes.route('/flashcard').post(verifyToken, async (req, res) => {
	const { frontSide, backSide }: Flashcard = req.body;
	const userId = ((req as RequestWithToken).decodedToken as JwtPayload).userId;
	if (!frontSide || !backSide) return res.status(400).json('Bad Request');

	try {
		await createFlashcard({ userId, frontSide, backSide });
		return res.status(201).json('Flashcard created');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

flashcardRoutes.route('/flashcard/:id').patch(verifyToken, verifyFlashcardOwnership, async (req, res) => {
	const id = parseInt(req.params.id);
	const updateData = req.body;
	if (!id || isNaN(id) || !updateData) return res.status(400).json('Bad Request');

	try {
		await updateFlashcard(id, updateData);
		return res.status(200).json('Flashcard updated');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

flashcardRoutes.route('/flashcard/:id').delete(verifyToken, verifyFlashcardOwnership, async (req, res) => {
	const id = parseInt(req.params.id);
	if (!id || isNaN(id)) return res.status(400).json('Bad Request');

	try {
		await deleteFlashcard(id);
		return res.status(200).json('Flashcard deleted');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

export default flashcardRoutes;
