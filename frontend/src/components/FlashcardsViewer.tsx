import { FlashcardType } from '@/constants/interfaces';
import { Shuffle } from 'lucide-react';
import { useState } from 'react';
import Flashcard from './Flashcard';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const FlashcardsViewer = ({ flashcards }: { flashcards: FlashcardType[] }) => {
	const [flashcardsArray, setFlashcardsArray] = useState<FlashcardType[]>(flashcards);

	const shuffleOrder = () => {
		const shuffledArray = flashcardsArray.sort(() => Math.random() - 0.5);
		setFlashcardsArray([...shuffledArray]);
	};

	return (
		<div className="flex flex-col gap-y-5 items-center">
			<Carousel opts={{ loop: true }}>
				<CarouselContent className="w-[500px] h-[400px]">
					{flashcardsArray.map((flashcard) => (
						<CarouselItem key={flashcard.id}>
							<Flashcard frontSide={flashcard.frontSide} backSide={flashcard.backSide} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<Button onClick={shuffleOrder} variant="outline">
				<Shuffle className="mr-3" /> Shuffle
			</Button>
		</div>
	);
};

export default FlashcardsViewer;
