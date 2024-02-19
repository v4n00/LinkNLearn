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
	options: QuestionTextType | string;
}

export interface QuestionTextType {
	option1: string;
	option2: string;
	option3?: string;
	option4?: string;
	answer?: string;
}

export interface FlashcardType {
	id?: number;
	userId?: number;
	frontSide: string;
	backSide: string;
}
