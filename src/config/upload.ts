import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

const tmpFolder = resolve(__dirname, "..", "..", "tmp");
const MINE_TYPES = {
  "image/jpg": "jpg",

  "image/jpeg": "jpeg",

  "image/png": "png"
};

export default {
  tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(req, file, callback) {
      const fileHash = crypto.randomBytes(16).toString("hex");
      //@ts-ignore
      const fileName = `${fileHash}.${MINE_TYPES[file.mimetype]}`;

      return callback(null, fileName);
    }
  })
};
