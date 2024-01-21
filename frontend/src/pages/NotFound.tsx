import { Button } from '@/components/ui/button';

export default function Component() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
			<h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200">404</h1>
			<p className="text-2xl text-gray-600 dark:text-gray-400 mt-4">Page Not Found</p>
			<Button className="mt-8" variant="outline">
				Go Back
			</Button>
		</div>
	);
}
