import { QUERIES } from "@/constants/query";
import { gql } from "apollo-server-core";

export const queryType = gql`
  type Query {
    ${QUERIES.GET_ALL_QUIZ}: [Quiz]
    ${QUERIES.GET_QUIZ_BY_ID}(quizId: ID): GetQuizOutput

    ${QUERIES.GET_QUESTIONS}: [Question]
    ${QUERIES.GET_QUESTION_BY_ID}(questionId: ID): Question

    ${QUERIES.GET_ALL_ANSWER}: [Question]
    ${QUERIES.GET_ANSWER_BY_ID}(answerId: ID): Question

    ${QUERIES.GET_GAME_BY_ID}(gameId: ID): Game
    ${QUERIES.GET_GAME_BY_KEYWORD}(keyword: String): Game
  }
`;
