// routes/blogRoutes.ts
import express, { NextFunction, Request, Response } from "express";
import { blogControllers } from "./blog.controller";

const router = express.Router();

router.get("/", blogControllers.getBlogs);
router.get("/:id", blogControllers.getBlog);
router.post(
  "/",
  blogControllers.createBlog
);
router.put("/:id", blogControllers.updateBlog);
router.delete("/:id", blogControllers.deleteBlog);

export const blogRoutes = router;
