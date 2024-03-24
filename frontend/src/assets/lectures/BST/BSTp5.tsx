import CSyntax from '@/components/Lecture/CSyntax';

const BSTp5 = (
	<>
		<h1>Deletion in a Binary Search Tree</h1>
		<p>Deleting a node from a Binary Search Tree (BST) is a critical operation that can be more complex than insertion or search. It involves removing a node and then adjusting the tree to preserve the BST properties. The deletion operation can be classified into three scenarios based on the node's children.</p>

		<h2>Deletion Scenarios</h2>
		<ol>
			<li>
				<strong>Deleting a Leaf Node:</strong> The simplest case, where the node to be deleted has no children. Simply remove the node from the tree.
			</li>
			<li>
				<strong>Deleting a Node with One Child:</strong> Remove the node and replace it with its child, maintaining the BST structure.
			</li>
			<li>
				<strong>Deleting a Node with Two Children:</strong> Find the node's in-order successor (the smallest node in its right subtree) or its in-order predecessor (the largest in its left subtree), replace the node with the in-order successor or predecessor, and then delete the successor or predecessor in its original position.
			</li>
		</ol>

		<h2>Example: Delete Function in C</h2>
		<p>Here's a simplified version of a delete function in C that covers these scenarios:</p>
		<CSyntax>
			{`Node* deleteNode(Node* root, int key) {
    if (root == NULL) return root;
  
    // Navigate the tree to find the node to be deleted
    if (key < root->data) root->left = deleteNode(root->left, key);
    else if (key > root->data) root->right = deleteNode(root->right, key);
  
    // Node found
    else {
        // Node with only one child or no child
        if (root->left == NULL) {
            Node *temp = root->right;
            free(root);
            return temp;
        } else if (root->right == NULL) {
            Node *temp = root->left;
            free(root);
            return temp;
        }
    
        // Node with two children: Get the inorder successor (smallest in the right subtree)
        Node* temp = minValueNode(root->right);
    
        // Copy the inorder successor's content to this node
        root->data = temp->data;
    
        // Delete the inorder successor
        root->right = deleteNode(root->right, temp->data);
    }
    return root;
}

Node* minValueNode(Node* node) {
    Node* current = node;
    while (current && current->left != NULL)
        current = current->left;
    return current;
}`}
		</CSyntax>
		<p>This function illustrates the deletion process for all three scenarios. It navigates the tree to find the target node, then proceeds based on the node's number of children. When deleting a node with two children, it finds the in-order successor to ensure the BST properties are maintained after the deletion.</p>
	</>
);

export default BSTp5;
