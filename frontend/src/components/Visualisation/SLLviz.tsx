import * as d3 from 'd3';

const SLLviz = () => {
	console.log('SLLviz');
	const svg = d3.select('#sll-viz').append('svg').attr('width', 500).attr('height', 500);

	const node = svg
		.selectAll('g')
		.data([1, 2, 3, 4, 5])
		.enter()
		.append('g')
		.attr('transform', (d, i) => `translate(0, ${i * 100})`);

	node.append('circle').attr('cx', 50).attr('cy', 50).attr('r', 20).attr('fill', 'blue');

	node.append('text')
		.attr('x', 50)
		.attr('y', 50)
		.attr('text-anchor', 'middle')
		.attr('alignment-baseline', 'middle')
		.attr('fill', 'white')
		.text((d) => d);

	return <div id="sll-viz" />;
};

export default SLLviz;
