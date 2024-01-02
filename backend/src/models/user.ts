import Sequelize, { Model, ModelDefined } from 'sequelize';
import db from '../config/database';

export interface User {
	id?: number;
	email: string;
	password: string;
}

interface UserAttributes extends User {}
export interface UserModel extends Model<User, UserAttributes> {}

const user: ModelDefined<User, UserAttributes> = db.define('user', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

export default user;
