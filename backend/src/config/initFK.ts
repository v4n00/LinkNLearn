import flashcard from '../models/flashcard';
import question from '../models/question';
import quiz from '../models/quiz';
import quizProgress from '../models/quizProgress';
import user from '../models/user';

export default function initFK() {
	user.hasMany(flashcard, { foreignKey: 'userId' });
	flashcard.belongsTo(user, { foreignKey: 'userId' });

	user.hasMany(quizProgress, { foreignKey: 'userId' });
	quizProgress.belongsTo(user, { foreignKey: 'userId' });

	quiz.hasMany(quizProgress, { foreignKey: 'quizId' });
	quizProgress.belongsTo(quiz, { foreignKey: 'quizId' });

	quiz.hasMany(question, { foreignKey: 'quizId' });
	question.belongsTo(quiz, { foreignKey: 'quizId' });
}
