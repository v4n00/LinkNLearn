import { NextFunction, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken'; // Import JwtPayload
import { RequestWithToken } from '../constants/interfaces';
import { getFlashcardById } from '../controllers/flashcardController';
import { FlashcardModel } from '../models/flashcard';
import handleErrorWithResponse from '../utils/errorHandler';

export const verifyFlashcardOwnership = async (req: RequestWithToken, res: Response, next: NextFunction) => {
	try {
		const flashcardId = parseInt(req.params.id);
		if (isNaN(flashcardId)) return res.status(400).json('Bad Request');

		if (req.decodedToken) {
			const userId = (req.decodedToken as JwtPayload).userId;
			const flashcardItem: FlashcardModel | null = await getFlashcardById(flashcardId);
			if (!flashcardItem) return res.status(404).json('Flascard not found');

			if (flashcardItem.dataValues.userId === null && parseInt(userId) === 0) {
				next();
			} else if (flashcardItem.dataValues.userId === userId) {
				next();
			} else {
				return res.status(401).json('Unauthorized');
			}
		}
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
};
