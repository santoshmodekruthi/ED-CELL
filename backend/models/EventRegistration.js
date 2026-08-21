import mongoose from "mongoose";

const eventRegistrationSchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    teamInformation: { type: String },
    registrationDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("EventRegistration", eventRegistrationSchema);
