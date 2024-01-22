import { Router } from "express";
import { createImage, getImage, getImages } from "./imagesApp.controller";

export const routerImages = Router();

routerImages.get("/", getImages);
routerImages.get("/:id", getImage);
routerImages.post("/", createImage);
