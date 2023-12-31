import Sequelize, { Model, ModelDefined } from 'sequelize';
import db from '../config/database';
import { QuestionModel } from './question';

export interface Quiz {
	id?: number;
	title: string;
	isPublished?: boolean;
	questions?: QuestionModel[];
}

interface QuizAttributes extends Quiz {}
export interface QuizModel extends Model<Quiz, QuizAttributes> {}

const quiz: ModelDefined<Quiz, QuizAttributes> = db.define('quiz', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	title: {
		type: Sequelize.STRING(200),
		allowNull: false,
	},
	isPublished: {
		type: Sequelize.BOOLEAN,
		defaultValue: false,
		allowNull: false,
	},
});

export default quiz;
