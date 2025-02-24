import { FileUpload } from "graphql-upload-minimal";
import { Types } from "mongoose";

export interface AnswerInterface {
  _id: Types.ObjectId;
  text: string;
  isTrue: boolean;
  question: Types.ObjectId;
  file: FileUpload;
}

export interface UpdateAnswerById {
  data: AnswerInterface;
  answerId: Types.ObjectId;
}

export interface CreateAnswerInterface {
  data: AnswerInterface;
}
