import { MUTATIONS } from "@/constants/mutation";
import * as quizService from "@/modules/quiz/quiz.service";
import { CreateQuizInterface, UpdateQuizInterface } from "@/types/quiz";
import { Types } from "mongoose";

export const mutations = {
  [MUTATIONS.CREATE_QUIZ]: (_, args: CreateQuizInterface, context) => {
    return quizService.createQuiz(args, context);
  },
  [MUTATIONS.UPDATE_QUIZ_BY_ID]: (_, args: UpdateQuizInterface, context) => {
    return quizService.updateQuiz(args, context);
  },
  [MUTATIONS.DELETE_QUIZ_BY_ID]: (_, args: {quizId: Types.ObjectId}, context) => {
    return quizService.deleteQuizById(args, context);
  },
};
