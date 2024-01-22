import morgan from "morgan";

export function logger(app) {
  app.use(morgan("dev"));
}
