import express, { Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { LoginRequest, RegisterRequest } from '../constants/interfaces';
import { generateAdminToken, generateToken } from '../controllers/authController';
import { createUser, getUserByEmail, getUserByPk, loginUser } from '../controllers/userController';
import { decodeToken } from '../middlewares/auth';
import handleErrorWithResponse from '../utils/errorHandler';

const authRoutes = express.Router();

authRoutes.route('/user/validate').get(async (req: Request, res: Response) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json('Authorization header not provided');
	}

	const token = authHeader.split(' ')[1];
	if (!token) {
		return res.status(401).json('No token provided');
	}

	try {
		const decodedToken = decodeToken(token);

		const user = await getUserByPk((decodedToken as JwtPayload).userId);
		if (!user) return res.status(401).json('User not found');

		return res.status(200).json({ id: user.dataValues.id, email: user.dataValues.email, token: generateToken(user.dataValues) });
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

authRoutes.route('/user/login').post(async (req: Request, res: Response) => {
	let { email, password } = req.body as LoginRequest;
	if (!email || !password) return res.status(400).json('Bad Request');

	try {
		if (email === 'admin' && password === process.env.SYSADMIN_KEY) {
			return res.status(200).json({ token: generateAdminToken() });
		}

		const user = await loginUser(email, password);
		if (user) return res.status(200).json({ id: user.dataValues.id, email: user.dataValues.email, token: generateToken(user.dataValues) });
		else return res.status(401).json('Email not found or password does not match');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

authRoutes.route('/user/register').post(async (req: Request, res: Response) => {
	let { email, password, confirmPassword } = req.body as RegisterRequest;
	if (!email || !password || !confirmPassword) return res.status(400).json('Bad Request');

	// validations
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return res.status(400).json('Invalid email format');
	}
	if (password !== confirmPassword) {
		return res.status(400).json('Passwords do not match');
	}
	if (password.length < 8 || password.length > 32) {
		return res.status(400).json('Password must be at least 8 characters and maximum 32 characters');
	}

	let duplicateUser = await getUserByEmail(email);
	if (duplicateUser) {
		return res.status(400).json('Email already registered');
	}

	try {
		await createUser(email, password);
		return res.status(200).json('User created');
	} catch (e) {
		handleErrorWithResponse(e, res);
	}
});

export default authRoutes;
