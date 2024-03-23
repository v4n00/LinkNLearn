import CSyntax from '@/components/Lecture/CSyntax';
import InlineCode from '@/components/Lecture/InlineCode';

const SLLp2 = (
	<>
		<h1>Components of a Linked List</h1>
		<p>
			At its core, a linked list is composed of <strong>nodes</strong>. Each node is a critical element that stores data and a reference or a pointer to the next node. This simple yet powerful structure allows for dynamic and efficient data management. Let's dive deeper into the components.
		</p>

		<h2>Understanding Nodes</h2>
		<p>A node is essentially a container for two elements:</p>
		<ol>
			<li>
				<strong>Data:</strong> The value stored in the node. It can be of any type, such as an integer, character, or even a complex data type.
			</li>
			<li>
				<strong>Next Pointer:</strong> A pointer to the next node in the list, or <InlineCode>NULL</InlineCode> if it's the last node.
			</li>
		</ol>

		<p>Here is a visual example of a node and its components:</p>
		<CSyntax>{`[Data | Next] --> [Data | Next] --> [NULL]`}</CSyntax>

		<h2>Node Structure in C</h2>
		<p>To represent a node in C, we define a structure that includes a data field and a pointer to the next node. This structure forms the backbone of our linked list.</p>
		<CSyntax>
			{`typedef struct Node {
    int data; // can be any type
    struct Node* next;
} Node;`}
		</CSyntax>

		<h2>Creating a Node</h2>
		<p>In a linked list, new nodes are dynamically allocated. Here's a simple example of how to create a new node in C:</p>
		<CSyntax>
			{`Node* createNode(int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    newNode->data = data;
    newNode->next = NULL;
    return newNode;
}`}
		</CSyntax>
		<p>
			This function <InlineCode>createNode</InlineCode> takes a data value, allocates memory for a new node, initializes it with the data, and returns a pointer to the newly created node.
		</p>
	</>
);

export default SLLp2;
