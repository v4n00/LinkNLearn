import SinglyLinkedList from '@/assets/data structures/SinglyLinkedList';
import useDS from '@/hooks/useDS';
import LLviz from '../LL/LLviz';

const SLLviz = () => {
	const { data } = useDS();
	const ds = (data.dataStructure as SinglyLinkedList<number>).toArray();

	return <LLviz data={ds} type="SLL" />;
};

export default SLLviz;
