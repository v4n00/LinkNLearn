import { APIURL } from '@/constants/const';
import axios from 'axios';

export interface loginType {
	email: string;
	password: string;
}

export interface registerType {
	email: string;
	password: string;
	repeatPassword: string;
}

export function login({ email, password }: loginType) {
	return axios.post(`${APIURL}/user/login`, { email, password });
}

export function register({ email, password, repeatPassword }: registerType) {
	return axios.post(`${APIURL}/user/register`, { email, password, repeatPassword });
}
