import { SCHEMA_NAMES } from "@/constants/models";
import { GameInterface } from "@/types/game";
import { model, Schema } from "mongoose";

const gameSchema = new Schema<GameInterface>(
  {
    keyword: {
      type: String,
      required: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: SCHEMA_NAMES.User,
      required: true,
    },
    playersId: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: SCHEMA_NAMES.User,
      },
    ],
    quizId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: SCHEMA_NAMES.Quiz,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const GameModel = model(SCHEMA_NAMES.Game, gameSchema);
