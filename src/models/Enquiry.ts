import mongoose, { Document, Model, Schema } from "mongoose";

export interface IEnquiry extends Document {
  fullName: string;
  companyName?: string;
  phone: string;
  email?: string;
  location: string;
  projectType: string;
  industry?: string;
  capacity?: string;
  message?: string;
  enquiryType: "Consultation" | "Contact";
  status: "New" | "Contacted" | "Qualified" | "Lost" | "Converted";
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema: Schema = new Schema(
  {
    fullName: { type: String, required: true },
    companyName: { type: String },
    phone: { type: String, required: true },
    email: { type: String },
    location: { type: String, required: true },
    projectType: { type: String, required: true },
    industry: { type: String },
    capacity: { type: String },
    message: { type: String },
    enquiryType: { type: String, enum: ["Consultation", "Contact"], default: "Consultation" },
    status: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Lost", "Converted"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent mongoose from recreating the model if it already exists (useful in Next.js HMR)
const Enquiry: Model<IEnquiry> = mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);

export default Enquiry;
