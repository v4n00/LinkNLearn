# Authentication API Routes

| Route            | Method | Parameters | Request Body                                                 | Middleware | Description                                                                 |
| ---------------- | ------ | ---------- | ------------------------------------------------------------ | ---------- | --------------------------------------------------------------------------- |
| `/user/login`    | POST   | None       | `email`, `password` (as `LoginRequest`)                      | None       | Authenticates a user and returns a token. Special handling for admin login. |
| `/user/register` | POST   | None       | `email`, `password`, `repeatPassword` (as `RegisterRequest`) | None       | Registers a new user, with email and password validation.                   |

# Flashcard API Routes

| Route             | Method | Parameters    | Request Body            | Middleware                                | Description                                  |
| ----------------- | ------ | ------------- | ----------------------- | ----------------------------------------- | -------------------------------------------- |
| `/flashcard/user` | GET    | None          | None                    | `verifyToken`                             | Retrieves flashcards for the logged-in user. |
| `/flashcard/:id`  | GET    | `id` (in URL) | None                    | `verifyToken`                             | Retrieves a specific flashcard by ID.        |
| `/flashcard`      | GET    | None          | None                    | None                                      | Lists all flashcards.                        |
| `/flashcard`      | POST   | None          | `frontSide`, `backSide` | `verifyToken`                             | Creates a new flashcard.                     |
| `/flashcard/:id`  | PATCH  | `id` (in URL) | `update-data`           | `verifyToken`, `verifyFlashcardOwnership` | Updates a flashcard by ID.                   |
| `/flashcard/:id`  | DELETE | `id` (in URL) | None                    | `verifyToken`, `verifyFlashcardOwnership` | Deletes a flashcard by ID.                   |

# Quiz API Routes

| Route                     | Method | Parameters        | Request Body  | Middleware                        | Description                              |
| ------------------------- | ------ | ----------------- | ------------- | --------------------------------- | ---------------------------------------- |
| `/quiz/:quizId/verify`    | POST   | `quizId` (in URL) | `answers`     | None                              | Verifies quiz answers and returns score. |
| `/quiz/:userId/progress/` | GET    | `userId` (in URL) | None          | `verifyToken`                     | Retrieves quiz progress for a user.      |
| `/quiz`                   | GET    | None              | None          | None                              | Lists all quizzes.                       |
| `/quiz/:id`               | GET    | `id` (in URL)     | None          | None                              | Retrieves a quiz by ID.                  |
| `/quiz`                   | POST   | None              | `title`       | `verifyToken`, `verifyAdminToken` | Creates a new unpublished quiz.          |
| `/quiz/:id`               | PATCH  | `id` (in URL)     | `update-data` | `verifyToken`, `verifyAdminToken` | Updates a quiz by ID.                    |
| `/quiz/:id/publish`       | PATCH  | `id` (in URL)     | None          | `verifyToken`, `verifyAdminToken` | Publishes a quiz.                        |
| `/quiz/:id`               | DELETE | `id` (in URL)     | None          | `verifyToken`, `verifyAdminToken` | Deletes a quiz by ID.                    |

# Question API Routes

| Route                   | Method | Parameters            | Request Body                | Middleware                        | Description                              |
| ----------------------- | ------ | --------------------- | --------------------------- | --------------------------------- | ---------------------------------------- |
| `/question`             | POST   | None                  | `quizId`, `text`, `options` | `verifyToken`, `verifyAdminToken` | Adds a new question to a quiz.           |
| `/question/:quizId`     | GET    | `quizId` (in URL)     | None                        | `verifyToken`, `verifyAdminToken` | Retrieves questions for a specific quiz. |
| `/question/:questionId` | PATCH  | `questionId` (in URL) | `update-data`               | `verifyToken`, `verifyAdminToken` | Updates a question by its ID.            |
| `/question/:questionId` | DELETE | `questionId` (in URL) | None                        | `verifyToken`, `verifyAdminToken` | Deletes a question by its ID.            |
