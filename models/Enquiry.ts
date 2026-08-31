import mongoose, { Schema, Document, Model } from "mongoose";

export interface IEnquiry extends Document {
  name: string;
  fullName?: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  description?: string;
  status: "New" | "In Progress" | "Responded" | "Closed";
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}

const EnquirySchema: Schema<IEnquiry> = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    company: { type: String, trim: true, default: "" },
    service: { type: String, required: true, default: "General Enquiry" },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["New", "In Progress", "Responded", "Closed"],
      default: "New",
    },
    ipAddress: { type: String, default: "" },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Virtual getters for fullName and description compatibility
EnquirySchema.virtual("fullName").get(function (this: IEnquiry) {
  return this.name;
});

EnquirySchema.virtual("description").get(function (this: IEnquiry) {
  return this.message;
});

// Indexes for enquiry querying
EnquirySchema.index({ createdAt: -1 });
EnquirySchema.index({ email: 1 });
EnquirySchema.index({ status: 1 });

const Enquiry: Model<IEnquiry> =
  mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);

export default Enquiry;
