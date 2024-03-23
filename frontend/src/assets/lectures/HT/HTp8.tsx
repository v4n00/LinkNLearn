import CSyntax from '@/components/Lecture/CSyntax';

const HTp8 = (
	<>
		<h1>Search Process in Hash Tables</h1>
		<p>Searching for a value using its key is a hallmark of hash tables, offering fast data retrieval. This process involves computing the hash of the key to find the expected index and then handling any discrepancies due to collisions.</p>

		<h2>Computing the Index</h2>
		<p>The search begins with the hash function computing the index for the given key, similar to the insertion process.</p>
		<CSyntax>
			{`unsigned int hashFunction(char *key, unsigned int tableSize) {
    unsigned int hash = 0;
    for (int c = *key; c; c = *++key)
        hash += c;
    return hash % tableSize;
}`}
		</CSyntax>

		<h2>Handling Collisions and Searching</h2>
		<p>If the bucket at the calculated index does not contain the key (due to a collision and subsequent displacement), a search method similar to the insertion's collision handling is employed.</p>
		<CSyntax>
			{`int searchKey(HashTable *ht, char *key) {
    unsigned int index = hashFunction(key, ht->capacity);
    unsigned int originalIndex = index;
    unsigned int i = 0;

    while (ht->buckets[index].used) {
        if (strcmp(ht->buckets[index].key, key) == 0) {
            return ht->buckets[index].value; // Key found
        }
        index = (originalIndex + ++i) % ht->capacity; // Linear probing
        if (i == ht->capacity) break; // Prevent infinite loop if key is not present
    }
    return -1; // Key not found
}`}
		</CSyntax>
		<p>This search function calculates the initial index for the key, then linearly probes through the buckets if the initial position is occupied by a different key. The search either returns the value associated with the key or indicates that the key is not found.</p>

		<p>The efficiency of the search process in a hash table is directly influenced by the choice of hash function and collision resolution strategy. Understanding these components and their implementation in C is essential for optimizing data retrieval times in software development.</p>
	</>
);

export default HTp8;
