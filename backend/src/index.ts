import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import { PORT, apiLimiterWindowSeconds } from './config/const';
import initFK from './config/initFK';
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
	origin: `http://localhost:${PORT}`,
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
app.listen(PORT, () => {
	console.log(`Backend is running at port http://localhost:${PORT}`);
});
