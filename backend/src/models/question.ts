import Sequelize, { ModelDefined } from 'sequelize';
import db from '../config/database';

export interface Question {
	id?: number;
	quizId: number;
	test: string;
	options: string;
	answer: number;
}

interface QuestionAttributes extends Question {}

const question: ModelDefined<Question, QuestionAttributes> = db.define('question', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	quizId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	text: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	options: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	answer: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
});

export default question;
