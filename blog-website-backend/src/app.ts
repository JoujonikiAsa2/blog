import express, { Request, Response } from "express";
import { blogRoutes } from "./app/module/blog/blog.route";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: ["http://localhost:5173"]}));

app.use('/api/blogs', blogRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});



export default app;
