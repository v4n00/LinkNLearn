import BinarySearchTree from '@/assets/data structures/BinarySearchTree';
import useDS from '@/hooks/useDS';
import { useRef } from 'react';

const BSTviz = () => {
	const { data } = useDS();
	const ds = (data.dataStructure as BinarySearchTree).toArray();
	const ref = useRef(null);
	console.log(ds);

	return (
		<svg ref={ref}>
			<p>hi</p>
		</svg>
	);
};

export default BSTviz;
