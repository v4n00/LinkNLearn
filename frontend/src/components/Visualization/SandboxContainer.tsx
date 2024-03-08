import { DataStructureActionTypes, DataStructureTypes } from '@/assets/data structures/types';
import useDS from '@/hooks/useDS';
import { ChevronRightSquare, ListRestart } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import { TabsContent } from '../ui/tabs';
import BSTControl from './Controls/BSTControl';
import HTControl from './Controls/HTControl';
import LLControl from './Controls/LLControl';
import SandboxControls from './SandboxControls';

const SandboxContainer = ({ type }: { type: DataStructureTypes }) => {
	const { dispatch, data } = useDS();

	const dsName = type === DataStructureTypes.SLL ? 'Singly Linked List' : type === DataStructureTypes.DLL ? 'Doubly Linked List' : type === DataStructureTypes.HT ? 'Hash Table' : 'Binary Search Tree';

	useEffect(() => {
		document.title = `LinkNLearn - ${dsName}`;
		dispatch({ type: DataStructureActionTypes.INITIALIZE, payload: { type } });
	}, [dispatch, dsName, type]);

	const reinitializeDS = () => {
		dispatch({ type: DataStructureActionTypes.INITIALIZE, payload: { type } });
	};

	const logDS = () => {
		console.log(data.dataStructure.toArray());
	};

	const DSControl = type === DataStructureTypes.SLL || type === DataStructureTypes.DLL ? <LLControl /> : type === DataStructureTypes.HT ? <HTControl /> : <BSTControl />;

	return (
		<TabsContent value="Sandbox" className="h-full">
			<div className="h-full flex flex-col justify-around gap-2 text-2xl font-bold">
				<Card className="flex flex-col p-2 gap-4 grow">
					<div className="text-center">{dsName} Controls</div>
					<Separator />
					<div className="flex flex-col gap-2">
						<Button className="w-full" onClick={reinitializeDS}>
							<ListRestart className="mx-1" />
							<p>Reinitialize {dsName}</p>
						</Button>
						<Button className="w-full" onClick={logDS}>
							<ChevronRightSquare className="mx-1" />
							<p>Log {dsName} to console</p>
						</Button>
					</div>
					<Separator />
					{DSControl}
				</Card>
				<SandboxControls />
			</div>
		</TabsContent>
	);
};

export default SandboxContainer;
