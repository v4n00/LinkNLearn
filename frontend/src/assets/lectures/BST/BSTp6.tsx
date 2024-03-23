import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const BSTp6 = (
	<>
		<h1>Traversal Methods in a Binary Search Tree</h1>
		<p>Traversing a Binary Search Tree (BST) is a fundamental operation that involves visiting each node in the tree in a specific order. Different traversal methods are suited for various tasks, such as printing all elements in sorted order, making a deep copy of the tree, or computing the height of the tree. Here, we will discuss the four primary traversal methods: In-order, Pre-order, Post-order, and Level-order.</p>

		<h2>In-order Traversal</h2>
		<p>In-order traversal visits the nodes of a BST in ascending order, which can be particularly useful for printing all elements in the tree in sorted order. The process involves visiting the left subtree, then the current node, and finally the right subtree.</p>
		<CSyntax>
			{`void inorder(Node* root) {
  	if (root != NULL) {
  		inorder(root->left);
  		printf("%d ", root->data);
  		inorder(root->right);
  	}
}`}
		</CSyntax>

		<h2>Pre-order Traversal</h2>
		<p>Pre-order traversal visits the current node before its child nodes. This method is useful for creating a copy of the tree or expressing the tree in a way that can be reconstructed later.</p>
		<CSyntax>
			{`
void preorder(Node* root) {
  	if (root != NULL) {
  		printf("%d ", root->data);
  		preorder(root->left);
  		preorder(root->right);
  	}
}
      `}
		</CSyntax>

		<h2>Post-order Traversal</h2>
		<p>Post-order traversal visits the current node after its child nodes. It is useful for deleting or freeing nodes and space of the tree in a safe manner.</p>
		<CSyntax>
			{`void postorder(Node* root) {
  	if (root != NULL) {
  	  	postorder(root->left);
  	  	postorder(root->right);
  	  	printf("%d ", root->data);
  	}
}`}
		</CSyntax>

		<h2>Level-order Traversal</h2>
		<p>Level-order traversal visits the nodes level by level from top to bottom. This method is useful for printing the tree by level or solving problems that require visiting nodes in a breadth-first manner.</p>
		<CSyntax>
			{`void levelOrder(Node* root) {
  	if (root == NULL) return;
  	Queue queue = createQueue();
  	enqueue(&queue, root);

  	while (!isEmpty(queue)) {
  	  	Node* current = dequeue(&queue);
  	  	printf("%d ", current->data);
		
  	  	if (current->left != NULL) enqueue(&queue, current->left);
  	  	if (current->right != NULL) enqueue(&queue, current->right);
  	}
}`}
		</CSyntax>
		<p>
			Note: The implementation of <InlineCode>queue</InlineCode>, <InlineCode>enqueue</InlineCode>, and <InlineCode>dequeue</InlineCode> functions are not shown here but are essential for the level-order traversal to work.
		</p>
	</>
);

export default BSTp6;
