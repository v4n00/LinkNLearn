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
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { BookText, Box } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const DataStructureContainer = ({ type }: { type: DataStructureTypes }) => {
	const [initialData, setInitialData] = useState(() => initializeData(type));
	useEffect(() => {
		setInitialData(initializeData(type));
	}, [type]);
	const CompViz = type === DataStructureTypes.SLL ? SLLviz : type === DataStructureTypes.DLL ? DLLviz : type === DataStructureTypes.HT ? HTviz : BSTviz;
	const whiteboardRef = useRef<WhiteboardHandles>(null);

	const isDesktop = useMediaQuery('(min-width: 1024px)');

	const LeftTab = () => {
		return (
			<Tabs defaultValue="Learn" className="h-full p-3 flex-col lg:flex sm:hidden flex w-full">
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
				<SandboxContainer type={type} />
				<LearnContainer type={type} />
			</Tabs>
		);
	};

	const RightTab = () => {
		return (
			<div className="lg:block sm:block hidden w-full h-full">
				<Whiteboard ref={whiteboardRef} type={type}>
					<CompViz />
				</Whiteboard>
				<ErrorHandler />
			</div>
		);
	};

	return (
		<WhiteboardProvider innerRef={whiteboardRef}>
			<DSProvider initialData={initialData}>
				{isDesktop ? (
					<ResizablePanelGroup direction="horizontal">
						<ResizablePanel defaultSize={33} minSize={33} maxSize={66}>
							<LeftTab />
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel>
							<RightTab />
						</ResizablePanel>
					</ResizablePanelGroup>
				) : (
					<>
						<LeftTab />
						<RightTab />
					</>
				)}
			</DSProvider>
		</WhiteboardProvider>
	);
};

export default DataStructureContainer;
