import CSyntax from '@/components/Lecture/CSyntax';

const DLLp4 = (
	<>
		<h1>Traversal in Double Linked Lists</h1>
		<p>Traversal is a fundamental operation in data structures, allowing us to access and inspect each element. In double linked lists, the ability to traverse in both directions offers unique advantages.</p>

		<h2>Forward Traversal</h2>
		<p>Traversing a double linked list forward is similar to traversing a simple linked list; we move from the head of the list to the end, one node at a time. Here’s how you can implement it in C:</p>

		<CSyntax>
			{`void traverseForward(Node* head) {
    Node* temp = head;
    printf("Forward Traversal:\\n");
    while (temp != NULL) {
        printf("%d -> ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}`}
		</CSyntax>

		<h2>Backward Traversal</h2>
		<p>The unique feature of double linked lists is backward traversal. Starting from the tail, we can move towards the head. Implementing backward traversal requires knowing the last node, which can be done during forward traversal or by keeping a separate tail pointer.</p>

		<CSyntax>
			{`void traverseBackward(Node* tail) {
    Node* temp = tail;
    printf("Backward Traversal:\\n");
    while (temp != NULL) {
        printf("%d <- ", temp->data);
        temp = temp->prev;
    }
    printf("NULL\\n");
}`}
		</CSyntax>

		<p>This function assumes you have a pointer to the tail node. If your list doesn’t maintain a tail pointer, you'll need to traverse from the head to the last node first.</p>

		<h2>Comparing Traversals</h2>
		<p>The ability to traverse in both directions is a key advantage of double linked lists over simple linked lists, providing greater flexibility and efficiency in certain algorithms and operations.</p>
	</>
);

export default DLLp4;
