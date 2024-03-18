import * as d3 from 'd3';

export const svgProps = { height: 64, width: 9999 };

export const colorStyle = {
	mainPointerFill: 'fill-primary stroke-secondary-foreground stroke-[2]',
	arrowFill: 'stroke-secondary-foreground',
	arrowHeadFill: 'fill-secondary-foreground',
	pointerFill: 'fill-secondary-foreground',
	nodeFill: 'fill-node stroke-secondary-foreground stroke-[2]',
	contentFill: 'fill-node-muted stroke-secondary-foreground stroke-[2]',
	textFill: 'fill-node-foreground',
};

export const radius = 20;

// elements

export const arrowProps = { strokeWidth: 6, arrowSize: 20, fill: colorStyle.arrowFill, arrowHeadFill: colorStyle.arrowHeadFill, DLLArc: 35 };

export const nodeProps = { width: 70, height: svgProps.height - 4, spacing: 50, radius, fill: colorStyle.nodeFill, textFill: colorStyle.textFill, textSize: 20 };

export const nodeContentProps = { x: 10, height: nodeProps.height - 20, radius, fill: colorStyle.contentFill };

export const pointerCircleProps = { x: nodeProps.width / 2 + 2, size: nodeContentProps.height - 25, radius, fill: colorStyle.pointerFill };

export const mainPointerCircleProps = { x: 10, size: nodeProps.height, startX: 0, radius, fill: colorStyle.mainPointerFill };

// functions

export const calculateY = (height: number) => {
	return svgProps.height / 2 - height / 2;
};

export const calculateWidth = (content: string | number | unknown) => {
	const multiplier = 15;
	const width = typeof content === 'number' ? content.toString().length * multiplier : typeof content === 'string' ? content.length * multiplier : 1;
	return width > 40 ? width : 40;
};

export type ArrowType = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	svg: d3.Selection<any, unknown, null, undefined>;
	startCoords: { x: number; y: number };
	endCoords: { x: number; y: number };
	arc: number;
};

export function drawArrow({ svg, startCoords, endCoords, arc }: ArrowType): void {
	const arrowWidth = arrowProps.arrowSize / 2;

	const midX = (startCoords.x + endCoords.x) / 2;
	const midY = (startCoords.y + endCoords.y) / 2;
	const controlX = midX + (arc * (endCoords.y - startCoords.y)) / 100;
	const controlY = midY - (arc * (endCoords.x - startCoords.x)) / 100;

	const tangentX = 2 * (endCoords.x - controlX);
	const tangentY = 2 * (endCoords.y - controlY);
	const angle = Math.atan2(tangentY, tangentX);

	const adjustLength = arrowProps.arrowSize - 2;
	const pathEndX = endCoords.x - Math.cos(angle) * adjustLength;
	const pathEndY = endCoords.y - Math.sin(angle) * adjustLength;

	const pathData = `M${startCoords.x},${startCoords.y} Q${controlX},${controlY} ${pathEndX},${pathEndY}`;

	// arrow line
	// prettier-ignore
	svg.append('path')
		.style('fill', 'none')
		.style('stroke-width', arrowProps.strokeWidth)
		.attr('class', colorStyle.arrowFill)
		.attr('d', pathData);

	const arrowPath = `M0,0 L${-arrowProps.arrowSize},${arrowWidth} L${-arrowProps.arrowSize},${-arrowWidth}Z`;
	const arrowAngle = (angle * 180) / Math.PI;

	// arrow head
	// prettier-ignore
	svg.append('path')
		.attr('d', arrowPath)
		.attr('transform', `translate(${endCoords.x},${endCoords.y}) rotate(${arrowAngle})`)
		.attr('class', colorStyle.arrowHeadFill);
}
