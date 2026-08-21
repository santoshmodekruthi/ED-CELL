import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: String, enum: ["published", "unpublished"], default: "published" },
  },
  { timestamps: true }
);

export default mongoose.model("Announcement", announcementSchema);
