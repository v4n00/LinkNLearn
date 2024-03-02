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

	delete(value: T): DoublyLinkedListNode<T> | null {
		if (!this.head) {
			return null;
		}

		let deletedNode = null;
		let currentNode = this.head;

		while (currentNode) {
			if (currentNode.value === value) {
				deletedNode = currentNode;

				if (deletedNode === this.head) {
					this.head = deletedNode.next;

					if (this.head) {
						this.head.previous = null;
					}

					if (deletedNode === this.tail) {
						this.tail = null;
					}
				} else if (deletedNode === this.tail) {
					this.tail = deletedNode.previous;
					if (this.tail) this.tail.next = null;
				} else {
					const previousNode = deletedNode.previous;
					const nextNode = deletedNode.next;

					if (previousNode) previousNode.next = nextNode;
					if (nextNode) nextNode.previous = previousNode;
				}
			}

			if (currentNode.next) currentNode = currentNode.next;
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
