import bcrypt from 'bcrypt';
import { bcryptSaltRounds } from '../constants/const';
import user, { UserModel } from '../models/user';

export async function createUser(email: string, password: string): Promise<void> {
	try {
		password = await bcrypt.hash(password, await bcrypt.genSalt(bcryptSaltRounds));
		await user.create({ email, password });
	} catch (e) {
		throw e;
	}
}

export async function loginUser(email: string, password: string): Promise<UserModel | null> {
	try {
		const user = await getUserByEmail(email);
		if (user && (await bcrypt.compare(password, user.dataValues.password))) return user;
		return null;
	} catch (e) {
		throw e;
	}
}

export async function getUserByPk(id: number): Promise<UserModel | null> {
	return await user.findByPk(id);
}

export async function getUserByEmail(email: string): Promise<UserModel | null> {
	return await user.findOne({ where: { email } });
}
