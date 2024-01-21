import { DefaultToastAction, ErrorToastAction, SuccessToastAction, toastDuration } from './ui/toast';
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

export const normalToast = (message: string) => {
	toast({
		variant: 'default',
		action: <DefaultToastAction>{message}</DefaultToastAction>,
		duration: toastDuration,
	});
};
