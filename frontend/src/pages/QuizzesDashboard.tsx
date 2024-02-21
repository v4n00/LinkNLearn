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
import { Check, Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function QuizzesDashboard() {
	useEffect(() => {
		document.title = 'LinkNLearn - Quizzes';
	}, []);

	const { data } = useQuery({
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
				<Carousel plugins={[WheelGesturesPlugin({ forceWheelAxis: 'y' })]} className="2xl:w-[1400px] xl:w-[1100px] lg:w-[900px] md:w-[600px] w-[400px] border shadow-sm rounded-lg p-2">
					<CarouselContent>
						{data !== undefined ? (
							data.length > 0 ? (
								data.map((quiz) => <QuizCarouselItem key={quiz.id} quiz={quiz} />)
							) : (
								<div className="h-[434.5px] w-full flex justify-center items-center">
									<p>No quizzes found</p>
								</div>
							)
						) : (
							<div className="h-[434.5px] w-full flex justify-center items-center">
								<Loader2 className="animate-spin" />
							</div>
						)}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</main>
	);
}

// https://github.com/shadcn-ui/ui/issues/1151#issuecomment-1823750732
const QuizCarouselItem = ({ quiz }: { quiz: QuizType }) => {
	const navigate = useNavigate();

	return (
		<CarouselItem key={quiz.id} className="xl:basis-1/3 lg:basis-1/2">
			<Card>
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
						<Check className="text-green-500" />
						<span className="ml-2 text-green-500">Quiz Passed</span>
					</div>
				</CardContent>
				<CardFooter>
					<Button
						onClick={() => {
							navigate(`/quizzes/${quiz.id}`);
						}}
						className="w-full"
					>
						Take Quiz
					</Button>
				</CardFooter>
			</Card>
		</CarouselItem>
	);
};
