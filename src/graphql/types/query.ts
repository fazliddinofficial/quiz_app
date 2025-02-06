import { QUERIES } from "@/constants/query";
import { gql } from "apollo-server-core";

export const queryType = gql`
  type Query {
    ${QUERIES.GET_ALL_QUIZ}: [Quiz]
    ${QUERIES.GET_QUIZ_BY_ID}(quizId: ID): Quiz
  }
`;
