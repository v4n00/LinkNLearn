import flashcard, { Flashcard, FlashcardModel } from '../models/flashcard';

export async function createFlashcard(data: Flashcard): Promise<void> {
	try {
		await flashcard.create(data);
	} catch (e) {
		throw e;
	}
}

export async function getFlashcardById(id: number): Promise<FlashcardModel | null> {
	try {
		return await flashcard.findOne({ where: { id } });
	} catch (e) {
		throw e;
	}
}

export async function getFlashcards(userId?: number): Promise<FlashcardModel[] | null> {
	try {
		if (userId) {
			return await flashcard.findAll({ where: { userId } });
		} else {
			return await flashcard.findAll({ where: { userId: null } });
		}
	} catch (e) {
		throw e;
	}
}

export async function deleteFlashcard(id: number): Promise<void> {
	try {
		await flashcard.destroy({ where: { id } });
	} catch (e) {
		throw e;
	}
}

export async function updateFlashcard(id: number, updateData: Partial<Flashcard>): Promise<void> {
	try {
		if (updateData.userId) throw new Error('Cannot change ownership of flashcard');
		await flashcard.update(updateData, { where: { id } });
	} catch (e) {
		throw e;
	}
}
