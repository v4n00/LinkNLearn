import useAuth from '@/hooks/useAuth';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import { Button } from './ui/button';

export const LoadingButton = ({ children, ...props }: ComponentPropsWithoutRef<typeof Button>) => {
	const { loading } = useAuth();
	const className = cn('mr-2 h-4 w-4 animate-spin');

	return (
		<Button disabled={loading} {...props}>
			<Loader2 className={loading ? className : cn(className, 'hidden')} />
			{children}
		</Button>
	);
};
