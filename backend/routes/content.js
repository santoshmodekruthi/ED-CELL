import express from "express";
import SiteContent from "../models/SiteContent.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// Ensures a single SiteContent document always exists and returns it.
async function getOrCreateContent() {
  let content = await SiteContent.findOne();
  if (!content) {
    content = await SiteContent.create({});
  }
  return content;
}

// GET /api/content — public
router.get("/", async (req, res) => {
  try {
    const content = await getOrCreateContent();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: "Failed to load site content.", error: err.message });
  }
});

// PUT /api/content — admin only
router.put("/", requireAdmin, async (req, res) => {
  try {
    const content = await getOrCreateContent();
    Object.assign(content, req.body);
    await content.save();
    res.json(content);
  } catch (err) {
    res.status(400).json({ message: "Failed to update site content.", error: err.message });
  }
});

export default router;
