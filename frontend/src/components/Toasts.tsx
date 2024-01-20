import { ErrorToastAction, SuccessToastAction, toastDuration } from './ui/toast';
import { toast } from './ui/use-toast';

export const errorToast = (message: string) => {
	toast({
		variant: 'error',
		action: <ErrorToastAction>{message}</ErrorToastAction>,
		duration: toastDuration,
	});
};

export const successToast = (message: string) => {
	toast({
		variant: 'success',
		action: <SuccessToastAction>{message}</SuccessToastAction>,
		duration: toastDuration,
	});
};
