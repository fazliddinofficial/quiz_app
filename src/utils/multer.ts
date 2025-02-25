import { checkDir, createPublicFileUrl } from "@/constants/multer";
import { AnswerModel } from "@/modules/answers/answer.model";
import e from "express";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    checkDir();
    cb(null, `${process.cwd()}/public/uploads`);
  },
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}${path.extname(file.originalname)}`);
  },
});

export const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
});

export const uploadAudio = async (req: e.Request, res: e.Response) => {
  try {
    const file = createPublicFileUrl(req.file.filename);

    const createdAnswer = await AnswerModel.create({ audioUrl: file });

    res.status(201).json({ id: createdAnswer._id, fileUrl: file, answer: createdAnswer });
  } catch (error) {
    throw new Error(error);
  }
};
