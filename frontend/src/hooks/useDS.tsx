import { DSContext } from '@/contexts/DSContext';
import { useContext } from 'react';

export default function useDS() {
	return useContext(DSContext);
}
