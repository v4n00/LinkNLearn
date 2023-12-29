import bcrypt from 'bcrypt';
import { bcryptSaltRounds } from '../config/const';
import user from '../models/user';

export async function createUser(email: string, password: string) {
	try {
		password = await bcrypt.hash(password, await bcrypt.genSalt(bcryptSaltRounds));
		await user.create({ email, password });
	} catch (e) {
		throw e;
	}
}

export async function loginUser(email: string, password: string) {
	try {
		const user = await getUserByEmail(email);
		if (user) {
			const valid = await bcrypt.compare(password, user.dataValues.password);
			if (!valid) throw new Error('Invalid password');
		}
		return user;
	} catch (e) {
		throw e;
	}
}

async function getUserByEmail(email: string) {
	try {
		return await user.findOne({ where: { email } });
	} catch (e) {
		throw new Error('Email not found');
	}
}
