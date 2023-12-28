import cors from 'cors';
import express from 'express';
import { PORT } from './const';

// setup
const app = express();
const corsOptions = {
	origin: `http://localhost:${PORT}`,
	methods: 'GET,PUT,PATCH,POST,DELETE',
};

// configuration
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(cors(corsOptions));

// code here

// port setup
app.listen(PORT, () => {
	console.log('Backend is running at port ' + PORT);
});
