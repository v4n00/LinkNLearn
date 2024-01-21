import { Toaster } from '@/components/ui/toaster';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { ThemeProvider } from './components/ThemeProvider';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import Flashcards from './pages/Flashcards';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Quizzes from './pages/Quizzes';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme="system" storageKey="ui-theme">
		<BrowserRouter>
			<AuthProvider>
				<Navbar />
				<div className="flex justify-center items-center" style={{ height: 'calc(100vh - 5rem)' }}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/quizzes" element={<Quizzes />} />
						<Route path="/flashcards" element={<Flashcards />}>
							<Route path="default" element={<div>Default flashcards</div>} />
							<Route path="custom" element={<div>Custom flashcards</div>} />
							<Route path="all" element={<div>All flashcards</div>} />
							<Route path="manage" element={<div>Manage flashcards</div>} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
				<Toaster />
			</AuthProvider>
		</BrowserRouter>
	</ThemeProvider>
);
