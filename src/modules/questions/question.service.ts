import {
  CreateQuestionInterface,
  UpdateQuestionInterface,
} from "@/types/question";
import { QuizModel } from "../quiz/quiz.model";
import { QuestionModel } from "./question.model";
import { Types } from "mongoose";
import { POPULATIONS } from "@/constants/population";
import { createWriteStream } from "fs";
import path from "path";

export const createQuestion = async (
  { data }: CreateQuestionInterface,
  context
) => {
  try {
    const foundQuestion = await QuestionModel.exists({ text: data.text });

    const { createReadStream } = data.file;

    createReadStream().pipe(
      createWriteStream(
        path.join(__dirname, `../../public/${data.file.filename}`)
      )
    );

    if (foundQuestion) {
      throw new Error("This question is already exist!");
    }

    const foundQuiz = await QuizModel.findById(data.quiz).lean();

    if (!foundQuiz) throw new Error("quiz not found!");

    const createdQuestion = await QuestionModel.create({
      ...data,
      quiz: foundQuiz._id,
      timeLimit:67
    });

    return createdQuestion.populate(POPULATIONS.question);
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

export const getAllQuestion = async (
  { quizId }: { quizId: Types.ObjectId },
  context
) => {
  try {
    const foundQuestions = await QuestionModel.find({ quiz: quizId });
  } catch (error) {
    throw new Error(error);
  }
};

export const getQuestionById = async ({ questionId }, context) => {
  try {
    const foundQuestion = await QuestionModel.findById(questionId).populate(
      POPULATIONS.question
    );

    if (!foundQuestion) {
      throw new Error("Question not found!");
    }

    return foundQuestion;
  } catch (error) {
    throw new Error(error);
  }
};
