import SinglyLinkedList from '@/assets/data structures/SinglyLinkedList';
import useDS from '@/hooks/useDS';
import * as d3 from 'd3';
import { useRef } from 'react';
import { calculateWidth, calculateY, drawArrow, mainPointerCircleProps, nodeContentProps, nodeProps, pointerCircleProps, svgProps } from './util';

const SLLviz = () => {
	const { data } = useDS();
	const ds = (data.dataStructure as SinglyLinkedList<number>).toArray();
	const ref = useRef(null);

	d3.select(ref.current).selectAll('*').remove();

	// select svg
	// prettier-ignore
	const svg = d3
		.select(ref.current)
		.attr('width', svgProps.width)
		.attr('height', svgProps.height);

	// pointer node
	// prettier-ignore
	svg.append('rect')
		.attr('x', mainPointerCircleProps.x)
		.attr('y', calculateY(mainPointerCircleProps.size))
		.attr('width', mainPointerCircleProps.size)
		.attr('height', mainPointerCircleProps.size)
		.attr('rx', mainPointerCircleProps.radius)
		.attr('class', mainPointerCircleProps.fill);

	// pointer circle
	// prettier-ignore
	svg.append('circle')
		.attr('cx', mainPointerCircleProps.x + mainPointerCircleProps.size / 2)
		.attr('cy', calculateY(0))
		.attr('r', pointerCircleProps.size)
		.attr('class', pointerCircleProps.fill);

	// nodes
	const nodes = svg.selectAll('g').data(ds).enter().append('g');

	nodes.each((_, i, nodes) => {
		const g = d3.select(nodes[i]);
		const contentWidth = calculateWidth(ds[i]);

		// nodes
		// prettier-ignore
		const nodeRect = g
			.append('rect')
			.attr('x', mainPointerCircleProps.size + mainPointerCircleProps.x + nodeProps.spacing + i * (nodeProps.width + contentWidth + nodeProps.spacing))
			.attr('y', calculateY(nodeProps.height))
			.attr('width', contentWidth + nodeProps.width)
			.attr('height', nodeProps.height)
			.attr('rx', nodeProps.radius)
			.attr('class', nodeProps.fill);

		// pointer circle
		// prettier-ignore
		g.append('circle')
			.attr('cx', +nodeRect.attr('x') + contentWidth + pointerCircleProps.x)
			.attr('cy', calculateY(0))
			.attr('r', pointerCircleProps.size)
			.attr('class', pointerCircleProps.fill);

		// content box
		// prettier-ignore
		const contentRect = g
			.append('rect')
			.attr('x', +nodeRect.attr('x') + nodeContentProps.x)
			.attr('y', calculateY(nodeContentProps.height))
			.attr('width', contentWidth)
			.attr('height', nodeContentProps.height)
			.attr('rx', nodeContentProps.radius)
			.attr('class', nodeContentProps.fill);

		// data inside the rectangle
		// prettier-ignore
		g.append('text')
			.text(ds[i])
			.attr('x', +contentRect.attr('x') + contentWidth / 2)
			.attr('y', calculateY(0))
			.attr('text-anchor', 'middle')
			.attr('font-weight', 'bold')
			.attr('dominant-baseline', 'central')
			.attr('font-family', 'Consolas')
			.attr('class', nodeProps.textFill);

		// arrow
		// prettier-ignore
		if(i !== ds.length) {
			drawArrow({
				svg: g,
				startCoords: { x: parseInt(nodeRect.attr('x')) - nodeProps.spacing, y: calculateY(0) },
				endCoords: { x: parseInt(nodeRect.attr('x')), y: calculateY(0) },
				direction: 'right',
			});
		}
	});

	return <svg ref={ref}></svg>;
};

export default SLLviz;
