import { ApolloServer } from "apollo-server-express";
import { context } from "./graphql";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import cors from "cors";
import { typeDefs } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";
import { createServer } from "http";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  introspection: true,
  context,
});

server.start().then(() => server.applyMiddleware({ app, path: "/api" }));

export const apolloServer = createServer(app);

(async () => {
  apolloServer.listen(4000);

  console.log(`Server up and running on 4000`);
})();
