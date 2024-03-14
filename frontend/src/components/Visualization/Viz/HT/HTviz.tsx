import HashTable, { defaultHashTableSize } from '@/assets/data structures/HashTable';
import useDS from '@/hooks/useDS';
import * as d3 from 'd3';
import { useRef } from 'react';
import { svgProps } from '../LL/LLutil';
import LLviz from '../LL/LLviz';

const HTviz = () => {
	const { data } = useDS();
	const ds = (data.dataStructure as HashTable).toArray();
	const ref = useRef(null);
	console.log('a', ds);

	const svg = d3
		.select(ref.current)
		.attr('x', -((svgProps.height * defaultHashTableSize) / 2))
		.attr('y', 0)
		.attr('width', svgProps.width)
		.attr('height', svgProps.height * defaultHashTableSize);

	return (
		<svg ref={ref} width="999999">
			{ds.map((ll, i) => (
				<LLviz key={i} data={ll} type="SLL" coordinates={{ x: 0, y: i * (svgProps.height + 4) }} />
			))}
		</svg>
	);
};

export default HTviz;
