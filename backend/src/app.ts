import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({
    status: "OK",
    app: "Farenheit Invisible"
  });
});

app.use(errorHandler);

export default app;

