import { gql } from "apollo-server-core";

export const quizType = gql`
  enum QUIZ_VISIBILITY {
    public
    private
  }

  enum QUESTION_TYPE_ENUM {
    quiz
    trueOrFalse
    puzzle
    typeAnswer
    slider
    sayTheWord
  }

  type Quiz {
    title: String
    timeLimit: Int
    description: String
    img: String
    keyword: String
    theme: String
    visibility: QUIZ_VISIBILITY
    questionType: QUESTION_TYPE_ENUM
    isFile: Boolean
  }

  input CreateQuizInput {
    title: String!
    timeLimit: Int
    description: String
    img: String
    keyword: String!
    theme: String!
    visibility: QUIZ_VISIBILITY!
    questionType: QUESTION_TYPE_ENUM!
  }

  input UpdateQuizInput {
    title: String
    timeLimit: Int
    description: String
    img: String
    keyword: String
    theme: String
    visibility: QUIZ_VISIBILITY
    questionType: QUESTION_TYPE_ENUM
  }
`;
