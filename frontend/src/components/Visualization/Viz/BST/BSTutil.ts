import { BSTNode } from '@/assets/data structures/BinarySearchTree';
import { calculateWidth, drawArrow, nodeContentProps, nodeProps, pointerCircleProps } from '../LL/LLutil';

type DrawNodeProps = {
	svg: d3.Selection<null, unknown, null, undefined>;
	coordinates: { x: number; y: number };
	content: number;
	arrowStartCoordinates?: { x: number; y: number };
};

export type DrawNodeReturn = {
	leftPointerCoordinates: { x: number; y: number };
	rightPointerCoordinates: { x: number; y: number };
};

export const drawNode = ({ svg, coordinates, content, arrowStartCoordinates }: DrawNodeProps): DrawNodeReturn => {
	const contentWidth = calculateWidth(content);

	// main node
	svg.append('rect')
		.attr('id', `nodeRect`)
		.attr('x', coordinates.x)
		.attr('y', coordinates.y)
		.attr('width', contentWidth + nodeProps.width * 1.5)
		.attr('height', nodeProps.height)
		.attr('rx', nodeProps.radius)
		.attr('class', nodeProps.fill);

	// left pointer circle
	const leftPointerCoordinates = { x: coordinates.x + 25, y: coordinates.y + nodeProps.height / 2 };
	// prettier-ignore
	svg.append('circle')
		.attr('id', 'pointer1')
		.attr('cx', leftPointerCoordinates.x)
		.attr('cy', leftPointerCoordinates.y)
		.attr('r', pointerCircleProps.size)
		.attr('class', pointerCircleProps.fill);

	// right pointer circle
	const rightPointerCoordinates = { x: coordinates.x + contentWidth + nodeProps.width * 1.5 - 25, y: coordinates.y + nodeProps.height / 2 };
	// prettier-ignore
	svg.append('circle')
		.attr('id', 'pointer2')
		.attr('cx', rightPointerCoordinates.x)
		.attr('cy', rightPointerCoordinates.y)
		.attr('r', pointerCircleProps.size)
		.attr('class', pointerCircleProps.fill);

	// node content box
	const contentRectCoordinates = { x: coordinates.x + 52, y: coordinates.y + nodeProps.height / 2 - nodeContentProps.height / 2 };
	// prettier-ignore
	svg.append('rect')
		.attr('x', contentRectCoordinates.x)
		.attr('y', contentRectCoordinates.y)
		.attr('width', contentWidth)
		.attr('height', nodeContentProps.height)
		.attr('rx', nodeContentProps.radius)
		.attr('class', nodeContentProps.fill);

	// content text
	svg.append('text')
		.text(content)
		.attr('x', contentRectCoordinates.x + contentWidth / 2)
		.attr('y', coordinates.y + nodeProps.height / 2)
		.attr('text-anchor', 'middle')
		.attr('font-size', nodeProps.textSize)
		.attr('font-weight', 'bold')
		.attr('dominant-baseline', 'central')
		.attr('font-family', 'Consolas')
		.attr('class', nodeProps.textFill);

	if (arrowStartCoordinates) {
		const arrowEndCoordinates = { x: coordinates.x + 52 + contentWidth / 2, y: coordinates.y };
		drawArrow({ svg, startCoords: arrowStartCoordinates, endCoords: arrowEndCoordinates, arc: 0 });
	}

	return { leftPointerCoordinates, rightPointerCoordinates };
};

const offsetY = 120;
const offsetX = 120;

type RecursiveDrawNodeProps = {
	svg: d3.Selection<null, unknown, null, undefined>;
	node: BSTNode | null;
	coordinates: { x: number; y: number };
	arrowStartCoordinates?: { x: number; y: number };
};

export const RecursiveDrawNode = ({ svg, node, coordinates, arrowStartCoordinates }: RecursiveDrawNodeProps) => {
	if (node === null || node === undefined) return;
	const newArrowCoords = drawNode({ svg, coordinates, content: node.value, arrowStartCoordinates });

	RecursiveDrawNode({ svg, node: node.left, coordinates: { x: coordinates.x - offsetX, y: coordinates.y + offsetY }, arrowStartCoordinates: newArrowCoords.leftPointerCoordinates });

	RecursiveDrawNode({ svg, node: node.right, coordinates: { x: coordinates.x + offsetX, y: coordinates.y + offsetY }, arrowStartCoordinates: newArrowCoords.rightPointerCoordinates });
};
