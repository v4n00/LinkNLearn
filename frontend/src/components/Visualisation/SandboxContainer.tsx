import { DSTypes } from '@/constants/interfaces';
import { Card } from '../ui/card';
import { TabsContent } from '../ui/tabs';
import SandboxControls from './SandboxControls';

// interface SandboxContainerProps {
// 	type: DSTypes;
// }

const SandboxContainer = ({ type }: DSTypes) => {
	return (
		<TabsContent value="Sandbox" className="h-full">
			<div className="h-full flex flex-col justify-around gap-2 text-2xl font-bold">
				<Card>
					<p>{type}</p>
				</Card>
				<SandboxControls />
			</div>
		</TabsContent>
	);
};

export default SandboxContainer;
