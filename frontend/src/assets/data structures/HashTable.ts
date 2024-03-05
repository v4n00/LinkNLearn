import SinglyLinkedList, { SinglyLinkedListNode } from './SinglyLinkedList';

const defaultHashTableSize = 32;

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
		const hash = Array.from(key).reduce((hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0), 0);
		return hash % this.buckets.length;
	}

	set(key: string, value: number): void {
		const keyHash = this.hash(key);
		this.keys[key] = keyHash;
		const bucketLinkedList = this.buckets[keyHash];
		const node = bucketLinkedList.find({ callback: (nodeValue) => nodeValue.key === key });

		if (!node) {
			bucketLinkedList.append({ key, value });
		} else {
			node.value.value = value;
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

		return null;
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

	getValues() {
		return this.buckets.reduce((values: Array<number>, bucket) => {
			const bucketValues = bucket.toArray().map((linkedListNode) => linkedListNode.value);
			return values.concat(bucketValues);
		}, []);
	}
}
