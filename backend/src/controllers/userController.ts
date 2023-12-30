import bcrypt from 'bcrypt';
import { bcryptSaltRounds } from '../config/const';
import user from '../models/user';

/**
 * Creates a new user in the database.
 *
 * @param {string} email - The email of the user to create.
 * @param {string} password - The password of the user to create.
 * @throws Will throw an error if the user creation process fails.
 */
export async function createUser(email: string, password: string): Promise<any> {
	try {
		password = await bcrypt.hash(password, await bcrypt.genSalt(bcryptSaltRounds));
		await user.create({ email, password });
	} catch (e) {
		throw e;
	}
}

/**
 * Logs in a user by checking their email and password.
 *
 * @param {string} email - The email of the user to log in.
 * @param {string} password - The password of the user to log in.
 * @returns {Promise<any>} The user with all its data.
 * @throws Will throw an error if the login process fails or if the password is invalid.
 */
export async function loginUser(email: string, password: string): Promise<any> {
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

/**
 * Retrieves a user from the database by their email.
 *
 * @param {string} email - The email of the user to retrieve.
 * @returns {Promise<any>} A promise that resolves to the retrieved user.
 * @throws Will throw an error if the retrieval process fails or if the email is not found.
 */
async function getUserByEmail(email: string): Promise<any> {
	try {
		return await user.findOne({ where: { email } });
	} catch (e) {
		throw new Error('Email not found');
	}
}
