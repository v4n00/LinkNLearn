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
		<main>
			<h1>Welcome to LinkNLearn</h1>
			<h2>Your one-stop solution for learning and data structures concepts</h2>
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
										<Card key={link.title} className="w-full text-center">
											<Link to={link.href}>
												<CardHeader>{link.title}</CardHeader>
											</Link>
										</Card>
									))}
								</div>
							</DrawerContent>
						</Drawer>
					)
				)}
			</div>
		</main>
	);
}
