import CSyntax from '@/components/Lecture/CSyntax';

const DLLp5 = (
	<>
		<h1>Insertion Operations in Double Linked Lists</h1>
		<p>Insertion is a key operation in double linked lists, allowing you to add new nodes not only at the beginning and end but also between any two existing nodes. Let's explore how these operations are implemented.</p>

		<h2>Inserting at the Beginning</h2>
		<p>To insert a node at the beginning of the list, we'll adjust the head of the list to point to the new node.</p>
		<CSyntax>
			{`void insertAtBeginning(Node** head, int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->prev = NULL;
    newNode->next = *head;
    if (*head != NULL) {
        (*head)->prev = newNode;
    }
    *head = newNode;
}`}
		</CSyntax>

		<h2>Inserting at the End</h2>
		<p>To add a node at the end, we traverse to the last node and adjust pointers accordingly.</p>
		<CSyntax>
			{`void insertAtEnd(Node** head, int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    Node* last = *head; 
    newNode->data = data;
    newNode->next = NULL;
    if (*head == NULL) {
        newNode->prev = NULL;
        *head = newNode;
        return;
    }
    while (last->next != NULL) {
        last = last->next;
    }
    last->next = newNode;
    newNode->prev = last;
}`}
		</CSyntax>

		<h2>Inserting After a Given Node</h2>
		<p>Here's how you can insert a new node after a specified node in the list.</p>
		<CSyntax>
			{`void insertAfterNode(Node* prev_node, int data) {
    if (prev_node == NULL) {
        printf("The given previous node cannot be NULL\\n");
        return;
    }
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = prev_node->next;
    prev_node->next = newNode;
    newNode->prev = prev_node;
    if (newNode->next != NULL) {
        newNode->next->prev = newNode;
    }
}`}
		</CSyntax>

		<h2>Inserting Before a Given Node</h2>
		<p>Similarly, to insert a node before a specified node, we adjust the pointers of the neighboring nodes.</p>
		<CSyntax>
			{`void insertBeforeNode(Node** head, Node* next_node, int data) {
    if (next_node == NULL) {
        printf("The given next node cannot be NULL\\n");
        return;
    }
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->prev = next_node->prev;
    newNode->next = next_node;
    if (newNode->prev != NULL) {
        newNode->prev->next = newNode;
    } else {
        *head = newNode;
    }
    next_node->prev = newNode;
}`}
		</CSyntax>
	</>
);

export default DLLp5;
