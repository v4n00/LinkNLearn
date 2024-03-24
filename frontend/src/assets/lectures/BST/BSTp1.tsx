import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const BSTp1 = (
	<>
		<h1>Introduction to Binary Search Trees</h1>
		<p>Binary Search Trees (BSTs) are a fundamental data structure in computer science, offering efficient operations for data storage, retrieval, and manipulation. A BST is a binary tree where each node has up to two children, referred to as the left child and the right child. The key property that distinguishes BSTs is that, for any given node, all the elements in the left subtree are less than the node, and all the elements in the right subtree are greater than the node. This property enables efficient search, insertion, and deletion operations.</p>

		<h2>Key Properties of BSTs</h2>
		<ol>
			<li>
				<strong>Ordered structure:</strong> Enables efficient search, insertion, and deletion operations.
			</li>
			<li>
				<strong>Dynamic size:</strong> Easily grows or shrinks to accommodate more or fewer elements.
			</li>
			<li>
				<strong>Flexible traversal:</strong> Supports in-order, pre-order, post-order, and level-order traversals, allowing for flexible data access patterns.
			</li>
		</ol>

		<h2>Binary Search Tree Node Structure in C</h2>
		<p>The basic building block of a BST is the node. Each node contains data and pointers to its left and right children. Here's a simple representation in C:</p>
		<CSyntax>
			{`typedef struct node {
    int data;
    struct node* left;
    struct node* right;
} Node;

Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));

    newNode->data = data;
    newNode->left = NULL;
    newNode->right = NULL;

    return newNode;
}`}
		</CSyntax>
		<p>
			This snippet defines a <InlineCode>node</InlineCode> structure with <InlineCode>data</InlineCode>, <InlineCode>left</InlineCode>, and <InlineCode>right</InlineCode> pointers and a <InlineCode>createNode</InlineCode> function to initialize new nodes.
		</p>

		<p>Understanding the structure and properties of Binary Search Trees is crucial for mastering data management and manipulation techniques in computer science, especially in the C programming language where manual memory management is a key skill.</p>
	</>
);

export default BSTp1;
