import CSyntax from '@/components/Lecture/CSyntax';

const HTp5 = (
	<>
		<h1>Chaining</h1>
		<p>Chaining is a widely used technique to handle collisions in hash tables. When multiple keys hash to the same index, chaining allows those keys to be stored in a list at that index, thereby avoiding the collision issue.</p>

		<h2>Explanation and Diagram</h2>
		<p>In chaining, each slot of the hash table array contains a pointer to a linked list (or a head node of this list) that stores all the elements mapping to the same index. If two keys have the same hash value, they are stored in the same list but as separate nodes. This approach makes retrieval possible by searching through the list at a particular index.</p>

		<h2>Advantages and Disadvantages</h2>
		<ol>
			<li>
				<strong>Advantages:</strong>
			</li>
			<ol>
				<li>Simple to implement.</li>
				<li>Hash table never fills up, we can always add more elements.</li>
				<li>Less sensitive to the hash function or load factors.</li>
			</ol>
			<li>
				<strong>Disadvantages:</strong>
			</li>
			<ol>
				<li>Linked lists require extra memory for pointers.</li>
				<li>Performance degrades as the number of entries increases (due to longer chains).</li>
			</ol>
		</ol>

		<h2>Code Example in C</h2>
		<p>Here's how you can implement chaining in a hash table using C:</p>
		<CSyntax>
			{`typedef struct HashNode {
    int key;
    int value;
    struct HashNode* next;
} HashNode;

typedef struct HashTable {
    int size;
    HashNode** list;
} HashTable;

HashTable* createHashTable(int size) {
    HashTable* table = (HashTable*) malloc(sizeof(HashTable));
    table->size = size;
    table->list = (HashNode**) malloc(sizeof(HashNode*) * size);
    for(int i = 0; i < size; i++)
        table->list[i] = NULL;
    return table;
}

void insert(HashTable* table, int key, int value) {
    int index = key % table->size;
    HashNode* newNode = (HashNode*) malloc(sizeof(HashNode));
    newNode->key = key;
    newNode->value = value;
    newNode->next = table->list[index];
    table->list[index] = newNode;
}`}
		</CSyntax>
		<p>This basic implementation of chaining in a hash table introduces the concept of managing collisions by linking entries together at a single index. Further enhancements can include implementing search, delete operations, and considering dynamic resizing of the hash table for efficiency.</p>
	</>
);

export default HTp5;
