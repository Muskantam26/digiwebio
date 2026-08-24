import mongoose, { Schema, Document, Model } from "mongoose";

export interface ITeamMember extends Document {
  name: string;
  role: string;
  bio: string;
  photo: string;
  order: number;
  expertise: string[];
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
  isPlaceholder?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TeamMemberSchema: Schema<ITeamMember> = new Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
    bio: { type: String, required: true },
    photo: { type: String, required: true },
    order: { type: Number, default: 0, index: true },
    expertise: [{ type: String }],
    socialLinks: {
      linkedin: String,
      github: String,
      twitter: String,
      email: String,
    },
    isPlaceholder: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const TeamMember: Model<ITeamMember> =
  mongoose.models.TeamMember ||
  mongoose.model<ITeamMember>("TeamMember", TeamMemberSchema);

export default TeamMember;
