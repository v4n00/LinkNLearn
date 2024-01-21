import DisableCard from '@/components/DisableCard';
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import useAuth from '@/hooks/useAuth';
import { useEffect } from 'react';

const Flashcards = () => {
	const { user } = useAuth();
	useEffect(() => {
		document.title = 'LinkNLearn - Flashcards';
	}, []);

	return (
		<main>
			<h1>Flashcards</h1>
			<div className="grid gap-6 text-center">
				<div className="grid grid-cols-2 gap-6 w-[600px]">
					<DisableCard disabled={false} href="/flashcards/default">
						<CardHeader>
							<CardTitle>Default flashcards</CardTitle>
							<CardDescription>
								Shuffle through the default <br /> flashcards provided by LinkNLearn
							</CardDescription>
						</CardHeader>
					</DisableCard>
					<DisableCard disabled={user ? false : true}>
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
					<DisableCard disabled={user ? false : true}>
						<CardHeader>
							<CardTitle>All cards</CardTitle>
							<CardDescription>Shuffle through all flashcards</CardDescription>
						</CardHeader>
					</DisableCard>
					<DisableCard disabled={user ? false : true}>
						<CardHeader>
							<CardTitle>Manage custom flashcards</CardTitle>
							<CardDescription>Add, edit or delete your custom flashcards</CardDescription>
						</CardHeader>
					</DisableCard>
				</div>
			</div>
		</main>
	);
};

export default Flashcards;
