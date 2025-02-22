import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import mongoose from "mongoose";
import { upload, uploadAudio } from "./utils/multer";
import { typeDefs } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";
import { context } from "./graphql";

const app = express();

app.use(cors({ origin: "http://localhost:9000", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.post("/api/uploads/audio", upload.single("audio"), uploadAudio);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  context,
});

const apolloServer = createServer(app);

async function startServer() {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/quizApp"
    );
    console.log("MongoDB connected");

    await server.start();
    server.applyMiddleware({ app });

    apolloServer.listen(9000, () => {
      console.log("Server up and running on port 9000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();
