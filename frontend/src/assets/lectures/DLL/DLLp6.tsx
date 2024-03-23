import CSyntax from '@/components/Lecture/CSyntax';

const DLLp6 = (
	<>
		<h1>Deletion Operations in Double Linked Lists</h1>
		<p>Deletion is another critical operation in double linked lists, allowing you to remove nodes from any position with efficiency. Understanding how to properly remove a node is essential for maintaining the integrity of the list.</p>

		<h2>Deleting the First Node</h2>
		<p>To remove the first node, we simply adjust the head of the list and ensure proper re-linking of the remaining nodes.</p>
		<CSyntax>
			{`void deleteFirstNode(Node** head) {
    if (*head == NULL) return;
    Node* temp = *head;
    *head = (*head)->next;
    if (*head != NULL) {
        (*head)->prev = NULL;
    }
    free(temp);
}`}
		</CSyntax>

		<h2>Deleting the Last Node</h2>
		<p>Removing the last node involves traversing to the end of the list and adjusting the tail's pointers.</p>
		<CSyntax>
			{`void deleteLastNode(Node** head) {
    if (*head == NULL) return;
    Node* temp = *head;
    if ((*head)->next == NULL) {
        *head = NULL;
        free(temp);
        return;
    }
    while (temp->next != NULL) {
        temp = temp->next;
    }
    temp->prev->next = NULL;
    free(temp);
}`}
		</CSyntax>

		<h2>Deleting a Node After a Given Node</h2>
		<p>To delete a node after a specific node, we locate the node to be removed and adjust the pointers of the neighboring nodes accordingly.</p>
		<CSyntax>
			{`void deleteNodeAfter(Node* prev_node) {
    if (prev_node == NULL || prev_node->next == NULL) return;
    Node* temp = prev_node->next;
    prev_node->next = temp->next;
    if (temp->next != NULL) {
        temp->next->prev = prev_node;
    }
    free(temp);
}`}
		</CSyntax>

		<h2>Deleting a Node Before a Given Node</h2>
		<p>Similarly, to remove a node before a specified node, the pointers of the adjacent nodes must be carefully realigned.</p>
		<CSyntax>
			{`void deleteNodeBefore(Node** head, Node* next_node) {
    if (next_node == NULL || next_node == *head) return;
    Node* temp = next_node->prev;
    if (temp == *head) {
        *head = next_node;
        next_node->prev = NULL;
    } else {
        temp->prev->next = next_node;
        next_node->prev = temp->prev;
    }
    free(temp);
}`}
		</CSyntax>
	</>
);

export default DLLp6;
