import { TreeNode } from './TreeNode';

export class BinarySearchTreeNode<T> extends TreeNode<T> {
	constructor(value: T) {
		super(value);
	}

	remove(value: T): boolean {
		const nodeToRemove = this.find(value);

		if (!nodeToRemove) {
			throw new Error(`Node with value ${value} not found.`);
		}

		const { parent } = nodeToRemove;

		if (!nodeToRemove.left && !nodeToRemove.right) {
			if (parent) {
				parent.removeChild(nodeToRemove);
			}
		} else if (nodeToRemove.left && nodeToRemove.right) {
			const nextBiggerNode = (nodeToRemove.right as BinarySearchTreeNode<T>).findMin();
			if (!(nextBiggerNode.value === nodeToRemove.right.value)) {
				this.remove(nextBiggerNode.value);
				nodeToRemove.setValue(nextBiggerNode.value);
			} else {
				nodeToRemove.setValue(nodeToRemove.right.value);
				nodeToRemove.setRight(nodeToRemove.right.right);
			}
		} else {
			const childNode = nodeToRemove.left || nodeToRemove.right;

			if (parent) {
				parent.replaceChild(nodeToRemove, childNode);
			}
		}

		nodeToRemove.parent = null;

		return true;
	}

	findMin(): BinarySearchTreeNode<T> {
		if (!this.left) {
			return this;
		}

		return (this.left as BinarySearchTreeNode<T>).findMin();
	}

	contains(value: T): boolean {
		return !!this.find(value);
	}

	find(value: T): BinarySearchTreeNode<T> | null {
		if (this.value === value) {
			return this;
		}

		if (value < this.value && this.left) {
			return (this.left as BinarySearchTreeNode<T>).find(value);
		}

		if (value > this.value && this.right) {
			return (this.right as BinarySearchTreeNode<T>).find(value);
		}

		return null;
	}

	insert(value: T): BinarySearchTreeNode<T> {
		if (this.value === value) {
			throw new Error(`Value ${value} already exists in the tree.`);
		}

		if (value < this.value) {
			if (this.left) {
				return (this.left as BinarySearchTreeNode<T>).insert(value);
			}

			const newNode = new BinarySearchTreeNode(value);
			this.setLeft(newNode);

			return newNode;
		}

		if (value > this.value) {
			if (this.right) {
				return (this.right as BinarySearchTreeNode<T>).insert(value);
			}

			const newNode = new BinarySearchTreeNode(value);
			this.setRight(newNode);

			return newNode;
		}

		return this;
	}
}
