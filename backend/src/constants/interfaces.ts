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

export interface QuestionText {
	option1: string;
	option2: string;
	option3?: string;
	option4?: string;
	answer?: string;
}
