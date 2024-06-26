import * as React from 'react';

// const isDesktop = useMediaQuery('(min-width: 768px)');

export function useMediaQuery(query: string) {
	const [value, setValue] = React.useState(true);

	React.useEffect(() => {
		function onChange(event: MediaQueryListEvent) {
			setValue(event.matches);
		}

		const result = matchMedia(query);
		result.addEventListener('change', onChange);
		setValue(result.matches);

		return () => result.removeEventListener('change', onChange);
	}, [query]);

	return value;
}
