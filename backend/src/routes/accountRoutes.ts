import express, { Request, Response } from 'express';
import { LoginRequest, RegisterRequest } from '../config/interfaces';
import { createUser, loginUser } from '../controllers/userController';
import { generateToken } from '../middlewares/auth';
import handleErrorWithResponse from '../utils/errorHandler';

const accountRoutes = express.Router();

accountRoutes.route('/user/login').post(async (req: Request, res: Response) => {
	let { email, password } = req.body as LoginRequest;
	if (!email || !password) return res.status(400).json({ message: 'Bad Request' });

	try {
		const user = await loginUser(email, password);
		if (user) return res.status(200).json({ token: generateToken(user.dataValues) });
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

accountRoutes.route('/user/register').post(async (req: Request, res: Response) => {
	let { email, password, repeatPassword } = req.body as RegisterRequest;
	if (!email || !password || !repeatPassword) return res.status(400).json({ message: 'Bad Request' });

	// validations
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return res.status(400).json({ message: 'Invalid email format' });
	}
	if (password !== repeatPassword) {
		return res.status(400).json({ message: 'Passwords do not match' });
	}
	if (password.length < 8) {
		return res.status(400).json({ message: 'Password must be at least 8 characters' });
	}

	try {
		await createUser(email, password);
		return res.status(200).json({ message: 'User created' });
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

export default accountRoutes;
