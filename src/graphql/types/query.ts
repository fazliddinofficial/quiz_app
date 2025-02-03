import { QUERIES } from "@/constants/query";
import { gql } from "apollo-server-core";

export const queryType = gql`
  type Query {
    ${QUERIES.HELLO}: String   
  }
`