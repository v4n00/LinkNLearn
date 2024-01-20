import { Toaster } from '@/components/ui/toaster';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import Home from './pages/Home';
import Quizzes from './pages/Quizzes';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<AuthProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/quizzes" element={<Quizzes />} />
			</Routes>
			<Toaster />
		</AuthProvider>
	</BrowserRouter>
);
