import CSyntax from '@/components/Lecture/CSyntax';

const HTp2 = (
	<>
		<h1>Components of a Hash Table</h1>
		<p>A Hash Table consists of several core components that work together to store and manage data efficiently. Understanding these components is crucial to grasp how Hash Tables operate.</p>

		<h2>Hash Function</h2>
		<p>The hash function is at the heart of a Hash Table's functionality. It computes an index based on the key's value, where the corresponding value should be stored or retrieved from.</p>
		<p>Another hash function example in C could look like this:</p>
		<CSyntax>
			{`unsigned int hashFunction(char *key, int tableSize) {
    unsigned int hash = 0;
    for (int i = 0; key[i] != '\\0'; i++) {
        hash = 31 * hash + key[i];
    }
    return hash % tableSize;
}`}
		</CSyntax>

		<h2>Array of Buckets or Slots</h2>
		<p>The array serves as the foundational structure holding the data within a Hash Table. Each element of the array is often referred to as a "bucket" or "slot," which can hold one or more key-value pairs.</p>
		<p>Here is how you might define an array of buckets in C:</p>
		<CSyntax>
			{`typedef struct {
    KeyValuePair *items;
    int size;
    int capacity;
} Bucket;

typedef struct {
    Bucket *buckets;
    int capacity;
} HashTable;`}
		</CSyntax>

		<h2>Collision Resolution Strategy</h2>
		<p>Collisions occur when two keys hash to the same index. To manage this, Hash Tables implement collision resolution strategies such as chaining or open addressing.</p>
		<p>In the case of chaining, each bucket can hold multiple items. Here's a simplified structure:</p>
		<CSyntax>
			{`typedef struct KeyValuePair {
    char *key;
    int value;
    struct KeyValuePair *next;
} KeyValuePair;`}
		</CSyntax>
	</>
);

export default HTp2;
