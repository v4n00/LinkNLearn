import 'dotenv/config';

const requiredVars = ['JWT_KEY', 'JWT_KEY_REFRESH'];

export default function checkDotEnv() {
	const missingVars = requiredVars.filter((v) => !process.env[v]);
	if (missingVars.length > 0) {
		console.error(`Missing environment variables: ${missingVars.join(', ')}`);
		process.exit(1);
	}
}
