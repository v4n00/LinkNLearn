import { Link } from '@/components/Link';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { CreditCard, Database, FileQuestion } from 'lucide-react';

export default function Component() {
	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900" style={{ height: 'calc(100vh - 5rem)' }}>
			<header className="mb-10">
				<h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200">Welcome to LinkNLearn</h1>
				<p className="text-lg text-center text-gray-600 dark:text-gray-400">Your one-stop solution for learning and data structures concepts</p>
			</header>
			<main className="flex flex-wrap justify-center gap-8">
				<Link className="w-80" href="/data-structures/">
					<Card className="flex flex-col items-center p-6 space-y-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
						<Database className="w-12 h-12 text-gray-900 dark:text-gray-100" />
						<CardTitle className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">Data Structures</CardTitle>
						<CardDescription className="text-center text-gray-600 dark:text-gray-400">Learn and understand various data structures used in computer science.</CardDescription>
					</Card>
				</Link>
				<Link className="w-80" href="/quizzes">
					<Card className="flex flex-col items-center p-6 space-y-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
						<FileQuestion className="w-12 h-12 text-gray-900 dark:text-gray-100" />
						<CardTitle className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">Quizzes</CardTitle>
						<CardDescription className="text-center text-gray-600 dark:text-gray-400">Test your knowledge with our interactive quizzes.</CardDescription>
					</Card>
				</Link>
				<Link className="w-80" href="/flashcards">
					<Card className="flex flex-col items-center p-6 space-y-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
						<CreditCard className="w-12 h-12 text-gray-900 dark:text-gray-100" />
						<CardTitle className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">Flashcards</CardTitle>
						<CardDescription className="text-center text-gray-600 dark:text-gray-400">Revise concepts quickly with our handy flashcards.</CardDescription>
					</Card>
				</Link>
			</main>
		</div>
	);
}
