import { gql } from "apollo-server-core";

export const gameTypes = gql`
  type Game {
    _id: ID
    ownerId: ID
    keyword: String
    playersId: [ID]
    quizId: ID
  }

  input CreateGameInput {
    keyword: String!
    playersId: [ID!]!
    quizId: ID!
  }

  input UpdateGamePropsInput {
    keyword: String
    playersId: [ID]
    quizId: ID
  }

  input UpdateGameInput {
    data: UpdateGamePropsInput
    gameId: ID
  }
`;
