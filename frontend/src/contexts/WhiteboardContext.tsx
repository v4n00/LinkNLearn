import { ReactNode, RefObject, createContext } from 'react';

export interface WhiteboardHandles {
	resetView: () => void;
	zoomIn: () => void;
	zoomOut: () => void;
}

export const WhiteboardContext = createContext<WhiteboardHandles | null>({} as WhiteboardHandles);

export const WhiteboardProvider = ({ innerRef, children }: { innerRef: RefObject<WhiteboardHandles>; children: ReactNode }) => {
	const values = {
		resetView: () => {
			innerRef.current?.resetView();
		},
		zoomIn: () => {
			innerRef.current?.zoomIn();
		},
		zoomOut: () => {
			innerRef.current?.zoomOut();
		},
	};

	return <WhiteboardContext.Provider value={values}>{children}</WhiteboardContext.Provider>;
};
