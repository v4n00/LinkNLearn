// import { DefaultToastAction, ErrorToastAction, SuccessToastAction, toastDuration } from './ui/toast';
import { AlertTriangle, Check, X } from 'lucide-react';
import { toast } from './ui/use-toast';

export const toastDuration: number = 4000;

const SuccessToastAction = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full flex">
			<Check className="mr-2" />
			{children}
		</div>
	);
};

const ErrorToastAction = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full flex">
			<X className="mr-2" />
			{children}
		</div>
	);
};

const NormalToastAction = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="w-full flex">
			<AlertTriangle className="mr-2" />
			{children}
		</div>
	);
};

export const errorToast = (message: string) => {
	toast({
		variant: 'destructive',
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
		action: <NormalToastAction>{message}</NormalToastAction>,
		duration: toastDuration,
	});
};
