import { Response } from 'express';
import { isDebugging } from '../config/const';

export default function handleErrorWithResponse(e: unknown, res: Response) {
	if (e instanceof Error) {
		res.status(500).json({ message: e.message });
		if (isDebugging) console.warn(e.stack);
	} else {
		res.status(500).json({ message: 'Internal server error' });
		if (isDebugging) console.warn(e);
	}
}
