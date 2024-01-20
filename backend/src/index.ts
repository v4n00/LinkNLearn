import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import initFK from './config/initFK';
import { apiLimiterWindowSeconds, clientPort, port } from './constants/const';
import authRoutes from './routes/authRoutes';
import flashcardRoutes from './routes/flashcardRoutes';
import questionRoutes from './routes/questionRoutes';
import quizRoutes from './routes/quizRoutes';
import checkDotEnv from './utils/checkDotEnv';

// setup
checkDotEnv();
const app = express();
const apiLimiter = rateLimit({
	windowMs: apiLimiterWindowSeconds * 60 * 1000,
	max: 1000,
});
const corsOptions = {
	origin: `http://localhost:${clientPort}`,
	methods: 'GET,PUT,PATCH,POST,DELETE',
};

// configuration
app.use(express.json());
app.use(cors(corsOptions));
app.use(apiLimiter);
app.use(
	express.urlencoded({
		extended: true,
	})
);

// initialization
initFK();
app.use('/', authRoutes);
app.use('/', flashcardRoutes);
app.use('/', quizRoutes);
app.use('/', questionRoutes);

// starting
app.listen(port, () => {
	console.log(`Backend is running at port http://localhost:${port}`);
});
