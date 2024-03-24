import CSyntax from '@/components/Lecture/CSyntax';

const HTp9 = (
	<>
		<h1>Deletion Process in Hash Tables</h1>
		<p>Removing a key-value pair from a hash table efficiently ensures that the data structure maintains its integrity and performance. The deletion process involves locating the item to be removed and then handling the slot in a way that searches and further insertions are not adversely affected.</p>

		<h2>Finding the Item to Delete</h2>
		<p>Just like insertion and search, deletion starts with computing the hash of the key to find its expected position in the table.</p>

		<h2>Marking Items as Deleted</h2>
		<p>In open addressing, simply removing an item and leaving an empty slot might disrupt the probe sequence for other items. One common solution is to mark slots as deleted rather than making them empty. This approach keeps the probe sequence intact.</p>
		<p>Here's a simplified example in C:</p>
		<CSyntax>
			{`void deleteKey(HashTable *ht, char *key) {
    unsigned int index = hashFunction(key, ht->capacity);
    unsigned int originalIndex = index;
    unsigned int i = 0;

    while (ht->buckets[index].used || ht->buckets[index].deleted) {
        if (ht->buckets[index].used && strcmp(ht->buckets[index].key, key) == 0) {
            // Free the key string if dynamically allocated
            free(ht->buckets[index].key);
            ht->buckets[index].key = NULL;
            ht->buckets[index].value = 0;
            ht->buckets[index].used = 0;
            // Mark as deleted
            ht->buckets[index].deleted = 1;
            printf("Key '%s' has been deleted.\\n", key);
            return;
        }
        // Linear probing
        index = (originalIndex + ++i) % ht->capacity;
        if (i == ht->capacity) break; // Key not found
    }
    printf("Key '%s' not found.\\n", key);
}`}
		</CSyntax>
		<p>In this approach, a 'deleted' flag is used to mark slots from which items have been removed. This allows the hash table to maintain accurate probing sequences for existing items while also marking the slot in a way that it can be reused for future insertions.</p>

		<p>Properly handling deletion in a hash table is crucial for avoiding 'ghost' entries that can affect performance. By marking items as deleted, the hash table ensures that the structure remains efficient for both current and future operations.</p>
	</>
);

export default HTp9;
