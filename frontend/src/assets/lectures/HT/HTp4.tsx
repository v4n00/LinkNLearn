import CSyntax from '@/components/Lecture/CSyntax';

const HTp4 = (
	<>
		<h1>Handling Collisions</h1>
		<p>In a hash table, collisions occur when two keys hash to the same index. Efficiently managing collisions is crucial for maintaining the performance of a hash table. There are several strategies to handle collisions, each with its benefits and trade-offs.</p>

		<h2>Concept of Collisions</h2>
		<p>A collision happens because a hash function maps multiple keys to the same bucket. Without effective collision resolution, the fundamental operations of a hash table—such as insertion, deletion, and lookup—can become slow, diminishing the hash table's advantage of speed.</p>

		<h2>Collision Resolution Strategies Overview</h2>
		<p>There are two primary strategies for collision resolution:</p>
		<ol>
			<li>
				<strong>Chaining:</strong> Each bucket stores a linked list of entries that hash to the same bucket.
			</li>
			<li>
				<strong>Open Addressing:</strong> If a collision occurs, the hash table probes for the next available bucket according to a predefined sequence.
			</li>
		</ol>

		<h2>Chaining</h2>
		<p>Chaining uses a linked list to store multiple items that hash to the same bucket. This method is simple and effective, especially when the load factor (the number of items divided by the number of buckets) is low.</p>
		<p>Example of a chained hash table bucket in C:</p>
		<CSyntax>
			{`typedef struct HashTableNode {
    char *key;
    int value;
    struct HashTableNode *next;
} HashTableNode;

typedef struct {
    HashTableNode **buckets;
    int capacity;
} HashTable;`}
		</CSyntax>

		<h2>Open Addressing</h2>
		<p>Open addressing resolves collisions by finding another bucket within the table. It uses a probing sequence (linear, quadratic, or double hashing) to do so.</p>
		<p>Example of linear probing implementation in C:</p>
		<CSyntax>
			{`unsigned int probe(unsigned int hash, unsigned int i, unsigned int tableSize) {
    return (hash + i) % tableSize;
}`}
		</CSyntax>
		<p>In linear probing, if a collision occurs, the hash table checks the next bucket (i=1), and then the next (i=2), until an empty bucket is found.</p>
		<p>Handling collisions effectively is key to the performance of hash tables. While chaining is simpler and works well in many cases, open addressing can be more space-efficient and is beneficial in environments with tight memory constraints.</p>
	</>
);

export default HTp4;
