import { SCHEMA_NAMES } from "@/constants/models";
import { QuestionInterface } from "@/types/question";
import { model, Schema, Types } from "mongoose";

const questionSchema = new Schema<QuestionInterface>(
  {
    text: {
      type: String,
      required: true,
    },
    answers: [
      {
        type: Schema.Types.ObjectId,
        ref: SCHEMA_NAMES.Question,
        required: true,
      },
    ],
    quiz: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA_NAMES.Quiz,
      required: true,
    },
    mark: {
      type: Number,
      default: 1000,
    },
    timeLimit: {
      type: Number,
      default: 10,
    },
  },
  { timestamps: true }
);

export const QuestionModel = model(SCHEMA_NAMES.Question, questionSchema);
