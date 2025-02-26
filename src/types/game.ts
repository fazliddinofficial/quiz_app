import { Types } from "mongoose";

export interface GameInterface {
  quizId: Types.ObjectId;
  ownerId?: Types.ObjectId;
  playersId: Types.ObjectId[];
  keyword: string;
  usersAnswers: {
    user: Types.ObjectId;
    answer: Types.ObjectId;
  }[];
}

export interface UpdateGameInterface {
  gameId: Types.ObjectId;
  updates: Partial<GameInterface>;
}
