import BinarySearchTree from '@/assets/data structures/BST/BinarySearchTree';
import useDS from '@/hooks/useDS';
import * as d3 from 'd3';
import { useRef } from 'react';
import { RecursiveDrawNode } from './BSTutil';

const BSTviz = () => {
	const { data } = useDS();
	const ds = data.dataStructure as BinarySearchTree<number>;
	const ref = useRef(null);

	d3.select(ref.current).selectAll('*').remove();

	// prettier-ignore
	const svg = d3
		.select(ref.current)
		.attr('x', 0)
		.attr('y', 0)
		.attr('width', 9999)
		.attr('height', 9999);

	RecursiveDrawNode({ svg, node: ds.root, coordinates: { x: 700, y: 10 }, level: 1 });

	return <svg ref={ref}></svg>;
};

export default BSTviz;
