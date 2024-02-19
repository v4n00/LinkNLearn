export interface UserType {
	id: string;
	email: string;
	token?: string;
}

export interface QuizType {
	id?: number;
	title: string;
	questions?: QuestionType[];
}

export interface QuestionType {
	id?: number;
	quizId: number;
	text: string;
	options: string[];
}

export interface FlashcardType {
	id?: number;
	userId?: number;
	frontSide: string;
	backSide: string;
}
