import config from "../../config";
import { supabase } from "../../utils/supabaseClient";
import { TBlogPost } from "./blog.interface";

const getAllBlogs = async (): Promise<TBlogPost[]> => {
  const { data, error } = await supabase.from("blogs").select("*");
  if (error) throw new Error(error.message);
  return data;
};

const getBlogById = async (id: string): Promise<TBlogPost | null> => {
  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data as TBlogPost;
};

const createBlog = async (
  blog: Omit<TBlogPost, "id" | "created_at" | "updated_at">
): Promise<TBlogPost> => {
  const { data, error } = await supabase
    .from("blogs")
    .insert(blog)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as TBlogPost;
};

const updateBlog = async (
  id: string,
  updates: Partial<TBlogPost>
): Promise<TBlogPost> => {
  const { data, error } = await supabase
    .from("blogs")
    .update(updates)
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(error.message);
  return data as TBlogPost;
};

const deleteBlog = async (id: string): Promise<void> => {
  const { error } = await supabase.from("blogs").delete().eq("id", id);
  if (error) throw new Error(error.message);
};

export const blogServices = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
