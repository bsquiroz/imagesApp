import { Application } from "express";
import path from "path";
import swaggerUI from "swagger-ui-express";

const fs = require("fs").promises;

const swaggerDoc = async () => {
  const filePath = path.join(process.cwd(), "swagger.json");
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
};

export function documentacionApp(app: Application) {
  swaggerDoc().then((url) => {
    app.use("/api/v1/doc", swaggerUI.serve, swaggerUI.setup(url));
  });
}
