export interface User {
	id: string;
	email: string;
	authToken?: string;
}

export interface Quiz {
	id?: number;
	title: string;
	isPublished?: boolean;
	questions?: Question[];
}

export interface Question {
	id?: number;
	quizId: number;
	text: string;
	options: QuestionText | string;
}

export interface QuestionText {
	option1: string;
	option2: string;
	option3?: string;
	option4?: string;
	answer?: string;
}
