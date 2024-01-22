import { envs } from "../config/plugins/envs.plugin";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    mongoose.connect(envs.MONGO_URL).then(() => console.log("Connected!"));
  } catch (error) {
    console.log(error);
  }
};
