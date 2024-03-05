import DoublyLinkedList from './DoublyLinkedList';
import HashTable from './HashTable';
import SinglyLinkedList from './SinglyLinkedList';
import { DoublyLinkedListActions, HashTableActions, SinglyLinkedListActions } from './types';

export const singlyLinkedListReducer = (state: SinglyLinkedList<number>, action: SinglyLinkedListActions) => {
	switch (action.type) {
		case 'INITIALIZE':
			return new SinglyLinkedList<number>().fromArray(action.payload.array);
		case 'ADD':
			state.append(action.payload.value);
			return state;
		case 'INSERT':
			state.insert(action.payload.index, action.payload.value);
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
			return new DoublyLinkedList<number>().fromArray(action.payload.array);
		case 'ADD':
			state.append(action.payload.value);
			return state;
		case 'INSERT':
			state.insert(action.payload.index, action.payload.value);
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
			state = new HashTable();
			action.payload.array.forEach((element) => state.set(element.key, element.value));
			return state;
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
