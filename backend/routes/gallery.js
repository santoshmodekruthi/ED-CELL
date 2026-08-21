import express from "express";
import Gallery from "../models/Gallery.js";
import { requireAdmin } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// GET /api/gallery — public
router.get("/", async (req, res) => {
  try {
    const items = await Gallery.find().sort({ createdAt: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to load gallery.", error: err.message });
  }
});

// POST /api/gallery — admin only
// Accepts either:
//   - multipart/form-data with an "image" file field (uploaded to Cloudinary), or
//   - a JSON body with an "image" URL already set (e.g. pasted link)
router.post("/", requireAdmin, upload.single("image"), async (req, res) => {
  try {
    const image = req.file ? req.file.path : req.body.image;
    if (!image) return res.status(400).json({ message: "An image file or image URL is required." });

    const item = await Gallery.create({
      image,
      caption: req.body.caption || "",
      category: req.body.category,
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: "Failed to add gallery image.", error: err.message });
  }
});

// DELETE /api/gallery/:id — admin only
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    const item = await Gallery.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Gallery item not found." });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: "Failed to delete gallery image.", error: err.message });
  }
});

export default router;
