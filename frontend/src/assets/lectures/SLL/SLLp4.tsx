import CSyntax from '@/components/Lecture/CSyntax';

const SLLp4 = (
	<>
		<h1>Basic Operations Overview</h1>
		<p>Managing data within a linked list involves a set of fundamental operations. Each of these operations plays a crucial role in the utilization and efficiency of linked lists in various applications. This overview will introduce you to the core operations: insertion, deletion, search, and traversal.</p>

		<h2>Insertion</h2>
		<p>Insertion involves adding a new node to the linked list. It can be performed at the beginning, at the end, or at a specific position within the list. This operation adjusts pointers to maintain the list structure.</p>

		<h2>Deletion</h2>
		<p>Deletion removes a node from the linked list. Similar to insertion, it can occur at the beginning, the end, or at a specific position, requiring adjustments to pointers to keep the list intact.</p>

		<h2>Search</h2>
		<p>Searching in a linked list checks for the presence of a value within the nodes. This operation typically involves traversing the list from the head to the specified node and is fundamental for data retrieval.</p>

		<h2>Traversal</h2>
		<p>Traversal refers to the process of going through each node of the linked list to access or modify data. It is a prerequisite for many linked list operations, including search and deletion.</p>

		<h2>C Code Snippet: Traversal</h2>
		<p>Here's an example of how to traverse a singly linked list in C, displaying each node's data.</p>
		<CSyntax>
			{`void traverseList(Node* head) {
    Node* temp = head;
    while (temp != NULL) {
        printf("%d ", temp->data);
        temp = temp->next;
    }
}`}
		</CSyntax>
		<p>This function takes the head of the list as its parameter and iterates through each node until it reaches the end of the list, printing the data stored in each node.</p>
	</>
);

export default SLLp4;
