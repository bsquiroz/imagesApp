import { Router } from "express";
import { routerImages } from "../modules/imagesApp/imagesApp.router";

export const appRouter = Router();

appRouter.use("/images", routerImages);
