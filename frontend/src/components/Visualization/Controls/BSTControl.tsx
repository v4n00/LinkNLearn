import { DataStructureActionTypes } from '@/assets/data structures/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useDS from '@/hooks/useDS';
import { MinusCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import onChangeValueOnly from './onChangeFn';

const BSTControl = () => {
	const { dispatch } = useDS();
	const [addNodeValue, setAddNodeValue] = useState<number | undefined>(undefined);
	const [removeNodeValue, setRemoveNodeValue] = useState<number | undefined>(undefined);

	const addNode = () => {
		if (addNodeValue !== undefined) dispatch({ type: DataStructureActionTypes.ADD, payload: { value: addNodeValue } });
	};

	const removeNode = () => {
		if (removeNodeValue !== undefined) dispatch({ type: DataStructureActionTypes.DELETE, payload: { value: removeNodeValue } });
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2 h-[50px]">
				<Button className="flex-1 grow h-full text-xl" onClick={addNode} disabled={addNodeValue === undefined || isNaN(addNodeValue)}>
					<PlusCircle className="mx-1" />
					<p className="text-wrap">Add node</p>
				</Button>
				<Input id="input1" className="w-[80px] text-center h-full text-xl" placeholder="Value" value={addNodeValue === undefined ? '' : addNodeValue} onChange={(e) => onChangeValueOnly(e, setAddNodeValue)} />
			</div>
			<div className="flex gap-2 h-[50px]">
				<Button className="flex-1 grow h-full text-xl" onClick={removeNode} disabled={removeNodeValue === undefined || isNaN(removeNodeValue)}>
					<MinusCircle className="mx-1" />
					<p className="text-wrap">Remove node</p>
				</Button>
				<Input id="input2" className="w-[80px] text-center h-full text-xl" placeholder="Value" value={removeNodeValue === undefined ? '' : removeNodeValue} onChange={(e) => onChangeValueOnly(e, setRemoveNodeValue)} />
			</div>
		</div>
	);
};

export default BSTControl;
