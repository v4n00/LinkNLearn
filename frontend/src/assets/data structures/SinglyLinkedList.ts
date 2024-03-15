export class SinglyLinkedListNode<T> {
	value: T;
	next: SinglyLinkedListNode<T> | null;

	constructor(value: T, next: SinglyLinkedListNode<T> | null = null) {
		this.value = value;
		this.next = next;
	}
}

export default class SinglyLinkedList<T> {
	head: SinglyLinkedListNode<T> | null;
	tail: SinglyLinkedListNode<T> | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	prepend(value: T): SinglyLinkedList<T> {
		const newNode = new SinglyLinkedListNode(value, this.head);
		this.head = newNode;

		if (!this.tail) {
			this.tail = newNode;
		}

		return this;
	}

	append(value: T): SinglyLinkedList<T> {
		const newNode = new SinglyLinkedListNode(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		if (this.tail) this.tail.next = newNode;
		this.tail = newNode;

		return this;
	}

	insert(value: T, rawIndex: number): SinglyLinkedList<T> {
		const index = rawIndex < 0 ? 0 : rawIndex;

		if (index === 0) {
			this.prepend(value);
		} else {
			let count = 1;
			let currentNode = this.head;
			const newNode = new SinglyLinkedListNode(value);
			while (currentNode) {
				if (count === index) break;
				currentNode = currentNode.next;
				count += 1;
			}
			if (currentNode) {
				newNode.next = currentNode.next;
				currentNode.next = newNode;
			} else {
				if (this.tail) {
					this.tail.next = newNode;
					this.tail = newNode;
				} else {
					this.head = newNode;
					this.tail = newNode;
				}
			}
		}
		return this;
	}

	delete(value: T): SinglyLinkedListNode<T> {
		if (!this.head) {
			throw new Error('List is empty.');
		}

		let deletedNode = null;

		while (this.head && this.head.value === value) {
			deletedNode = this.head;
			this.head = this.head.next;
		}

		let currentNode = this.head;

		if (currentNode !== null) {
			while (currentNode.next) {
				if (currentNode.next.value === value) {
					deletedNode = currentNode.next;
					currentNode.next = currentNode.next.next;
				} else {
					currentNode = currentNode.next;
				}
			}
		}

		if (this.tail && this.tail.value === value) {
			this.tail = currentNode;
		}

		if (deletedNode === null) {
			throw new Error(`Node with value ${value} not found.`);
		}

		return deletedNode;
	}

	find({ value = undefined, callback = undefined }: { value?: T; callback?: (value: T) => boolean }): SinglyLinkedListNode<T> | null {
		if (!this.head) {
			return null;
		}

		let currentNode: SinglyLinkedListNode<T> | null = this.head;

		while (currentNode) {
			if (callback && callback(currentNode.value)) {
				return currentNode;
			}

			if (value !== undefined && currentNode.value === value) {
				return currentNode;
			}

			currentNode = currentNode.next;
		}

		return null;
	}

	fromArray(values: T[]): SinglyLinkedList<T> {
		values.forEach((value) => this.append(value));
		return this;
	}

	toArray(): T[] {
		const nodes: T[] = [];

		let currentNode = this.head;
		while (currentNode) {
			nodes.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return nodes;
	}
}
