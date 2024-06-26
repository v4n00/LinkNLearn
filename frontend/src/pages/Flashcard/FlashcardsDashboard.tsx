import DisableCard from '@/components/DisableCard';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';
import FlashcardsManager from './FlashcardsManager';

const FlashcardsDashboard = () => {
	useEffect(() => {
		document.title = 'LinkNLearn - Flashcards';
	}, []);
	const { user } = useAuth();

	if (user && user.id === 0) {
		return <FlashcardsManager />;
	}

	return (
		<div>
			<p className="page-title">Flashcards</p>
			<div className="grid gap-6 text-center px-10">
				<div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:w-[600px] w-full">
					<DisableCard disabled={false} href="/flashcards/default">
						<CardHeader>
							<CardTitle>Default flashcards</CardTitle>
							<CardDescription>
								Shuffle through the default <br /> flashcards provided by LinkNLearn
							</CardDescription>
						</CardHeader>
					</DisableCard>
					<DisableCard disabled={user ? false : true} href="/flashcards/custom">
						<CardHeader>
							<CardTitle>Custom flashcards</CardTitle>
							<CardDescription>
								Shuffle through your <br />
								custom created flashcards
							</CardDescription>
						</CardHeader>
					</DisableCard>
				</div>
				<div className="grid grid-cols-1 gap-6">
					<DisableCard disabled={user ? false : true} href="/flashcards/all">
						<CardHeader>
							<CardTitle>All cards</CardTitle>
							<CardDescription>Shuffle through all flashcards</CardDescription>
						</CardHeader>
					</DisableCard>
					<DisableCard disabled={user ? false : true} href="/flashcards/manage">
						<CardHeader>
							<CardTitle>Manage custom flashcards</CardTitle>
							<CardDescription>Add, edit or delete your custom flashcards</CardDescription>
						</CardHeader>
					</DisableCard>
				</div>
			</div>
		</div>
	);
};

export default FlashcardsDashboard;
