import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

export interface LoginRequest {
	email: string;
	password: string;
}

export interface RegisterRequest {
	email: string;
	password: string;
	repeatPassword: string;
}

export interface RequestWithToken extends Request {
	decodedToken?: string | jwt.JwtPayload;
}
