import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProject extends Document {
  slug: string;
  title: string;
  location: string;
  type: string;
  industry: string;
  capacity: string;
  year: string;
  image: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    slug: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, required: true }, // e.g. "Rooftop Solar", "Ground Mount Solar"
    industry: { type: String, required: true }, // e.g. "Industrial", "Education"
    capacity: { type: String, required: true }, // e.g. "500 kWp"
    year: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);

const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
