import Sequelize, { ModelDefined } from 'sequelize';
import db from '../config/database';

export interface Quiz {
	id?: number;
	title: string;
	isPublished: boolean;
}

interface QuizAttributes extends Quiz {}

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
