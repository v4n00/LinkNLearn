import CSyntax from '@/components/Lecture/CSyntax';

const BSTp2 = (
	<>
		<h1>Operations in a Binary Search Tree</h1>
		<p>Binary Search Trees (BSTs) support several fundamental operations that enable efficient data management and retrieval. Understanding these operations is crucial for leveraging the full potential of BSTs in applications. In this section, we'll provide an overview of the primary operations: Insertion, Deletion, Search, and Traversal.</p>

		<h2>Insertion</h2>
		<p>Inserting a new node into a BST involves placing the node so that the BST property is maintained. The process starts at the root and traverses the tree to find the correct location for the new node.</p>
		<CSyntax>
			{`void insert(Node** root, int data) {
    if (*root == NULL) {
        *root = createNode(data);
    } else if (data < (*root)->data) {
        insert(&(*root)->left, data);
    } else {
        insert(&(*root)->right, data);
    }
}`}
		</CSyntax>

		<h2>Deletion</h2>
		<p>Deleting a node from a BST is more complex and involves three possible scenarios: deleting a leaf node, a node with one child, and a node with two children. Each scenario requires a different approach to maintain the BST property.</p>

		<h2>Search</h2>
		<p>Searching for a value in a BST begins at the root and recursively or iteratively compares the target with the current node's value to decide the direction of the search (left or right).</p>
		<CSyntax>
			{`Node* search(Node* root, int data) {
    if (root == NULL || root->data == data)
        return root;
    if (data < root->data)
        return search(root->left, data);
    else
        return search(root->right, data);
}`}
		</CSyntax>

		<h2>Traversal</h2>
		<p>Traversing a BST means visiting all the nodes in a specific order. There are several ways to traverse a BST, including in-order, pre-order, post-order, and level-order traversal, each serving different purposes.</p>

		<p>In the coming sections, we'll dive deeper into each of these operations, exploring their algorithms and implementations in C. Through detailed examples and explanations, you'll gain a comprehensive understanding of how BST operations work and how to implement them effectively.</p>
	</>
);

export default BSTp2;
