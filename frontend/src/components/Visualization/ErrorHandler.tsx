import useDS from '@/hooks/useDS';
import { useEffect } from 'react';
import { errorToast } from '../Toasts';

const ErrorHandler = () => {
	const { data } = useDS();

	useEffect(() => {
		if (data.error !== '' && data.error !== undefined) {
			errorToast(`Error: ${data.error}`);
		}
	}, [data]);

	return null;
};

export default ErrorHandler;
