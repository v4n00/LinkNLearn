import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Quiz } from '@/constants/interfaces';
import axios from 'axios';
import { SVGProps, useEffect, useState } from 'react';
import { JSX } from 'react/jsx-runtime';

export default function Quizzes() {
	const [quizzes, setQuizzes] = useState<Quiz[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		fetchQuizzes();
		document.title = 'LinkNLearn - Quizzes';
	}, []);

	const fetchQuizzes = async () => {
		try {
			const response = await axios.get('http://localhost:3000/quiz');
			const data = response.data;
			setQuizzes(data);
		} catch (e) {
			console.log(e);
		} finally {
			setIsLoading(false);
		}
	};

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<main className="flex flex-1 flex-col gap-4 p-4 justify-evenly">
			<div className="flex items-center justify-center">
				<h1 className="font-extrabold text-7xl">Quizzes</h1>
			</div>
			<div className="border shadow-sm rounded-lg">
				<Carousel
					opts={{
						align: 'start',
					}}
					className="w-full max-w-fit"
				>
					<CarouselContent>
						{quizzes.map((quiz) => (
							<QuizCarouselItem key={quiz.id} quiz={quiz} />
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</main>
	);
}

const QuizCarouselItem = ({ quiz }: { quiz: Quiz }) => {
	return (
		<CarouselItem key={quiz.id} className="basis-1/3 w-[300px]">
			<div className="p-1">
				<Card className="max-w-2xl mx-auto">
					<CardHeader>
						<CardTitle>{quiz.title}</CardTitle>
						<CardDescription>10 Questions</CardDescription>
					</CardHeader>
					<CardContent>
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead>Date</TableHead>
									<TableHead>Score</TableHead>
									<TableHead>Status</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								<TableRow>
									<TableCell>Jan 15, 2024</TableCell>
									<TableCell>8/10</TableCell>
									<TableCell>Passed</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Jan 14, 2024</TableCell>
									<TableCell>6/10</TableCell>
									<TableCell>Failed</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Jan 13, 2024</TableCell>
									<TableCell>7/10</TableCell>
									<TableCell>Passed</TableCell>
								</TableRow>
							</TableBody>
						</Table>
						<div className="mt-4 flex items-center">
							<CheckIcon className="w-6 h-6 text-green-500" />
							<span className="ml-2 text-green-500">Quiz Passed</span>
						</div>
					</CardContent>
					<CardFooter>
						<Button className="w-full">Take Quiz</Button>
					</CardFooter>
				</Card>
			</div>
		</CarouselItem>
	);
};

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<polyline points="20 6 9 17 4 12" />
		</svg>
	);
}
