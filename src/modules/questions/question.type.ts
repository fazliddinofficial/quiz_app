import { gql } from "apollo-server-core";

export const questionType = gql`
  type Question {
    text: String
    quiz: Quiz
    answers: [Answer]
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
