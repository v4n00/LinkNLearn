import 'dotenv/config';
import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { RequestWithToken } from '../config/requestInterfaces';
import { User } from '../models/user';

export const verifyToken = (req: RequestWithToken, res: Response, next: NextFunction) => {
	// check if header has authorization field
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({ message: 'Authorization header not provided' });
	}

	// check if the token exists
	const token = authHeader.split(' ')[1];
	if (!token) {
		return res.status(401).json({ message: 'No token provided' });
	}

	// verify the token
	jwt.verify(token, process.env.JWT_KEY!, (e, decodedToken) => {
		if (e) {
			return res.status(401).json({ message: 'Invalid token' });
		}
		req.decodedToken = decodedToken;
		next();
	});
};

export function generateToken(user: User) {
	return jwt.sign(
		{
			userId: user.id,
			email: user.email,
		},
		process.env.JWT_KEY!,
		{
			expiresIn: '1d',
		}
	);
}
