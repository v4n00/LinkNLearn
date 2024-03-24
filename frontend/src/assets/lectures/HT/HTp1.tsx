import CSyntax from '@/components/Lecture/CSyntax';

const HTp1 = (
	<>
		<h1>Introduction to Hash Tables</h1>
		<p>A Hash Table is a powerful data structure used to store and retrieve values quickly. At its core, it maps keys to values, allowing for efficient data lookup. This functionality is crucial for various applications, including databases, caching, and more.</p>

		<h2>Why Hash Tables?</h2>
		<ol>
			<li>Efficiency: Hash Tables provide constant time complexity for insertions, deletions, and lookups on average.</li>
			<li>Flexibility: They can store any type of data—integers, strings, objects, etc.</li>
			<li>Uniqueness: Each key in a Hash Table is unique, ensuring no duplicate entries are stored.</li>
		</ol>

		<h2>Basic Concept of Hashing</h2>
		<p>Hashing transforms a given key into an index in an array where the value is stored. This process is done using a hash function.</p>
		<CSyntax>index = hashFunction(key);</CSyntax>
		<p>Here's a simple hash function example in C:</p>
		<CSyntax>
			{`unsigned int hashFunction(char *str) {
    unsigned int hash = 0;
    int c;

    while (c = *str++)
        hash += c;

    return hash;
}`}
		</CSyntax>
		<p>The hash function calculates the sum of the ASCII values of the characters in the string, returning the resulting hash value.</p>

		<h2>Storing Key-Value Pairs</h2>
		<p>In C, a Hash Table can be represented using structures. Here's a basic example of a structure representing a key-value pair in a Hash Table:</p>
		<CSyntax>
			{`typedef struct {
    char *key;
    int value;
} KeyValuePair;`}
		</CSyntax>
	</>
);

export default HTp1;
