import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const BSTp4 = (
	<>
		<h1>Searching in a Binary Search Tree</h1>
		<p>The search operation in a Binary Search Tree (BST) is a fundamental process that utilizes the tree's inherent structure to efficiently locate a specific node. Due to the ordered nature of BSTs, where each node's left subtree contains values less than the node and the right subtree contains values greater, the search operation can bypass a significant portion of the tree, leading to fast lookup times.</p>

		<h2>How to Search for a Value</h2>
		<p>Searching for a value in a BST follows a straightforward algorithm:</p>
		<ol>
			<li>Begin at the root node of the BST.</li>
			<li>
				Compare the search value with the value of the current node:
				<ol>
					<li>If they are equal, the search is successful, and the node is found.</li>
					<li>If the search value is less than the current node's, move to the left subtree.</li>
					<li>If the search value is greater, move to the right subtree.</li>
				</ol>
			</li>
			<li>Repeat the process with the new current node.</li>
			<li>
				If you reach a <InlineCode>NULL</InlineCode> pointer (i.e., the subtree is empty), the value does not exist in the tree, and the search is unsuccessful.
			</li>
		</ol>

		<h2>Example: Search Function in C</h2>
		<p>Here’s a C function demonstrating how to search for a value in a BST:</p>
		<CSyntax>
			{`Node* search(Node* root, int data) {
    if (root == NULL || root->data == data) {
		// Found the value or reached the end of the tree
        return root;
    }
    if (data < root->data) {
        return search(root->left, data); // Search left
    } else {
        return search(root->right, data); // Search right
    }
}`}
		</CSyntax>
		<p>This recursive function starts at the root and narrows down the search area by choosing the appropriate subtree based on the value being searched. This method ensures that each step either finds the node, discards half of the remaining tree from consideration, or confirms that the value is not present.</p>
		<br />
		<p>The efficiency of the search operation in a BST highlights the importance of maintaining the tree's balance, as an unbalanced tree can degrade search times to linear complexity, similar to searching through a linked list.</p>
	</>
);

export default BSTp4;
