import { SCHEMA_NAMES } from "@/constants/models";
import {
  QUESTION_TYPE_ENUM,
  QUIZ_VISIBILITY,
  QuizInterface,
} from "@/types/quiz";
import { model, Schema, Types } from "mongoose";

const quizSchema = new Schema<QuizInterface>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: SCHEMA_NAMES.User,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    theme: {
      type: String,
      required: true,
    },
    visibility: {
      type: String,
      enum: QUIZ_VISIBILITY,
      default: QUIZ_VISIBILITY.public,
    },
    questionType: {
      type: String,
      enum: QUESTION_TYPE_ENUM,
      required: true,
    },
    isFile: {
      type: Boolean,
      default: false,
    },
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: SCHEMA_NAMES.Question,
      },
    ],
  },
  { timestamps: true }
);

export const QuizModel = model(SCHEMA_NAMES.Quiz, quizSchema);
