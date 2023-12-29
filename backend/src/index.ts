import cors from 'cors';
import express from 'express';
import { PORT } from './config/const';
import initFK from './config/initFK';
import accountRoutes from './routes/accountRoutes';
import checkDotEnv from './utils/checkDotEnv';

// setup
checkDotEnv();
const app = express();
const corsOptions = {
	origin: `http://localhost:${PORT}`,
	methods: 'GET,PUT,PATCH,POST,DELETE',
};

// configuration
app.use(express.json());
app.use(cors(corsOptions));
app.use(
	express.urlencoded({
		extended: true,
	})
);

// initialization
initFK();
app.use('/', accountRoutes);

// starting
app.listen(PORT, () => {
	console.log(`Backend is running at port http://localhost:${PORT}`);
});
