export const flashcards = [
	{
		frontSide: "Explain the 'left-right' rotation in an AVL tree.",
		backSide: "A 'left-right' rotation in an AVL tree is a double rotation used to rebalance the tree. It is performed when a left child node has a higher right subtree. First, a left rotation on the left child is done, followed by a right rotation on the unbalanced node.",
	},
	{
		frontSide: "Explain the 'right-left' rotation in an AVL tree.",
		backSide: "A 'right-left' rotation in an AVL tree is a double rotation used to rebalance the tree. It is performed when a right child node has a higher left subtree. First, a right rotation on the right child is done, followed by a left rotation on the unbalanced node.",
	},
	{
		frontSide: 'Difference between linear probing and quadratic probing in a hash table.',
		backSide: 'In linear probing, collisions are resolved by moving sequentially through the table to find an empty slot. Quadratic probing also addresses collisions but uses a quadratic function to calculate the distance from the original position, reducing clustering.',
	},
	{
		frontSide: 'How does a circular doubly linked list handle insertions differently?',
		backSide: "A circular doubly linked list allows for more efficient insertions at both ends. Since it forms a circle with no clear end, we can insert a new node before the head or after the tail without traversing the list, using the tail's next pointer and the head's previous pointer.",
	},
	{
		frontSide: 'Why is the height of an AVL tree significant?',
		backSide: 'The height of an AVL tree is significant because it ensures that the tree remains balanced, with the heights of two child subtrees of any node differing by no more than one. This constraint guarantees O(log n) time complexity for search, insert, and delete operations.',
	},
	{
		frontSide: "Describe the 'enqueue' operation in a circular queue.",
		backSide: "In a circular queue, the 'enqueue' operation adds an element to the back of the queue. If the queue is full, it wraps around to the beginning if space is available, utilizing the array space efficiently by treating the queue as circular.",
	},
	{
		frontSide: 'What triggers a rebalance in an AVL tree?',
		backSide: 'A rebalance in an AVL tree is triggered when an insert or delete operation causes the height difference between the left and right subtrees of any node to exceed one, violating the AVL balance condition.',
	},
	{
		frontSide: 'How does a stack differ in memory allocation compared to a queue?',
		backSide: 'A stack typically uses a Last-In-First-Out (LIFO) allocation, where elements are added and removed from the top. A queue uses a First-In-First-Out (FIFO) allocation, adding elements at the rear and removing them from the front. This affects their memory usage patterns and operation costs.',
	},
	{
		frontSide: "Explain the concept of 'load factor' in a hash table.",
		backSide: "The 'load factor' of a hash table is a measure that indicates how full the hash table is. It is calculated as the ratio of the number of stored elements to the total number of slots available. A higher load factor can lead to more collisions, affecting performance.",
	},
	{
		frontSide: 'What are the consequences of deleting a node in a doubly linked list?',
		backSide: "Deleting a node in a doubly linked list requires updating the pointers of its previous and next nodes to bypass the deleted node. This operation is efficient since it doesn't require traversal from the head. However, care must be taken to handle edge cases, such as deleting the head or tail node.",
	},
	{
		frontSide: 'What is tree rotation and why is it used in AVL trees?',
		backSide: 'Tree rotation is a process of reorganizing the structure of a tree, typically used in AVL trees to maintain balance. It involves changing the positions of the nodes in the tree, which helps ensure that the height difference between the left and right subtrees of any node does not exceed one, thereby preserving the AVL property and ensuring efficient operations.',
	},
	{
		frontSide: 'How does a circular doubly linked list handle edge cases for insertion?',
		backSide: 'In a circular doubly linked list, edge cases for insertion at the beginning or end are elegantly handled due to its circular nature, linking the new node to the head and tail appropriately, ensuring a continuous loop without null references.',
	},
	{
		frontSide: 'What is the time complexity of accessing an element by value in a hash table?',
		backSide: 'Accessing an element by value in a hash table ideally has a time complexity of O(1), assuming a perfect hash function with no collisions. However, due to potential collisions and the resulting chaining or open addressing, it may degrade to O(n) in the worst case.',
	},
	{
		frontSide: "How does the 'Deque' operation extend the functionality of a standard queue?",
		backSide: "The 'Deque' (Double-Ended Queue) extends the standard queue by allowing insertion and deletion of elements from both the front and the rear ends, supporting a more flexible range of operations compared to the single-ended queue.",
	},
	{
		frontSide: 'What is tree balancing and why is it important in AVL trees?',
		backSide: 'Tree balancing in AVL trees ensures that the height difference (balance factor) between left and right subtrees is no more than 1, maintaining optimal search times and preventing the tree from becoming skewed, which could degrade performance to O(n) in the worst case.',
	},
	{
		frontSide: 'What triggers an AVL tree rotation?',
		backSide: "An AVL tree rotation is triggered by insertions or deletions that cause an imbalance in the tree, where the difference in height between the left and right subtrees of any node exceeds 1, violating the AVL tree's balance condition.",
	},
	{
		frontSide: 'How do left and right rotations in an AVL tree differ?',
		backSide: 'Left and right rotations in an AVL tree differ in their direction and purpose. A right rotation is applied when a left-heavy imbalance occurs, moving a subtree up to the right to decrease its depth. Conversely, a left rotation is applied for a right-heavy imbalance, lifting a subtree up to the left.',
	},
	{
		frontSide: 'Can AVL trees have duplicate values?',
		backSide: 'AVL trees, like other binary search trees, typically do not allow duplicate values to maintain a strict ordering. However, modifications can be made to store duplicates, such as counting occurrences at a node or storing duplicates in a linked list at each node.',
	},
	{
		frontSide: 'What is the worst-case time complexity of searching in an AVL tree?',
		backSide: "The worst-case time complexity of searching in an AVL tree is O(log n), where n is the number of nodes in the tree. This efficiency is due to the AVL tree's height-balancing property, which keeps the tree depth minimal.",
	},
	{
		frontSide: 'What are the consequences of inserting elements in sorted order into an AVL tree?',
		backSide: "Inserting elements in sorted order into an AVL tree triggers rebalancing operations (rotations) after nearly every insertion, as this pattern creates the most unbalanced condition possible. However, due to AVL tree's self-balancing nature, it will automatically adjust to maintain its balance, ensuring the tree remains efficient for operations.",
	},
	{
		frontSide: 'How does the balance factor of an AVL tree node change after a double rotation?',
		backSide: 'After a double rotation in an AVL tree, the balance factors of the involved nodes are updated to reflect their new subtree heights. The double rotation corrects the balance factor of the originally unbalanced node to 0 and adjusts the balance factors of other nodes involved to ensure the entire subtree remains balanced.',
	},
	{
		frontSide: 'Why might an AVL tree be less memory efficient than a simple binary search tree?',
		backSide: 'An AVL tree might be less memory efficient than a simple binary search tree because each node in an AVL tree requires additional storage for balance factors or heights to monitor the balance of the tree, whereas a simple binary search tree does not store this extra information.',
	},
	{
		frontSide: 'How does the deletion process in an AVL tree ensure the tree remains balanced?',
		backSide: 'The deletion process in an AVL tree ensures the tree remains balanced by performing necessary rotations after a node is removed. If the deletion causes an imbalance, the tree undergoes rotations (single or double) at the affected nodes to restore the AVL balance condition.',
	},
	{
		frontSide: 'What is the impact of AVL tree balancing on tree traversal operations?',
		backSide: 'The impact of AVL tree balancing on tree traversal operations is minimal in terms of complexity; it ensures that in-order, pre-order, and post-order traversals are performed efficiently due to the maintained balance, keeping the tree depth logarithmic and traversal operations scalable.',
	},
	{
		frontSide: 'How do hash tables manage collisions?',
		backSide: 'Hash tables manage collisions primarily through two methods: chaining, where each bucket contains a linked list of entries that hash to the same bucket, and open addressing, where collisions are resolved by probing for the next available slot according to a predefined sequence.',
	},
	{
		frontSide: 'What is a self-adjusting tree and how does it differ from AVL?',
		backSide: 'A self-adjusting tree, like a Splay Tree, adjusts its structure on every operation (access, insertion, deletion) to move the involved nodes closer to the root, optimizing for recently accessed elements. Unlike AVL trees, which maintain strict balance through rotations to ensure O(log n) operations, Splay Trees do not guarantee perfectly balanced trees but offer amortized time complexity.',
	},
	{
		frontSide: 'What advantage does a circular queue have over a linear queue?',
		backSide: 'A circular queue efficiently utilizes space by treating the queue as a circular entity, allowing the rear of the queue to connect back to the front. This eliminates the need to shift elements when the front of the queue is dequeued, unlike in a linear queue, making it more space-efficient and reducing processing time for enqueue and dequeue operations.',
	},
	{
		frontSide: "In AVL trees, how are 'Double Rotations' used to maintain balance?",
		backSide: "Double rotations in AVL trees are used when a single rotation is insufficient to restore balance after an insertion or deletion. They are performed in two steps, involving a rotation on the child node followed by a rotation on the parent node, addressing cases where the imbalance involves a 'zig-zag' pattern.",
	},
	{
		frontSide: 'What strategy ensures efficient resizing of a dynamic hash table?',
		backSide: 'Efficient resizing of a dynamic hash table involves using a high load factor threshold to trigger resizing and choosing an optimal resizing factor to balance between space efficiency and minimizing rehash operations. Incremental rehashing may also be used to spread the rehash cost over several operations.',
	},
	{
		frontSide: "What role does the 'Height Factor' play in AVL tree operations?",
		backSide: "The 'Height Factor' in AVL tree operations, also known as the balance factor, is crucial for maintaining the tree's balance. It is calculated as the height difference between the left and right subtrees of a node. AVL trees require this factor to be -1, 0, or 1 for every node to ensure balanced tree structure and optimized search operations.",
	},
	{
		frontSide: 'What is the primary advantage of using a circular buffer in queue implementations?',
		backSide: 'The primary advantage of using a circular buffer in queue implementations is its efficient use of memory and constant-time operations for enqueue and dequeue actions. By treating the buffer as circular, it avoids the need for data shifting, thus optimizing space utilization and operational efficiency.',
	},
	{
		frontSide: 'What is a unique feature of circular queues?',
		backSide: 'A unique feature of circular queues is their ability to efficiently utilize space by wrapping around to the beginning of the queue when the end is reached, avoiding the wastage of space common in linear queues.',
	},
	{
		frontSide: 'What distinguishes a binary search tree (BST) from other binary trees?',
		backSide: 'A binary search tree (BST) is distinguished from other binary trees by its organized structure, where each node contains a value greater than all values in its left subtree and less than those in its right subtree, facilitating efficient searching, insertion, and deletion.',
	},
	{
		frontSide: 'What problem do AVL trees help solve in binary search trees?',
		backSide: 'AVL trees help solve the problem of height imbalance in binary search trees (BSTs). By enforcing a balance factor that keeps the tree height-balanced, AVL trees ensure that operations such as search, insert, and delete remain efficient, avoiding the degraded performance seen in unbalanced BSTs.',
	},
	{
		frontSide: 'In what situations are queues particularly useful?',
		backSide: 'Queues are particularly useful in situations that require processing elements in the order they arrive, like managing tasks in a first-come-first-served basis, handling asynchronous data transfers, or in breadth-first search algorithms.',
	},
	{
		frontSide: 'How does the removal of an element from a hash table work?',
		backSide: 'The removal of an element from a hash table typically involves marking the slot containing the element as deleted using a special marker or flag. This allows the hash table to handle future insertions and searches correctly, avoiding the pitfall of prematurely stopping a search due to an empty slot.',
	},
	{
		frontSide: 'What defines a binary heap?',
		backSide: 'A binary heap is defined as a complete binary tree where each node is either greater than or equal to (max heap) or less than or equal to (min heap) its children, ensuring the highest or lowest priority element is always at the root.',
	},
	{
		frontSide: 'How is a heap typically represented in memory?',
		backSide: 'A heap is typically represented in memory using an array. The hierarchical structure of the heap is mapped to the array indices: for any index i of the array, the left child is at 2*i + 1, the right child at 2*i + 2, and the parent at (i-1)/2.',
	},
	{
		frontSide: 'What is heapify, and why is it important?',
		backSide: "Heapify is a process of rearranging the elements of a heap to maintain its heap property (either max or min heap property) after an insertion or deletion. It's important because it ensures the heap structure is correctly maintained, allowing for efficient extraction of the maximum or minimum element.",
	},
	{
		frontSide: 'What operation is performed to insert a new element into a heap?',
		backSide: "To insert a new element into a heap, the element is initially added at the end of the heap (array), preserving the complete tree property. Then, a 'heapify up' or 'sift up' process is performed to restore the heap's order property by swapping the added element with its parent until the heap property is restored.",
	},
	{
		frontSide: 'How does heap sort work?',
		backSide: 'Heap sort works by first building a max heap from the unsorted data. Then, it repeatedly removes the largest element from the heap (the root), places it at the end of the array, and performs a heapify operation to restore the max heap property for the remaining elements, until the heap is empty.',
	},
	{
		frontSide: 'What is the time complexity of building a heap from an array?',
		backSide: 'The time complexity of building a heap from an unsorted array is O(n), where n is the number of elements in the array. This is more efficient than heapifying each element individually, which would suggest a complexity of O(n log n).',
	},
	{
		frontSide: 'What distinguishes a max heap from a min heap?',
		backSide: 'The distinction between a max heap and a min heap lies in the ordering of the elements: in a max heap, parent nodes are always larger than or equal to their children, making the maximum element at the root; in a min heap, parent nodes are smaller than or equal to their children, placing the minimum element at the root.',
	},
	{
		frontSide: "How is the 'heap extract' operation implemented and its complexity?",
		backSide: "The 'heap extract' operation removes the root element from the heap (the maximum in a max heap or the minimum in a min heap), replaces it with the last element in the heap, and then performs a 'heapify down' process to restore the heap's order property. This operation has a time complexity of O(log n) due to the 'heapify down' process.",
	},
	{
		frontSide: 'What is a priority queue, and how is it related to heaps?',
		backSide: 'A priority queue is a type of data structure that allows for the insertion of elements each with an associated priority and ensures that elements are removed according to their priority (either max or min priority). Heaps, especially binary heaps, are commonly used to efficiently implement priority queues due to their ability to quickly access the highest or lowest priority element.',
	},
	{
		frontSide: 'What makes heap operations efficient?',
		backSide: 'Heap operations are efficient because the structure of the heap ensures that the height of the tree is logarithmic relative to the number of elements. Therefore, operations like insertions, deletions, and accessing the maximum or minimum element have a time complexity of O(log n), making heaps efficient for various algorithms, including sorting and priority queue management.',
	},
	{
		frontSide: 'What mechanism does a BST use to optimize search speed?',
		backSide: 'A BST optimizes search speed through its binary structure, where each node has up to two children. This structure allows each comparison to skip about half of the remaining tree, thus reducing the average time complexity of search operations to O(log n) in a balanced tree.',
	},
	{
		frontSide: 'How does deleting a node with two children affect a BST?',
		backSide: 'Deleting a node with two children in a BST typically involves finding the in-order predecessor (the maximum value in the left subtree) or the in-order successor (the minimum value in the right subtree), replacing the deleted node with it, and then deleting the predecessor or successor node from its original position, maintaining the BST properties.',
	},
	{
		frontSide: 'What is the worst-case time complexity for inserting a new node into a BST and why?',
		backSide: 'The worst-case time complexity for inserting a new node into a BST is O(n), where n is the number of nodes in the tree. This occurs when the BST becomes a degenerate tree (like a linked list) due to inserting nodes in sorted order, leading to each insertion requiring traversal from the root to a leaf.',
	},
	{
		frontSide: 'How can a BST be used in range searches?',
		backSide: 'A BST can be effectively used in range searches by leveraging its ordered structure. Starting from the root, the tree is recursively traversed, selectively visiting nodes that fall within the range, thereby efficiently retrieving all values within a specified lower and upper bound.',
	},
	{
		frontSide: 'What are the benefits of balancing a BST?',
		backSide: 'Balancing a BST ensures that the depth of the tree is kept to a minimum, ideally maintaining a logarithmic height relative to the number of nodes. This balance significantly improves the efficiency of search, insert, and delete operations by avoiding worst-case scenarios and ensuring they remain close to O(log n).',
	},
	{
		frontSide: 'What is the impact of tree traversal methods on BST operations?',
		backSide: 'Tree traversal methods, such as in-order, pre-order, and post-order, impact BST operations by defining the sequence in which nodes are accessed or processed. For example, in-order traversal of a BST will process the nodes in ascending order, which is useful for operations that require sorted data.',
	},
	{
		frontSide: 'Describe how a BST can dynamically adjust its size.',
		backSide: 'A BST can dynamically adjust its size through insertions and deletions, growing or shrinking as needed without a predefined maximum capacity. This flexibility allows it to efficiently accommodate an arbitrary number of nodes, adapting to the runtime requirements of the application.',
	},
	{
		frontSide: 'How does the structure of a BST facilitate efficient minimum and maximum value searches?',
		backSide: 'The structure of a BST facilitates efficient searches for minimum and maximum values by allowing these elements to be found by simply traversing the tree to the leftmost (for minimum) or rightmost (for maximum) node, typically achieving O(log n) time complexity in balanced trees.',
	},
	{
		frontSide: 'In what way does the deletion of a leaf node differ from the deletion of a node with children in a BST?',
		backSide: "The deletion of a leaf node in a BST is straightforward, requiring simply removing the node and updating its parent's link to null. In contrast, deleting a node with children involves more complex steps, such as finding a suitable replacement to maintain the BST's ordered property.",
	},
	{
		frontSide: 'Explain the role of recursion in BST operations.',
		backSide: "Recursion plays a key role in BST operations, such as search, insertion, and deletion, by simplifying the process of traversing the tree. Recursive algorithms allow for elegant and efficient implementations that naturally follow the tree's hierarchical structure, reducing the complexity of code needed to manipulate the tree.",
	},
	{
		frontSide: 'What defines a priority queue?',
		backSide: 'A priority queue is a data structure where each element has a priority assigned to it. Elements are added in any order but removed from the queue according to their priority, with the highest (or lowest, depending on the implementation) priority elements being removed first.',
	},
	{
		frontSide: 'How does a priority queue differ from a regular queue?',
		backSide: 'Unlike a regular queue that operates on a first-in, first-out (FIFO) basis, a priority queue removes elements based on their priority. This means that an element with higher priority will be removed before those with lower priority, regardless of their insertion order.',
	},
	{
		frontSide: 'What data structures can be used to implement a priority queue?',
		backSide: 'Priority queues can be implemented using various data structures, including binary heaps (most common), balanced binary search trees, linked lists, or arrays. Binary heaps are particularly popular due to their efficiency in handling priority queue operations.',
	},
	{
		frontSide: 'What is the time complexity of inserting an element into a priority queue using a binary heap?',
		backSide: 'The time complexity of inserting an element into a priority queue implemented using a binary heap is O(log n), where n is the number of elements in the priority queue. This is because the heap may need to be restructured to maintain its properties after the insertion.',
	},
	{
		frontSide: "How is the 'peek' operation handled in a priority queue?",
		backSide: "The 'peek' operation in a priority queue returns the element with the highest priority without removing it from the queue. This operation allows a look at the next item to be removed, ensuring that the queue's order is preserved until actual removal occurs.",
	},
	{
		frontSide: 'What makes binary heaps efficient for priority queue implementations?',
		backSide: 'Binary heaps are efficient for priority queue implementations because they allow both insertion and removal of the highest (or lowest) priority element in O(log n) time. Their complete binary tree structure ensures a balanced tree, minimizing the path length for insertion and removal operations.',
	},
	{
		frontSide: 'Can priority queues have elements with the same priority?',
		backSide: 'Yes, priority queues can have multiple elements with the same priority. When elements with identical priorities are enqueued, the queue must decide on a strategy for their removal, which could be based on their insertion order (making it a stable priority queue) or other criteria.',
	},
	{
		frontSide: 'What is a stable priority queue?',
		backSide: 'A stable priority queue is a type of priority queue in which elements with the same priority are removed according to their order of insertion. This stability ensures that among elements of equal priority, the one inserted first will be removed first.',
	},
	{
		frontSide: 'How do priority queues facilitate graph algorithms?',
		backSide: "Priority queues facilitate graph algorithms by efficiently managing the nodes or edges to be processed based on their priority, which is often related to cost, distance, or other metrics. This is particularly useful in algorithms like Dijkstra's or Prim's, where selecting the next item to process based on priority is key to algorithm efficiency.",
	},
	{
		frontSide: 'What are some practical applications of priority queues?',
		backSide: 'Priority queues are used in a variety of applications, including scheduling tasks on a computer, managing the events in a simulation, network traffic management where packets are prioritized, and algorithm implementations such as Huffman coding for data compression and shortest path algorithms in graph theory.',
	},
];
