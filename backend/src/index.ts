import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import rateLimit from 'express-rate-limit';
import fs from 'fs';
import https from 'https';
import initFK from './config/initFK';
import { apiLimiterMax, apiLimiterWindowSeconds, clientAddress, isDebugging, pathToCert, pathToKey, port, serverAddress } from './constants/const';
import authRoutes from './routes/authRoutes';
import flashcardRoutes from './routes/flashcardRoutes';
import questionRoutes from './routes/questionRoutes';
import quizRoutes from './routes/quizRoutes';

// setup
const missingVars = ['JWT_KEY', 'SYSADMIN_KEY', 'SERVER_ADDRESS', 'IS_DEBUGGING'].filter((v) => !process.env[v]);
if (missingVars.length > 0) {
	console.error(`Missing environment variables: ${missingVars.join(', ')}`);
	process.exit(1);
}
const app = express();
const apiLimiter = rateLimit({
	windowMs: apiLimiterWindowSeconds * 60 * 1000,
	limit: apiLimiterMax,
});
const corsOptions = {
	origin: clientAddress,
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

// start server
if (isDebugging) {
	app.listen(port, () => {
		console.log(`Backend is running at port http://localhost:${port}`);
	});
} else if (pathToCert && pathToKey) {
	const sslOptions = {
		key: fs.readFileSync(pathToKey),
		cert: fs.readFileSync(pathToCert),
	};
	https.createServer(sslOptions, app).listen(port, () => {
		console.log(`Backend is running at https://${serverAddress}:${port}`);
	});
}
