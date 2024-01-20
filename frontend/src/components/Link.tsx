import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Link = ({ href, children, className }: { href: string; children: React.ReactNode; className: string }) => {
	const navigate = useNavigate();
	return (
		<a
			className={className}
			onClick={(e) => {
				e.preventDefault();
				e.stopPropagation();
				navigate(href);
			}}
			style={{ cursor: 'pointer' }}
		>
			{children}
		</a>
	);
};
