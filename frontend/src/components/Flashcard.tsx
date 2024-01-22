import { CardHeader } from './ui/card';

const Flashcard = () => {
	return (
		<div className="group w-[350px] h-[500px]">
			<div className="h-full w-full relative cursor-pointer hover:[transform: rotateY(180deg)] ">
				<CardHeader className="w-full h-full absolute">front</CardHeader>
				<CardHeader className="w-full h-full absolute">back</CardHeader>
			</div>
		</div>
	);
};

export default Flashcard;
