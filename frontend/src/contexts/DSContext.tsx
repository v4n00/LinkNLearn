import BinarySearchTree from '@/assets/data structures/BST/BinarySearchTree';
import DoublyLinkedList from '@/assets/data structures/DoublyLinkedList';
import HashTable from '@/assets/data structures/HashTable';
import SinglyLinkedList from '@/assets/data structures/SinglyLinkedList';
import { bstReducer, doublyLinkestListReducer, hashTableReducer, singlyLinkedListReducer } from '@/assets/data structures/reducers';
import { BinarySearchTreeActions, DSAction, DSContextType, DataStructure, DoublyLinkedListActions, HashTableActions, SinglyLinkedListActions } from '@/assets/data structures/types';
import { ReactNode, createContext, useReducer } from 'react';

export const DSContext = createContext<DSContextType<DataStructure>>({} as DSContextType<DataStructure>);

const mainReducer = (state: DataStructure, action: DSAction) => {
	try {
		let result;

		if (action.type === 'INITIALIZE') {
			if (action.payload.type === 'SLL') {
				result = singlyLinkedListReducer({} as SinglyLinkedList<number>, action as SinglyLinkedListActions);
			} else if (action.payload.type === 'DLL') {
				result = doublyLinkestListReducer({} as DoublyLinkedList<number>, action as DoublyLinkedListActions);
			} else if (action.payload.type === 'HT') {
				result = hashTableReducer({} as HashTable, action as HashTableActions);
			} else if (action.payload.type === 'BST') {
				result = bstReducer({} as BinarySearchTree<number>, action as BinarySearchTreeActions);
			} else {
				throw new Error('Invalid data structure type');
			}
			return { dataStructure: result, version: state.version + 1, error: '' };
		}

		if (state.dataStructure instanceof SinglyLinkedList) {
			result = singlyLinkedListReducer(state.dataStructure, action as SinglyLinkedListActions);
		} else if (state.dataStructure instanceof DoublyLinkedList) {
			result = doublyLinkestListReducer(state.dataStructure, action as DoublyLinkedListActions);
		} else if (state.dataStructure instanceof HashTable) {
			result = hashTableReducer(state.dataStructure, action as HashTableActions);
		} else if (state.dataStructure instanceof BinarySearchTree) {
			result = bstReducer(state.dataStructure, action as BinarySearchTreeActions);
		} else {
			throw new Error('Invalid data structure type');
		}

		return { dataStructure: result, version: state.version + 1, error: '' };
	} catch (e) {
		if (e instanceof Error) {
			return { dataStructure: state.dataStructure, version: state.version, error: e.message };
		}
	}
	return { dataStructure: state.dataStructure, version: state.version, error: '' };
};

export const DSProvider = ({ children, initialData }: { children: ReactNode; initialData: DataStructure }) => {
	const [data, dispatch] = useReducer(mainReducer, initialData);

	return <DSContext.Provider value={{ data, dispatch }}>{children}</DSContext.Provider>;
};
