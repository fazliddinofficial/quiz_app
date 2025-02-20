import { gql } from "apollo-server-core";

export const questionType = gql`
  type Question {
    text: String
    quiz: Quiz
    answers: [Answer]
    timeLimit: Int
    mark: Int
  }

  input CreateQuestionInput {
    text: String!
    quiz: ID!
    timeLimit: Int
    mark: Int
  }

  input UpdateQuestionInput {
    text: String
    answer: [ID]
    quiz: ID
    timeLimit: Int
    mark: Int
  }
`;
