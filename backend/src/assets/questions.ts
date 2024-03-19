export const filesInCQuestions = [
	{
		quizId: 1,
		text: 'Which function is used to read a line from a file in C?',
		options: JSON.stringify(['fscanf', 'fgets', 'readline', 'getline']),
		answer: 'fgets',
	},
	{
		quizId: 1,
		text: "What does the function 'strtok' do in C?",
		options: JSON.stringify(['Concatenates two strings', 'Splits a string into tokens based on delimiters', 'Compares two strings', 'Copies a string']),
		answer: 'Splits a string into tokens based on delimiters',
	},
	{
		quizId: 1,
		text: 'How do you declare a buffer of 256 characters in C?',
		options: JSON.stringify(['char buffer[256];', 'int buffer[256];', 'string buffer[256];', 'buffer char[256];']),
		answer: 'char buffer[256];',
	},
	{
		quizId: 1,
		text: 'Which function converts a string to an integer in C?',
		options: JSON.stringify(['str2int', 'atoi', 'parseint', 'toint']),
		answer: 'atoi',
	},
	{
		quizId: 1,
		text: "What is the purpose of using 'strcpy' in C?",
		options: JSON.stringify(['To compare two strings', 'To concatenate two strings', 'To copy a string to another', 'To split a string into tokens']),
		answer: 'To copy a string to another',
	},
	{
		quizId: 1,
		text: "Which of the following is a common delimiter used with 'strtok'?",
		options: JSON.stringify([',', ';', "Both ',' and ';'", ':']),
		answer: "Both ',' and ';'",
	},
	{
		quizId: 1,
		text: "How can you read multiple lines from a file until EOF is reached using 'fgets'?",
		options: JSON.stringify(['Using a while loop with fgets() != EOF', 'Using a do-while loop until fgets() returns NULL', 'Using an if statement', 'Using a for loop with a fixed number of iterations']),
		answer: 'Using a do-while loop until fgets() returns NULL',
	},
	{
		quizId: 1,
		text: 'What is the correct way to open a file for reading in C?',
		options: JSON.stringify(["fopen('file.txt', 'r');", "fopen('file.txt', 'w');", "open('file.txt', 'r');", "file.open('file.txt', 'read');"]),
		answer: "fopen('file.txt', 'r');",
	},
	{
		quizId: 1,
		text: "How do you ensure a buffer string is properly null-terminated after using 'strtok'?",
		options: JSON.stringify(['By setting the last character to NULL', "No need, 'strtok' automatically null-terminates", "By using 'strcpy'", "By manually setting the character after the last token to '\\0'"]),
		answer: "No need, 'strtok' automatically null-terminates",
	},
	{
		quizId: 1,
		text: 'What must be done before using a buffer that will hold file data?',
		options: JSON.stringify(['Allocating memory using malloc', 'Initializing the buffer with zeros', 'Declaring the buffer as global', 'Nothing special is required']),
		answer: 'Initializing the buffer with zeros',
	},
	{
		quizId: 1,
		text: "In the context of file I/O, what is 'EOF'?",
		options: JSON.stringify(['End Of File', 'Execute Open File', 'End Of Function', 'External Object Finder']),
		answer: 'End Of File',
	},
	{
		quizId: 1,
		text: 'Which function is used to close a file in C?',
		options: JSON.stringify(['fclose', 'closefile', 'endfile', 'close']),
		answer: 'fclose',
	},
	{
		quizId: 1,
		text: 'How can you improve reading efficiency when processing large files in C?',
		options: JSON.stringify(['By reading one character at a time', 'By using larger buffers', 'By closing and reopening the file periodically', 'By using smaller buffers']),
		answer: 'By using larger buffers',
	},
	{
		quizId: 1,
		text: 'What is the correct way to check if opening a file in C was successful?',
		options: JSON.stringify(['Check if the file pointer is NULL', 'Check if the file pointer is not NULL', "Use the 'is_open' function", "Use the 'fopen_success' function"]),
		answer: 'Check if the file pointer is not NULL',
	},
	{
		quizId: 1,
		text: "Which parameter of 'fgets' specifies the maximum number of characters to be read from the file?",
		options: JSON.stringify(['The file pointer', 'The character array', 'The size parameter', 'The delimiter']),
		answer: 'The size parameter',
	},
	{
		quizId: 1,
		text: "Why should you be cautious when using 'strcpy' in C?",
		options: JSON.stringify(['It does not check for buffer overflow', 'It is deprecated in modern C', 'It automatically closes the file', 'It cannot copy strings with spaces']),
		answer: 'It does not check for buffer overflow',
	},
	{
		quizId: 1,
		text: "What does 'atoi' return if the conversion cannot be performed?",
		options: JSON.stringify(['0', '1', '-1', 'NULL']),
		answer: '0',
	},
];

export const pointersInCQuestions = [
	{
		quizId: 2,
		text: 'What is a pointer in C?',
		options: JSON.stringify(['A variable that stores the address of another variable', 'A function that points to another function', 'An array of characters', 'A type of arithmetic operation']),
		answer: 'A variable that stores the address of another variable',
	},
	{
		quizId: 2,
		text: 'How do you declare an integer pointer in C?',
		options: JSON.stringify(['int *ptr;', 'ptr int*;', '*ptr int;', 'int ptr*;']),
		answer: 'int *ptr;',
	},
	{
		quizId: 2,
		text: "What does the '&' operator do in the context of pointers?",
		options: JSON.stringify(['It gives the address of a variable', 'It creates a pointer to a variable', 'It dereferences a pointer', 'It checks if two pointers are equal']),
		answer: 'It gives the address of a variable',
	},
	{
		quizId: 2,
		text: 'What is the result of dereferencing a pointer?',
		options: JSON.stringify(['Getting the memory address the pointer is pointing to', 'Getting the value stored at the memory address the pointer is pointing to', 'Changing the memory address the pointer is pointing to', 'Comparing two pointers']),
		answer: 'Getting the value stored at the memory address the pointer is pointing to',
	},
	{
		quizId: 2,
		text: 'Which operator is used to dereference a pointer?',
		options: JSON.stringify(['* (Asterisk)', '& (Ampersand)', '-> (Arrow)', '[] (Brackets)']),
		answer: '* (Asterisk)',
	},
	{
		quizId: 2,
		text: 'What is a NULL pointer in C?',
		options: JSON.stringify(['A pointer that points to the memory address 0', 'A pointer that does not point to any memory address', 'A pointer with uninitialized memory address', 'A pointer that points to itself']),
		answer: 'A pointer that does not point to any memory address',
	},
	{
		quizId: 2,
		text: 'How can you increase the value a pointer is pointing to by 1?',
		options: JSON.stringify(['(*ptr)++;', 'ptr++;', '&ptr++;', '++*ptr;']),
		answer: '(*ptr)++;',
	},
	{
		quizId: 2,
		text: 'How do you pass a variable by reference to a function in C?',
		options: JSON.stringify(['By passing the variable directly to the function', "By passing the address of the variable using the '&' operator", 'By declaring the variable as global', 'By passing the value of the variable']),
		answer: "By passing the address of the variable using the '&' operator",
	},
	{
		quizId: 2,
		text: 'What does it mean when we say a function in C returns a pointer?',
		options: JSON.stringify(['The function returns the memory address of a variable', 'The function modifies the value of a pointer', 'The function returns a direct value', 'The function cannot return a value']),
		answer: 'The function returns the memory address of a variable',
	},
	{
		quizId: 2,
		text: 'Which of the following is a correct way to declare a pointer to a pointer in C?',
		options: JSON.stringify(['int **ptr;', 'int *ptr*;', 'int &ptr;', 'int ptr**;']),
		answer: 'int **ptr;',
	},
	{
		quizId: 2,
		text: 'How do you allocate memory dynamically for an integer in C?',
		options: JSON.stringify(['int *ptr = malloc(sizeof(int));', 'int *ptr = alloc(int);', 'int ptr = malloc(sizeof(int));', 'int *ptr = new int;']),
		answer: 'int *ptr = malloc(sizeof(int));',
	},
	{
		quizId: 2,
		text: 'What must be done with a pointer before using it to allocate memory dynamically?',
		options: JSON.stringify(['It must be set to NULL', 'It must be dereferenced', 'It must be initialized with a memory address', 'Nothing, it can be used directly']),
		answer: 'Nothing, it can be used directly',
	},
	{
		quizId: 2,
		text: 'What is the correct way to free dynamically allocated memory?',
		options: JSON.stringify(['delete ptr;', 'dealloc(ptr);', 'free(ptr);', 'remove(ptr);']),
		answer: 'free(ptr);',
	},
	{
		quizId: 2,
		text: 'What happens if you try to dereference a NULL pointer?',
		options: JSON.stringify(['The operation is safely ignored', 'A default value is returned', 'It leads to undefined behavior, potentially causing a segmentation fault', 'The pointer automatically gets allocated memory']),
		answer: 'It leads to undefined behavior, potentially causing a segmentation fault',
	},
	{
		quizId: 2,
		text: 'Which statement is true about pointer arithmetic?',
		options: JSON.stringify(['Pointer arithmetic can be performed on any type of pointer', 'Adding an integer to a pointer increases its address by that many bytes', 'Pointer arithmetic is not allowed in C', 'Adding 1 to a pointer increases its address by the size of the type it points to']),
		answer: 'Adding 1 to a pointer increases its address by the size of the type it points to',
	},
	{
		quizId: 2,
		text: 'How do you declare an array of 10 integer pointers?',
		options: JSON.stringify(['int *array[10];', 'int (*array)[10];', 'int array*[10];', 'int array[10*];']),
		answer: 'int *array[10];',
	},
];

export const singlyLinkedListQuestions = [
	{
		quizId: 3,
		text: 'What is a singly linked list?',
		options: JSON.stringify(['A collection of nodes where each node contains data and a reference to the next node in the sequence', 'A type of array', 'A collection of nodes without any order', 'A data structure where each element is linked to the previous and next element']),
		answer: 'A collection of nodes where each node contains data and a reference to the next node in the sequence',
	},
	{
		quizId: 3,
		text: 'How do you determine if a singly linked list is circular?',
		options: JSON.stringify(['By checking if the list has a tail node', 'If it can be iterated indefinitely', 'By checking if the next reference of the last node points to the head of the list', 'If the list has no nodes']),
		answer: 'By checking if the next reference of the last node points to the head of the list',
	},
	{
		quizId: 3,
		text: 'Which of the following operations is more efficient in a singly linked list compared to an array?',
		options: JSON.stringify(['Accessing an element by index', 'Inserting or deleting an element at the beginning of the list', 'Searching for an element', 'Sorting the list']),
		answer: 'Inserting or deleting an element at the beginning of the list',
	},
	{
		quizId: 3,
		text: "What does the 'next' pointer of the last node in a non-circular singly linked list point to?",
		options: JSON.stringify(['The first node', 'Null', 'The second to last node', 'Itself']),
		answer: 'Null',
	},
	{
		quizId: 3,
		text: 'In a singly linked list, how do you find the length of the list?',
		options: JSON.stringify(['By keeping a count variable that increments on each insertion', 'By iterating through the list until you reach the end', 'By accessing the length property', 'By checking the size of the data']),
		answer: 'By iterating through the list until you reach the end',
	},
	{
		quizId: 3,
		text: 'Which of the following is a disadvantage of a singly linked list over an array?',
		options: JSON.stringify(['Higher memory usage due to storage of next pointers', 'Fixed size', 'Better cache locality', 'Faster access time']),
		answer: 'Higher memory usage due to storage of next pointers',
	},
	{
		quizId: 3,
		text: 'How can you reverse a singly linked list?',
		options: JSON.stringify(['By swapping the head and tail', 'By iterating through the list and reversing the direction of the next pointers', 'By using a stack', 'Both B and C are correct']),
		answer: 'Both B and C are correct',
	},
	{
		quizId: 3,
		text: 'What is the time complexity of inserting a new node at the beginning of a singly linked list?',
		options: JSON.stringify(['O(1)', 'O(n)', 'O(log n)', 'O(n^2)']),
		answer: 'O(1)',
	},
	{
		quizId: 3,
		text: 'What would be the first step to insert a new node after a given node in a singly linked list?',
		options: JSON.stringify(['Find the given node', 'Create a new node', 'Update the next pointer of the new node', 'Update the next pointer of the given node']),
		answer: 'Find the given node',
	},
	{
		quizId: 3,
		text: 'Which of the following is true about the deletion of a node in a singly linked list?',
		options: JSON.stringify(['You must have access to the node preceding the node to be deleted', 'You can delete a node without any reference to other nodes', 'It has a time complexity of O(1)', "You need to update the 'next' pointer of the node to be deleted"]),
		answer: 'You must have access to the node preceding the node to be deleted',
	},
	{
		quizId: 3,
		text: 'In a circular singly linked list, how is the last node recognized?',
		options: JSON.stringify(['It points to null', 'It has a special marker', 'Its next pointer points to the head of the list', "It is marked as 'end'"]),
		answer: 'Its next pointer points to the head of the list',
	},
	{
		quizId: 3,
		text: 'Which of the following operations is not a typical function of a singly linked list?',
		options: JSON.stringify(['Insertion at the end', 'Deletion from the beginning', 'Random access to an element', 'Searching for an element']),
		answer: 'Random access to an element',
	},
	{
		quizId: 3,
		text: "What does the 'tail' node in a non-circular singly linked list point to?",
		options: JSON.stringify(['The head node', 'The second to last node', 'Null', 'Itself']),
		answer: 'Null',
	},
	{
		quizId: 3,
		text: "In the context of a singly linked list, what is a 'node'?",
		options: JSON.stringify(['A function that adds elements to the list', 'A variable that stores the length of the list', 'A structure containing a data part and a link part', 'The process of linking two lists together']),
		answer: 'A structure containing a data part and a link part',
	},
	{
		quizId: 3,
		text: 'Which statement is true for a circular singly linked list?',
		options: JSON.stringify(['The head node points to null', 'It cannot have more than 10 nodes', 'The tail node points to the head node', 'It is faster than a non-circular list for inserting nodes']),
		answer: 'The tail node points to the head node',
	},
	{
		quizId: 3,
		text: 'What advantage does a singly linked list have over an array?',
		options: JSON.stringify(['Faster access times for any element', 'Lower memory overhead', 'Dynamic size', 'Better cache performance']),
		answer: 'Dynamic size',
	},
	{
		quizId: 3,
		text: 'How do you find the length of a circular singly linked list?',
		options: JSON.stringify(['By counting nodes until you reach null', 'By iterating through the list until you reach the head node again', 'By dividing the total memory size by the size of a node', 'Length cannot be determined']),
		answer: 'By iterating through the list until you reach the head node again',
	},
	{
		quizId: 3,
		text: 'What is the first step in deleting a node from a singly linked list (not the head node)?',
		options: JSON.stringify(['Set the next pointer of the previous node to null', 'Find the node immediately before the one to be deleted', 'Create a new node', 'Copy the list']),
		answer: 'Find the node immediately before the one to be deleted',
	},
	{
		quizId: 3,
		text: 'How is a singly linked list typically represented in memory?',
		options: JSON.stringify(['A series of contiguous memory blocks', 'A collection of nodes where each node has a data part and a pointer to the next node', 'A fixed-size array', 'A hash table for direct access']),
		answer: 'A collection of nodes where each node has a data part and a pointer to the next node',
	},
	{
		quizId: 3,
		text: 'Which of the following is not a characteristic of a circular singly linked list?',
		options: JSON.stringify(['It has a tail node that points to null', 'Traversal can be infinite if not careful', 'Can be used to implement queues and stacks', 'The last node points to the first node']),
		answer: 'It has a tail node that points to null',
	},
	{
		quizId: 3,
		text: 'What is the time complexity of adding a new node to the beginning of a singly linked list?',
		options: JSON.stringify(['O(1)', 'O(n)', 'O(log n)', 'O(n^2)']),
		answer: 'O(1)',
	},
	{
		quizId: 3,
		text: 'What is the time complexity of deleting the last node of a singly linked list?',
		options: JSON.stringify(['O(1)', 'O(n)', 'O(log n)', 'O(n^2)']),
		answer: 'O(n)',
	},
	{
		quizId: 3,
		text: 'What is the time complexity of searching for a value in an unsorted singly linked list?',
		options: JSON.stringify(['O(1)', 'O(n)', 'O(log n)', 'O(n^2)']),
		answer: 'O(n)',
	},
];

export const doublyLinkedListQuestions = [
	{
		quizId: 4,
		text: 'What is a doubly linked list?',
		options: JSON.stringify(['A list where each node has a pointer to the next node only', 'A list where each node has two pointers: one to the next node and one to the previous node', 'A list where nodes are arranged in a circular manner', 'A list that can only store integers']),
		answer: 'A list where each node has two pointers: one to the next node and one to the previous node',
	},
	{
		quizId: 4,
		text: 'How do you insert a new node at the beginning of a doubly linked list?',
		options: JSON.stringify(["By setting the new node's next pointer to the current first node", "By setting the new node's previous pointer to NULL and next pointer to the current first node", 'By updating the head pointer to point to the new node', 'Both B and C are correct']),
		answer: 'Both B and C are correct',
	},
	{
		quizId: 4,
		text: 'What is the time complexity of inserting a node at the end of a doubly linked list?',
		options: JSON.stringify(['O(1)', 'O(n)', 'O(log n)', 'O(n^2)']),
		answer: 'O(1)',
	},
	{
		quizId: 4,
		text: 'In a doubly linked list, how is the tail node defined?',
		options: JSON.stringify(['As the node with no previous node', 'As the node with no next node', 'As the node pointing to the head in a circular list', 'As the node located at the center of the list']),
		answer: 'As the node with no next node',
	},
	{
		quizId: 4,
		text: 'What advantage does a doubly linked list have over a singly linked list?',
		options: JSON.stringify(['It requires less memory', 'It allows traversal in both directions', 'It has faster access times', 'It can only store unique elements']),
		answer: 'It allows traversal in both directions',
	},
	{
		quizId: 4,
		text: 'What is a circular doubly linked list?',
		options: JSON.stringify(['A list where the tail node points to NULL', "A list where the tail node's next pointer points to the head node and the head node's previous pointer points to the tail node", 'A list that cannot have more than 10 nodes', 'A list with nodes that have auto-referencing pointers']),
		answer: "A list where the tail node's next pointer points to the head node and the head node's previous pointer points to the tail node",
	},
	{
		quizId: 4,
		text: 'How do you delete a node from the middle of a doubly linked list?',
		options: JSON.stringify(["By setting the previous node's next pointer to the node after the one to be deleted", "By setting the next node's previous pointer to the node before the one to be deleted", 'By freeing the memory allocated for the node', 'All of the above']),
		answer: 'All of the above',
	},
	{
		quizId: 4,
		text: 'What must be updated when adding a node to the end of a non-empty circular doubly linked list?',
		options: JSON.stringify(["The new node's next pointer must point to the head", "The tail node's next pointer must point to the new node", "The head node's previous pointer must point to the new node", 'All of the above']),
		answer: 'All of the above',
	},
	{
		quizId: 4,
		text: 'Which of the following is not a direct benefit of using a doubly linked list?',
		options: JSON.stringify(['Efficient memory use', 'Bidirectional traversal', 'Ease of insertion and deletion', 'Fixed memory allocation']),
		answer: 'Fixed memory allocation',
	},
	{
		quizId: 4,
		text: 'How do you reverse a doubly linked list?',
		options: JSON.stringify(['By swapping the next and previous pointers of all nodes', 'By creating a new list with the opposite order', 'By recursively calling a reverse function', 'By iterating through the list once']),
		answer: 'By swapping the next and previous pointers of all nodes',
	},
	{
		quizId: 4,
		text: "What does the 'head' node in a doubly linked list represent?",
		options: JSON.stringify(['The last node in the list', 'The middle node in the list', 'The first node in the list', 'A random node in the list']),
		answer: 'The first node in the list',
	},
	{
		quizId: 4,
		text: 'In the deletion of a node in a doubly linked list, what is the first step?',
		options: JSON.stringify(['Free the node', "Update the next node's previous pointer", 'Find the node to be deleted', "Update the previous node's next pointer"]),
		answer: 'Find the node to be deleted',
	},
	{
		quizId: 4,
		text: 'Which scenario demonstrates the best use case for a doubly linked list?',
		options: JSON.stringify(['When you need constant time insertion/deletion from both ends of the list', 'When you need to conserve memory', 'When you need to frequently access elements in the middle of the list quickly', "When you're working with data that doesn't change"]),
		answer: 'When you need constant time insertion/deletion from both ends of the list',
	},
	{
		quizId: 4,
		text: 'What must be true for a doubly linked list to be considered circular?',
		options: JSON.stringify(['It must contain a loop', "Its tail node must point to the head node, and the head node's previous pointer must point to the tail node", 'It must have a fixed size', 'Its nodes must be sorted in ascending order']),
		answer: "Its tail node must point to the head node, and the head node's previous pointer must point to the tail node",
	},
	{
		quizId: 4,
		text: 'How can you efficiently search for an element in a doubly linked list?',
		options: JSON.stringify(['Starting from the head, traverse one node at a time until the element is found', 'Starting from the tail, traverse one node at a time until the element is found', 'Either A or B, depending on which end is closer to the desired element', 'You cannot search in a doubly linked list']),
		answer: 'Either A or B, depending on which end is closer to the desired element',
	},
];

export const stackAndQueueQuestions = [
	{
		quizId: 5,
		text: 'What is a stack?',
		options: JSON.stringify(['A first-in, first-out (FIFO) data structure', 'A last-in, first-out (LIFO) data structure', 'A data structure where elements are sorted', 'A data structure that allows random access to elements']),
		answer: 'A last-in, first-out (LIFO) data structure',
	},
	{
		quizId: 5,
		text: 'Which operation adds an element to the top of a stack?',
		options: JSON.stringify(['enqueue', 'dequeue', 'push', 'pop']),
		answer: 'push',
	},
	{
		quizId: 5,
		text: 'What operation removes an element from the front of a queue?',
		options: JSON.stringify(['enqueue', 'dequeue', 'push', 'pop']),
		answer: 'dequeue',
	},
	{
		quizId: 5,
		text: 'Which of the following is not a characteristic of a queue?',
		options: JSON.stringify(['LIFO principle', 'FIFO principle', 'Used in breadth-first search', 'Can be implemented using linked lists']),
		answer: 'LIFO principle',
	},
	{
		quizId: 5,
		text: "In a stack, what does the 'pop' operation do?",
		options: JSON.stringify(['Adds a new element to the stack', 'Removes and returns the top element of the stack', 'Returns the top element without removing it', 'Removes all elements from the stack']),
		answer: 'Removes and returns the top element of the stack',
	},
	{
		quizId: 5,
		text: 'How can you implement a queue using two stacks?',
		options: JSON.stringify(['By pushing elements onto one stack and popping them off to another', 'By interleaving the elements of the two stacks', 'By keeping one stack empty at all times', "It's not possible to implement a queue using stacks"]),
		answer: 'By pushing elements onto one stack and popping them off to another',
	},
	{
		quizId: 5,
		text: 'What is underflow in the context of a stack?',
		options: JSON.stringify(['Adding an element to an already full stack', 'Removing an element from an empty stack', 'Accessing the bottom element of the stack', 'Rotating the elements of the stack']),
		answer: 'Removing an element from an empty stack',
	},
	{
		quizId: 5,
		text: 'What is overflow in the context of a queue?',
		options: JSON.stringify(['Adding an element to a full queue', 'Removing an element from an empty queue', 'Accessing the first element of the queue', 'Creating a loop in the queue']),
		answer: 'Adding an element to a full queue',
	},
	{
		quizId: 5,
		text: 'Which data structure would be most efficient for reversing the order of elements?',
		options: JSON.stringify(['Stack', 'Queue', 'Array', 'Linked List']),
		answer: 'Stack',
	},
	{
		quizId: 5,
		text: "What is the time complexity of the 'push' operation in a stack implemented using a linked list?",
		options: JSON.stringify(['O(1)', 'O(n)', 'O(log n)', 'O(n^2)']),
		answer: 'O(1)',
	},
	{
		quizId: 5,
		text: 'Which of the following scenarios is best suited for a queue?',
		options: JSON.stringify(['Managing a list of undo operations in a text editor', 'Handling requests to a printer in the order they were received', 'Evaluating expressions in Reverse Polish Notation', 'Implementing a recursive function']),
		answer: 'Handling requests to a printer in the order they were received',
	},
	{
		quizId: 5,
		text: 'How does a circular queue differ from a linear queue?',
		options: JSON.stringify(['It allows for faster insertion and deletion', 'It can only store a fixed number of elements', 'It reuses the space of consumed elements', 'It operates on a LIFO principle']),
		answer: 'It reuses the space of consumed elements',
	},
	{
		quizId: 5,
		text: 'What is the maximum number of elements a queue can hold when implemented using an array of size N?',
		options: JSON.stringify(['N', 'N-1', 'N/2', '2N']),
		answer: 'N-1',
	},
	{
		quizId: 5,
		text: 'In which of the following applications would a stack be most appropriately used?',
		options: JSON.stringify(['Scheduling tasks in a multi-threaded environment', 'Storing the history of web pages visited in a browser session', 'Managing a print queue for a printer', 'Balancing the load between multiple computing resources']),
		answer: 'Storing the history of web pages visited in a browser session',
	},
	{
		quizId: 5,
		text: 'Which operation is used to add an element to the rear of the queue?',
		options: JSON.stringify(['push', 'pop', 'enqueue', 'dequeue']),
		answer: 'enqueue',
	},
	{
		quizId: 5,
		text: "What data structure is primarily used to implement the 'undo' functionality in applications?",
		options: JSON.stringify(['Queue', 'Stack', 'Array', 'Linked List']),
		answer: 'Stack',
	},
	{
		quizId: 5,
		text: 'What is a priority queue?',
		options: JSON.stringify(['A queue where elements are added based on their priority', 'A queue that rearranges elements based on FIFO principle', 'A special type of stack with priority levels', 'A data structure that cannot be implemented in programming']),
		answer: 'A queue where elements are added based on their priority',
	},
	{
		quizId: 5,
		text: 'Which statement is true about both stacks and queues?',
		options: JSON.stringify(['They both operate on a FIFO principle', 'They both operate on a LIFO principle', 'They are both linear data structures', 'They can both be implemented using arrays or linked lists']),
		answer: 'They can both be implemented using arrays or linked lists',
	},
	{
		quizId: 5,
		text: 'How can you simulate a queue using only one stack?',
		options: JSON.stringify(['By reversing the order of elements with each enqueue operation', 'It is not possible to simulate a queue using only one stack', 'By using dynamic arrays', 'By periodically reversing the stack']),
		answer: 'It is not possible to simulate a queue using only one stack',
	},
	{
		quizId: 5,
		text: 'What is the result of attempting to pop an element from an empty stack?',
		options: JSON.stringify(['Underflow', 'Overflow', 'Null', 'Undefined behavior']),
		answer: 'Underflow',
	},
	{
		quizId: 5,
		text: 'Which of the following is an advantage of using a linked list to implement a stack over using an array?',
		options: JSON.stringify(['Fixed size', 'Better cache locality', 'Dynamic resizing', 'Faster access time']),
		answer: 'Dynamic resizing',
	},
	{
		quizId: 5,
		text: 'In a queue, where does a newly arriving element get placed?',
		options: JSON.stringify(['At the front', 'At the rear', 'In the middle, based on its priority', 'In a random position']),
		answer: 'At the rear',
	},
	{
		quizId: 5,
		text: 'What is a double-ended queue (deque)?',
		options: JSON.stringify(['A queue that only allows insertion and deletion from the front', 'A queue that allows insertion and deletion at both ends', 'A stack that allows pushing and popping from both ends', 'A priority queue with two different sets of priorities']),
		answer: 'A queue that allows insertion and deletion at both ends',
	},
];
export const heapAndPrioQueueQuestions = 
[
    {
        "quizId": 6,
        "text": "What is a heap?",
        "options": [
            "A type of sorting algorithm",
            "A balanced binary tree",
            "A complete binary tree where each node is greater than or equal to its children",
            "An array that stores elements in random order"
        ],
        "answer": "A complete binary tree where each node is greater than or equal to its children"
    },
    {
        "quizId": 6,
        "text": "Which operation is typically used to add an element to a heap?",
        "options": [
            "insert",
            "push",
            "enqueue",
            "add"
        ],
        "answer": "insert"
    },
    {
        "quizId": 6,
        "text": "What is the time complexity of inserting an element into a binary heap?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(log n)"
    },
    {
        "quizId": 6,
        "text": "In a max heap, where is the largest element found?",
        "options": [
            "At the root of the heap",
            "At the last node of the heap",
            "At any leaf node",
            "In the middle of the heap"
        ],
        "answer": "At the root of the heap"
    },
    {
        "quizId": 6,
        "text": "What is a priority queue?",
        "options": [
            "A queue where elements are ordered by insertion time",
            "A data structure where each element has a priority and the element with the highest priority is served first",
            "A FIFO data structure",
            "A LIFO data structure"
        ],
        "answer": "A data structure where each element has a priority and the element with the highest priority is served first"
    },
    {
        "quizId": 6,
        "text": "Which of the following is not a characteristic of a min heap?",
        "options": [
            "The root is the smallest element in the heap",
            "Each node is smaller than its parent",
            "It can be used to implement a priority queue",
            "Each node is greater than or equal to its children"
        ],
        "answer": "Each node is smaller than its parent"
    },
    {
        "quizId": 6,
        "text": "How is a heap typically represented in memory?",
        "options": [
            "Linked list",
            "Array",
            "Graph",
            "Stack"
        ],
        "answer": "Array"
    },
    {
        "quizId": 6,
        "text": "What is heapify?",
        "options": [
            "A process to convert a binary tree into a balanced binary tree",
            "A process to convert an unordered array into a sorted array",
            "A process to create a heap out of a given array of elements",
            "A process to increase the value of all elements in a heap"
        ],
        "answer": "A process to create a heap out of a given array of elements"
    },
    {
        "quizId": 6,
        "text": "What is the time complexity of building a heap from an unsorted array?",
        "options": [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n log n)"
        ],
        "answer": "O(n)"
    },
    {
        "quizId": 6,
        "text": "Which operation removes the element with the highest priority from a priority queue?",
        "options": [
            "deleteMax",
            "pop",
            "dequeue",
            "remove"
        ],
        "answer": "deleteMax"
    },
    {
        "quizId": 6,
        "text": "How do you find the kth largest element using a heap?",
        "options": [
            "By inserting all elements into a min heap and performing k extract-min operations",
            "By inserting all elements into a max heap and performing k extract-max operations",
            "By sorting the heap and accessing the kth index",
            "By performing a binary search on the heap"
        ],
        "answer": "By inserting all elements into a max heap and performing k extract-max operations"
    },