import { Router } from "express";
import { createImage, getImage, getImages } from "./imagesApp.controller";
import { uploadField } from "../../config/plugins/uploadField.plugin";

export const routerImages = Router();

routerImages.get("/", getImages);
routerImages.get("/:id", getImage);
routerImages.post("/", uploadField("file"), createImage);
