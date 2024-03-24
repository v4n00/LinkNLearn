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
		<p>To add a node in a Doubly Linked List, you can follow the same instructions from the Singly Linked List module. The following code is another example on how you could theoretically add a first node inside of a list. Keep in my you should probably separate these 2 operations into different functions:</p>

		<CSyntax>
			{`void addFirstNode(Node** head, int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    
    // assigning data and setting previous and next pointers
    newNode->data = data;
    newNode->prev = NULL;
    newNode->next = NULL;
    
    // pointing head to the new node
    *head = newNode;
}`}
		</CSyntax>

		<p>This function takes a pointer to the head pointer of the list and the data for the first node. It creates a new node, initializes it, and sets it as the head of the list.</p>
	</>
);

export default DLLp3;
