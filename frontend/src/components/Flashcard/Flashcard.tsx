import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';
import { Card, CardHeader } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';

const Flashcard = ({ frontSide, backSide }: { frontSide: string; backSide: string }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [flipped, setFlipped] = useState(false);

	const handleLength = (style: string, text: string) => {
		let size: string = 'text-4xl';
		if (text.length > 70) size = 'text-3xl';
		if (text.length > 100) size = 'text-2xl';
		if (text.length > 200) size = 'text-xl';
		return cn(style, size);
	};

	return (
		<div className="p-4 [perspective:1000px] w-full h-full">
			<Card
				className={`w-full h-full relative transition-all duration-500 cursor-pointer [transform-style:preserve-3d] ${flipped ? '[transform:rotateX(180deg)]' : ''}`}
				onClick={() => {
					setFlipped(!flipped);
					ref.current?.focus();
				}}
				onBlur={() => setFlipped(false)}
				tabIndex={0}
				ref={ref}
			>
				{frontSide.length > 400 ? <ScrollArea className={handleLength('w-[400px] h-[300px] top-1/2 left-1/2 absolute text-center select-none [transform:translate(-50%,-50%)] [backface-visibility:hidden]', frontSide)}>{frontSide}</ScrollArea> : <CardHeader className={handleLength('w-[400px] h-[300px] top-1/2 left-1/2 absolute flex items-center justify-center text-center select-none [transform:translate(-50%,-50%)] [backface-visibility:hidden]', frontSide)}>{frontSide}</CardHeader>}

				{backSide.length > 400 ? <ScrollArea className={handleLength('w-[400px] h-[300px] top-1/2 left-1/2 rotate-x-180 absolute flex items-center justify-center text-center select-none [backface-visibility:hidden]', backSide)}>{backSide}</ScrollArea> : <CardHeader className={handleLength('w-[400px] h-[300px] top-1/2 left-1/2 rotate-x-180 absolute flex items-center justify-center text-center select-none [backface-visibility:hidden]', backSide)}>{backSide}</CardHeader>}
			</Card>
		</div>
	);
};

export default Flashcard;
