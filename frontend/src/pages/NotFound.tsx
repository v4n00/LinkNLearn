import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<div className="flex flex-col items-center justify-center space-y-6">
			<h1>404</h1>
			<p>Page Not Found</p>
			<div className="space-x-3">
				<Button variant="outline" onClick={() => navigate(-1)}>
					Go Back
				</Button>
				<Button variant="outline" onClick={() => navigate('/')}>
					Go Home
				</Button>
			</div>
		</div>
	);
};

export default NotFound;