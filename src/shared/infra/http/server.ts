import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { AppError } from "../../errors/AppError";
import { router } from "./routes";
import cors from "cors";

import "../../containers";

const app = express();
const port = 3332;

app.use(express.json());
app.use(cors());

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  return response.status(500).json({ status: "error", message: `Internal server error - ${error.message}` });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
