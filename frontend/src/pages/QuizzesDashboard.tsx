import { errorToast } from '@/components/Toasts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { APIURL } from '@/constants/const';
import { QuizType } from '@/constants/interfaces';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { SVGProps, useEffect } from 'react';
import { JSX } from 'react/jsx-runtime';
export default function QuizzesDashboard() {
	useEffect(() => {
		document.title = 'LinkNLearn - Quizzes';
	}, []);
	const { data, isPending } = useQuery({
		queryKey: ['quizzesDashboard'],
		queryFn: (): Promise<QuizType[]> =>
			axios
				.get(`${APIURL}/quiz`)
				.then((res) => res.data)
				.catch((e) => {
					if ((e as AxiosError).response?.status === 404) return [] as QuizType[];
					else errorToast(`Error: ${(e as AxiosError).response?.data}`);
				}),
		gcTime: 0,
		retry: 0,
	});

	return (
		<main>
			<h1>Quizzes</h1>
			<div>
				<Carousel plugins={[WheelGesturesPlugin()]} className="w-[1000px] max-w-fit border shadow-sm rounded-lg p-2">
					<CarouselContent>
						{isPending ? (
							<CarouselItem>
								<Card className="max-w-2xl mx-auto">Loading</Card>
							</CarouselItem>
						) : (
							data && data.map((quiz) => <QuizCarouselItem key={quiz.id} quiz={quiz} />)
						)}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</main>
	);
}

const QuizCarouselItem = ({ quiz }: { quiz: QuizType }) => {
	return (
		<CarouselItem key={quiz.id} className="basis-1/2">
			<Card className="max-w-[500px] mx-auto">
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
