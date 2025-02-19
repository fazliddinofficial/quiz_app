import { gql } from "apollo-server-core";

export const questionType = gql`
  type Question {
    text: String
    quiz: ID
    answers: [ID]
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
