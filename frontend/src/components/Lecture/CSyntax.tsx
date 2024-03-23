import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CSyntax = ({ children }: { children: string }) => {
	return (
		<SyntaxHighlighter language="c" style={vs2015} wrapLongLines>
			{children}
		</SyntaxHighlighter>
	);
};

export default CSyntax;
