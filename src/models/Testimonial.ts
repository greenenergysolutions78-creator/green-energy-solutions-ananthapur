import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITestimonial extends Document {
  clientName: string;
  designation: string;
  quote: string;
  rating: number; // 1 to 5
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TestimonialSchema: Schema = new Schema(
  {
    clientName: { type: String, required: true },
    designation: { type: String, required: true },
    quote: { type: String, required: true },
    rating: { type: Number, required: true, default: 5, min: 1, max: 5 },
    published: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Testimonial: Model<ITestimonial> = mongoose.models.Testimonial || mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);

export default Testimonial;
