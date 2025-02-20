import { gql } from "apollo-server-core";
import { mutationType } from "./mutation";
import { queryType } from "./query";
import { answerType } from "@/modules/answers/answer.type";
import { questionType } from "@/modules/questions/question.type";
import { quizType } from "@/modules/quiz/quiz.type";
import { scalarTypes } from "./scalar";
import { gameTypes } from "@/modules/game/game.types";

export const typeDefs = gql`
  ${scalarTypes}
  ${mutationType}
  ${queryType}

  ${answerType}
  ${questionType}
  ${quizType}
  ${gameTypes}
`;
