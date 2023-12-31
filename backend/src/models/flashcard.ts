import Sequelize, { Model, ModelDefined } from 'sequelize';
import db from '../config/database';

export interface Flashcard {
	id?: number;
	userId?: number | null;
	frontSide: string;
	backSide: string;
}

interface FlashcardAttributes extends Flashcard {}
export interface FlashcardModel extends Model<Flashcard, FlashcardAttributes> {}

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
			defaultValue: null,
			allowNull: true,
		},
		frontSide: {
			type: Sequelize.STRING(1000),
			allowNull: false,
		},
		backSide: {
			type: Sequelize.STRING(1000),
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
