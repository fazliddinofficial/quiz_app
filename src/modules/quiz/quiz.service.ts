import { CreateQuizInterface, UpdateQuizInterface } from "@/types/quiz";
import { QuizModel } from "./quiz.model";
import { Types } from "mongoose";
import { POPULATIONS } from "@/constants/population";
import { QuestionModel } from "../questions/question.model";

export const createQuiz = async ({ data }: CreateQuizInterface, context) => {
  try {
    const foundQuiz = await QuizModel.find({ title: data.title });

    if (foundQuiz) {
      throw new Error("Choose another title!");
    }

    const createdQuiz = await QuizModel.create({
      ...data,
      user: context.userId,
    });

    return createdQuiz.populate(POPULATIONS.quiz);
  } catch (error) {
    throw new Error(error);
  }
};

export const updateQuiz = async (
  { quizId, data }: UpdateQuizInterface,
  context
) => {
  try {
    const updatedQuiz = await QuizModel.findByIdAndUpdate(
      quizId,
      { ...data },
      { new: true }
    );

    if (!updatedQuiz) {
      throw new Error("Quiz not found!");
    }

    return updatedQuiz;
  } catch (error) {
    throw new Error(error);
  }
};

export const getQuizById = async (
  { quizId }: { quizId: Types.ObjectId },
  context
) => {
  try {
    const foundQuiz = await QuizModel.findById(quizId);

    if (!foundQuiz) {
      throw new Error("Quiz not found!");
    }

    const foundQuestions = await QuestionModel.find({ quiz: quizId });

    return { quiz: foundQuiz, questions: foundQuestions };
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteQuizById = async (
  { quizId }: { quizId: Types.ObjectId },
  context
) => {
  try {
    const deletedQuiz = await QuizModel.findByIdAndDelete(quizId);

    if (!deletedQuiz) {
      throw new Error("Quiz not found!");
    }

    return true;
  } catch (error) {
    throw new Error(error);
  }
};

export const getAllQuiz = async (context) => {
  try {
    if (!context.user._id) {
      throw new Error("UserId is required!");
    }

    const foundAllQuiz = await QuizModel.find({ user: context.user._id });

    return foundAllQuiz;
  } catch (error) {
    throw new Error(error);
  }
};
