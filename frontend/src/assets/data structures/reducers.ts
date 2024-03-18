import BinarySearchTree from './BST/BinarySearchTree';
import DoublyLinkedList from './DoublyLinkedList';
import HashTable from './HashTable';
import SinglyLinkedList from './SinglyLinkedList';
import { getNewDS } from './initializeData';
import { BinarySearchTreeActions, DataStructureTypes, DoublyLinkedListActions, HashTableActions, SinglyLinkedListActions } from './types';

export const singlyLinkedListReducer = (state: SinglyLinkedList<number>, action: SinglyLinkedListActions) => {
	switch (action.type) {
		case 'INITIALIZE':
			return getNewDS(DataStructureTypes.SLL);
		case 'ADD':
			state.append(action.payload.value);
			return state;
		case 'INSERT':
			state.insert(action.payload.value, action.payload.index);
			return state;
		case 'DELETE':
			state.delete(action.payload.value);
			return state;
		default:
			return state;
	}
};

export const doublyLinkestListReducer = (state: DoublyLinkedList<number>, action: DoublyLinkedListActions) => {
	switch (action.type) {
		case 'INITIALIZE':
			return getNewDS(DataStructureTypes.DLL);
		case 'ADD':
			state.append(action.payload.value);
			return state;
		case 'INSERT':
			state.insert(action.payload.value, action.payload.index);
			return state;
		case 'DELETE':
			state.delete(action.payload.value);
			return state;
		default:
			return state;
	}
};

export const hashTableReducer = (state: HashTable, action: HashTableActions) => {
	switch (action.type) {
		case 'INITIALIZE':
			return getNewDS(DataStructureTypes.HT);
		case 'ADD':
			state.set(action.payload.key, action.payload.value);
			return state;
		case 'DELETE':
			state.delete(action.payload.key);
			return state;
		default:
			return state;
	}
};

export const bstReducer = (state: BinarySearchTree<number>, action: BinarySearchTreeActions) => {
	switch (action.type) {
		case 'INITIALIZE':
			return getNewDS(DataStructureTypes.BST);
		case 'ADD':
			state.insert(action.payload.value);
			return state;
		case 'DELETE':
			state.remove(action.payload.value);
			return state;
		default:
			return state;
	}
};
