import "dotenv/config";
import * as env from "env-var";

export const envs = {
  PORT: env.get("PORT").required().asPortNumber(),
  MONGO_URL: env.get("MONGO_URL").required().asString(),
  CLOUD_NAME_CLOUDINARY: env.get("CLOUD_NAME_CLOUDINARY").required().asString(),
  API_KEY_CLOUDINARY: env.get("API_KEY_CLOUDINARY").required().asString(),
  API_SECRET_CLOUDINARY: env.get("API_SECRET_CLOUDINARY").required().asString(),
};
