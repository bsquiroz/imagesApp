import { Request, Response } from "express";
import { ImagesAppServices } from "./imagesApp.services";

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
    const { name, data: dataImage } = req.body;

    // todo, verificar que la imagen sea jpg, png o gif
    // todo, subir imagen a cloudinary y recuperar la url

    const newImage = {
      name: "nombre",
      data: "perro.png",
    };

    const data = await imagesAppServices.create(newImage);

    return res.status(201).json({
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
