import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const SLLp6 = (
	<>
		<h1>Insertion in a Linked List</h1>
		<p>Inserting new nodes into a linked list is a fundamental operation that can be performed in multiple ways, depending on the desired position of the new node. We will explore three common insertion methods: at the beginning, at the end, and at a specific position.</p>

		<h2>Inserting at the Beginning</h2>
		<p>
			To insert a node at the beginning of the list, we simply point the new node’s <InlineCode>next</InlineCode> to the current head of the list and then update the head to the new node.
		</p>
		<CSyntax>
			{`void insertAtBeginning(Node** head, int data) {
    Node* newNode = createNode(data);
    newNode->next = *head;
    *head = newNode;
}`}
		</CSyntax>

		<h2>Inserting at the End</h2>
		<p>
			Inserting a node at the end requires traversing the list to find the last node and updating its <InlineCode>next</InlineCode> pointer to the new node.
		</p>
		<CSyntax>
			{`void insertAtEnd(Node** head, int data) {
    Node* newNode = createNode(data);
    if (*head == NULL) {
        *head = newNode;
        return;
    }
    Node* lastNode = *head;
    while (lastNode->next != NULL) {
        lastNode = lastNode->next;
    }
    lastNode->next = newNode;
}`}
		</CSyntax>

		<h2>Inserting at a Specific Position</h2>
		<p>To insert a node at a specific position, we need to traverse the list to the point where we want to insert the new node, adjusting the pointers accordingly.</p>
		<CSyntax>
			{`void insertAtPosition(Node** head, int position, int data) {
    if (position < 1) {
        printf("Position should be >= 1.");
        return;
    }
  
    Node* newNode = createNode(data);
    if (position == 1) {
        newNode->next = *head;
        *head = newNode;
        return;
    }

    Node* temp = *head;
    for (int i = 1; temp != NULL && i < position-1; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Position exceeds the length of the list.");
        return;
    }

    newNode->next = temp->next;
    temp->next = newNode;
}`}
		</CSyntax>
		<p>These methods enable us to insert nodes at any position in the list, providing the flexibility necessary for many applications of linked lists.</p>
	</>
);

export default SLLp6;
