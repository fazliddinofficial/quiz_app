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
  },
  { timestamps: true }
);

export const QuestionModel = model(SCHEMA_NAMES.Question, questionSchema);
