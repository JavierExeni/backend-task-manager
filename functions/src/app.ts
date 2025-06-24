import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.route";
import taskRoutes from "./routes/task.route";

const app = express();

app.use(cors({ origin: true }));
app.use(bodyParser.json());

app.use("/users", userRoutes);
app.use("/tasks", taskRoutes);

app.get("/", (_, res) => {
  res.send("API Task Manager!");
});

export default app;
