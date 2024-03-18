import flashcards from '../assets/flashcards.json';
import db from '../config/database';
import initFK from '../config/initFK';

const seedDatabase = async () => {
	try {
		initFK();
		await db.sync({ force: true });
		const queryInterface = db.getQueryInterface();

		queryInterface.bulkInsert('flashcard', flashcards);
	} catch (e) {
		if (e instanceof Error) console.warn(e.stack);
	} finally {
		console.log('Database reset & seeded');
	}
};

seedDatabase();
