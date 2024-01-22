import { connectDB } from "./database/config";
import { envs } from "./config/plugins/envs.plugin";
import { app } from "./app";

(async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log(error);
  }
})();

const PORT = envs.PORT || 3002;

app.listen(PORT, () => {
  console.log(`run server http://localhost:${PORT}`);
});
