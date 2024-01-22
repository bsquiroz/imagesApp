import mongoose from "mongoose";

const imageAppSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ImageApp = mongoose.model("imageApp", imageAppSchema);
