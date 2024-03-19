import { flashcards } from '../assets/flashcards';
import { doublyLinkedListQuestions, filesInCQuestions, pointersInCQuestions, singlyLinkedListQuestions } from '../assets/questions';
import { quizzes } from '../assets/quizzes';
import db from '../config/database';
import initFK from '../config/initFK';

const seedDatabase = async () => {
	try {
		initFK();
		await db.sync({ force: true });
		const queryInterface = db.getQueryInterface();

		queryInterface.bulkInsert('flashcard', flashcards);
		queryInterface.bulkInsert('quiz', quizzes);

		// questions
		queryInterface.bulkInsert('question', filesInCQuestions);
		queryInterface.bulkInsert('question', pointersInCQuestions);
		queryInterface.bulkInsert('question', singlyLinkedListQuestions);
		queryInterface.bulkInsert('question', doublyLinkedListQuestions);
	} catch (e) {
		if (e instanceof Error) console.warn(e.stack);
	} finally {
		console.log('Database reset & seeded');
	}
};

seedDatabase();
