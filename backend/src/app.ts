import express from "express";

import { logger } from "./config/plugins/logger.plugin";
import { enableCors } from "./config/plugins/cors.plugin";
import { appRouter } from "./routes";
import { envs } from "./config/plugins/envs.plugin";

export const app = express();
const ACCEPTED_ORIGINS = [envs.FRONT_URL_PRO, envs.FRONT_URL_DEV];

app.use(express.json());

logger(app);
enableCors(app, ACCEPTED_ORIGINS);

app.use("/api/v1", appRouter);
