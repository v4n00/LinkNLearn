import { Response } from 'express';

export default function handleErrorWithResponse(e: unknown, res: Response) {
	if (e instanceof Error) {
		res.status(500).json(e.message);
		console.warn(e.stack);
	} else {
		res.status(500).json('Internal server error');
		console.warn(e);
	}
}
