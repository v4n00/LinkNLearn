import DoublyLinkedList from '@/assets/data structures/DoublyLinkedList';
import useDS from '@/hooks/useDS';
import { useRef } from 'react';

const DLLviz = () => {
	const { data } = useDS();
	const ds = (data.dataStructure as DoublyLinkedList<number>).toArray();
	const ref = useRef(null);

	return (
		<svg ref={ref}>
			<p>{ds[0]}</p>
		</svg>
	);
};

export default DLLviz;
