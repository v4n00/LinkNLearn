import SinglyLinkedList, { SinglyLinkedListNode } from './SinglyLinkedList';

export const defaultHashTableSize = 26;

export default class HashTable {
	buckets: SinglyLinkedList<{ key: string; value: number }>[];
	keys: Record<string, number>;

	constructor(hashTableSize: number = defaultHashTableSize) {
		this.buckets = Array(hashTableSize)
			.fill(null)
			.map(() => new SinglyLinkedList());

		this.keys = {};
	}

	hash(key: string): number {
		return (key.toUpperCase().charCodeAt(0) % this.buckets.length) - 1;
	}

	set(key: string, value: number): void {
		try {
			const keyHash = this.hash(key);
			this.keys[key] = keyHash;
			const bucketLinkedList = this.buckets[keyHash];
			const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

			if (!node) {
				bucketLinkedList.append({ key, value });
			} else {
				node.value.value = value;
			}
		} catch (e) {
			//
		}
	}

	delete(key: string): SinglyLinkedListNode<{ key: string; value: number }> | null {
		const keyHash = this.hash(key);
		delete this.keys[key];
		const bucketLinkedList = this.buckets[keyHash];

		const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

		if (node) {
			return bucketLinkedList.delete(node.value);
		}

		throw new Error('Key not found.');
	}

	get(key: string) {
		const bucketLinkedList = this.buckets[this.hash(key)];
		const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

		return node ? node.value.value : undefined;
	}

	has(key: string): boolean {
		return Object.hasOwnProperty.call(this.keys, key);
	}

	getKeys(): string[] {
		return Object.keys(this.keys);
	}

	toArray(): Array<string[]> {
		const matrix = Array(this.buckets.length).fill(null);
		this.buckets.forEach((bucket, i) => {
			let node = bucket.head;
			matrix[i] = [];
			while (node) {
				matrix[i].push(`${node.value.key}: ${node.value.value}`);
				node = node.next;
			}
		});
		return matrix;
	}
}
