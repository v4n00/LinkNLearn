import CSyntax from '@/components/Lecture/CSyntax';

const BSTp3 = (
	<>
		<h1>Insertion in a Binary Search Tree</h1>
		<p>Insertion is a key operation in a Binary Search Tree (BST) that allows the tree to grow by adding new nodes. The goal of insertion is to find the correct spot in the tree for the new node, such that the BST property is preserved: for any given node, all nodes in its left subtree are smaller, and all nodes in its right subtree are larger.</p>

		<h2>Step-by-Step Insertion Process</h2>
		<ol>
			<li>Start from the root of the BST.</li>
			<li>If the BST is empty, the new node becomes the root of the tree.</li>
			<li>Otherwise, compare the value of the new node with the current node's value.</li>
			<li>If the new node's value is less than the current node's, move to the left subtree; if it's greater, move to the right subtree.</li>
			<li>Repeat the comparison process until you reach a null reference where the new node should be attached.</li>
			<li>Attach the new node to the tree at this null reference point.</li>
		</ol>

		<h2>Example: Inserting a Node in C</h2>
		<p>Here’s a simple C function to insert a new node into a BST:</p>
		<CSyntax>
			{`void insert(Node** root, int data) {
    if (*root == NULL) { // If the tree is empty, create a new node as root
        *root = createNode(data);
    } else if (data < (*root)->data) { // Value is less, go to left subtree
        insert(&(*root)->left, data);
    } else { // Value is greater, go to right subtree
        insert(&(*root)->right, data);
    }
}

// Helper function to create a new node
Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;
    return newNode;
}`}
		</CSyntax>
		<p>This function begins at the root and traverses the tree based on the value of the new node. It recursively calls itself, moving left or right as necessary, until it finds an empty spot (a `NULL` pointer) where the new node can be inserted.</p>
		<p>By following these steps, you can ensure that the BST maintains its structural and ordering properties after each insertion, allowing for efficient search, deletion, and traversal operations.</p>
	</>
);

export default BSTp3;
