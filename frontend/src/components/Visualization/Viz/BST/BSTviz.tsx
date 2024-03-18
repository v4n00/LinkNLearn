import BinarySearchTree, { BSTNode } from '@/assets/data structures/BinarySearchTree';
import useDS from '@/hooks/useDS';
import * as d3 from 'd3';
import { useRef } from 'react';
import { drawNode } from './BSTutil';

const BSTviz = () => {
	const { data } = useDS();
	const ds = data.dataStructure as BinarySearchTree;
	const ref = useRef(null);

	// prettier-ignore
	const svg = d3
		.select(ref.current)
		.attr('x', 0)
		.attr('y', 0)
		.attr('width', 9999)
		.attr('height', 9999);

	d3.select(ref.current).selectAll('*').remove();

	type RecursiveDrawNodeProps = {
		node: BSTNode | null;
		coordinates: { x: number; y: number };
		arrowStartCoordinates?: { x: number; y: number };
	};

	const offsetY = 120;
	const offsetX = 120;

	const RecursiveDrawNode = ({ node, coordinates, arrowStartCoordinates }: RecursiveDrawNodeProps) => {
		if (node === null) return;
		const newArrowCoords = drawNode({ svg, coordinates, content: node.value, arrowStartCoordinates });

		RecursiveDrawNode({ node: node.left, coordinates: { x: coordinates.x - offsetX, y: coordinates.y + offsetY }, arrowStartCoordinates: newArrowCoords.leftPointerCoordinates });

		RecursiveDrawNode({ node: node.right, coordinates: { x: coordinates.x + offsetX, y: coordinates.y + offsetY }, arrowStartCoordinates: newArrowCoords.rightPointerCoordinates });
	};

	RecursiveDrawNode({ node: ds.root, coordinates: { x: window.innerWidth / 4, y: 100 } });

	return <svg ref={ref}></svg>;
};

export default BSTviz;
