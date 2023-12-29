import { Sequelize } from 'sequelize';

const db = new Sequelize({
	dialect: 'sqlite',
	storage: 'database.db',
	logging: false,
	define: {
		timestamps: false,
		freezeTableName: true,
	},
});

export default db;
