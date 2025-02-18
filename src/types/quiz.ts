import { Types } from "mongoose";

export enum QUESTION_TYPE_ENUM {
  quiz = "quiz",
  trueOrFalse = "trueOrFalse",
  puzzle = "puzzle",
  typeAnswer = "typeAnswer",
  slider = "slider",
  sayTheWord = "sayTheWord",
}

export enum QUIZ_VISIBILITY {
  public = "public",
  private = "private",
}

export interface QuizInterface {
  img?: string;
  title: string;
  description: string;
  timeLimit?: number;
  visibility?: QUIZ_VISIBILITY;
  theme: string;
  keyword: string;
  questionType: QUESTION_TYPE_ENUM;
  mark?: number;
  isFile?: boolean;
  user: Types.ObjectId;
}

export interface CreateQuizInterface {
  data: QuizInterface;
}

export interface UpdateQuizInterface {
  quizId: Types.ObjectId;
  data: Partial<QuizInterface>;
}
