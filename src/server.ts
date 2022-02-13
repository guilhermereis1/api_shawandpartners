import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

import { Router, Request, Response } from "express";

const app = express();

const route = Router();

app.use(express.json());

route.get("/", (req: Request, res: Response) => {
  res.json({ message: "Initial Project" });
});

app.use(route);

app.listen(process.env.PORT, () => "server running on port 3333");
