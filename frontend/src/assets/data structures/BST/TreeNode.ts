export class TreeNode<T> {
	left: TreeNode<T> | null;
	right: TreeNode<T> | null;
	parent: TreeNode<T> | null;
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

	get height() {
		return Math.max(this.leftHeight, this.rightHeight);
	}

	get balanceFactor(): number {
		return this.leftHeight - this.rightHeight;
	}

	setValue(value: T): TreeNode<T> {
		this.value = value;

		return this;
	}

	setLeft(node: TreeNode<T> | null): TreeNode<T> {
		if (this.left) {
			this.left.parent = null;
		}

		this.left = node;

		if (this.left) {
			this.left.parent = this;
		}

		return this;
	}

	setRight(node: TreeNode<T> | null): TreeNode<T> {
		if (this.right) {
			this.right.parent = null;
		}

		this.right = node;

		if (this.right) {
			this.right.parent = this;
		}

		return this;
	}

	removeChild(nodeToRemove: TreeNode<T>): boolean {
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

	replaceChild(nodeToReplace: TreeNode<T> | null, replacementNode: TreeNode<T> | null): boolean {
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

	traverseInOrder() {
		let traverse: T[] = [];

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
