import express from "express";

import { logger } from "./config/plugins/logger.plugin";
import { appRouter } from "./routes";

export const app = express();

app.use(express.json());

logger(app);

app.use("/api/v1", appRouter);
