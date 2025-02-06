import { MUTATIONS } from "@/constants/mutation";
import { gql } from "apollo-server-core";

export const mutationType = gql`
  type Mutation {
    ${MUTATIONS.CREATE_QUIZ}(data: CreateQuizInput): Quiz
    ${MUTATIONS.UPDATE_QUIZ_BY_ID}(quizId: ID!, data: UpdateQuizInput): Quiz
    ${MUTATIONS.DELETE_QUIZ_BY_ID}(quizId: ID!): Quiz
  }
`