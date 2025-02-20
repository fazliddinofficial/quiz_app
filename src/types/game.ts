import { Types } from "mongoose";

export interface GameInterface {
  quizId: Types.ObjectId;
  ownerUserId?: Types.ObjectId;
  playersId: Types.ObjectId[];
  keyword: string;
}

export interface UpdateGameInterface {
  gameId: Types.ObjectId;
  updates: Partial<GameInterface>;
}
