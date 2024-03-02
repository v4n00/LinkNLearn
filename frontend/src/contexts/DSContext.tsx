import DoublyLinkedList from '@/assets/data structures/DoublyLinkedList';
import SinglyLinkedList from '@/assets/data structures/SinglyLinkedList';
import { doublyLinkestListReducer, singlyLinkedListReducer } from '@/assets/data structures/reducers';
import { DSAction, DSContextType, DataStructure, DoublyLinkedListActions, SinglyLinkedListActions } from '@/assets/data structures/types';
import { ReactNode, createContext, useReducer } from 'react';

export const DSContext = createContext<DSContextType<DataStructure>>({} as DSContextType<DataStructure>);

const mainReducer = (state: DataStructure, action: DSAction) => {
	if (state instanceof SinglyLinkedList) {
		return singlyLinkedListReducer(state, action as SinglyLinkedListActions);
	} else if (state instanceof DoublyLinkedList) {
		return doublyLinkestListReducer(state, action as DoublyLinkedListActions);
	}
	return state;
};

export const DSProvider = ({ children, initialData }: { children: ReactNode; initialData: DataStructure }) => {
	const [data, dispatch] = useReducer(mainReducer, initialData);

	return <DSContext.Provider value={{ data, dispatch }}>{children}</DSContext.Provider>;
};
