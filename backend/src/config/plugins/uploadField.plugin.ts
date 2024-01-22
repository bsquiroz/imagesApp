import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export function uploadField(filename: string) {
  return upload.single(filename);
}
