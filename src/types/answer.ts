import { Types } from "mongoose";

export interface AnswerInterface {
  text: string;
  isTrue: boolean;
  question: Types.ObjectId;
}
