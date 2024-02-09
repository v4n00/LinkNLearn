import { Toaster } from '@/components/ui/toaster';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FlashcardsViewer from './components/FlashcardsViewer';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from './components/ThemeProvider';
import { FlashcardType } from './constants/interfaces';
import { AuthProvider } from './contexts/AuthContext';
import './index.css';
import FlashcardsDasboard from './pages/FlashcardsDashboard';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Quizzes from './pages/Quizzes';

const flashcards: FlashcardType[] = [
	{
		frontSide: 'What is an Array?',
		backSide: 'An array is a collection of elements identified by index or key, arranged in memory so that each element can be accessed directly with its index in constant time. Arrays have a fixed size, and the elements are typically of the same type.',
		id: 666,
	},
	{
		frontSide: 'id 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 frontid 2 front',
		backSide: 'id 2 back',
		id: 667,
	},
	{
		frontSide: 'id 3 front userId 1id 3 front userId 1id 3 front userId 1id 3 front userId 1id 3 front userId 1id 3 front userId 1id 3 front userId 1id 3 front userId 1id 3 front userId 1id 3 front userId 1id 3 front userId 1id 3 front userId 1',
		backSide: 'id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1id 3 back userId 1',
		id: 668,
		userId: 1,
	},
];

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
						<Route path="/flashcards/default" element={<FlashcardsViewer flashcards={flashcards} />} />
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
