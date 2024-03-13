import * as d3 from 'd3';
import { useRef } from 'react';
import { calculateWidth, calculateY, drawArrow, mainPointerCircleProps, nodeContentProps, nodeProps, pointerCircleProps, svgProps } from './LLutil';

type LLvizProps = {
	ds: number[];
	type: 'SLL' | 'DLL';
};

const LLviz = ({ ds, type }: LLvizProps) => {
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
	const pointerNodeCircle = svg.append('circle')
		.attr('id', 'pointer')
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
			.attr('id', 'pointer')
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
			.attr('font-size', nodeProps.textSize)
			.attr('font-weight', 'bold')
			.attr('dominant-baseline', 'central')
			.attr('font-family', 'Consolas')
			.attr('class', nodeProps.textFill);

		//arrow
		if (i !== ds.length) {
			const prevPointer = d3.select(nodes[i - 1]).selectChild('circle#pointer');

			drawArrow({
				svg: g,
				startCoords: { x: i !== 0 ? parseInt(prevPointer.attr('cx')) : parseInt(pointerNodeCircle.attr('cx')), y: calculateY(0) },
				endCoords: { x: parseInt(nodeRect.attr('x')), y: calculateY(0) },
				arc: 0,
			});

			if (type === 'DLL') {
				// TODO: draw arrow from current to prev
			}
		}
	});

	return <svg ref={ref}></svg>;
};

export default LLviz;
