import BST from '@/assets/lectures/BST/BST';
import DLL from '@/assets/lectures/DLL/DLL';
import HT from '@/assets/lectures/HT/HT';
import SLL from '@/assets/lectures/SLL/SLL';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { TabsContent } from './ui/tabs';

interface LearnContainerProps {
	type: 'Simple Linked List' | 'Double Linked List' | 'Hash Table' | 'Binary Search Tree';
}

const LearnContainer = ({ type }: LearnContainerProps) => {
	const [currentPage, setCurrentPage] = useState(0);
	const nextPage = () => {
		if (currentPage < pages.length - 1) {
			setCurrentPage(currentPage + 1);
		}
	};
	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	const pages = type === 'Simple Linked List' ? SLL : type === 'Double Linked List' ? DLL : type === 'Hash Table' ? HT : type === 'Binary Search Tree' ? BST : [];

	return (
		<TabsContent value="Learn" className="h-full flex flex-col content-between gap-2">
			<ScrollArea className="h-0 grow rounded-md border p-2 pr-5">{pages[currentPage]}</ScrollArea>
			<Card className="h-[60px] px-2 flex items-center justify-between gap-3">
				<Button className="w-full" onClick={prevPage} disabled={currentPage === 0}>
					<ArrowLeft className="mx-1" />
					<p className="collapse size-0 xl:visible xl:size-auto">Previous Page</p>
				</Button>
				<Card className="h-[40px] px-4 bg-muted flex items-center justify-center font-extrabold text-xl border-ring border-2">{`${currentPage + 1}/${pages.length}`}</Card>
				<Button className="w-full" onClick={nextPage} disabled={currentPage === pages.length - 1}>
					<p className="collapse size-0 xl:visible xl:size-auto">Next Page</p>
					<ArrowRight className="mx-1" />
				</Button>
			</Card>
		</TabsContent>
	);
};

export default LearnContainer;
