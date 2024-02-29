import { MouseEvent, ReactNode, forwardRef, useCallback, useImperativeHandle, useState } from 'react';

export interface WhiteboardHandles {
	resetView: () => void;
	zoomIn: () => void;
	zoomOut: () => void;
}

const Whiteboard = forwardRef(({ children }: { children: ReactNode }, ref) => {
	const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
	const [offset, setOffset] = useState({ x: 100, y: (window.innerHeight - 80) / 2 });
	const [scale, setScale] = useState(1);
	const [isDragging, setIsDragging] = useState(false);

	const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
		setIsDragging(true);
		setStartDragPosition({
			x: e.clientX - offset.x,
			y: e.clientY - offset.y,
		});
	};

	const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
		if (!isDragging) return;
		const newOffset = {
			x: e.clientX - startDragPosition.x,
			y: e.clientY - startDragPosition.y,
		};
		setOffset(newOffset);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleWheel = useCallback(
		(e: { preventDefault: () => void; deltaY: number }) => {
			const scaleAdjustment = (e.deltaY * -0.01) / 2;
			const newScale = scale + scaleAdjustment;
			setScale(Math.min(Math.max(0.5, newScale), 1.5));
		},
		[scale]
	);

	useImperativeHandle(ref, () => ({
		resetView() {
			setOffset({ x: 100, y: (window.innerHeight - 80) / 2 });
			setScale(1);
		},
		zoomIn() {
			handleWheel({ preventDefault: () => {}, deltaY: -100 });
		},
		zoomOut() {
			handleWheel({ preventDefault: () => {}, deltaY: 100 });
		},
	}));

	return (
		<div onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onWheel={handleWheel} className={`w-screen h-screen overflow-hidden relative select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
			<div
				className="absolute"
				style={{
					transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
					transformOrigin: '0 0',
				}}
			>
				{children}
			</div>
		</div>
	);
});

export default Whiteboard;
