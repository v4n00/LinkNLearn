import * as d3 from 'd3';
import { useEffect, useRef } from 'react';

const DLLviz = () => {
	const ref = useRef(null);

	useEffect(() => {
		const boxWidth = 120;
		const boxHeight = 60;
		const boxSpacing = 40;
		const pointerSize = 40;
		const startX = pointerSize + 20;
		const startY = 100;

		d3.select(ref.current).selectAll('*').remove();

		const svg = d3
			.select(ref.current)
			.attr('width', data.length * (boxWidth + boxSpacing) + pointerSize + 60)
			.attr('height', 200);

		svg.append('rect')
			.attr('x', 10)
			.attr('y', startY - pointerSize / 2)
			.attr('width', pointerSize)
			.attr('height', pointerSize)
			.attr('rx', 20)
			.attr('fill', 'blue');

		data.forEach((d, i) => {
			const x = startX + i * (boxWidth + boxSpacing);

			svg.append('line')
				.attr('x1', x - boxSpacing)
				.attr('y1', startY)
				.attr('x2', x)
				.attr('y2', startY)
				.attr('stroke', 'white')
				.attr('stroke-width', 4);

			svg.append('rect')
				.attr('x', x)
				.attr('y', startY - boxHeight / 2)
				.attr('width', boxWidth)
				.attr('height', boxHeight)
				.attr('rx', 30)
				.attr('fill', 'orange');

			svg.append('text')
				.attr('x', x + boxWidth / 2)
				.attr('y', startY + 10)
				.attr('text-anchor', 'middle')
				.attr('fill', 'black')
				.attr('font-size', '20px')
				.text(d);
		});
	}, [data]);

	return <svg ref={ref}></svg>;
};

export default DLLviz;
