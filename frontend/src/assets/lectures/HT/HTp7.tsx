import CSyntax from '@/components/Lecture/CSyntax';

const HTp7 = (
	<>
		<h1>Insertion Process in Hash Tables</h1>
		<p>Inserting a new key-value pair into a hash table is a fundamental operation that involves calculating the key's hash value, finding the appropriate index for the pair, and handling any potential collisions. Let's explore how this process is implemented, particularly under the scenario of open addressing with linear probing.</p>

		<h2>Calculating the Hash and Finding the Index</h2>
		<p>The first step in inserting an item is to use the hash function to calculate the hash code of the key, which is then converted into an index in the table's array.</p>
		<CSyntax>
			{`unsigned int hashFunction(char *key, unsigned int tableSize) {
    unsigned int hash = 0;
    for (int c = *key; c; c = *++key)
        hash += c;
    return hash % tableSize;
}`}
		</CSyntax>

		<h2>Handling Collisions with Linear Probing</h2>
		<p>If the calculated index is already occupied, we must find an alternative spot for the new item. Linear probing steps through the array, one slot at a time, looking for an empty slot.</p>
		<CSyntax>
			{`void insertItem(HashTable *ht, char *key, int value) {
    unsigned int index = hashFunction(key, ht->capacity);
    unsigned int originalIndex = index;
    unsigned int i = 0;
    while (ht->buckets[index].used && i < ht->capacity) {
        index = (originalIndex + ++i) % ht->capacity; // Linear probing
        if (i == ht->capacity) { // Table is full
            printf("Hash table is full. Unable to insert more items\\n");
            return;
        }
    }
    ht->buckets[index].key = strdup(key);
    ht->buckets[index].value = value;
    ht->buckets[index].used = 1;
}`}
		</CSyntax>
		<p>This function attempts to insert a key-value pair into the hash table. It calculates the hash index for the key and checks if the slot at that index is occupied. If the slot is already taken, it linearly probes for the next available slot. Once an empty slot is found, it inserts the key-value pair and marks the slot as used.</p>

		<p>The insertion process in a hash table, especially when considering collision resolution, highlights the efficiency and practicality of hash tables for quick data retrieval and storage. By understanding and implementing these steps, developers can leverage the robust capabilities of hash tables in their applications.</p>
	</>
);

export default HTp7;
