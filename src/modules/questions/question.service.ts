import { QuestionInterface, UpdateQuestionInterface } from "@/types/question";
import { QuizModel } from "../quiz/quiz.model";
import { QuestionModel } from "./question.model";
import { Types } from "mongoose";

export const createQuestion = async (data: QuestionInterface, context) => {
  try {
    const foundQuiz = await QuizModel.findById(data.quiz).lean();

    if (!foundQuiz) throw new Error("quiz not found!");

    const createdQuestion = await QuestionModel.create({
      ...data,
      quiz: foundQuiz._id,
    });

    return createdQuestion;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateQuestionById = async (
  { questionId, data }: UpdateQuestionInterface,
  context
) => {
  try {
    const foundQuestion = await QuestionModel.findByIdAndUpdate(
      questionId,
      { data },
      { new: true }
    );

    if (!foundQuestion) throw new Error("Question not found!");

    return foundQuestion;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteQuestionById = async (
  {
    questionId,
  }: {
    questionId: Types.ObjectId;
  },
  context
) => {
  try {
    const deletedQuestion = await QuestionModel.findByIdAndDelete(questionId);

    if (!deletedQuestion) throw new Error("Question not found!");

    return true;
  } catch (error) {
    throw new Error(error);
  }
};
