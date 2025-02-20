import { gql } from "apollo-server-core";

export const gameTypes = gql`
  type Game {
    ownerUserId: ID
    keyword: String
    playersId: ID
    quizId: ID
  }
`;
