import { DataStructureActionTypes } from '@/assets/data structures/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useDS from '@/hooks/useDS';
import { BetweenHorizonalStart, MinusCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import onChangeValueOnly from './onChangeFn';

const LLControl = () => {
	const { dispatch } = useDS();
	const [addNodeValue, setAddNodeValue] = useState<number | undefined>(undefined);
	const [removeNodeValue, setRemoveNodeValue] = useState<number | undefined>(undefined);
	const [removeNodePosValue, setRemoveNodePosValue] = useState<number | undefined>(undefined);
	const [insertNodeIndex, setInsertNodeIndex] = useState<number | undefined>(undefined);
	const [insertNodeValue, setInsertNodeValue] = useState<number | undefined>(undefined);
	const [insertNodeAfterValue, setinsertNodeAfterValue] = useState<number | undefined>(undefined);
	const [insertNodeAfterNewValue, setinsertNodeAfterNewValue] = useState<number | undefined>(undefined);

	const addNode = () => {
		if (addNodeValue !== undefined) dispatch({ type: DataStructureActionTypes.ADD, payload: { value: addNodeValue } });
	};

	const removeNode = () => {
		if (removeNodeValue !== undefined) dispatch({ type: DataStructureActionTypes.DELETE_VALUE, payload: { value: removeNodeValue } });
	};

	const removeNodePos = () => {
		if (removeNodePosValue !== undefined) dispatch({ type: DataStructureActionTypes.DELETE_POS, payload: { index: removeNodePosValue } });
	};

	const insertNode = () => {
		if (insertNodeValue !== undefined && insertNodeIndex !== undefined) dispatch({ type: DataStructureActionTypes.INSERT_POS, payload: { index: insertNodeIndex, value: insertNodeValue as number } });
	};

	const insertNodeAfter = () => {
		if (insertNodeAfterValue !== undefined && insertNodeAfterNewValue !== undefined) dispatch({ type: DataStructureActionTypes.INSERT_AFTER_VALUE, payload: { after: insertNodeAfterValue as number, value: insertNodeAfterNewValue as number } });
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
					<p className="text-wrap">Remove node (value)</p>
				</Button>
				<Input id="input2" className="w-[80px] text-center h-full text-xl" placeholder="Value" value={removeNodeValue === undefined ? '' : removeNodeValue} onChange={(e) => onChangeValueOnly(e, setRemoveNodeValue)} />
			</div>
			<div className="flex gap-2 h-[50px]">
				<Button className="flex-1 grow h-full text-xl" onClick={removeNodePos} disabled={removeNodePosValue === undefined || isNaN(removeNodePosValue)}>
					<MinusCircle className="mx-1" />
					<p className="text-wrap">Remove node (position)</p>
				</Button>
				<Input id="input2" className="w-[80px] text-center h-full text-xl" placeholder="Pos" value={removeNodePosValue === undefined ? '' : removeNodePosValue} onChange={(e) => onChangeValueOnly(e, setRemoveNodePosValue)} />
			</div>
			<div className="flex gap-2 h-[50px]">
				<Button className="flex-1 grow h-full text-xl" onClick={insertNode} disabled={insertNodeValue === undefined || isNaN(insertNodeValue) || insertNodeIndex === undefined || isNaN(insertNodeIndex)}>
					<BetweenHorizonalStart className="mx-1" />
					<p className="text-wrap">Insert Node (at index)</p>
				</Button>
				<Input id="input3" className="w-[80px] text-center h-full text-xl" placeholder="Index" value={insertNodeIndex === undefined ? '' : insertNodeIndex} onChange={(e) => onChangeValueOnly(e, setInsertNodeIndex)} />
				<Input id="input4" className="w-[80px] text-center h-full text-xl" placeholder="Value" value={insertNodeValue === undefined ? '' : insertNodeValue} onChange={(e) => onChangeValueOnly(e, setInsertNodeValue)} />
			</div>
			<div className="flex gap-2 h-[50px]">
				<Button className="flex-1 grow h-full text-xl" onClick={insertNodeAfter} disabled={insertNodeAfterValue === undefined || isNaN(insertNodeAfterValue) || insertNodeAfterNewValue === undefined || isNaN(insertNodeAfterNewValue)}>
					<BetweenHorizonalStart className="mx-1" />
					<p className="text-wrap">Insert Node (after value)</p>
				</Button>
				<Input id="input5" className="w-[80px] text-center h-full text-xl" placeholder="After" value={insertNodeAfterValue === undefined ? '' : insertNodeAfterValue} onChange={(e) => onChangeValueOnly(e, setinsertNodeAfterValue)} />
				<Input id="input6" className="w-[80px] text-center h-full text-xl" placeholder="Value" value={insertNodeAfterNewValue === undefined ? '' : insertNodeAfterNewValue} onChange={(e) => onChangeValueOnly(e, setinsertNodeAfterNewValue)} />
			</div>
		</div>
	);
};

export default LLControl;
