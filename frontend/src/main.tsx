import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from './components/ThemeProvider';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import FlashcardsDashboard from './pages/FlashcardsDashboard';
import FlashcardsManager from './pages/FlashcardsManager';
import FlashcardsViewer from './pages/FlashcardsViewer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import QuizzesDashboard from './pages/QuizzesDashboard';
import QuizzesTaker from './pages/QuizzesTaker';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ThemeProvider defaultTheme="system" storageKey="ui-theme">
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AuthProvider>
					<Navbar />
					<div className="flex justify-center" style={{ height: 'calc(100vh - 5rem)' }}>
						<Routes>
							<Route path="/" element={<Home />} />

							{/* Quizzes routes */}
							<Route path="/quizzes" element={<QuizzesDashboard />} />
							<Route path="/quizzes/:quizId" element={<QuizzesTaker />} />

							{/* Flashcard routes */}
							<Route path="/flashcards" element={<FlashcardsDashboard />} />
							<Route path="/flashcards/default" element={<FlashcardsViewer type="Default" />} />
							<Route
								path="/flashcards/custom"
								element={
									<ProtectedRoute>
										<FlashcardsViewer type="Custom" />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/flashcards/all"
								element={
									<ProtectedRoute>
										<FlashcardsViewer type="All" />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/flashcards/manage"
								element={
									<ProtectedRoute>
										<FlashcardsManager />
									</ProtectedRoute>
								}
							/>

							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
					<Toaster />
				</AuthProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</ThemeProvider>
);
