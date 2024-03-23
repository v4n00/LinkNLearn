import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const DLLp2 = (
	<>
		<h1>Nodes in Double Linked Lists</h1>
		<p>Understanding the structure of nodes is crucial in mastering double linked lists. Let’s delve into how nodes in double linked lists are designed and how they compare to their counterparts in simple linked lists.</p>

		<h2>Node Structure</h2>
		<p>Each node in a double linked list contains three key components:</p>
		<ol>
			<li>
				<strong>Data:</strong> The value stored in the node.
			</li>
			<li>
				<strong>Next Pointer:</strong> A pointer to the next node in the list.
			</li>
			<li>
				<strong>Previous Pointer:</strong> A pointer to the previous node in the list, distinguishing it from simple linked list nodes.
			</li>
		</ol>

		<h2>C Code Snippet: Node Definition</h2>
		<CSyntax>
			{`typedef struct Node {
    int data;
    struct Node* next;
    struct Node* prev;
} Node;`}
		</CSyntax>

		<h2>Comparing Node Structures</h2>
		<p>
			In contrast to simple linked list nodes, which only have a <InlineCode>next</InlineCode> pointer, nodes in a double linked list also include a <InlineCode>prev</InlineCode> pointer. This addition allows for backward traversal, adding versatility but also increasing the memory footprint of each node.
		</p>

		<h2>Why the Extra Pointer?</h2>
		<p>
			The <InlineCode>prev</InlineCode> pointer is what sets double linked lists apart, enabling:
		</p>
		<ol>
			<li>Bi-directional traversal of the list.</li>
			<li>More efficient insertions and deletions in certain scenarios, as the list can be navigated from both ends.</li>
		</ol>

		<p>This dual-link setup forms the backbone of the double linked list’s functionality, offering greater flexibility over simple linked lists at the cost of additional memory use per node.</p>
	</>
);

export default DLLp2;
