import { gql } from "apollo-server-core";

export const answerType = gql`
  type Answer {
    isTrue: Boolean
    question: Question
    text: String
  }

  input CreateAnswerInput {
    isTrue: Boolean!
    question: ID!
    text: String!
  }

  input UpdateAnswerInput {
    isTrue: Boolean
    question: ID
    text: String
  }
`;
