import Sequelize, { Model, ModelDefined } from 'sequelize';
import db from '../config/database';
import { QuestionText } from '../config/interfaces';

export interface Question {
	id?: number;
	quizId: number;
	text: string;
	options: QuestionText | string;
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
});

export default question;
