import { mutations } from "./mutation";
import { query } from "./query"; 

export const resolvers = {
  Query: query,
  Mutation: mutations,
}