import HashTable from '@/assets/data structures/HashTable';
import useDS from '@/hooks/useDS';
import { useRef } from 'react';

const HTviz = () => {
	const { data } = useDS();
	const ds = data.dataStructure as HashTable;
	const ref = useRef(null);

	return (
		<svg ref={ref}>
			<p>hi</p>
		</svg>
	);
};

export default HTviz;
