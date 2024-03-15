import initializeData from '@/assets/data structures/initializeData';
import { DataStructureTypes } from '@/assets/data structures/types';
import ErrorHandler from '@/components/Visualization/ErrorHandler';
import LearnContainer from '@/components/Visualization/LearnContainer';
import SandboxContainer from '@/components/Visualization/SandboxContainer';
import BSTviz from '@/components/Visualization/Viz/BST/BSTviz';
import DLLviz from '@/components/Visualization/Viz/DLL/DLLviz';
import HTviz from '@/components/Visualization/Viz/HT/HTviz';
import SLLviz from '@/components/Visualization/Viz/SLL/SLLviz';
import Whiteboard, { WhiteboardHandles } from '@/components/Whiteboard';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DSProvider } from '@/contexts/DSContext';
import { WhiteboardProvider } from '@/contexts/WhiteboardContext';
import { BookText, Box } from 'lucide-react';
import { useRef, useState } from 'react';

const DataStructureContainer = ({ type }: { type: DataStructureTypes }) => {
	const [initialData] = useState(() => initializeData(type));
	const CompViz = type === DataStructureTypes.SLL ? SLLviz : type === DataStructureTypes.DLL ? DLLviz : type === DataStructureTypes.HT ? HTviz : BSTviz;
	const whiteboardRef = useRef<WhiteboardHandles>(null);

	return (
		<WhiteboardProvider innerRef={whiteboardRef}>
			<DSProvider initialData={initialData}>
				<ResizablePanelGroup direction="horizontal">
					<ResizablePanel defaultSize={33} minSize={33} maxSize={66}>
						<Tabs defaultValue="Sandbox" className="h-full p-3 flex flex-col">
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
						<Whiteboard ref={whiteboardRef} type={type}>
							<CompViz />
						</Whiteboard>
						<ErrorHandler />
					</ResizablePanel>
				</ResizablePanelGroup>
			</DSProvider>
		</WhiteboardProvider>
	);
};

export default DataStructureContainer;
