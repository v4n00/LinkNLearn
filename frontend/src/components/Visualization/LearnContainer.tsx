import { DataStructureTypes } from '@/assets/data structures/types';
import BST from '@/assets/lectures/BST/BST';
import DLL from '@/assets/lectures/DLL/DLL';
import HT from '@/assets/lectures/HT/HT';
import SLL from '@/assets/lectures/SLL/SLL';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import CollapsibleText from '../CollapsibleText';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { TabsContent } from '../ui/tabs';

const LearnContainer = ({ type }: { type: DataStructureTypes }) => {
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

	const pages = type === 'SLL' ? SLL : type === 'DLL' ? DLL : type === 'HT' ? HT : type === 'BST' ? BST : [];

	return (
		<TabsContent value="Learn" className="h-full">
			<div className="h-full flex flex-col gap-2">
				<ScrollArea className="h-0 grow rounded-md border p-2 pr-5">{pages[currentPage]}</ScrollArea>
				<Card className="h-[60px] px-2 flex items-center justify-between gap-3">
					<Button className="w-full" onClick={prevPage} disabled={currentPage === 0}>
						<ArrowLeft className="mx-1" />
						<CollapsibleText>Previous Page</CollapsibleText>
					</Button>
					<Card className="h-[40px] px-4 bg-muted flex items-center justify-center font-extrabold text-xl border-ring border-2">{`${currentPage + 1}/${pages.length}`}</Card>
					<Button className="w-full" onClick={nextPage} disabled={currentPage === pages.length - 1}>
						<CollapsibleText>Next Page</CollapsibleText>
						<ArrowRight className="mx-1" />
					</Button>
				</Card>
			</div>
		</TabsContent>
	);
};

export default LearnContainer;
