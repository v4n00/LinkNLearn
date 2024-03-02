import useWhiteboard from '@/hooks/useWhiteboard';
import { RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';
import CollapsibleText from '../CollapsibleText';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const SandboxControls = () => {
	const whiteboardControls = useWhiteboard();

	return (
		<Card className="flex flex-col p-2 gap-2">
			<div className="text-center">Sandbox controls</div>
			<div className="flex gap-2 justify-between">
				<Button className="flex-1" onClick={whiteboardControls?.zoomIn}>
					<ZoomIn className="mx-1" />
					<CollapsibleText>Zoom In</CollapsibleText>
				</Button>
				<Button className="flex-1" onClick={whiteboardControls?.resetView}>
					<RotateCcw className="mx-1" />
					<CollapsibleText>Reset View</CollapsibleText>
				</Button>
				<Button className="flex-1" onClick={whiteboardControls?.zoomOut}>
					<ZoomOut className="mx-1" />
					<CollapsibleText>Zoom Out</CollapsibleText>
				</Button>
			</div>
		</Card>
	);
};

export default SandboxControls;
