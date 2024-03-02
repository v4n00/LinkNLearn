import DoublyLinkedList from '@/assets/data structures/DoublyLinkedList';
import SinglyLinkedList from '@/assets/data structures/SinglyLinkedList';
import { DataStructureTypes } from '@/assets/data structures/types';
import LearnContainer from '@/components/Visualization/LearnContainer';
import SandboxContainer from '@/components/Visualization/SandboxContainer';
import BSTviz from '@/components/Visualization/Viz/BSTviz';
import DLLviz from '@/components/Visualization/Viz/DLLviz';
import HTviz from '@/components/Visualization/Viz/HTviz';
import SLLviz from '@/components/Visualization/Viz/SLLviz';
import Whiteboard, { WhiteboardHandles } from '@/components/Whiteboard';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DSProvider } from '@/contexts/DSContext';
import { WhiteboardProvider } from '@/contexts/WhiteboardContext';
import { BookText, Box } from 'lucide-react';
import { useRef, useState } from 'react';

const DataStructureContainer = ({ type }: { type: DataStructureTypes }) => {
	const initializeData = (type: DataStructureTypes): SinglyLinkedList<number> | DoublyLinkedList<number> => {
		switch (type) {
			case DataStructureTypes.SLL:
				return new SinglyLinkedList<number>().fromArray([1, 2, 3, 4, 5]);
			case DataStructureTypes.DLL:
				return new DoublyLinkedList<number>().fromArray([1, 2, 3, 4, 5]);
			default:
				throw new Error('Invalid data structure type');
		}
	};

	const [initialData] = useState(() => initializeData(type));
	const CompViz = type === DataStructureTypes.SLL ? SLLviz : type === DataStructureTypes.DLL ? DLLviz : type === DataStructureTypes.HT ? HTviz : BSTviz;

	const whiteboardRef = useRef<WhiteboardHandles>(null);

	return (
		<WhiteboardProvider innerRef={whiteboardRef}>
			<DSProvider initialData={initialData}>
				<ResizablePanelGroup direction="horizontal">
					<ResizablePanel defaultSize={33} minSize={33} maxSize={40}>
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
							<SandboxContainer type={type} />
						</Tabs>
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel>
						<Whiteboard ref={whiteboardRef}>
							<CompViz />
						</Whiteboard>
					</ResizablePanel>
				</ResizablePanelGroup>
			</DSProvider>
		</WhiteboardProvider>
	);
};

export default DataStructureContainer;
