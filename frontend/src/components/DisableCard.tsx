import { cn } from '@/lib/utils';
import { Lock } from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';
import { Link } from 'react-router-dom';
import { normalToast } from './Toasts';
import { Card } from './ui/card';

type DisableCardProps = {
	disabled?: boolean;
	href?: string;
} & ComponentPropsWithoutRef<typeof Card>;

const DisableCard = ({ className, children, href, disabled = true, ...rest }: DisableCardProps) => {
	const lockStyle = cn('size-10 absolute bg-muted p-1 -top-[15px] -right-[15px] cursor-help rounded-xl');
	return (
		<Link to={(!disabled && href) || ''}>
			<Card {...rest} className={disabled ? cn(className, 'bg-muted cursor-not-allowed relative') : className}>
				<div>
					<Lock className={disabled ? lockStyle : cn(lockStyle, 'hidden')} onClick={() => normalToast('Log in to use this feature')} />
				</div>
				{children}
			</Card>
		</Link>
	);
};

export default DisableCard;
