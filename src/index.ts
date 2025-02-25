import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";
import { createServer } from "http";
import mongoose from "mongoose";
import { upload, uploadAudio } from "./utils/multer";
import { typeDefs } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.post("/api/uploads/audio", upload.single("audio"), uploadAudio);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

const apolloServer = createServer(app);

async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await server.start();
    server.applyMiddleware({ app });

    const port = process.env.PORT;

    apolloServer.listen(port, () => {
      console.log("Server up and running on port " + port);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer();
