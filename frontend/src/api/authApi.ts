import { APIURL } from '@/constants/const';
import axios from 'axios';

export interface loginType {
	email: string;
	password: string;
}

export interface signUpType {
	email: string;
	password: string;
	confirmPassword: string;
}
export interface validateType {
	token: string;
}

export async function login({ email, password }: loginType) {
	return await axios.post(`${APIURL}/user/login`, { email, password });
}

export async function signUp({ email, password, confirmPassword }: signUpType) {
	return await axios.post(`${APIURL}/user/register`, { email, password, confirmPassword });
}

export async function validate({ token }: validateType) {
	return await axios.get(`${APIURL}/user/validate`, { headers: { Authorization: `Bearer ${token}` } });
}
