import { Request, Response } from "express";
import { ImagesAppServices } from "./imagesApp.services";
import { uploadImage } from "../../config/plugins/storegeImages";
import { ImageI } from "../../interfaces/ImagesInterface";

const imagesAppServices = new ImagesAppServices();

export async function getImages(req: Request, res: Response) {
  try {
    const data = await imagesAppServices.findAll();

    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error,
    });
  }
}

export async function getImage(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = await imagesAppServices.findById(id);

    if (!data)
      return res.status(404).json({
        status: false,
        message: `image with id ${id} not found`,
      });

    return res.status(200).json({
      status: true,
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error,
    });
  }
}

export async function createImage(req: Request, res: Response) {
  try {
    const { name } = req.body;

    const image = req.file;

    if (!image)
      return res.status(400).json({
        status: false,
        message: `ERROR: This parameter is necessary to be able to continue`,
      });

    const [fileType, fileExt] = image.mimetype.split("/");
    const buffer = image.buffer;

    if (!["png", "jpg", "gif"].includes(fileExt.toLowerCase()))
      return res.status(400).json({
        status: false,
        message: "ERROR: Only files are received; png, jpg p gif",
      });

    const imageUpload = await uploadImage(buffer, fileType);

    const newImage: ImageI = {
      name: name,
      data: imageUpload.url,
    };

    const data = await imagesAppServices.create(newImage);

    return res.status(201).json({
      status: true,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error,
    });
  }
}
