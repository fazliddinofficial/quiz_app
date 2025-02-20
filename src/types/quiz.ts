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
  visibility?: QUIZ_VISIBILITY;
  theme: string;
  questionType: QUESTION_TYPE_ENUM;
  isFile?: boolean;
  user: Types.ObjectId;
  questions?: Types.ObjectId[]
}

export interface CreateQuizInterface {
  data: QuizInterface;
}

export interface UpdateQuizInterface {
  quizId: Types.ObjectId;
  data: Partial<QuizInterface>;
}
