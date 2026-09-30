import mongoose, { Document, Model, Schema } from "mongoose";

export interface ISettings extends Document {
  companyName: string;
  contactEmail: string;
  contactPhone: string;
  address: string;
  metaDescription: string;
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  statsProjectsCompleted: string;
  statsMwInstalled: string;
  statsCo2Offset: string;
  statsHappyClients: string;
}

const SettingsSchema: Schema = new Schema(
  {
    companyName: { type: String, default: "Green Energy Solutions" },
    contactEmail: { type: String, default: "info@greenenergy.com" },
    contactPhone: { type: String, default: "+91 0000000000" },
    address: { type: String, default: "Ananthapur, Andhra Pradesh" },
    metaDescription: { type: String, default: "End-to-end solar solutions for businesses, industries and institutions." },
    facebookUrl: { type: String, default: "" },
    twitterUrl: { type: String, default: "" },
    linkedinUrl: { type: String, default: "" },
    instagramUrl: { type: String, default: "" },
    statsProjectsCompleted: { type: String, default: "100+" },
    statsMwInstalled: { type: String, default: "50+" },
    statsCo2Offset: { type: String, default: "25,000" },
    statsHappyClients: { type: String, default: "100%" },
  },
  {
    timestamps: true,
  }
);

const Settings: Model<ISettings> = mongoose.models.Settings || mongoose.model<ISettings>("Settings", SettingsSchema);

export default Settings;
