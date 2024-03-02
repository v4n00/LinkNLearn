import DoublyLinkedList from '@/assets/data structures/DoublyLinkedList';
import SinglyLinkedList from '@/assets/data structures/SinglyLinkedList';
import { doublyLinkestListReducer, singlyLinkedListReducer } from '@/assets/data structures/reducers';
import { DSAction, DSContextType, DataStructure, DoublyLinkedListActions, SinglyLinkedListActions } from '@/assets/data structures/types';
import { ReactNode, createContext, useReducer } from 'react';

export const DSContext = createContext<DSContextType<DataStructure>>({} as DSContextType<DataStructure>);

const mainReducer = (state: DataStructure, action: DSAction) => {
	let result;

	if (state.dataStructure instanceof SinglyLinkedList) {
		result = singlyLinkedListReducer(state.dataStructure, action as SinglyLinkedListActions);
	} else if (state.dataStructure instanceof DoublyLinkedList) {
		result = doublyLinkestListReducer(state.dataStructure, action as DoublyLinkedListActions);
	} else {
		throw new Error('Invalid data structure type');
	}

	return { dataStructure: result, version: state.version + 1 };
};

export const DSProvider = ({ children, initialData }: { children: ReactNode; initialData: DataStructure }) => {
	const [data, dispatch] = useReducer(mainReducer, initialData);

	return <DSContext.Provider value={{ data, dispatch }}>{children}</DSContext.Provider>;
};
