import { useRef, useState } from 'react';
import { Card, CardHeader } from './ui/card';

const Flashcard = ({ frontSide, backSide }: { frontSide: string; backSide: string }) => {
	const ref = useRef<HTMLDivElement>(null);
	const [flipped, setFlipped] = useState(false);

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
				<CardHeader className="w-[400px] h-[300px] top-1/2 left-1/2 text-2xl absolute flex items-center justify-center text-center [transform:translate(-50%,-50%)] [backface-visibility:hidden]">{frontSide}</CardHeader>
				<CardHeader className="w-[400px] h-[300px] top-1/2 left-1/2 text-2xl rotate-x-180 absolute flex items-center justify-center text-center [backface-visibility:hidden]">{backSide}</CardHeader>
			</Card>
		</div>
	);
};

export default Flashcard;
