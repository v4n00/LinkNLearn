import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { SVGProps } from 'react';
import { JSX } from 'react/jsx-runtime';

export default function Component() {
	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900" style={{ height: 'calc(100vh - 5rem)' }}>
			<header className="mb-10">
				<h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200">Welcome to LinkNLearn</h1>
				<p className="text-lg text-center text-gray-600 dark:text-gray-400">Your one-stop solution for learning and data structures concepts</p>
			</header>
			<main className="flex flex-wrap justify-center gap-8">
				<a className="w-80" href="/data-structures/">
					<Card className="flex flex-col items-center p-6 space-y-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
						<DatabaseIcon className="w-12 h-12 text-gray-900 dark:text-gray-100" />
						<CardTitle className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">Data Structures</CardTitle>
						<CardDescription className="text-center text-gray-600 dark:text-gray-400">Learn and understand various data structures used in computer science.</CardDescription>
					</Card>
				</a>
				<a className="w-80" href="/quizzes">
					<Card className="flex flex-col items-center p-6 space-y-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
						<FileQuestionIcon className="w-12 h-12 text-gray-900 dark:text-gray-100" />
						<CardTitle className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">Quizzes</CardTitle>
						<CardDescription className="text-center text-gray-600 dark:text-gray-400">Test your knowledge with our interactive quizzes.</CardDescription>
					</Card>
				</a>
				<a className="w-80" href="/flashcards">
					<Card className="flex flex-col items-center p-6 space-y-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
						<CreditCardIcon className="w-12 h-12 text-gray-900 dark:text-gray-100" />
						<CardTitle className="text-2xl font-semibold text-center text-gray-900 dark:text-gray-100">Flashcards</CardTitle>
						<CardDescription className="text-center text-gray-600 dark:text-gray-400">Revise concepts quickly with our handy flashcards.</CardDescription>
					</Card>
				</a>
			</main>
		</div>
	);
}

function CreditCardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<rect width="20" height="14" x="2" y="5" rx="2" />
			<line x1="2" x2="22" y1="10" y2="10" />
		</svg>
	);
}

function DatabaseIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<ellipse cx="12" cy="5" rx="9" ry="3" />
			<path d="M3 5V19A9 3 0 0 0 21 19V5" />
			<path d="M3 12A9 3 0 0 0 21 12" />
		</svg>
	);
}

function FileQuestionIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
			<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
			<path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
			<path d="M12 17h.01" />
		</svg>
	);
}
