import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const DLLp1 = (
	<>
		<h1>Introduction to Double Linked Lists</h1>
		<p>Welcome to the next step in understanding linked lists! Having mastered simple linked lists, you're now ready to explore the more complex, yet powerful, double linked lists.</p>

		<h2>What is a Double Linked List?</h2>
		<p>
			A <strong>double linked list</strong> is a sequence of elements, where each element is linked to the next and the previous one. This bi-directional linkage allows for more flexible and efficient manipulations of the data structure.
		</p>

		<h2>Comparison with Simple Linked Lists</h2>
		<ol>
			<li>Both have nodes that contain data.</li>
			<li>Simple linked lists link nodes in a single direction; double linked lists do so in both directions.</li>
			<li>Double linked lists require more memory per node due to the additional previous pointer.</li>
		</ol>

		<h2>Basic Structure</h2>
		<p>Here's a basic representation of a node in a double linked list in C:</p>
		<CSyntax>
			{`typedef struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
} Node;`}
		</CSyntax>

		<p>
			Each node contains an integer data field, and two pointers, <InlineCode>next</InlineCode> and <InlineCode>prev</InlineCode>, pointing to the subsequent and preceding nodes, respectively.
		</p>

		<h2>Why Double Linked Lists?</h2>
		<p>Double linked lists excel over their single-linked counterparts by providing:</p>
		<ol>
			<li>Easier insertion and deletion of nodes, especially in the middle of the list.</li>
			<li>Ability to traverse the list in both directions, which can be particularly useful in certain algorithms and applications.</li>
		</ol>
	</>
);

export default DLLp1;
