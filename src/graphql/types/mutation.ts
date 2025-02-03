import { MUTATIONS } from "@/constants/mutation";
import { gql } from "apollo-server-core";

export const mutationType = gql`
  type Mutation {
    ${MUTATIONS.HELLO}: String
  }
`