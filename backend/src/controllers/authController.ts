import jwt, { JwtPayload } from 'jsonwebtoken';
import { adminId } from '../config/const';
import { RequestWithToken } from '../config/interfaces';
import { User } from '../models/user';

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
			expiresIn: '7d',
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
			expiresIn: '1d',
		}
	);
}
