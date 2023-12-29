import Sequelize, { ModelDefined } from 'sequelize';
import db from '../config/database';

export interface QuizProgress {
	userId: number;
	quizId: number;
	score: number;
	dateTaken: Date;
}

interface QuizProgressAttributes extends QuizProgress {}

const quizProgress: ModelDefined<QuizProgress, QuizProgressAttributes> = db.define('quizProgress', {
	userId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
	},
	quizId: {
		type: Sequelize.INTEGER,
		primaryKey: true,
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
