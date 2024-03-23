import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SLLp3 = (
	<>
		<h1>Types of Linked Lists</h1>
		<p>Linked lists can be categorized into several types based on their structure and the way nodes are linked. Understanding these variations is crucial for grasping the flexibility and applicability of linked lists in different scenarios.</p>

		<h2>Singly Linked List</h2>
		<p>The simplest form of a linked list where each node contains data and a pointer to the next node in the sequence. It allows for efficient insertion and deletion at the beginning but requires traversal from the head to access other nodes.</p>

		<h2>Doubly Linked List</h2>
		<p>An extension of the singly linked list, each node in a doubly linked list contains a pointer to the next node and a pointer to the previous node. This bidirectional traversal makes operations like insertion and deletion more efficient in scenarios where access to previous nodes is required.</p>

		<h2>Circular Linked List</h2>
		<p>In a circular linked list, the last node's next pointer isn't null but instead points back to the first node. This circular nature allows for a continuous loop through the list, useful for applications that need circular iteration.</p>

		<h2>Comparative Overview</h2>
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Type</TableHead>
					<TableHead>Description</TableHead>
					<TableHead>Use Case</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				<TableRow>
					<TableCell>Singly</TableCell>
					<TableCell>Nodes point to the next node</TableCell>
					<TableCell>Simple data storage, easy insertion/deletion at the beginning</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Doubly</TableCell>
					<TableCell>Nodes have pointers to both next and previous nodes</TableCell>
					<TableCell>Complex data manipulation, easy insertion/deletion at both ends</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>Circular</TableCell>
					<TableCell>Tail node points to the head, forming a loop</TableCell>
					<TableCell>Applications requiring continuous looping/cycling through data</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	</>
);

export default SLLp3;
