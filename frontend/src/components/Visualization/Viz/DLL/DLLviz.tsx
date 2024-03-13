import DoublyLinkedList from '@/assets/data structures/DoublyLinkedList';
import useDS from '@/hooks/useDS';
import { useRef } from 'react';

const DLLviz = () => {
	const { data } = useDS();
	const ds = (data.dataStructure as DoublyLinkedList<number>).toArray();
	const ref = useRef(null);
	console.log(data);

	return (
		<svg ref={ref}>
			<p>hi</p>
		</svg>
	);
};

export default DLLviz;
