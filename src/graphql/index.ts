import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./types";
import { resolvers } from "./resolvers";
import { Types } from "mongoose";

export const context = () => {
  return {userId:new Types.ObjectId("6795e9045ed8e7246b81a432")}
}
