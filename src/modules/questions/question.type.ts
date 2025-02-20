import { gql } from "apollo-server-core";

export const questionType = gql`
  type Question {
    text: String
    quiz: Quiz
    answers: [Answer]
  }

  input CreateQuestionInput {
    text: String!
    quiz: ID!
  }

  input UpdateQuestionInput {
    text: String
    answer: [ID]
    quiz: ID
  }
`;
