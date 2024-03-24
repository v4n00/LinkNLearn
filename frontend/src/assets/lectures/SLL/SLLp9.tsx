import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const SLLp9 = (
	<>
		<div>
			<h1>Traversing a Linked List</h1>
			<p>Traversal refers to the process of going through each node in a linked list, one by one, starting from the head. It's a fundamental technique used for accessing, displaying, or modifying the data within the nodes. Let's look at how to implement traversal in a linked list using C.</p>

			<h2>Purpose of Traversal</h2>
			<p>Traversal is essential for many operations in a linked list, such as printing out all values, calculating the sum of all node values, or applying a function to the data in each node. It provides the mechanism by which linked lists become useful in practice.</p>

			<h2>C Code Example: Traversing and Printing Node Data</h2>
			<p>Here's how you can traverse a linked list in C to print the data stored in each node. This function iterates over each node until it reaches the end of the list (indicated by a NULL pointer) and prints the data in each node.</p>
			<CSyntax>
				{`void printList(Node* head) {
    Node* current = head;
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
}`}
			</CSyntax>
			<p>
				This simple yet powerful function demonstrates the core of traversing a linked list. By moving from node to node using the <InlineCode>next</InlineCode> pointers, we can access and utilize the data in each node according to our needs.
			</p>
		</div>
	</>
);

export default SLLp9;
