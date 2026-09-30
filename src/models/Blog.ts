import mongoose, { Document, Model, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    author: { type: String, default: "Admin" },
    published: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;
