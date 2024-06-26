import { errorToast } from '@/components/Toasts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tooltip, TooltipProvider } from '@/components/ui/tooltip';
import { APIURL, QUIZ_THRESHOLD } from '@/constants/const';
import { QuizProgressType, QuizType } from '@/constants/interfaces';
import useAuth from '@/hooks/useAuth';
import { TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { ArrowLeftRight, Check, Loader2, ShieldQuestion } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizManager from '../../components/Quiz/QuizManager';

export default function QuizDashboard() {
	useEffect(() => {
		document.title = 'LinkNLearn - Quizzes';
	}, []);
	const { user } = useAuth();

	const headers = { headers: { Authorization: `Bearer ${user?.token}` } };

	const quizQuery = useQuery({
		queryKey: ['quizzes'],
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
		refetchOnWindowFocus: false,
	});

	const progressQuery = useQuery({
		queryKey: ['quizProgress'],
		queryFn: (): Promise<QuizProgressType[]> =>
			axios
				.get(`${APIURL}/quiz/${user?.id}/progress`, headers)
				.then((res) => res.data)
				.catch((e) => {
					if ((e as AxiosError).response?.status === 404) return [] as QuizProgressType[];
					else errorToast(`Error: ${(e as AxiosError).response?.data}`);
				}),
		enabled: user !== undefined && user.id !== 0,
		gcTime: 0,
		retry: 0,
		refetchOnWindowFocus: false,
	});

	if (user && user.id === 0) {
		return <QuizManager />;
	}

	const QuizCarouselItem = ({ quiz, quizProgress }: { quiz: QuizType; quizProgress: QuizProgressType[] }) => {
		const navigate = useNavigate();

		return (
			<CarouselItem key={quiz.id} className=" md:basis-1/2">
				<Card>
					<CardHeader>
						<CardTitle className="text-center">{quiz.title}</CardTitle>
					</CardHeader>
					<CardContent className="flex items-center justify-center flex-row">
						<TooltipProvider delayDuration={100}>
							<Tooltip>
								<TooltipTrigger className="flex items-center justify-center flex-row">
									{quizProgress.length > 0 ? (
										quizProgress.find((p) => p.score / p.maxScore > QUIZ_THRESHOLD) !== undefined ? (
											<>
												<Check className="text-success" />
												<span className="ml-2 text-success">Quiz Passed</span>
											</>
										) : (
											<>
												<Check className="text-destructive" />
												<span className="ml-2 text-destructive">Quiz failed</span>
											</>
										)
									) : (
										<>
											<ShieldQuestion className="text-muted-foreground" />
											<span className="ml-2 text-muted-foreground">Quiz not attempted</span>
										</>
									)}
								</TooltipTrigger>
								<TooltipContent className="bg-muted p-2 rounded-md shadow z-20 text-center" sideOffset={4}>
									You need 70% score in <br /> order to pass a quiz
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</CardContent>
					<CardContent>
						{user ? (
							quizProgress?.length > 0 ? (
								<ScrollArea className="h-[260px] rounded border">
									<Table>
										<TableHeader className="sticky top-0 bg-border">
											<TableRow>
												<TableHead>Date</TableHead>
												<TableHead>Score</TableHead>
												<TableHead>Status</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{quizProgress.map((progress) => {
												const date = new Date(progress.dateTaken).toLocaleDateString('default', { year: 'numeric', month: 'short', day: 'numeric' });

												return (
													<TableRow key={progress.id}>
														<TableCell>{date}</TableCell>
														<TableCell>{`${progress.score}/${progress.maxScore}`}</TableCell>
														<TableCell>{progress.score / progress.maxScore > QUIZ_THRESHOLD ? 'Passed' : 'Failed'}</TableCell>
													</TableRow>
												);
											})}
										</TableBody>
									</Table>
								</ScrollArea>
							) : (
								<Card className="h-[260px] flex items-center justify-center">
									<div className="text-bold text-2xl text-center">No attempts yet</div>
								</Card>
							)
						) : (
							<Card className="h-[260px] flex items-center justify-center">
								<div className="text-bold text-2xl text-center">
									Sign up / Log in to <br /> save quiz progress
								</div>
							</Card>
						)}
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

	return (
		<div>
			<p className="page-title">Quizzes</p>
			<div className="flex flex-col gap-y-5 items-center w-screen p-3">
				<Carousel className="max-w-[900px] w-full border shadow-sm rounded-lg p-3">
					<CarouselContent>
						{quizQuery.data !== undefined ? (
							quizQuery.data.length > 0 ? (
								quizQuery.data.map((quiz) => <QuizCarouselItem key={quiz.id} quiz={quiz} quizProgress={progressQuery.data ? progressQuery.data?.filter((p) => p.quizId === quiz.id) : ([] as QuizProgressType[])} />)
							) : (
								<div className="w-full flex justify-center items-center">
									<p>No quizzes found</p>
								</div>
							)
						) : (
							<div className="w-full flex justify-center items-center">
								<Loader2 className="animate-spin" />
							</div>
						)}
					</CarouselContent>
					<CarouselPrevious className="lg:flex hidden" />
					<CarouselNext className="lg:flex hidden" />
				</Carousel>
				<Card className="flex md:hidden text-muted-foreground/80 p-2 bg-muted">
					<ArrowLeftRight className="mr-2" />
					<p>Swipe to navigate</p>
				</Card>
			</div>
		</div>
	);
}
