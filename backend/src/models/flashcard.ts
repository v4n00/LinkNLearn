import Sequelize, { ModelDefined } from 'sequelize';
import db from '../config/database';

export interface Flashcard {
	id?: number;
	userId?: number;
	frontSide: string;
	backSide: string;
}

interface FlashcardAttributes extends Flashcard {}

const flashcard: ModelDefined<Flashcard, FlashcardAttributes> = db.define(
	'flashcard',
	{
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		userId: {
			type: Sequelize.INTEGER,
			allowNull: true,
		},
		frontSide: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
	},
	{
		indexes: [
			{
				name: 'nonAssignedFlashcards',
				fields: ['userId'],
			},
		],
	}
);

export default flashcard;
