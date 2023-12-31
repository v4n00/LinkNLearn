import 'dotenv/config';
import { NextFunction, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { RequestWithToken } from '../config/interfaces';
import { User } from '../models/user';

export const verifyToken = (req: RequestWithToken, res: Response, next: NextFunction) => {
	// check if header has authorization field
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json('Authorization header not provided');
	}

	// check if the token exists
	const token = authHeader.split(' ')[1];
	if (!token) {
		return res.status(401).json('No token provided');
	}

	// verify the token
	jwt.verify(token, process.env.JWT_KEY!, (e, decodedToken) => {
		if (e) {
			return res.status(401).json('Invalid token');
		}
		req.decodedToken = decodedToken;
		next();
	});
};

export const verifyAdminToken = (req: RequestWithToken, res: Response, next: NextFunction) => {
	const userId = ((req as RequestWithToken).decodedToken as JwtPayload).userId;
	if (userId !== 0) return res.status(401).json('Unauthorized');
	next();
};

export function isAdmin(req: RequestWithToken) {
	const userId = ((req as RequestWithToken).decodedToken as JwtPayload).userId;
	return userId === 0;
}

export function generateToken(user: User) {
	return jwt.sign(
		{
			userId: user.id,
			email: user.email,
		},
		process.env.JWT_KEY!,
		{
			expiresIn: '7d',
		}
	);
}

export function generateAdminToken() {
	return jwt.sign(
		{
			userId: 0,
		},
		process.env.JWT_KEY!,
		{
			expiresIn: '1d',
		}
	);
}
