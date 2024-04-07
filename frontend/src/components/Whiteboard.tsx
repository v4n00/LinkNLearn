import { DataStructureTypes } from '@/assets/data structures/types';
import { MouseEvent, ReactNode, forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';

export interface WhiteboardHandles {
	resetView: () => void;
	zoomIn: () => void;
	zoomOut: () => void;
}

const Whiteboard = forwardRef(({ children, type }: { children: ReactNode; type: DataStructureTypes }, ref) => {
	const offsetY = type === DataStructureTypes.SLL || type === DataStructureTypes.DLL ? (window.innerHeight - 80) / 2 : 100;
	const offsetX = type === DataStructureTypes.BST ? -500 : 100;
	useEffect(() => {
		setOffset({ x: offsetX, y: offsetY });
	}, [offsetX, offsetY, type]);
	const [startDragPosition, setStartDragPosition] = useState({ x: 0, y: 0 });
	const [offset, setOffset] = useState({ x: offsetX, y: offsetY });
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

	const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
		setIsDragging(true);
		const touch = e.touches[0];
		setStartDragPosition({
			x: touch.clientX - offset.x,
			y: touch.clientY - offset.y,
		});
	};

	const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
		if (!isDragging) return;
		const touch = e.touches[0];
		const newOffset = {
			x: touch.clientX - startDragPosition.x,
			y: touch.clientY - startDragPosition.y,
		};
		setOffset(newOffset);
	};

	const handleTouchEnd = () => {
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
		<div onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd} onWheel={handleWheel} className={`w-full h-full overflow-hidden relative select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
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
