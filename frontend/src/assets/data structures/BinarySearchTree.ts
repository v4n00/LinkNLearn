export default class BinarySearchTree {
	root: BSTNode;

	constructor(value: number) {
		this.root = new BSTNode(value);
	}

	insert(value: number): BSTNode {
		return this.root.insert(value);
	}

	contains(value: number): boolean {
		return this.root.contains(value);
	}

	remove(value: number): boolean {
		return this.root.remove(value);
	}

	toString(): string {
		return this.root.toString();
	}

	toArray(): number[] {
		return this.root.traverseInOrder();
	}

	fromArray(array: number[]): BinarySearchTree {
		array.forEach((value) => this.insert(value));
		return this;
	}
}

export class BSTNode {
	left: BSTNode | null;
	right: BSTNode | null;
	parent: BSTNode | null;
	value: number;

	constructor(value: number) {
		this.left = null;
		this.right = null;
		this.parent = null;
		this.value = value;
	}

	// BST Node Methods
	remove(value: number): boolean {
		const nodeToRemove = this.find(value);

		if (!nodeToRemove) {
			throw new Error(`Node with value ${value} not found.`);
		}

		const { parent } = nodeToRemove;

		if (!nodeToRemove.left && !nodeToRemove.right) {
			if (parent) {
				parent.removeChild(nodeToRemove);
			} else {
				nodeToRemove.setValue(99999);
			}
		} else if (nodeToRemove.left && nodeToRemove.right) {
			const nextBiggerNode = nodeToRemove.right.findMin();
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
			} else {
				if (childNode) BSTNode.copyNode(childNode, nodeToRemove);
			}
		}

		nodeToRemove.parent = null;

		return true;
	}

	findMin(): BSTNode {
		if (!this.left) {
			return this;
		}

		return this.left.findMin();
	}

	contains(value: number): boolean {
		return !!this.find(value);
	}

	find(value: number): BSTNode | null {
		if (this.value === value) {
			return this;
		}

		if (value < this.value && this.left) {
			return this.left.find(value);
		}

		if (value > this.value && this.right) {
			return this.right.find(value);
		}

		return null;
	}

	insert(value: number): BSTNode {
		if (this.value === value) {
			throw new Error(`Value ${value} already exists in the tree.`);
		}

		if (value < this.value) {
			if (this.left) {
				return this.left.insert(value);
			}

			const newNode = new BSTNode(value);
			this.setLeft(newNode);

			return newNode;
		}

		if (value > this.value) {
			if (this.right) {
				return this.right.insert(value);
			}

			const newNode = new BSTNode(value);
			this.setRight(newNode);

			return newNode;
		}

		return this;
	}

	// Tree Node methods

	get leftHeight(): number {
		if (!this.left) {
			return 0;
		}

		return this.left.height + 1;
	}

	get rightHeight(): number {
		if (!this.right) {
			return 0;
		}

		return this.right.height + 1;
	}

	get height() {
		return Math.max(this.leftHeight, this.rightHeight);
	}

	get balanceFactor(): number {
		return this.leftHeight - this.rightHeight;
	}

	setValue(value: number): BSTNode {
		this.value = value;

		return this;
	}

	setLeft(node: BSTNode | null): BSTNode {
		if (this.left) {
			this.left.parent = null;
		}

		this.left = node;

		if (this.left) {
			this.left.parent = this;
		}

		return this;
	}

	setRight(node: BSTNode | null): BSTNode {
		if (this.right) {
			this.right.parent = null;
		}

		this.right = node;

		if (this.right) {
			this.right.parent = this;
		}

		return this;
	}

	removeChild(nodeToRemove: BSTNode): boolean {
		if (this.left && this.left.value === nodeToRemove.value) {
			this.left = null;
			return true;
		}

		if (this.right && this.right.value === nodeToRemove.value) {
			this.right = null;
			return true;
		}

		return false;
	}

	replaceChild(nodeToReplace: BSTNode | null, replacementNode: BSTNode | null): boolean {
		if (!nodeToReplace || !replacementNode) {
			return false;
		}

		if (this.left && this.left.value === nodeToReplace.value) {
			this.left = replacementNode;
			return true;
		}

		if (this.right && this.right.value === nodeToReplace.value) {
			this.right = replacementNode;
			return true;
		}

		return false;
	}

	static copyNode(sourceNode: BSTNode, targetNode: BSTNode) {
		targetNode.setValue(sourceNode.value);
		targetNode.setLeft(sourceNode.left);
		targetNode.setRight(sourceNode.right);
	}

	traverseInOrder() {
		let traverse: number[] = [];

		if (this.left) {
			traverse = traverse.concat(this.left.traverseInOrder());
		}

		traverse.push(this.value);

		if (this.right) {
			traverse = traverse.concat(this.right.traverseInOrder());
		}

		return traverse;
	}

	toString() {
		return this.traverseInOrder().toString();
	}
}
