import { QUERIES } from "@/constants/query";
import * as quizService from "@/modules/quiz/quiz.service";
import * as answerService from "@/modules/answers/answer.service";
import * as questionService from "@/modules/questions/question.service";
import * as gameService from "@/modules/game/game.service";

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
  [QUERIES.GET_ANSWER_BY_ID]: (_, args, context) => {
    return answerService.getAnswerById(args, context);
  },
  [QUERIES.GET_QUESTIONS]: (_, args, context) => {
    return questionService.updateQuestionById(args, context);
  },
  [QUERIES.GET_QUESTION_BY_ID]: (_, args, context) => {
    return questionService.getQuestionById(args, context);
  },
  [QUERIES.GET_GAME_BY_ID]: (_, args, context) => {
    return gameService.getGameById(args, context);
  },
};
