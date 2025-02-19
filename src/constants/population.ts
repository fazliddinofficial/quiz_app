import { SCHEMA_NAMES } from "./models";

export const POPULATIONS = {
  question: [
    { path: "answers", model: SCHEMA_NAMES.Answer },
    { path: "quiz", model: SCHEMA_NAMES.Quiz },
  ],
};
