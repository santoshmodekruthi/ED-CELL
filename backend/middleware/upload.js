import multer from "multer";
import { storage } from "../config/cloudinary.js";

// Handles multipart/form-data image uploads and streams them directly
// to Cloudinary via the configured storage engine. Use as:
//   router.post("/", requireAdmin, upload.single("image"), handler)
// The uploaded file's hosted URL will be available at req.file.path
export const upload = multer({ storage });
