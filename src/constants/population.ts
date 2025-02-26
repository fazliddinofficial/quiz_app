import { SCHEMA_NAMES } from "./models";

export const POPULATIONS = {
  question: [
    { path: "answers", model: SCHEMA_NAMES.Answer },
    { path: "quiz", model: SCHEMA_NAMES.Quiz },
  ],
  quiz: [{ path: "questions", model: SCHEMA_NAMES.Question }],
  game: [
    { path: "playersId", model: SCHEMA_NAMES.User },
    { path: "quizId", model: SCHEMA_NAMES.Quiz },
  ],
};
