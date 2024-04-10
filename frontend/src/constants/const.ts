const isDebugging = true;

export const PORT: number = 3000;
export const APIURL = `http${isDebugging ? '' : 's'}://${isDebugging ? 'localhost' : import.meta.env.VITE_SERVER_ADDRESS}:${PORT}`;
export const QUIZ_THRESHOLD = 0.7;
export const DS_LINKS: { title: string; href: string }[] = [
	{
		title: 'Simple Linked List',
		href: '/data-structures/simple-linked-list',
	},
	{
		title: 'Double Linked List',
		href: '/data-structures/double-linked-list',
	},
	{
		title: 'Hash Table',
		href: '/data-structures/hash-table',
	},
	{
		title: 'Binary Search Tree',
		href: '/data-structures/binary-search-tree',
	},
];
