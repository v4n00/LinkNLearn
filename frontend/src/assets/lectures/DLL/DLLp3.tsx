import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const DLLp3 = (
	<>
		<h1>Creating a Double Linked List</h1>
		<p>Now that you're familiar with what a double linked list is and its basic structure, let's dive into how to create one from scratch and add its very first node.</p>

		<h2>Initializing a Double Linked List</h2>
		<p>
			To start, we need to create an empty list. In the context of a double linked list, this means setting our list's head pointer to <InlineCode>NULL</InlineCode>, indicating that the list has no nodes.
		</p>

		<CSyntax>{`Node* head = NULL;`}</CSyntax>

		<h2>Adding the First Node</h2>
		<p>Adding the first node to an empty double linked list is a crucial step. This operation lays the foundation for subsequent nodes. Here's how you can do it:</p>

		<CSyntax>
			{`void addFirstNode(Node** head, int data) {
    // creating a new node
    Node* newNode = (Node*)malloc(sizeof(Node));
    
    // assigning data and setting previous and next pointers
    newNode->data = data;
    newNode->prev = NULL; // since it's the first node, prev is NULL
    newNode->next = NULL; // since there's no next node yet, next is also NULL
    
    // pointing head to the new node
    *head = newNode;
}`}
		</CSyntax>

		<p>This function takes a pointer to the head pointer of the list and the data for the first node. It creates a new node, initializes it, and sets it as the head of the list.</p>
	</>
);

export default DLLp3;
