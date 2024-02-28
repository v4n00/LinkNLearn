import LearnContainer from '@/components/LearnContainer';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookText, Box } from 'lucide-react';

interface DataStructureContainerProps {
	type: 'Simple Linked List' | 'Double Linked List' | 'Hash Table' | 'Binary Search Tree';
}

const DataStructureContainer = ({ type }: DataStructureContainerProps) => {
	return (
		<ResizablePanelGroup direction="horizontal">
			<ResizablePanel defaultSize={33} minSize={33} maxSize={66}>
				<Tabs defaultValue="Learn" className="h-full p-3 flex flex-col">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="Learn" className="tracking-widest">
							<BookText className="size-5 mr-1" />
							Learn
						</TabsTrigger>
						<TabsTrigger value="Sandbox" className="tracking-widest">
							<Box className="size-5 mr-1" />
							Sandbox
						</TabsTrigger>
					</TabsList>
					<LearnContainer type={type} />
					<TabsContent value="Sandbox">b</TabsContent>
				</Tabs>
			</ResizablePanel>
			<ResizableHandle withHandle />
			<ResizablePanel>{type}</ResizablePanel>
		</ResizablePanelGroup>
	);
};

export default DataStructureContainer;
