import 'dotenv/config';
import { NextFunction, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { adminId } from '../constants/const';
import { RequestWithToken } from '../constants/interfaces';

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
	if (userId !== adminId) return res.status(401).json('Unauthorized');
	next();
};

export const decodeToken = (token: string) => {
	return jwt.verify(token, process.env.JWT_KEY!);
};
