import HashTable from '@/assets/data structures/HashTable';
import useDS from '@/hooks/useDS';
import * as d3 from 'd3';
import { useRef } from 'react';
import { svgProps } from '../LL/LLutil';
import LLviz from '../LL/LLviz';
import { bigBoxProps, cellProps, colorStyleHT, svgPropsHT } from './HTutil';

const HTviz = () => {
	const { data } = useDS();
	const ds = (data.dataStructure as HashTable).toArray();
	const ref = useRef(null);

	d3.select(ref.current).selectAll('*').remove();

	// prettier-ignore
	const svg = d3
		.select(ref.current)
		.attr('x', svgPropsHT.x)
		.attr('y', 0)
		.attr('width', svgProps.width)
		.attr('height', svgPropsHT.height);

	// big box
	// prettier-ignore
	svg.append('rect')
		.attr('x', bigBoxProps.x)
		.attr('y', 10)
		.attr('width', bigBoxProps.width)
		.attr('height', bigBoxProps.height)
		.attr('rx', bigBoxProps.radius)
		.attr('class', bigBoxProps.fill)
		.attr('stroke', 'white')
		.attr('stroke-width', bigBoxProps.strokeWidth)
		.attr('fill-opacity', 1);

	svg.selectAll('adasd').data(ds).enter().append('svg');

	ds.forEach((ll, i) => {
		const g = svg.selectChild(`svg:nth-child(${i + 2})`);
		LLviz({ ref: { current: g.node() } as React.MutableRefObject<null>, data: ll, type: 'SLL', coordinates: { x: bigBoxProps.x + cellProps.width + 8, y: i * (svgProps.height + 10) + bigBoxProps.x * 2 } });

		// content
		// prettier-ignore
		svg.append('rect')
			.attr('x', bigBoxProps.x + 10)
			.attr('y', i * (svgProps.height + 10) + bigBoxProps.x * 2 + 2) // I stopped caring right here
			.attr('width', cellProps.width)
			.attr('height', cellProps.height)
			.attr('class', cellProps.fill)
			.attr('rx', cellProps.radius);

		const alphabet = 'OPQRSTUVWXYZABCDEFGHIJKLMN'.split('');

		// prettier-ignore
		svg.append('text')
			.attr('x', bigBoxProps.x + 10 + cellProps.width / 2 + 2)
			.attr('y', i * (svgProps.height + 10) + bigBoxProps.x * 2 + 2 + cellProps.height / 2 )
			.attr('text-anchor', 'middle')
			.attr('dominant-baseline', 'central')
			.attr('font-size', 30)
			.attr('font-weight', 'bold')
			.attr('font-family', 'consolas')
			.attr('class', colorStyleHT.textFill)
			.text(`${alphabet[i]}(${i})`);

		if (i < ds.length - 1) {
			// prettier-ignore
			svg.append('rect')
				.attr('x', bigBoxProps.x)
				.attr('y', i * (svgProps.height + 10) + bigBoxProps.x * 2 + 2 + cellProps.height + 6)
				.attr('width', bigBoxProps.width)
				.attr('height', 2)
				.attr('class', colorStyleHT.lineFill)
		}
	});

	return <svg ref={ref}></svg>;
};

export default HTviz;
