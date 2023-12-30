import Sequelize, { ModelDefined } from 'sequelize';
import db from '../config/database';

export interface Quiz {
	id?: number;
	title: string;
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
		type: Sequelize.STRING,
		allowNull: false,
	},
	status: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

export default quiz;
