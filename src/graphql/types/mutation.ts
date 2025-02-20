import { MUTATIONS } from "@/constants/mutation";
import { gql } from "apollo-server-core";

export const mutationType = gql`
  type Mutation {
    ${MUTATIONS.CREATE_QUIZ}(data: CreateQuizInput!): Quiz
    ${MUTATIONS.UPDATE_QUIZ_BY_ID}(quizId: ID!, data: UpdateQuizInput!): Quiz
    ${MUTATIONS.DELETE_QUIZ_BY_ID}(quizId: ID!): Boolean

    ${MUTATIONS.CREATE_ANSWER}(data: CreateAnswerInput!): Answer
    ${MUTATIONS.DELETE_ANSWER_BY_ID}(answerId: ID!): Boolean
    ${MUTATIONS.UPDATE_ANSWER_BY_ID}(data: UpdateAnswerInput!, answerId: ID!): Answer

    ${MUTATIONS.CREATE_QUESTION}(data: CreateQuestionInput!): Question
    ${MUTATIONS.UPDATE_QUESTION_BY_ID}(data: UpdateQuestionInput!, questionId: ID!): Question
    ${MUTATIONS.DELETE_QUESTION_BY_ID}(questionId: ID!): Boolean

    ${MUTATIONS.CREATE_GAME}(data: CreateGameInput): Game
    ${MUTATIONS.UPDATE_GAME_BY_ID}(gameId: ID, data: UpdateGameInput): Game
    ${MUTATIONS.DELETE_GAME_BY_ID}(gameId: ID): Boolean    
  }
`;
