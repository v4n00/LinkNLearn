import SinglyLinkedList from '@/assets/data structures/SinglyLinkedList';
import useDS from '@/hooks/useDS';
import { useRef } from 'react';
import LLviz from '../LL/LLviz';

const SLLviz = () => {
	const { data } = useDS();
	const ds = (data.dataStructure as SinglyLinkedList<number>).toArray();
	const ref = useRef(null);

	LLviz({ ref, data: ds, type: 'SLL' });
	return <svg ref={ref}></svg>;
};

export default SLLviz;
