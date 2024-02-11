import db from '../config/database';
import initFK from '../config/initFK';

const flashcards = [
	{
		frontSide: 'What is the capital of France?',
		backSide: 'Paris',
	},
	{
		frontSide: 'What is the capital of Spain?',
		backSide: 'Madrid',
	},
	{
		frontSide: 'What is the capital of Italy?',
		backSide: 'Rome',
	},
	{
		frontSide: 'What is the capital of Germany?',
		backSide: 'Berlin',
	},
	{
		frontSide: 'What is the capital of the United Kingdom?',
		backSide: 'London',
	},
	{
		frontSide: 'What is the capital of the United States?',
		backSide: 'Washington, D.C.',
	},
	{
		frontSide: 'What is the capital of Canada?',
		backSide: 'Ottawa',
	},
	{
		frontSide: 'What is the capital of Mexico?',
		backSide: 'Mexico City',
	},
	{
		frontSide: 'What is the capital of Brazil?',
		backSide: 'Brasília',
	},
	{
		frontSide: 'What is the capital of Argentina?',
		backSide: 'Buenos Aires',
	},
	{
		frontSide: 'What is the capital of Colombia?',
		backSide: 'Bogotá',
	},
	{
		frontSide: 'What is the capital of Peru?',
		backSide: 'Lima',
	},
	{
		frontSide: 'What is the capital of Chile?',
		backSide: 'Santiago',
	},
	{
		frontSide: 'What is the capital of Australia?',
		backSide: 'Canberra',
	},
	{
		frontSide: 'What is the capital of New Zealand?',
		backSide: 'Wellington',
	},
	{
		frontSide: 'What is the capital of Japan?',
		backSide: 'Tokyo',
	},
	{
		frontSide: 'What is the capital of South Korea?',
		backSide: 'Seoul',
	},
	{
		frontSide: 'What is the capital of China?',
		backSide: 'Beijing',
	},
	{
		frontSide: 'What is the capital of India?',
		backSide: 'New Delhi',
	},
	{
		frontSide: 'What is the capital of Russia?',
		backSide: 'Moscow',
	},
	{
		frontSide: 'What is the capital of South Africa?',
		backSide: 'Pretoria',
	},
];

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
