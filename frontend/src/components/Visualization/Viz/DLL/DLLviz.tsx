import DoublyLinkedList from '@/assets/data structures/DoublyLinkedList';
import useDS from '@/hooks/useDS';
import LLviz from '../LL/LLviz';

const DLLviz = () => {
	const { data } = useDS();
	const ds = (data.dataStructure as DoublyLinkedList<number>).toArray();

	return <LLviz ds={ds} type="DLL" />;
};

export default DLLviz;
