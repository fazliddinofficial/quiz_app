import {
  AnswerInterface,
  CreateAnswerInterface,
  UpdateAnswerById,
} from "@/types/answer";
import { AnswerModel } from "./answer.model";
import { Types } from "mongoose";
import { QuestionModel } from "../questions/question.model";

export const createAnswer = async (
  { data }: CreateAnswerInterface,
  context
) => {
  try {
    const createdAnswer = await AnswerModel.create({ ...data });

    const updatedQuestion = await QuestionModel.findById(data.question);

    updatedQuestion.answers.push(createdAnswer._id);
    updatedQuestion.save();

    return createdAnswer;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateAnswerById = async (
  { answerId, data }: UpdateAnswerById,
  context
) => {
  try {
    const updatedAnswer = await AnswerModel.findByIdAndUpdate(
      answerId,
      { ...data },
      { new: true }
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
  context
) => {
  try {
    const deletedQuestion = await AnswerModel.findByIdAndDelete(answerId);

    if (!deletedQuestion) throw new Error("Answer not found!");

    return true;
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
  context
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

export const getAllAnswer = async (
  {
    questionId,
  }: {
    questionId: Types.ObjectId;
  },
  context
) => {
  try {
    const foundAllAnswers = await AnswerModel.find({ question: questionId });

    return foundAllAnswers;
  } catch (error) {
    throw new Error(error);
  }
};
