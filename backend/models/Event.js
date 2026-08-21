import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    date: { type: String, required: true }, // ISO date string, e.g. 2026-08-20
    time: { type: String, required: true }, // e.g. "10:00 AM"
    location: { type: String, required: true },
    image: { type: String, required: true },
    registrationUrl: { type: String, default: "#" },
    status: { type: String, enum: ["published", "unpublished"], default: "published" },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
