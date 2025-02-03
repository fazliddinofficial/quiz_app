import { gql } from "apollo-server-core";

export const questionType = gql`
  type Question {
    text: String
    answers: [ID]
    quiz: ID
  }
`