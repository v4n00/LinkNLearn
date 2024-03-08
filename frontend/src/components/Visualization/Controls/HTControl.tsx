import { DataStructureActionTypes } from '@/assets/data structures/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useDS from '@/hooks/useDS';
import { MinusCircle, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import onChangeValueOnly from './onChangeFn';

const HTControl = () => {
	const { dispatch } = useDS();
	const [addKey, setAddKey] = useState<string>('');
	const [addValue, setAddValue] = useState<number | undefined>(undefined);
	const [removeKeyValue, setRemoveKeyValue] = useState<string | undefined>('');

	const addHT = () => {
		if (addKey !== undefined && addValue !== undefined) dispatch({ type: DataStructureActionTypes.ADD, payload: { key: addKey, value: addValue } });
	};

	const removeHT = () => {
		if (removeKeyValue !== undefined) dispatch({ type: DataStructureActionTypes.DELETE, payload: { key: removeKeyValue } });
	};

	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2 flex-col">
				<div className="flex h-[50px] gap-2">
					<Input id="input1" className="text-center h-full text-xl" placeholder="Key" value={addKey} onChange={(e) => setAddKey(e.target.value)} />
					<Input id="input2" className="text-center h-full text-xl" placeholder="Value" value={addValue === undefined ? '' : addValue} onChange={(e) => onChangeValueOnly(e, setAddValue)} />
				</div>
				<Button className="flex-1 grow h-full text-xl" onClick={addHT} disabled={addKey === '' || addValue === undefined || isNaN(addValue)}>
					<PlusCircle className="mx-1" />
					Add Key Value Pair
				</Button>
			</div>
			<div className="flex gap-2 h-[50px] flex-col">
				<Input id="input3" className="h-[50px] text-center text-xl" placeholder="Key" value={removeKeyValue} onChange={(e) => setRemoveKeyValue(e.target.value)} />
				<Button className="h-[50px] flex-1 grow text-xl" onClick={removeHT} disabled={removeKeyValue === ''}>
					<MinusCircle className="mx-1" />
					Remove Key
				</Button>
			</div>
		</div>
	);
};

export default HTControl;
