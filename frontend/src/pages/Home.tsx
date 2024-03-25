import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { DS_LINKS } from '@/constants/const';
import { CreditCard, Database, FileQuestion } from 'lucide-react';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

export default function Component() {
	useEffect(() => {
		document.title = 'LinkNLearn - Home';
	}, []);

	const cards = [
		{
			href: '/data-structures',
			icon: <Database className="size-12" />,
			title: 'Data Structures',
			description: 'Learn and understand various data structures used in computer science.',
		},
		{
			href: '/quizzes',
			icon: <FileQuestion className="size-12" />,
			title: 'Quizzes',
			description: 'Test your knowledge with our interactive quizzes.',
		},
		{
			href: '/flashcards',
			icon: <CreditCard className="size-12" />,
			title: 'Flashcards',
			description: 'Revise concepts quickly with our handy flashcards.',
		},
	];

	const HomeCard = ({ title, description, icon }: { title: string; description: string; icon: JSX.Element }) => {
		return (
			<Card className="flex flex-col items-center p-6 space-y-4 shadow-lg rounded-lg h-[200px] w-[280px]">
				{icon}
				<CardTitle className="text-2xl font-semibold text-center">{title}</CardTitle>
				<CardDescription className="text-center">{description}</CardDescription>
			</Card>
		);
	};

	return (
		<div className="w-full h-full">
			<div className="bg-[url('@/assets/bg.webp')] opacity-5 fixed w-full -z-10 left-1/2 -translate-x-1/2 bg-top" style={{ height: 'calc(100vh - 5rem)' }}></div>
			<p className="page-title">Welcome to LinkNLearn</p>
			<p className="page-subtitle">Your one-stop solution for learning data structures concepts</p>
			<div className="flex flex-wrap justify-center gap-4 mt-20">
				{cards.map((card) =>
					card.href !== '/data-structures' ? (
						<Link key={card.title} to={card.href}>
							<HomeCard title={card.title} description={card.description} icon={card.icon} />
						</Link>
					) : (
						<Drawer key={card.title}>
							<DrawerTrigger>
								<HomeCard title={card.title} description={card.description} icon={card.icon} />
							</DrawerTrigger>
							<DrawerContent>
								<div className="grid items-center grid-cols-2 gap-5 flex-row p-5 md:px-[20vw]">
									{DS_LINKS.map((link) => (
										<Link to={link.href} key={link.title}>
											<Card className="w-full text-center items-center justify-center h-[100px] content-center ">
												<CardHeader>{link.title}</CardHeader>
											</Card>
										</Link>
									))}
								</div>
							</DrawerContent>
						</Drawer>
					)
				)}
			</div>
		</div>
	);
}
