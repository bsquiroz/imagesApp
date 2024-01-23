import { Application } from "express";
import morgan from "morgan";

export function logger(app: Application) {
  app.use(morgan("dev"));
}
