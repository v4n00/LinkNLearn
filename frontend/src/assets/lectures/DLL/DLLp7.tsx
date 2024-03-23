import CSyntax from '@/components/Lecture/CSyntax';

const DLLp7 = (
	<>
		<h1>Searching in a Double Linked List</h1>
		<p>Searching is a fundamental operation that allows us to locate and access elements within our list. Double linked lists offer unique advantages for searching, thanks to their bidirectional traversal capabilities.</p>

		<h2>Linear Search Technique</h2>
		<p>The most straightforward method to search in a double linked list is the linear search. It involves traversing the list from the head (or tail) until the desired element is found.</p>
		<p>Here's a simple implementation of linear search in a double linked list:</p>
		<CSyntax>
			{`Node* search(Node* head, int key) {
    Node* temp = head;
    while (temp != NULL) {
        if (temp->data == key) return temp;
        temp = temp->next;
    }
    return NULL; // key not found
}`}
		</CSyntax>

		<h2>Advantages of Bidirectional Traversal</h2>
		<p>With the ability to move both forwards and backwards, you can optimize search operations based on additional information. For example, if you know the element is closer to the end, you can start the search from the tail.</p>
		<p>This adaptability makes double linked lists particularly useful in applications where elements are frequently accessed from both ends of the list.</p>
	</>
);

export default DLLp7;
