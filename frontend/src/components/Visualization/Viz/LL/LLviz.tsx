import * as d3 from 'd3';
import { arrowProps, calculateWidth, calculateY, drawArrow, mainPointerCircleProps, nodeContentProps, nodeProps, pointerCircleProps, svgProps } from './LLutil';

type LLvizProps = {
	ref: React.MutableRefObject<null>;
	data: unknown[];
	type: 'SLL' | 'DLL';
	coordinates?: { x: number; y: number };
};

const LLviz = ({ ref, data, type, coordinates }: LLvizProps) => {
	const multiplierDLL = type === 'SLL' ? 1 : 1.5;

	d3.select(ref.current).selectAll('*').remove();

	// select svg
	// prettier-ignore
	const svg = d3
		.select(ref.current)
		.attr('x', coordinates?.x || 0)
		.attr('y', coordinates?.y || 0)
		.attr('width', svgProps.width)
		.attr('height', svgProps.height);

	// pointer node
	// prettier-ignore
	const pointerNode = svg.append('rect')
		.attr('id', 'pointerNode')
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
	const nodes = svg.selectAll('g').data(data).enter().append('g');

	nodes.each((_, i, nodes) => {
		const g = d3.select(nodes[i]);
		const contentWidth = calculateWidth(data[i]);

		// im shooting myself
		let currentNodeX = mainPointerCircleProps.size + mainPointerCircleProps.x + nodeProps.spacing;
		if (i !== 0) {
			const prevNode = d3.select(nodes[i - 1]).selectChild('rect#nodeRect');
			currentNodeX = parseInt(prevNode.attr('width')) + parseInt(prevNode.attr('x')) + nodeProps.spacing;
		}

		// nodes
		// prettier-ignore
		const nodeRect = g
			.append('rect')
			.attr('id', `nodeRect`)
			.attr('x', currentNodeX)
			.attr('y', calculateY(nodeProps.height))
			.attr('width', contentWidth + nodeProps.width * multiplierDLL)
			.attr('height', nodeProps.height)
			.attr('rx', nodeProps.radius)
			.attr('class', nodeProps.fill);

		// pointer circle
		// prettier-ignore
		let prevPointerCircle = null;
		if (type === 'DLL') {
			prevPointerCircle = g
				.append('circle')
				.attr('id', 'pointer1')
				.attr('cx', +nodeRect.attr('x') + contentWidth - pointerCircleProps.x ** 0.7)
				.attr('cy', calculateY(0))
				.attr('r', pointerCircleProps.size)
				.attr('class', pointerCircleProps.fill);
		}

		// prettier-ignore
		g.append('circle')
			.attr('id', 'pointer2')
			.attr('cx', +nodeRect.attr('x') + contentWidth + pointerCircleProps.x * multiplierDLL ** 1.8)
			.attr('cy', calculateY(0))
			.attr('r', pointerCircleProps.size)
			.attr('class', pointerCircleProps.fill);

		// content box
		// prettier-ignore
		const contentRect = g
			.append('rect')
			.attr('x', +nodeRect.attr('x') + nodeContentProps.x * multiplierDLL ** 4.1)
			.attr('y', calculateY(nodeContentProps.height))
			.attr('width', contentWidth)
			.attr('height', nodeContentProps.height)
			.attr('rx', nodeContentProps.radius)
			.attr('class', nodeContentProps.fill);

		// data inside the rectangle
		// prettier-ignore
		g.append('text')
			.text(data[i] as string | number)
			.attr('x', +contentRect.attr('x') + contentWidth / 2)
			.attr('y', calculateY(0))
			.attr('text-anchor', 'middle')
			.attr('font-size', nodeProps.textSize)
			.attr('font-weight', 'bold')
			.attr('dominant-baseline', 'central')
			.attr('font-family', 'Consolas')
			.attr('class', nodeProps.textFill);

		//arrow
		if (i !== data.length) {
			const prevPointer = d3.select(nodes[i - 1]).selectChild('circle#pointer2');

			drawArrow({
				svg: g,
				startCoords: { x: i !== 0 ? parseInt(prevPointer.attr('cx')) : parseInt(pointerNodeCircle.attr('cx')), y: calculateY(0) },
				endCoords: { x: parseInt(nodeRect.attr('x')), y: calculateY(0) },
				arc: type === 'DLL' ? arrowProps.DLLArc : 0,
			});

			if (type === 'DLL' && prevPointerCircle !== null) {
				const prevNode = d3.select(nodes[i - 1]).selectChild('rect#nodeRect');
				drawArrow({
					svg: g,
					startCoords: { x: parseInt(prevPointerCircle.attr('cx')), y: calculateY(0) },
					endCoords: { x: i !== 0 ? parseInt(prevNode.attr('x')) + parseInt(prevNode.attr('width')) : parseInt(pointerNode.attr('x')) + parseInt(pointerNode.attr('width')), y: calculateY(0) },
					arc: type === 'DLL' ? arrowProps.DLLArc : 0,
				});
			}
		}
	});
};

export default LLviz;
