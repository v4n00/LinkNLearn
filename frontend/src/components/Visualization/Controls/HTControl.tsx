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
	const [removeKeyValue, setRemoveKeyValue] = useState<string>('');

	const onChangeHT = (e: React.ChangeEvent<HTMLInputElement>, set: React.Dispatch<React.SetStateAction<string>>) => {
		if (!/[^a-zA-Z]/.test(e.target.value) || e.target.value === '') {
			set(e.target.value);
		}
	};

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
					<Input id="input1" className="text-center h-full text-xl" placeholder="Key" value={addKey} onChange={(e) => onChangeHT(e, setAddKey)} />
					<Input id="input2" className="w-[80px] text-center h-full text-xl" placeholder="Value" value={addValue === undefined ? '' : addValue} onChange={(e) => onChangeValueOnly(e, setAddValue)} />
				</div>
				<Button className="flex-1 grow h-full text-xl" onClick={addHT} disabled={addKey === '' || addValue === undefined || isNaN(addValue)}>
					<PlusCircle className="mx-1" />
					<p className="text-wrap">Add Key Value Pair</p>
				</Button>
			</div>
			<div className="flex gap-2 h-[50px] flex-col">
				<Input id="input3" className="h-[50px] text-center text-xl" placeholder="Key" value={removeKeyValue} onChange={(e) => onChangeHT(e, setRemoveKeyValue)} />
				<Button className="h-[50px] flex-1 grow text-xl" onClick={removeHT} disabled={removeKeyValue === ''}>
					<MinusCircle className="mx-1" />
					<p className="text-wrap">Remove Key</p>
				</Button>
			</div>
		</div>
	);
};

export default HTControl;
