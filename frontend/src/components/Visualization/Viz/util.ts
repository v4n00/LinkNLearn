import * as d3 from 'd3';

export const svgProps = { height: 200, width: 9999 };

export const colorStyle = {
	mainPointerFill: 'fill-primary stroke-secondary-foreground stroke-[2]',
	arrowFill: 'stroke-secondary-foreground', // remake
	arrowHeadFill: 'fill-secondary-foreground', // remake
	pointerFill: 'fill-secondary-foreground', // remake
	nodeFill: 'fill-node stroke-secondary-foreground stroke-[2]',
	contentFill: 'fill-node-muted stroke-secondary-foreground stroke-[2]',
	textFill: 'fill-node-foreground',
};

const radius = 20;

// elements

export const arrowProps = { strokeWidth: 20 };

export const nodeProps = { width: 70, height: 60, spacing: 50, radius, fill: colorStyle.nodeFill, textFill: colorStyle.textFill };

export const nodeContentProps = { x: 10, height: nodeProps.height - 20, radius, fill: colorStyle.contentFill };

export const pointerCircleProps = { x: nodeProps.width / 2 + 2, size: nodeContentProps.height - 25, radius, fill: colorStyle.pointerFill };

export const mainPointerCircleProps = { x: 10, size: nodeProps.height, startX: 0, radius, fill: colorStyle.mainPointerFill };

// functions

export const calculateY = (height: number) => {
	return svgProps.height / 2 - height / 2;
};

export const calculateWidth = (content: string | number) => {
	const multiplier = 15;
	const width = typeof content === 'number' ? content.toString().length * multiplier : content.length * multiplier;
	return width > 40 ? width : 40;
};

type arrowType = {
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	startCoords: { x: number; y: number };
	endCoords: { x: number; y: number };
	direction: 'left' | 'right';
};

export const drawArrow = ({ svg, startCoords, endCoords, direction }: arrowType) => {
	const arrowMarkerId = `arrow-${direction}-${Math.random().toString().slice(2)}`;

	const refX = direction === 'left' ? arrowProps.strokeWidth : 0;
	const orient = 'auto-start-reverse';

	svg.append('defs')
		.append('marker')
		.attr('id', arrowMarkerId)
		.attr('viewBox', `0 0 ${arrowProps.strokeWidth} ${arrowProps.strokeWidth}`)
		.attr('refX', refX)
		.attr('refY', arrowProps.strokeWidth / 2)
		.attr('markerWidth', arrowProps.strokeWidth)
		.attr('markerHeight', arrowProps.strokeWidth)
		.attr('orient', orient)
		.append('path')
		.attr(
			'd',
			d3.line()([
				[0, 0],
				[0, arrowProps.strokeWidth],
				[arrowProps.strokeWidth, arrowProps.strokeWidth / 2],
			])
		)
		.attr('fill', 'white');

	const line = d3.line()([
		[startCoords.x, startCoords.y],
		[endCoords.x, endCoords.y],
	]);

	svg.append('path').attr('d', line).attr('stroke', 'white').attr('fill', 'none').attr('marker-end', `url(#${arrowMarkerId})`);
};
