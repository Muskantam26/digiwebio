import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlogPost extends Document {
  slug: string;
  title: string;
  summary: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: Date;
  readTime: string;
  tags: string[];
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogPostSchema: Schema<IBlogPost> = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    coverImage: { type: String, required: true },
    category: { type: String, required: true, index: true },
    author: {
      name: { type: String, required: true },
      role: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    publishedAt: { type: Date, default: Date.now },
    readTime: { type: String, default: "5 min read" },
    tags: [{ type: String }],
    featured: { type: Boolean, default: false, index: true },
  },
  { timestamps: true }
);

const BlogPost: Model<IBlogPost> =
  mongoose.models.BlogPost ||
  mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);

export default BlogPost;
