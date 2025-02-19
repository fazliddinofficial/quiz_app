import { QUERIES } from "@/constants/query";
import * as quizService from "@/modules/quiz/quiz.service";
import * as answerService from "@/modules/answers/answer.service";

export const query = {
  [QUERIES.GET_ALL_QUIZ]: (_, args, context) => {
    return quizService.getAllQuiz(context);
  },
  [QUERIES.GET_QUIZ_BY_ID]: (_, args, context) => {
    return quizService.getQuizById(args, context);
  },
  [QUERIES.GET_ALL_ANSWER]: (_, args, context) => {
    return answerService.getAllAnswer(args, context);
  },
};
