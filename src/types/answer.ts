import { Types } from "mongoose";

export interface AnswerInterface {
  text: string;
  isTrue: boolean;
  question: Types.ObjectId;
}

export interface UpdateAnswerById {
  data: AnswerInterface;
  answerId: Types.ObjectId;
}
