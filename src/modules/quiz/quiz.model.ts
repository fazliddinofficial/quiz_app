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
    mark: {
      type: Number,
      default: 1000,
    },
    title: {
      type: String,
      required: true,
    },
    timeLimit: {
      type: Number,
      default: 10,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    keyword: {
      type: String,
      required: true,
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
