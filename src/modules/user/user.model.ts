import { SCHEMA_NAMES } from "@/constants/models";
import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
});

export const UserModel = model(SCHEMA_NAMES.User, userSchema);
