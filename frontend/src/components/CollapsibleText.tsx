import { ReactNode } from 'react';

const CollapsibleText = ({ children }: { children: ReactNode }) => {
	return <p className="text-wrap collapse size-0 md:visible md:size-auto">{children}</p>;
};

export default CollapsibleText;
