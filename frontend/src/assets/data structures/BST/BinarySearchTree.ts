import { BinarySearchTreeNode } from './BinarySearchTreeNode';

export default class BinarySearchTree<T> {
	root: BinarySearchTreeNode<T>;

	constructor(value: T) {
		this.root = new BinarySearchTreeNode(value);
	}

	insert(value: T): BinarySearchTreeNode<T> {
		return this.root.insert(value);
	}

	contains(value: T): boolean {
		return this.root.contains(value);
	}

	remove(value: T): boolean {
		return this.root.remove(value);
	}

	toString(): string {
		return this.root.toString();
	}

	toArray(): T[] {
		return this.root.traverseInOrder();
	}

	fromArray(array: T[]): BinarySearchTree<T> {
		array.forEach((value) => this.insert(value));
		return this;
	}
}
