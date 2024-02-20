import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface LoginRequest {
	email: string;
	password: string;
}

export interface RegisterRequest {
	email: string;
	password: string;
	confirmPassword: string;
}

export interface RequestWithToken extends Request {
	decodedToken?: string | JwtPayload;
}
