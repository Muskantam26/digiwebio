import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILead extends Document {
  fullName: string;
  name?: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  source?: string;
  description: string;
  message?: string;
  status: "New" | "Contacted" | "Qualified" | "Converted" | "Lost" | "new" | "contacted" | "in_discussion" | "closed" | "archived";
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
    service: { type: String, required: true, default: "Custom Software Development" },
    budget: { type: String, default: "" },
    source: { type: String, trim: true, default: "Website Form" },
    description: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Converted", "Lost", "new", "contacted", "in_discussion", "closed", "archived"],
      default: "New",
    },
    ipAddress: { type: String, default: "" },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual getters for name and message for full compatibility
LeadSchema.virtual("name").get(function (this: ILead) {
  return this.fullName;
});

LeadSchema.virtual("message").get(function (this: ILead) {
  return this.description;
});

// Indexes for lead querying
LeadSchema.index({ createdAt: -1 });
LeadSchema.index({ email: 1 });
LeadSchema.index({ status: 1 });

const Lead: Model<ILead> =
  mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;
