import CSyntax from '@/components/Lecture/CSyntax';

const SLLp8 = (
	<>
		<div>
			<h1>Searching in a Linked List</h1>
			<p>Searching in a linked list involves traversing the list from the beginning and comparing each node's data with the target value. This operation is fundamental for locating specific elements within the list. Let's explore how to implement search functionality in a linked list using C.</p>

			<h2>Linear Search Algorithm</h2>
			<p>The most straightforward method for searching in a linked list is the linear search. It sequentially checks each node's data against the search value until it finds a match or reaches the end of the list.</p>

			<h2>Code Example: Searching for a Value</h2>
			<p>Below is an example function in C that searches for a node with a given value in a linked list. If the node is found, it returns the node's position in the list (starting from 0); otherwise, it returns -1 to indicate the value is not present.</p>
			<CSyntax>
				{`int searchLinkedList(Node* head, int value) {
    Node* current = head;
    int index = 0;
    while (current != NULL) {
       if (current->data == value) return index;
       current = current->next;
       index++;
    }
    return -1; // value not found
}`}
			</CSyntax>
			<p>This function demonstrates a simple yet effective approach to searching within a linked list. By iterating over each node and checking its data, we can locate the desired value or determine it's not in the list.</p>
		</div>
	</>
);

export default SLLp8;
