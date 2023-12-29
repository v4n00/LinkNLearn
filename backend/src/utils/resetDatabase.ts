import db from '../config/database';
import initFK from '../config/initFK';

initFK();

(async () => {
	try {
		await db.sync({ force: true });
		console.log('Database and tables restored');
	} catch (e) {
		if (e instanceof Error) console.warn(e.stack);
	}
})();
