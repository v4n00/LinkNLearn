import { ReactNode } from 'react';

const InlineCode = ({ children }: { children: ReactNode }) => {
	return <code className="inline-code">{children}</code>;
};

export default InlineCode;
