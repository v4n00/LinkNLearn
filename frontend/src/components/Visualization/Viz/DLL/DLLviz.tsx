import DoublyLinkedList from '@/assets/data structures/DoublyLinkedList';
import useDS from '@/hooks/useDS';
import { useRef } from 'react';
import LLviz from '../LL/LLviz';

const DLLviz = () => {
	const { data } = useDS();
	const ds = (data.dataStructure as DoublyLinkedList<number>).toArray();
	const ref = useRef(null);

	LLviz({ ref, data: ds, type: 'DLL' });
	return <svg ref={ref}></svg>;
};

export default DLLviz;
