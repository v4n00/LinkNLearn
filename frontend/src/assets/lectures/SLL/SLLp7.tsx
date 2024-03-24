import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const SLLp7 = (
	<>
		<h1>Deletion in a Linked List</h1>
		<p>Deletion is a fundamental operation in managing linked lists, allowing us to remove nodes from the list. Depending on the scenario, you might need to delete a node from the beginning, the end, or a specific position. Each of these operations requires careful handling of pointers to preserve the linked list's structure.</p>

		<h2>Deleting the First Node</h2>
		<p>
			To delete the first node, we simply need to change the head pointer to the second node in the list (which could be <InlineCode>NULL</InlineCode> if the list only contains one node).
		</p>
		<CSyntax>
			{`void deleteFirstNode(Node** head) {
    if (*head == NULL) return; // list is empty
  
    Node* temp = *head; // hold the first node
    *head = (*head)->next; // change head to second node
    free(temp); // free the memory of the first node
}`}
		</CSyntax>

		<h2>Deleting the Last Node</h2>
		<p>
			Deleting the last node requires traversing the list to find the second-to-last node, then changing its <InlineCode>next</InlineCode> pointer to <InlineCode>NULL</InlineCode>.
		</p>
		<CSyntax>
			{`void deleteLastNode(Node** head) {
    if (*head == NULL) return; // list is empty
    
    if ((*head)->next == NULL) { // only one node in the list
        free(*head); 
        *head = NULL;
    } else {
        Node* temp = *head;
        // move to the second-to-last node
        while (temp->next->next != NULL) temp = temp->next;
      
        free(temp->next); // free the last node
        temp->next = NULL; // set the new last node's next to NULL
    }
}`}
		</CSyntax>

		<h2>Deleting a Node at a Specific Position</h2>
		<p>To delete a node from a specific position, we need to locate the node just before the one we want to delete, then adjust pointers to bypass the targeted node.</p>
		<CSyntax>
			{`void deleteNodeAtPosition(Node** head, int position) {
    if (*head == NULL) return; // list is empty
  
    Node* temp = *head;
    if (position == 0) { // delete the first node
        *head = temp->next;
        free(temp);
        return;
    }
  
    // find the node before the one we want to delete
    for (int i = 0; temp != NULL && i < position - 1; i++)
        temp = temp->next;

    // position is out of bounds
    if (temp == NULL || temp->next == NULL) return; 
    
    Node* next = temp->next->next;
    free(temp->next); // delete the node at position
    temp->next = next; // link previous node to the next node
}`}
		</CSyntax>
		<p>These deletion operations demonstrate how to modify a linked list's structure by managing pointers. Mastering these techniques is crucial for efficient linked list manipulation.</p>
	</>
);

export default SLLp7;
