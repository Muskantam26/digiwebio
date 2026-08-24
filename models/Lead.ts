import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILead extends Document {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget: string;
  description: string;
  status: "new" | "contacted" | "in_discussion" | "closed" | "archived";
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeadSchema: Schema<ILead> = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, trim: true, default: "" },
    service: { type: String, required: true },
    budget: { type: String, required: true },
    description: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["new", "contacted", "in_discussion", "closed", "archived"],
      default: "new",
    },
    ipAddress: { type: String, default: "" },
  },
  { timestamps: true }
);

// Indexes for lead querying
LeadSchema.index({ createdAt: -1 });
LeadSchema.index({ email: 1 });
LeadSchema.index({ status: 1 });

const Lead: Model<ILead> =
  mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;
