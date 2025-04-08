// controllers/blogController.ts
import { Request, Response } from 'express';
import { blogServices } from './blog.service';

const getBlogs = async (req: Request, res: Response) => {
  try {
    const blogs = await blogServices.getAllBlogs();
    res.json(blogs);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

const getBlog = async (req: Request, res: Response) => {
  try {
    const blog = await blogServices.getBlogById(req.params.id);
    res.json(blog);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
};

const createBlog = async (req: Request, res: Response) => {
  try {
    const newBlog = await blogServices.createBlog(req.body);
    res.status(201).json(newBlog);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const updateBlog = async (req: Request, res: Response) => {
  try {
    const updatedBlog = await blogServices.updateBlog(req.params.id, req.body);
    res.json(updatedBlog);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    await blogServices.deleteBlog(req.params.id);
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const blogControllers = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
