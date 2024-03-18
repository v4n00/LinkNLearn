export class DoublyLinkedListNode<T> {
	value: T;
	next: DoublyLinkedListNode<T> | null;
	previous: DoublyLinkedListNode<T> | null;

	constructor(value: T, next: DoublyLinkedListNode<T> | null = null, previous: DoublyLinkedListNode<T> | null = null) {
		this.value = value;
		this.next = next;
		this.previous = previous;
	}
}

export default class DoublyLinkedList<T> {
	head: DoublyLinkedListNode<T> | null;
	tail: DoublyLinkedListNode<T> | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	prepend(value: T): DoublyLinkedList<T> {
		const newNode = new DoublyLinkedListNode(value, this.head);

		if (this.head) {
			this.head.previous = newNode;
		}
		this.head = newNode;

		if (!this.tail) {
			this.tail = newNode;
		}

		return this;
	}

	append(value: T): DoublyLinkedList<T> {
		const newNode = new DoublyLinkedListNode(value);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;

			return this;
		}

		if (this.tail) this.tail.next = newNode;

		newNode.previous = this.tail;

		this.tail = newNode;

		return this;
	}

	insert(value: T, rawIndex: number): DoublyLinkedList<T> {
		const index = rawIndex < 0 ? 0 : rawIndex;

		if (index === 0) {
			this.prepend(value);
		} else {
			let count = 1;
			let currentNode = this.head;
			const newNode = new DoublyLinkedListNode(value);

			while (currentNode && count < index) {
				currentNode = currentNode.next;
				count++;
			}

			if (currentNode) {
				newNode.next = currentNode.next;
				newNode.previous = currentNode;
				if (currentNode.next) {
					currentNode.next.previous = newNode;
				} else {
					this.tail = newNode;
				}
				currentNode.next = newNode;
			} else {
				if (this.tail) {
					this.tail.next = newNode;
					newNode.previous = this.tail;
					this.tail = newNode;
				} else {
					this.head = newNode;
					this.tail = newNode;
				}
			}
		}

		return this;
	}

	delete(value: T): DoublyLinkedListNode<T> {
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

	toArray(): T[] {
		const nodes = [];

		let currentNode = this.head;
		while (currentNode) {
			nodes.push(currentNode.value);
			currentNode = currentNode.next;
		}

		return nodes;
	}

	fromArray(values: T[]) {
		values.forEach((value) => this.append(value));

		return this;
	}
}
