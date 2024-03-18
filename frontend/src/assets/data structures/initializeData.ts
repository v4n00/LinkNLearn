import BinarySearchTree from './BST/BinarySearchTree';
import DoublyLinkedList from './DoublyLinkedList';
import HashTable from './HashTable';
import SinglyLinkedList from './SinglyLinkedList';
import { DataStructure, DataStructureTypes } from './types';

export const getRandomArray = () => {
	const length = Math.floor(Math.random() * 3) + 2;
	return Array.from({ length }, () => Math.floor(Math.random() * 100));
};

export const getRandomHTSet = () => {
	const randomPersonNames = ['John', 'Jane', 'Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson', 'Martinez', 'Anderson', 'Taylor', 'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson', 'White', 'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Zach', 'Bryan', 'Carter', 'Roberts', 'Perez', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson', 'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler', 'Simmons', 'Foster', 'Gonzales', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers', 'Ford', 'Hamilton', 'Graham', 'Sullivan', 'Wallace', 'Woods', 'Cole', 'West', 'Jordan', 'Owens', 'Reynolds', 'Fisher', 'Ellis', 'Harrison', 'Gibson', 'Mcdonald', 'Cruz', 'Marshall', 'Ortiz', 'Gomez', 'Murray', 'Freeman', 'Wells', 'Webb', 'Simpson', 'Stevens', 'Tucker', 'Porter', 'Hunter', 'Hicks', 'Crawford', 'Henry', 'Boyd', 'Mason', 'Morales', 'Kennedy', 'Warren', 'Dixon', 'Ramos', 'Reyes', 'Burns', 'Gordon', 'Shaw', 'Holmes', 'Rice', 'Robertson', 'Hunt', 'Black', 'Daniels', 'Palmer', 'Mills', 'Nichols', 'Grant', 'Knight', 'Ferguson', 'Rose', 'Stone', 'Hawkins', 'Dunn', 'Perkins', 'Hudson', 'Spencer', 'Gardner', 'Stephens', 'Payne', 'Pierce'];
	return Array.from({ length: 10 }, () => ({ key: randomPersonNames[Math.floor(Math.random() * randomPersonNames.length)], value: Math.floor(Math.random() * 100) }));
};

export const getNewDS = (type: DataStructureTypes) => {
	let result: SinglyLinkedList<number> | DoublyLinkedList<number> | HashTable | BinarySearchTree<number>;
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
