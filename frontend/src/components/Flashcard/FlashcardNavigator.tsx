import { FlashcardType } from '@/constants/interfaces';
import { Loader2, Shuffle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import Flashcard from './Flashcard';

const FlashcardNavigator = ({ flashcards }: { flashcards?: FlashcardType[] }) => {
	const [flashcardsArray, setFlashcardsArray] = useState<FlashcardType[] | undefined>(flashcards);
	const [loading, setLoading] = useState(false);

	const shuffleOrder = () => {
		setLoading(true);
		setTimeout(() => {
			if (!flashcardsArray) return;
			const shuffledArray = flashcardsArray.sort(() => Math.random() - 0.5);
			setFlashcardsArray([...shuffledArray]);
			setLoading(false);
		}, 300);
	};

	useEffect(() => {
		setFlashcardsArray(flashcards);
	}, [flashcards]);

	return (
		<div className="flex flex-col gap-y-5 items-center">
			<Carousel opts={{ loop: true }}>
				<CarouselContent className="w-[500px] h-[400px]">
					{flashcardsArray !== undefined ? (
						flashcardsArray.length > 0 ? (
							flashcardsArray.map((flashcard) => (
								<CarouselItem key={flashcard.id}>
									<Flashcard frontSide={flashcard.frontSide} backSide={flashcard.backSide} />
								</CarouselItem>
							))
						) : (
							<CarouselItem>
								<div className="p-4 w-full h-full">
									<Card className="p-4 w-[452px] h-[368px] rounded-xl flex items-center justify-center">
										<p>No flashcards found</p>
									</Card>
								</div>
							</CarouselItem>
						)
					) : (
						<CarouselItem>
							<div className="p-4 w-full h-full">
								<Card className="p-4 w-[452px] h-[368px] rounded-xl flex items-center justify-center">
									<Loader2 className="animate-spin" />
								</Card>
							</div>
						</CarouselItem>
					)}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<Button onClick={shuffleOrder} variant="outline">
				<Loader2 className={!loading ? 'hidden' : 'mr-2 size-7 animate-spin'} />
				<Shuffle className={!loading ? 'mr-3' : 'hidden'} /> Shuffle
			</Button>
		</div>
	);
};

export default FlashcardNavigator;
