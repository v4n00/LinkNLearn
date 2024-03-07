import BinarySearchTree from './BinarySearchTree';
import DoublyLinkedList from './DoublyLinkedList';
import HashTable from './HashTable';
import SinglyLinkedList from './SinglyLinkedList';
import { DataStructure, DataStructureTypes } from './types';

export const getRandomArray = () => {
	const length = Math.floor(Math.random() * 3) + 2;
	return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

export const getRandomHTSet = () => {
	const randomPersonNames = ['John', 'Jane', 'Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee', 'Gonzalez', 'Harris'];
	return Array.from({ length: 5 }, () => ({ key: randomPersonNames[Math.floor(Math.random() * randomPersonNames.length)], value: Math.floor(Math.random() * 100) }));
};

export const getNewDS = (type: DataStructureTypes) => {
	let result: SinglyLinkedList<number> | DoublyLinkedList<number> | HashTable | BinarySearchTree;
	switch (type) {
		case DataStructureTypes.SLL:
			result = new SinglyLinkedList<number>().fromArray(getRandomArray());
			break;
		case DataStructureTypes.DLL:
			result = new DoublyLinkedList<number>().fromArray(getRandomArray());
			break;
		case DataStructureTypes.HT:
			result = new HashTable();
			getRandomHTSet().forEach((entry) => (result as HashTable).set(entry.key, entry.value));
			break;
		case DataStructureTypes.BST:
			result = new BinarySearchTree(Math.floor(Math.random() * 100)).fromArray(getRandomArray());
			break;
		default:
			throw new Error('Invalid data structure type');
	}
	return result;
};

const initializeData = (type: DataStructureTypes): DataStructure => {
	return { dataStructure: getNewDS(type), version: 0 } as DataStructure;
};

export default initializeData;
