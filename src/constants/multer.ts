import { existsSync } from "fs";
import path from "path";
import fs from "fs";

export const UPLOADS_PATH = path.join(
  __dirname,
  "..",
  "..",
  "public",
  "uploads"
);

export function createPublicFileUrl(file: string) {
  const PORT = process.env.PORT || 9000;

  const host = process.env.HOST || `localhost:${PORT}`;

  const filePublicUrl = `http://${host}/${
    file.startsWith("public/")
      ? file.replace("public/", "uploads")
      : `uploads/${file}`
  }`;

  return filePublicUrl;
}

export function checkDir() {
  try {
    if (!existsSync(UPLOADS_PATH)) {
      fs.mkdirSync(UPLOADS_PATH, { recursive: true });
    }
  } catch (error) {
    throw new Error(error);
  }
}
