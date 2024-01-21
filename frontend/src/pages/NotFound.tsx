import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Component() {
	return (
		<div className="flex flex-col items-center justify-center space-y-6">
			<div>
				<h1>404</h1>
				<p>Page Not Found</p>
			</div>
			<Link to="/">
				<Button variant="outline">Go Home</Button>
			</Link>
		</div>
	);
}
