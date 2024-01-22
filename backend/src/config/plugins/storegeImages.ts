import { envs } from "./envs.plugin";

import { UploadApiResponse, v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: envs.CLOUD_NAME_CLOUDINARY,
  api_key: envs.API_KEY_CLOUDINARY,
  api_secret: envs.API_SECRET_CLOUDINARY,
});

export async function uploadImage(
  buffer,
  typeFile
): Promise<UploadApiResponse> {
  return await new Promise((resolve, rejet) => {
    cloudinary.uploader
      .upload_stream(
        { folder: "imageAppTest", resource_type: typeFile },
        (err, result) => {
          if (err) rejet(err);
          resolve(result);
        }
      )
      .end(buffer);
  });
}
