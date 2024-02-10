import { FlashcardType } from '@/constants/interfaces';
import { Shuffle } from 'lucide-react';
import { useEffect, useState } from 'react';
import Flashcard from './Flashcard';
import { Button } from './ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Skeleton } from './ui/skeleton';

const FlashcardsNavigator = ({ flashcards }: { flashcards: FlashcardType[] }) => {
	const [flashcardsArray, setFlashcardsArray] = useState<FlashcardType[]>(flashcards);

	const shuffleOrder = () => {
		const shuffledArray = flashcardsArray.sort(() => Math.random() - 0.5);
		setFlashcardsArray([...shuffledArray]);
	};

	useEffect(() => {
		setFlashcardsArray(flashcards);
	}, [flashcards]);

	return (
		<div className="flex flex-col gap-y-5 items-center">
			<Carousel opts={{ loop: true }}>
				<CarouselContent className="w-[500px] h-[400px]">
					{flashcardsArray && flashcardsArray.length !== 0 ? (
						flashcardsArray.map((flashcard) => (
							<CarouselItem key={flashcard.id}>
								<Flashcard frontSide={flashcard.frontSide} backSide={flashcard.backSide} />
							</CarouselItem>
						))
					) : (
						<CarouselItem>
							<div className="p-4 w-full h-full">
								<Skeleton className="p-4 w-[452px] h-[368px] rounded-xl" />
							</div>
						</CarouselItem>
					)}
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

export default FlashcardsNavigator;
