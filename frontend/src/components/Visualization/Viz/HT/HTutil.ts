import { defaultHashTableSize } from '@/assets/data structures/HashTable';
import { mainPointerCircleProps, radius, svgProps } from '../LL/LLutil';

export const colorStyleHT = {
	boxFill: 'fill-node stroke-secondary-foreground',
	cellFill: 'fill-node-muted stroke-secondary-foreground stroke-[2]',
	lineFill: 'fill-secondary-foreground',
	textFill: 'fill-node-foreground',
};

export const svgPropsHT = { x: -((svgProps.height * defaultHashTableSize) / 2), width: svgProps.width, height: (svgProps.height + 10) * defaultHashTableSize + 30 };

export const bigBoxProps = { x: 10, y: 10, width: mainPointerCircleProps.size * 3.1, height: svgPropsHT.height - 20, fill: colorStyleHT.boxFill, strokeWidth: 2, radius };

export const cellProps = { height: mainPointerCircleProps.size, width: mainPointerCircleProps.size + 37, radius, fill: colorStyleHT.cellFill };
