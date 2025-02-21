import { createPublicFileUrl } from "@/constants/multer";
import { AnswerModel } from "@/modules/answers/answer.model";
import e from "express";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${process.cwd()}/public`);
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + file.originalname);
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
});

export const uploadAudio = async (req: e.Request, res: e.Response) => {
  try {
    const file = createPublicFileUrl(req.file.path);
    const createdAnswer = await AnswerModel.create({ audioUrl: file });
    res.status(201).json({ fileUrl: file, answer: createdAnswer });
  } catch (error) {
    throw new Error(error);
  }
};
