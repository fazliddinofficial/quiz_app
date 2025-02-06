import { CreateQuizInterface, UpdateQuizInterface } from "@/types/quiz";
import { QuizModel } from "./quiz.model";
import { Types } from "mongoose";

export const createQuiz = async (data: CreateQuizInterface) => {
  try {
    const createdQuiz = await QuizModel.create({ ...data });

    return createdQuiz;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateQuiz = async ({ quizId, data }: UpdateQuizInterface) => {
  try {
    const updatedQuiz = await QuizModel.findByIdAndUpdate(
      quizId,
      { data },
      { new: true }
    );

    if (!updatedQuiz) {
      throw new Error("Quiz not found!")
    }

    return updatedQuiz;
  } catch (error) {
    throw new Error(error);
  }
};

export const getQuizById = async ({quizId}: {quizId: Types.ObjectId}) => {
  try {
    const foundQuiz = await QuizModel.findById(quizId);

    if (!foundQuiz) {
      throw new Error('Quiz not found!');
    }

    return foundQuiz;
  } catch (error) {
    throw new Error(error)
  }
};

export const deleteQuizById = async ({quizId}: {quizId: Types.ObjectId}) => {
  try {
    const deletedQuiz = await QuizModel.findByIdAndDelete(quizId);

    if (!deletedQuiz) {
      throw new Error('Quiz not found!');
    }

    return true;
  } catch (error) {
    throw new Error(error)
  }
}