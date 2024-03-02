export interface UserType {
	id: number;
	email: string;
	token?: string;
}

export interface QuizType {
	id: number;
	title: string;
	questions: QuestionType[];
}

export interface QuizEditType {
	id?: number;
	title: string;
}

export interface QuizProgressType {
	id: number;
	userId: number;
	quizId: number;
	score: number;
	maxScore: number;
	dateTaken: string;
}

export interface AnswerType {
	questionId: number;
	answer: string;
}

export interface QuestionType {
	id: number;
	quizId: number;
	text: string;
	options: string[];
}

export interface QuestionEditType {
	id?: number;
	quizId: number;
	text: string;
	options: string[];
	answer: string;
}

export interface QuizResultType {
	score: number;
	maxScore: number;
}

export interface FlashcardType {
	id?: number;
	userId?: number;
	frontSide: string;
	backSide: string;
}
