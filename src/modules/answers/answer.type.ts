import { gql } from "apollo-server-core";

export const answerType = gql`
  type Answer {
    _id: ID
    isTrue: Boolean
    question: ID
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
