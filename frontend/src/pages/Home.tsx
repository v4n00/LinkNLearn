import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { CreditCard, Database, FileQuestion } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Component() {
	useEffect(() => {
		document.title = 'LinkNLearn - Home';
	}, []);

	const cards = [
		{
			href: '/data-structures/',
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

	return (
		<main>
			<h1 className="text-4xl font-bold text-center ">Welcome to LinkNLearn</h1>
			<p className="text-lg text-center ">Your one-stop solution for learning and data structures concepts</p>
			<div className="flex flex-wrap justify-center gap-8">
				{cards.map((card) => (
					<Link key={card.title} className="w-80" to={card.href}>
						<Card className="flex flex-col items-center p-6 space-y-4 shadow-lg rounded-lg">
							{card.icon}
							<CardTitle className="text-2xl font-semibold text-center">{card.title}</CardTitle>
							<CardDescription className="text-center">{card.description}</CardDescription>
						</Card>
					</Link>
				))}
			</div>
		</main>
	);
}
