import GraphQLUpload from "graphql-upload";
import { MUTATIONS } from "@/constants/mutation";
import * as quizService from "@/modules/quiz/quiz.service";
import * as answerService from "@/modules/answers/answer.service";
import * as questionService from "@/modules/questions/question.service";
import * as gameService from "@/modules/game/game.service";
import { CreateQuizInterface, UpdateQuizInterface } from "@/types/quiz";
import { Types } from "mongoose";

export const mutations = {
  [MUTATIONS.CREATE_QUIZ]: (_, args: CreateQuizInterface, context) => {
    return quizService.createQuiz(args, context);
  },
  [MUTATIONS.UPDATE_QUIZ_BY_ID]: (_, args: UpdateQuizInterface, context) => {
    return quizService.updateQuiz(args, context);
  },
  [MUTATIONS.DELETE_QUIZ_BY_ID]: (
    _,
    args: { quizId: Types.ObjectId },
    context
  ) => {
    return quizService.deleteQuizById(args, context);
  },
  [MUTATIONS.CREATE_ANSWER]: (_, args, context) => {
    return answerService.createAnswer(args, context);
  },
  [MUTATIONS.UPDATE_ANSWER_BY_ID]: (_, args, context) => {
    return answerService.updateAnswerById(args, context);
  },
  [MUTATIONS.DELETE_ANSWER_BY_ID]: (_, args, context) => {
    return answerService.deleteAnswerById(args, context);
  },
  [MUTATIONS.CREATE_QUESTION]: (_, args, context) => {
    return questionService.createQuestion(args, context);
  },
  [MUTATIONS.UPDATE_QUESTION_BY_ID]: (_, args, context) => {
    return questionService.updateQuestionById(args, context);
  },
  [MUTATIONS.DELETE_QUESTION_BY_ID]: (_, args, context) => {
    return questionService.deleteQuestionById(args, context);
  },
  [MUTATIONS.CREATE_GAME]: (_, args, context) => {
    return gameService.createGame(args, context);
  },
  [MUTATIONS.UPDATE_GAME_BY_ID]: (_, args, context) => {
    return gameService.updateGameById(args, context);
  },
  [MUTATIONS.DELETE_GAME_BY_ID]: (_, args, context) => {
    return gameService.deleteGameById(args, context);
  },
};
