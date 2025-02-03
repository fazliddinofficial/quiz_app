import { Types } from "mongoose";

export interface QuestionInterface {
  text: string;
  answers: Types.ObjectId[];
  quiz: Types.ObjectId;
}
