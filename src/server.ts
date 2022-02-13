import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import { Router, Request, Response } from "express";
import parse_link_header from "./helpers/parse_link_header";

const BASE_URL = process.env.BASE_URL_API;
const HOST_URL = process.env.HOST_URL;

const app = express();

const route = Router();

app.use(express.json());

route.get("/api/users", async (req: Request, res: Response) => {
  const { since } = req.query;

  try {
    const response = await axios.get(`${BASE_URL}/users?since=${since}`, {
      headers: {
        accept: "application/vnd.github.v3+json",
      },
    });

    const newData = {
      next_page: parse_link_header(response.headers.link, HOST_URL),
      users: response.data,
    };

    res.json(newData);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

route.get(
  "/api/users/:username/details",
  async (req: Request, res: Response) => {
    const { username } = req.params;

    try {
      const response = await axios.get(`${BASE_URL}/users/${username}`);

      res.json(response.data);
    } catch (err: any) {
      if (err.code === 404) {
        res.json({
          status: 404,
          message: "User not found or invalid username",
        });
      }
    }
  }
);

route.get("/api/users/:username/repos", async (req: Request, res: Response) => {
  const { username } = req.params;
  const { per_page = 10 } = req.query; // default value 10 per page

  try {
    const response = await axios.get(
      `${BASE_URL}/users/${username}/repos?per_page=${per_page}`
    );

    res.json(response.data);
  } catch (err: any) {
    if (err.code === 404) {
      res.json({
        status: 404,
        message: "User not found or invalid username",
      });
    }
  }
});

app.use(route);

app.listen(process.env.PORT, () => "🌏 Server running on port 3333");

module.exports = app;
