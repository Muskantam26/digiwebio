import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  description: string;
  coverImage: string;
  images: string[];
  technologies: string[];
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  liveUrl?: string;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema<IProject> = new Schema(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    client: { type: String, required: true },
    category: { type: String, required: true, index: true },
    summary: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    images: [{ type: String }],
    technologies: [{ type: String }],
    challenge: { type: String, required: true },
    solution: { type: String, required: true },
    results: [{ type: String }],
    testimonial: {
      quote: String,
      author: String,
      role: String,
      company: String,
    },
    liveUrl: { type: String },
    featured: { type: Boolean, default: false, index: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
