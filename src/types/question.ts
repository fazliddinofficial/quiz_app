import { Types } from "mongoose";

export interface QuestionInterface {
  text: string;
  answers: Types.ObjectId[];
  quiz: Types.ObjectId;
}

export interface UpdateQuestionInterface {
  questionId: Types.ObjectId;
  data: Omit<QuestionInterface, "quiz">;
}

export interface CreateQuestionInterface {
  data: QuestionInterface;
}
