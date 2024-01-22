import useAuth from '@/hooks/useAuth';
import { ReactNode } from 'react';
import Unauthorized from './Unauthorized';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const { user } = useAuth();
	return user ? children : <Unauthorized />;
};

export default ProtectedRoute;
