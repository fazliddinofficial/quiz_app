import { SCHEMA_NAMES } from "@/constants/models";
import { AnswerInterface } from "@/types/answer";
import { model, Schema } from "mongoose";

const answerSchema = new Schema<AnswerInterface>(
  {
    isTrue: {
      type: Boolean,
      default: false,
    },
    question: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA_NAMES.Question,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const AnswerModel = model(SCHEMA_NAMES.Answer, answerSchema);
