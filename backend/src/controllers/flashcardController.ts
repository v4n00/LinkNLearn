import flashcard from '../models/flashcard';

/**
 * Creates a flashcard in the database.
 *
 * @param {string} frontSide - The content for the front side of the flashcard.
 * @param {string} backSide - The content for the back side of the flashcard.
 * @param {number} [userId] - The ID of the user who created the flashcard. If not provided, the flashcard will be created globally.
 * @throws Will throw an error if the creation process fails.
 */
export async function createFlashcard(frontSide: string, backSide: string, userId?: number): Promise<any> {
	try {
		if (userId) {
			await flashcard.create({ frontSide, backSide, userId });
		} else {
			await flashcard.create({ frontSide, backSide });
		}
	} catch (e) {
		throw e;
	}
}

/**
 * Retrieves a flashcard from the database.
 *
 * @param {number} id - The ID of the flashcard to retrieve.
 * @throws Will throw an error if the retrieval process fails.
 */
export async function getFlashcardById(id: number): Promise<any> {
	try {
		return await flashcard.findOne({ where: { id } });
	} catch (e) {
		throw e;
	}
}

/**
 * Deletes a flashcard from the database.
 *
 * @param {number} id - The ID of the flashcard to delete.
 * @throws Will throw an error if the deletion process fails.
 */
export async function deleteFlashcard(id: number): Promise<any> {
	try {
		await flashcard.destroy({ where: { id } });
	} catch (e) {
		throw e;
	}
}

/**
 * Updates a flashcard in the database.
 *
 * @param {number} id - The ID of the flashcard to update.
 * @param {string} frontSide - The new content for the front side of the flashcard.
 * @param {string} backSide - The new content for the back side of the flashcard.
 * @throws Will throw an error if the update process fails.
 */
export async function updateFlashcard(id: number, frontSide: string, backSide: string): Promise<any> {
	try {
		await flashcard.update({ frontSide, backSide }, { where: { id } });
	} catch (e) {
		throw e;
	}
}

/**
 * Retrieves all flashcards for a specific user or all flashcards if no user ID is provided.
 *
 * @param {number} [userId] - The ID of the user whose flashcards to retrieve. If not provided, retrieves all flashcards.
 * @returns {Promise<any>} A promise that resolves to an array of flashcards.
 * @throws Will throw an error if the retrieval process fails.
 */
export async function getFlashcards(userId?: number): Promise<any> {
	try {
		if (userId) {
			return await flashcard.findAll({ where: { userId } });
		} else {
			return await flashcard.findAll({ where: { userId: undefined } });
		}
	} catch (e) {
		throw e;
	}
}
