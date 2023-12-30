import Sequelize, { ModelDefined } from 'sequelize';
import db from '../config/database';

export interface Flashcard {
	id?: number;
	userId?: number | null;
	frontSide: string;
	backSide: string;
}

interface FlashcardAttributes extends Flashcard {}
export interface FlashcardModel extends ModelDefined<Flashcard, FlashcardAttributes> {}

const flashcard: FlashcardModel = db.define(
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
				fields: ['userId'],
			},
		],
	}
);

export default flashcard;
