import { AnswerInterface, UpdateAnswerById } from "@/types/answer";
import { AnswerModel } from "./answer.model";
import { Types } from "mongoose";

export const createAnswer = async (
  { isTrue, question, text }: AnswerInterface,
  context,
) => {
  try {
    const createdAnswer = await AnswerModel.create({
      isTrue,
      question,
      text,
    });

    return createdAnswer;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAnswerById = async (
  {
    answerId,
  }: {
    answerId: Types.ObjectId;
  },
  context,
) => {
  try {
    const foundAnswer = await AnswerModel.findById(answerId);

    if (!foundAnswer) {
      throw new Error("Answer not found!");
    }

    return foundAnswer;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateAnswerById = async (
  { answerId, data }: UpdateAnswerById,
  context,
) => {
  try {
    const updatedAnswer = await AnswerModel.findByIdAndUpdate(
      answerId,
      { ...data },
      { new: true },
    );

    if (!updatedAnswer) {
      throw new Error("Answer not found!");
    }

    return updatedAnswer;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAnswerById = async (
  { answerId }: { answerId: Types.ObjectId },
  context,
) => {
  try {
    const deletedQuestion = await AnswerModel.findByIdAndDelete(answerId);

    if (!deletedQuestion) throw new Error("Answer not found!");

    return true;
  } catch (error) {
    throw new Error(error);
  }
};
