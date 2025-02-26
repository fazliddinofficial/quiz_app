import { GameInterface, UpdateGameInterface } from "@/types/game";
import { GameModel } from "./game.model";
import { Types } from "mongoose";
import { UserModel } from "../user/user.model";

export const createGame = async (data: GameInterface, context: any) => {
  try {
    const createdGame = await GameModel.create({
      ...data,
      ownerId: context.userId || "677e68e26ff50cb27af060fe",
    });

    return createdGame;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateGameById = async (
  data: UpdateGameInterface,
  context: any,
) => {
  try {
    const foundGame = await GameModel.findByIdAndUpdate(
      data.gameId,
      data.updates,
      { new: true },
    );

    if (!foundGame) {
      throw new Error("Game not found!");
    }

    return foundGame;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteGameById = async (gameId: Types.ObjectId, context: any) => {
  try {
    const deletedGame = await GameModel.findByIdAndDelete(gameId);

    if (!deletedGame) {
      throw new Error("Game not found!");
    }

    return true;
  } catch (error) {
    throw new Error(error);
  }
};

export const getGameById = async (gameId: Types.ObjectId, context: any) => {
  try {
    const foundGame = await GameModel.findById(gameId);

    if (!foundGame) {
      throw new Error("Game not found!");
    }

    return foundGame;
  } catch (error) {
    throw new Error(error);
  }
};

export const getGameByKeyword = async (
  { keyword }: { keyword: string },
  context: any,
) => {
  try {
    const foundGame = await GameModel.findOne({ keyword });

    if (!foundGame) {
      throw new Error("Game not found");
    }

    foundGame.playersId.push(context.userId);
    foundGame.save();

    return foundGame;
  } catch (e) {
    throw new Error(e);
  }
};
