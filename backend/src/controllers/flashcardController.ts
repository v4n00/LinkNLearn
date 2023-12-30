import flashcard, { Flashcard } from '../models/flashcard';

/**
 * Creates a flashcard in the database.
 *
 * @param {Flashcard} data - An object containing the properties of the flashcard to create.
 * @throws Will throw an error if the creation process fails.
 */
export async function createFlashcard(data: Flashcard): Promise<any> {
	try {
		await flashcard.create(data);
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
 * @param {Partial<Flashcard>} updateData - An object containing the properties of the flashcard to update.
 * @returns {Promise<any>} A promise that resolves when the flashcard is updated.
 * @throws Will throw an error if the update process fails.
 */
export async function updateFlashcard(id: number, updateData: Partial<Flashcard>): Promise<any> {
	try {
		await flashcard.update(updateData, { where: { id } });
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
			return await flashcard.findAll({ where: { userId: null } });
		}
	} catch (e) {
		throw e;
	}
}
