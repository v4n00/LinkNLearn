export class BinarySearchTreeNode<T> {
	left: BinarySearchTreeNode<T> | null;
	right: BinarySearchTreeNode<T> | null;
	parent: BinarySearchTreeNode<T> | null;
	value: T;

	constructor(value: T) {
		this.left = null;
		this.right = null;
		this.parent = null;
		this.value = value;
	}

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

	get height(): number {
		return Math.max(this.leftHeight, this.rightHeight);
	}

	get balanceFactor(): number {
		return this.leftHeight - this.rightHeight;
	}

	insert(value: T): BinarySearchTreeNode<T> {
		if (value < this.value) {
			if (this.left) {
				return this.left.insert(value);
			}

			const newNode = new BinarySearchTreeNode(value);
			this.setLeft(newNode);

			return newNode;
		}

		if (value > this.value) {
			if (this.right) {
				return this.right.insert(value);
			}

			const newNode = new BinarySearchTreeNode(value);
			this.setRight(newNode);

			return newNode;
		}

		return this;
	}

	contains(value: T): boolean {
		return !!this.find(value);
	}

	find(value: T): BinarySearchTreeNode<T> | null {
		if (this.nodeValueComparator.equal(this.value, value)) {
			return this;
		}

		if (this.nodeValueComparator.lessThan(value, this.value) && this.left) {
			// Check left nodes.
			return this.left.find(value);
		}

		if (this.nodeValueComparator.greaterThan(value, this.value) && this.right) {
			// Check right nodes.
			return this.right.find(value);
		}

		return null;
	}

	setValue(value: T) {
		this.value = value;
		return this;
	}

	setLeft(node: BinarySearchTreeNode<T>) {
		if (this.left) {
			this.left.parent = null;
		}

		this.left = node;

		if (this.left) {
			this.left.parent = this;
		}

		return this;
	}

	setRight(node: BinarySearchTreeNode<T>) {
		if (this.right) {
			this.right.parent = null;
		}

		this.right = node;

		if (node) {
			this.right.parent = this;
		}

		return this;
	}

	removeChild(nodeToRemove: BinarySearchTreeNode<T>) {
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

	toArray() {
		let traverse: Array<T | null> = [];

		if (this.left) {
			traverse = traverse.concat(this.left.toArray());
		}

		traverse.push(this.value);

		if (this.right) {
			traverse = traverse.concat(this.right.toArray());
		}

		return traverse;
	}
}
