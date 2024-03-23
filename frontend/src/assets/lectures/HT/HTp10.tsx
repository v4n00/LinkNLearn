import CSyntax from '@/components/Lecture/CSyntax';

const HTp10 = (
	<>
		<h1>Resizing a Hash Table</h1>
		<p>As the number of entries in a hash table increases, so does the load factor—the ratio of the number of entries to the number of buckets. To maintain efficient operation and minimize collisions, it's often necessary to resize the hash table. This involves creating a new table with a larger capacity and rehashing all existing entries into it.</p>

		<h2>Reasons for Resizing</h2>
		<ol>
			<li>
				<strong>Maintaining Efficiency:</strong> Keeping the load factor within a certain threshold ensures efficient data access.
			</li>
			<li>
				<strong>Reducing Collisions:</strong> A lower load factor means fewer collisions, which improves the performance of hash table operations.
			</li>
		</ol>

		<h2>Process of Resizing</h2>
		<p>Resizing a hash table typically involves the following steps:</p>
		<ol>
			<li>Allocate a new array of buckets with the new size.</li>
			<li>Recompute the hash for each existing key based on the new array size.</li>
			<li>Insert each key-value pair into the new array based on the new hash values.</li>
		</ol>
		<p>Here's an illustrative example in C:</p>
		<CSyntax>
			{`void resizeHashTable(HashTable *ht) {
    int newCapacity = ht->capacity * 2; // Example: double the size
    HashTableNode **newBuckets = calloc(newCapacity, sizeof(HashTableNode*));
    // Rehash and insert items into new buckets
    for (int i = 0; i < ht->capacity; i++) {
        HashTableNode *node = ht->buckets[i];
        while (node) {
            unsigned int newIndex = hashFunction(node->key, newCapacity);
            HashTableNode *newNode = malloc(sizeof(HashTableNode));
            newNode->key = strdup(node->key);
            newNode->value = node->value;
            // Insert into new bucket list without changing order
            newNode->next = newBuckets[newIndex];
            newBuckets[newIndex] = newNode;
            node = node->next;
        }
    }
    free(ht->buckets); // Free old buckets
    ht->buckets = newBuckets;
    ht->capacity = newCapacity;
}`}
		</CSyntax>
		<p>This process ensures that the hash table can continue to operate efficiently as the number of elements changes. Proper resizing strategies are essential for balancing performance with resource usage.</p>

		<h2>Impact on Performance</h2>
		<p>While resizing is beneficial for maintaining performance in the long run, the actual process of resizing and rehashing all elements can be time-consuming. It's a trade-off between occasional performance hits during resizing and consistently fast operations during regular use.</p>

		<p>By understanding when and how to resize a hash table, developers can ensure that their data structures remain efficient and scalable, capable of handling varying data volumes efficiently.</p>
	</>
);

export default HTp10;
