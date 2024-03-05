import DoublyLinkedList from './DoublyLinkedList';
import HashTable from './HashTable';
import SinglyLinkedList from './SinglyLinkedList';
import { DataStructure, DataStructureTypes } from './types';

const getRandomArray = () => {
	const length = Math.floor(Math.random() * 3) + 5;
	return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

const getRandomHTSet = () => {
	const randomPersonNames = ['John', 'Jane', 'Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee', 'Gonzalez', 'Harris'];
	return Array.from({ length: 5 }, () => ({ key: randomPersonNames[Math.floor(Math.random() * randomPersonNames.length)], value: Math.floor(Math.random() * 100) }));
};

const initializeData = (type: DataStructureTypes): DataStructure => {
	let result: SinglyLinkedList<number> | DoublyLinkedList<number> | HashTable;
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
		default:
			throw new Error('Invalid data structure type');
	}
	return { dataStructure: result, version: 0 } as DataStructure;
};

export default initializeData;
