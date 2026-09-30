import mongoose, { Document, Model, Schema } from "mongoose";

export interface IFaq extends Document {
  question: string;
  answer: string;
  category: string;
  order: number;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const FaqSchema: Schema = new Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    category: { type: String, default: "General" },
    order: { type: Number, default: 0 },
    published: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Faq: Model<IFaq> = mongoose.models.Faq || mongoose.model<IFaq>("Faq", FaqSchema);

export default Faq;
