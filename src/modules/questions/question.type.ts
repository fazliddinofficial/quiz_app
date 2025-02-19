import { gql } from "apollo-server-core";

export const questionType = gql`
  type Question {
    text: String
    answers: [ID]
    quiz: ID
  }

  input CreateQuestionInput {
    text: String!
    answer: [ID]
    quiz: ID!
  }

  input UpdateQuestionInput {
    text: String
    answer: [ID]
    quiz: ID
  }
`;
