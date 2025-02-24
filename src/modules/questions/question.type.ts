import { gql } from "apollo-server-core";

export const questionType = gql`
  type Question {
    _id: ID
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
    file: Upload
  }

  input UpdateQuestionInput {
    text: String
    answer: [ID]
    quiz: ID
    timeLimit: Int
    mark: Int
  }
`;
