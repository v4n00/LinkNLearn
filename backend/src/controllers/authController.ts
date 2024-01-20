import 'dotenv/config';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { adminId, adminTokenExpiration, userTokenExpiration } from '../constants/const';
import { RequestWithToken } from '../constants/interfaces';
import { User } from '../models/user';

export function isLoggedIn(req: RequestWithToken): boolean {
	const authHeader = req.headers.authorization;
	if (!authHeader) return false;

	const token = authHeader.split(' ')[1];
	if (!token) return false;

	jwt.verify(token, process.env.JWT_KEY!, (e, decodedToken) => {
		if (e) return false;
		req.decodedToken = decodedToken;

		const userId = (decodedToken as JwtPayload).userId;
		if (!userId || isNaN(userId)) return false;
	});

	return true;
}

export function isAdmin(req: RequestWithToken): boolean {
	const userId = ((req as RequestWithToken).decodedToken as JwtPayload).userId;
	return userId === adminId;
}

export function generateToken(user: User): string {
	return jwt.sign(
		{
			userId: user.id,
			email: user.email,
		},
		process.env.JWT_KEY!,
		{
			expiresIn: userTokenExpiration,
		}
	);
}

export function generateAdminToken(): string {
	return jwt.sign(
		{
			userId: adminId,
		},
		process.env.JWT_KEY!,
		{
			expiresIn: adminTokenExpiration,
		}
	);
}
