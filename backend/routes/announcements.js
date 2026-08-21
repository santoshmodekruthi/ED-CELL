import express from "express";
import Announcement from "../models/Announcement.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// GET /api/announcements — public, only published, newest first
router.get("/", async (req, res) => {
  try {
    const items = await Announcement.find({ status: "published" }).sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to load announcements.", error: err.message });
  }
});

// GET /api/announcements/all — admin only, includes unpublished
router.get("/all", requireAdmin, async (req, res) => {
  try {
    const items = await Announcement.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Failed to load announcements.", error: err.message });
  }
});

// POST /api/announcements — admin only
router.post("/", requireAdmin, async (req, res) => {
  try {
    const item = await Announcement.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: "Failed to create announcement.", error: err.message });
  }
});

// PUT /api/announcements/:id — admin only
router.put("/:id", requireAdmin, async (req, res) => {
  try {
    const item = await Announcement.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: "Announcement not found." });
    res.json(item);
  } catch (err) {
    res.status(400).json({ message: "Failed to update announcement.", error: err.message });
  }
});

// DELETE /api/announcements/:id — admin only
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    const item = await Announcement.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Announcement not found." });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: "Failed to delete announcement.", error: err.message });
  }
});

export default router;
