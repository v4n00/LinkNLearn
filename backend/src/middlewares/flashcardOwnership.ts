// TODO:
// cand fac request-uri, se va trimite token-ul si de acolo decodez id-ul utilizatorului
// vad daca id-ul exista in tabela de flashcard-uri si daca da fac ce trebuie sa fac cu flashcard-urile

import { NextFunction, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken'; // Import JwtPayload
import { RequestWithToken } from '../config/interfaces';
import { getFlashcardById } from '../controllers/flashcardController';
import handleErrorWithResponse from '../utils/errorHandler';

export const verifyFlashcardOwnership = async (req: RequestWithToken, res: Response, next: NextFunction) => {
	try {
		const flashcardId = parseInt(req.params.id);
		if (isNaN(flashcardId)) return res.status(400).json('Bad Request');

		if (req.decodedToken) {
			const userId = (req.decodedToken as JwtPayload).userId;
			const flashcardItem = await getFlashcardById(flashcardId);

			if (flashcardItem.userId === userId) {
				next();
			} else {
				return res.status(401).json('Unauthorized');
			}
		}
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
};
