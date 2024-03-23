import CSyntax from '@/components/Lecture/CSyntax';

const HTp3 = (
	<>
		<h1>Hash Function</h1>
		<p>The hash function is a cornerstone of the hash table's efficiency and effectiveness. It determines how well the hash table performs in terms of speed and how evenly the keys are distributed across the buckets.</p>

		<h2>Purpose and Importance</h2>
		<p>The primary goal of a hash function is to distribute the entries (key/value pairs) across an array of buckets. This distribution should be as uniform as possible to reduce collisions and ensure quick access to each element.</p>

		<h2>Characteristics of a Good Hash Function</h2>
		<ol>
			<li>
				<strong>Efficient Computability:</strong> It should be quick to compute.
			</li>
			<li>
				<strong>Uniform Distribution:</strong> It should spread keys uniformly across the buckets to minimize collisions.
			</li>
			<li>
				<strong>Determinism:</strong> The same key should always produce the same index.
			</li>
		</ol>

		<h2>Examples of Simple Hash Functions</h2>
		<p>Let's explore a simple hash function for strings in C, considering a hash table of a fixed size.</p>
		<CSyntax>
			{`unsigned int simpleHash(char *str, unsigned int tableSize) {
    unsigned long hash = 5381;
    int c;

    while (c = *str++)
        hash = ((hash << 5) + hash) + c; /* hash * 33 + c */

    return hash % tableSize;
}`}
		</CSyntax>
		<p>This function, often referred to as the "djb2" algorithm, demonstrates a balance between simplicity and effective distribution. By using a combination of bitwise and arithmetic operations, it tends to distribute keys fairly uniformly across the array.</p>
		<br />
		<p>The choice of a hash function can greatly affect the performance of a hash table. While simple functions like the one above are suitable for educational purposes or small datasets, more complex applications might require sophisticated hashing algorithms to minimize collisions further and optimize lookup times.</p>
	</>
);

export default HTp3;
