import mongoose from "mongoose";

const siteContentSchema = new mongoose.Schema(
  {
    about: {
      intro: { type: String, default: "" },
      vision: { type: String, default: "" },
      mission: { type: String, default: "" },
    },
    statistics: {
      studentsImpacted: { type: String, default: "0+" },
      eventsConducted: { type: String, default: "0+" },
      expertMentors: { type: String, default: "0+" },
      startupInitiatives: { type: String, default: "0+" },
    },
    contact: {
      email: { type: String, default: "" },
      phone: { type: String, default: "" },
      address: { type: String, default: "" },
    },
    socialLinks: {
      instagram: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      youtube: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

// SiteContent is a singleton: there is only ever one document.
// Routes fetch (or create-on-first-access) the single record.
export default mongoose.model("SiteContent", siteContentSchema);
