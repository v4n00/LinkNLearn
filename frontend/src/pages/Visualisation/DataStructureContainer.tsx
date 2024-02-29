import LearnContainer from '@/components/Visualisation/LearnContainer';
import SLLviz from '@/components/Visualisation/SLLviz';
import SandboxContainer from '@/components/Visualisation/SandboxContainer';
import Whiteboard, { WhiteboardHandles } from '@/components/Whiteboard';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DSTypes } from '@/constants/interfaces';
import { WhiteboardProvider } from '@/contexts/WhiteboardContext';
import { BookText, Box } from 'lucide-react';
import { useRef } from 'react';

const DataStructureContainer = ({ type }: DSTypes) => {
	const whiteboardRef = useRef<WhiteboardHandles>(null);

	return (
		<WhiteboardProvider innerRef={whiteboardRef}>
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
						<SandboxContainer type={type} />
					</Tabs>
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel>
					<Whiteboard ref={whiteboardRef}>
						<SLLviz />
					</Whiteboard>
				</ResizablePanel>
			</ResizablePanelGroup>
		</WhiteboardProvider>
	);
};

export default DataStructureContainer;
