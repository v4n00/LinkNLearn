import { flashcards } from '../assets/flashcards';
import questionsArray from '../assets/questions';
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
		questionsArray.forEach((arr) => {
			queryInterface.bulkInsert('question', arr);
		});
	} catch (e) {
		if (e instanceof Error) console.warn(e.stack);
	} finally {
		console.log('Database reset & seeded');
	}
};

seedDatabase();
