import express, { Request, Response } from 'express';
import { LoginRequest, RegisterRequest } from '../config/interfaces';
import { createUser, loginUser } from '../controllers/userController';
import { generateToken } from '../middlewares/auth';
import handleErrorWithResponse from '../utils/errorHandler';

const authRoutes = express.Router();

authRoutes.route('/user/login').post(async (req: Request, res: Response) => {
	let { email, password } = req.body as LoginRequest;
	if (!email || !password) return res.status(400).json('Bad Request');

	try {
		const user = await loginUser(email, password);
		if (user) return res.status(200).json({ token: generateToken(user.dataValues) });
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

authRoutes.route('/user/register').post(async (req: Request, res: Response) => {
	let { email, password, repeatPassword } = req.body as RegisterRequest;
	if (!email || !password || !repeatPassword) return res.status(400).json('Bad Request');

	// validations
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return res.status(400).json('Invalid email format');
	}
	if (password !== repeatPassword) {
		return res.status(400).json('Passwords do not match');
	}
	if (password.length < 8 || password.length > 32) {
		return res.status(400).json('Password must be at least 8 characters and maximum 32 characters');
	}

	try {
		await createUser(email, password);
		return res.status(200).json('User created');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

export default authRoutes;
