import Sequelize, { Model, ModelDefined } from 'sequelize';
import db from '../config/database';

export interface QuizProgress {
	id?: number;
	userId: number;
	quizId: number;
	score: number;
	dateTaken: Date;
}

interface QuizProgressAttributes extends QuizProgress {}
export interface QuizProgressModel extends Model<QuizProgress, QuizProgressAttributes> {}

const quizProgress: ModelDefined<QuizProgress, QuizProgressAttributes> = db.define('quizProgress', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true,
		allowNull: false,
	},
	userId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	quizId: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	score: {
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	dateTaken: {
		type: Sequelize.DATE,
		allowNull: false,
	},
});

export default quizProgress;
