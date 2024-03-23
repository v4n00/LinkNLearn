import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const SLLp1 = (
	<>
		<h1>Introduction to Linked Lists</h1>
		<p>
			A <strong>Linked List</strong> is a fundamental data structure, which is an alternative to arrays. Unlike arrays, linked lists are dynamic and can efficiently insert and delete elements at any position without reallocating or reorganizing the entire structure.
		</p>

		<h2>Basic Terminology</h2>
		<ol>
			<li>
				<strong>Node:</strong> The fundamental part of a linked list, which contains the data and a pointer to the next node.
			</li>
			<li>
				<strong>Head:</strong> The first node in a linked list.
			</li>
			<li>
				<strong>Tail:</strong> The last node in a linked list, which points to null.
			</li>
		</ol>

		<h2>Compared to Arrays</h2>
		<p>While arrays store elements contiguously in memory and offer fast access to items based on their index, linked lists excel in scenarios where memory efficiency and dynamic data operation are paramount. Each element in a linked list, known as a node, holds data and a reference (or pointer) to the next node, forming a chain.</p>

		<h2>A Peek into C Code</h2>
		<p>Here's a simple illustration of a node in a linked list defined in C:</p>
		<CSyntax>
			{`typedef struct Node {
    int data;
    struct Node* next;
} Node;`}
		</CSyntax>
		<p>
			This snippet defines a <InlineCode>Node</InlineCode> structure with an <InlineCode>int</InlineCode> type data and a pointer to the next node, laying the groundwork for building more complex operations and structures as we delve deeper into linked lists.
		</p>
	</>
);

export default SLLp1;
