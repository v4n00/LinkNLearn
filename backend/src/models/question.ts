import Sequelize, { Model, ModelDefined } from 'sequelize';
import db from '../config/database';

export interface Question {
	id?: number;
	quizId: number;
	text: string;
	options: string | string[];
	answer?: string;
}

export interface AnswerType {
	questionId: number;
	answer: string;
}

interface QuestionAttributes extends Question {}
export interface QuestionModel extends Model<Question, QuestionAttributes> {}

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
		type: Sequelize.STRING(1000),
		allowNull: false,
	},
	options: {
		type: Sequelize.STRING(1000),
		allowNull: false,
	},
	answer: {
		type: Sequelize.STRING(1000),
		allowNull: true,
	},
});

export default question;
