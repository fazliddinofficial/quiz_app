import { gql } from "apollo-server-core";

export const answerType = gql`
  type Answer {
    isTrue: Boolean
    question: ID
    text: String   
  }
`