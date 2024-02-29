import { ReactNode } from 'react';

const CollapsibleText = ({ children }: { children: ReactNode }) => {
	return <p className="collapse size-0 xl:visible xl:size-auto">{children}</p>;
};

export default CollapsibleText;
