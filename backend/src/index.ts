import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import initFK from './config/initFK';
import { apiLimiterWindowSeconds, clientPort, port } from './constants/const';
import authRoutes from './routes/authRoutes';
import flashcardRoutes from './routes/flashcardRoutes';
import quizRoutes from './routes/quizRoutes';

// setup
const missingVars = ['JWT_KEY', 'SYSADMIN_KEY'].filter((v) => !process.env[v]);
if (missingVars.length > 0) {
	console.error(`Missing environment variables: ${missingVars.join(', ')}`);
	process.exit(1);
}
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

// starting
app.listen(port, () => {
	console.log(`Backend is running at port http://localhost:${port}`);
});
