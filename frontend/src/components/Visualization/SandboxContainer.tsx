import { DataStructureActionTypes, DataStructureTypes } from '@/assets/data structures/types';
import useDS from '@/hooks/useDS';
import { useReducer } from 'react';
import { Card } from '../ui/card';
import { TabsContent } from '../ui/tabs';
import SandboxControls from './SandboxControls';

const SandboxContainer = ({ type }: { type: DataStructureTypes }) => {
	const { dispatch, data } = useDS();
	const [, forceUpdate] = useReducer((x) => x + 1, 0);
	const addItem = () => {
		const newItem = 2;
		dispatch({ type: DataStructureActionTypes.ADD, payload: { value: newItem } });
		forceUpdate();
	};
	const log = () => {
		console.log(data.toArray());
	};

	return (
		<TabsContent value="Sandbox" className="h-full">
			<div className="h-full flex flex-col justify-around gap-2 text-2xl font-bold">
				<Card>
					<p>{type}</p>
					<button onClick={addItem}>Add</button>
					<button onClick={log}>Log</button>
				</Card>
				<SandboxControls />
			</div>
		</TabsContent>
	);
};

export default SandboxContainer;