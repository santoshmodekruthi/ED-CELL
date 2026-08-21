import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    designation: { type: String, required: true },
    bio: { type: String, required: true },
    image: { type: String, required: true },
    linkedin: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Mentor", mentorSchema);
