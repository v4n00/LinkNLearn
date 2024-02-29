import { WhiteboardContext } from '@/contexts/WhiteboardContext';
import { useContext } from 'react';

export default function useWhiteboard() {
	return useContext(WhiteboardContext);
}
