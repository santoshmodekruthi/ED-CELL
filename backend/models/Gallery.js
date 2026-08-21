import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    caption: { type: String, default: "" },
    category: {
      type: String,
      enum: ["Workshops", "Competitions", "Seminars", "Guest Lectures", "Startup Events", "Team Activities"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);
