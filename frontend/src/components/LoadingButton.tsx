import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import { Button } from './ui/button';

export const LoadingButton = ({ loading, children, ...props }: ComponentPropsWithoutRef<typeof Button> & { loading: boolean }) => {
	const className = cn('mr-2 h-4 w-4 animate-spin');

	return (
		<Button disabled={loading} {...props}>
			<Loader2 className={loading ? className : cn(className, 'hidden')} />
			{children}
		</Button>
	);
};
