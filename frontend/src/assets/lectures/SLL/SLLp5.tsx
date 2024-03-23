import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const SLLp5 = (
	<div>
		<h1>Creating a Linked List</h1>
		<p>The foundation of working with linked lists in C is understanding how to create them. This involves defining the node structure and then initializing the list. Let’s start by creating the building blocks of a linked list.</p>

		<h2>Defining a Node</h2>
		<p>A node in a linked list contains the data and a pointer to the next node. Here's how we define a node in C:</p>
		<CSyntax>
			{`typedef struct Node {
    int data; // data can be of any type
    struct Node* next;
} Node;`}
		</CSyntax>

		<h2>Initializing a Linked List</h2>
		<p>
			To initialize a linked list, we start with an empty list. This is represented by a <InlineCode>NULL</InlineCode> pointer, indicating that the list has no nodes.
		</p>
		<CSyntax>{`Node* head = NULL;`}</CSyntax>

		<h2>Creating a Node</h2>
		<p>
			Nodes are dynamically created using the <InlineCode>malloc</InlineCode> function. Here’s a function to create a new node with given data:
		</p>
		<CSyntax>
			{`Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        printf("Error: Unable to allocate memory for a new node.");
        exit(1);
    }
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}`}
		</CSyntax>

		<h2>Adding the First Node</h2>
		<p>
			To add a node to an empty list, we simply point the head to the new node. This first node’s <InlineCode>next</InlineCode> will be <InlineCode>NULL</InlineCode>, indicating it's the only node in the list.
		</p>
		<CSyntax>{`head = createNode(10);`}</CSyntax>
		<p>With these steps, you have created a simple linked list with a single node. As we progress, we'll learn how to add more nodes and perform various operations on the list.</p>
	</div>
);

export default SLLp5;
