import CSyntax from '@/components/Lecture/CSyntax';

const HTp6 = (
	<>
		<h1>Open Addressing: Probing Techniques</h1>
		<p>Open addressing is a collision resolution method in hash tables where all elements are stored within the array itself. When a collision occurs, open addressing seeks the next available slot using a probing sequence. There are several probing techniques, each with its approach to resolving collisions.</p>

		<h2>Linear Probing</h2>
		<p>Linear probing is the simplest form of probing. When a collision occurs, it looks at the next slot, and if that is also taken, it moves to the next one, continuing linearly.</p>
		<p>Here's an example of linear probing in C:</p>
		<CSyntax>
			{`unsigned int linearProbe(unsigned int hash, unsigned int i, unsigned int tableSize) {
    return (hash + i) % tableSize;
}`}
		</CSyntax>
		<p>While linear probing is simple and easy to implement, it can lead to clustering, where a group of adjacent slots gets filled, increasing the likelihood of collisions and reducing efficiency.</p>

		<h2>Quadratic Probing</h2>
		<p>Quadratic probing addresses the issue of clustering by adding a quadratic function to the hash index, thereby spacing out the probe sequence.</p>
		<p>Quadratic probing formula and example in C:</p>
		<CSyntax>
			{`unsigned int quadraticProbe(unsigned int hash, unsigned int i, unsigned int tableSize) {
    return (hash + i*i) % tableSize;
}`}
		</CSyntax>
		<p>This method reduces clustering compared to linear probing but can still suffer from secondary clustering, where different keys have the same probe sequence.</p>

		<h2>Double Hashing</h2>
		<p>Double hashing uses a second hash function to determine the step size in the probing sequence. This approach minimizes clustering and provides a more uniform distribution of keys.</p>
		<p>Example of double hashing in C:</p>
		<CSyntax>
			{`unsigned int doubleHashing(unsigned int hash1, unsigned int hash2, unsigned int i, unsigned int tableSize) {
    unsigned int hash = (hash1 + i * hash2) % tableSize;
    return hash;
}`}
		</CSyntax>
		<p>Double hashing is one of the most effective open addressing techniques, especially for tables that are large or nearly full.</p>
		<p>Open addressing and its probing techniques offer different trade-offs in terms of performance and efficiency. Choosing the right method depends on the specific requirements and constraints of the application.</p>
	</>
);

export default HTp6;
