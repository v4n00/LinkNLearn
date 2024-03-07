import HashTable from '@/assets/data structures/HashTable';
import useDS from '@/hooks/useDS';
import { useRef } from 'react';

const HTviz = () => {
	const { data } = useDS();
	const ds = data.dataStructure as HashTable;
	const ref = useRef(null);
	console.log(ds);

	return (
		<svg ref={ref}>
			<p>hi</p>
		</svg>
	);
};

export default HTviz;
