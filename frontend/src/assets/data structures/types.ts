import DoublyLinkedList from '@/assets/data structures/DoublyLinkedList';
import SinglyLinkedList from '@/assets/data structures/SinglyLinkedList';
import BinarySearchTree from './BinarySearchTree';
import HashTable from './HashTable';

type ActionMap<M extends { [index: string]: unknown }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key;
		  }
		: {
				type: Key;
				payload: M[Key];
		  };
};

export type DSAction = SinglyLinkedListActions | DoublyLinkedListActions | HashTableActions | BinarySearchTreeActions;

export type DataStructure = {
	dataStructure: SinglyLinkedList<number> | DoublyLinkedList<number> | HashTable | BinarySearchTree;
	version: number;
};

export type DSContextType<T extends DataStructure> = {
	data: T;
	dispatch: React.Dispatch<DSAction>;
};

export enum DataStructureTypes {
	SLL = 'SLL',
	DLL = 'DLL',
	BST = 'BST',
	HT = 'HT',
}

export enum DataStructureActionTypes {
	INITIALIZE = 'INITIALIZE',
	ADD = 'ADD',
	INSERT = 'INSERT',
	DELETE = 'DELETE',
}

export type BinarySearchTreeActions = ActionMap<BinarySearchTreePayload>[keyof ActionMap<BinarySearchTreePayload>];

export type HashTableActions = ActionMap<HashTablePayload>[keyof ActionMap<HashTablePayload>];

export type SinglyLinkedListActions = ActionMap<SinglyLinkedListPayload>[keyof ActionMap<SinglyLinkedListPayload>];

export type DoublyLinkedListActions = ActionMap<DoublyLinkedListPayload>[keyof ActionMap<DoublyLinkedListPayload>];

export type SinglyLinkedListPayload = {
	[DataStructureActionTypes.INITIALIZE]: {
		type: DataStructureTypes;
	};
	[DataStructureActionTypes.ADD]: {
		value: number;
	};
	[DataStructureActionTypes.INSERT]: {
		index: number;
		value: number;
	};
	[DataStructureActionTypes.DELETE]: {
		value: number;
	};
};

export type DoublyLinkedListPayload = {
	[DataStructureActionTypes.INITIALIZE]: {
		type: DataStructureTypes;
	};
	[DataStructureActionTypes.ADD]: {
		value: number;
	};
	[DataStructureActionTypes.INSERT]: {
		index: number;
		value: number;
	};
	[DataStructureActionTypes.DELETE]: {
		value: number;
	};
};

export type HashTablePayload = {
	[DataStructureActionTypes.INITIALIZE]: {
		type: DataStructureTypes;
	};
	[DataStructureActionTypes.ADD]: {
		key: string;
		value: number;
	};
	[DataStructureActionTypes.DELETE]: {
		key: string;
	};
};

export type BinarySearchTreePayload = {
	[DataStructureActionTypes.INITIALIZE]: {
		type: DataStructureTypes;
	};
	[DataStructureActionTypes.ADD]: {
		value: number;
	};
	[DataStructureActionTypes.DELETE]: {
		value: number;
	};
};
