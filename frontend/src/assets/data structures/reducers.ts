import DoublyLinkedList from './DoublyLinkedList';
import SinglyLinkedList from './SinglyLinkedList';
import { DoublyLinkedListActions, SinglyLinkedListActions } from './types';

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
