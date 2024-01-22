import { Toaster } from '@/components/ui/toaster';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from './components/ThemeProvider';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import Flashcards from './pages/Flashcards';
import FlashcardsDasboard from './pages/FlashcardsDashboard';
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

						<Route
							path="/quizzes"
							element={
								<ProtectedRoute>
									<Quizzes />
								</ProtectedRoute>
							}
						/>

						<Route path="/flashcards" element={<FlashcardsDasboard />} />
						<Route path="/flashcards/default" element={<Flashcards />} />
						<Route path="/flashcards/custom" element={<div>custom</div>} />
						<Route path="/flashcards/all" element={<div>all</div>} />
						<Route path="/flashcards/manage" element={<div>manage</div>} />

						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
				<Toaster />
			</AuthProvider>
		</BrowserRouter>
	</ThemeProvider>
);
