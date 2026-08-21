import express from "express";
import Event from "../models/Event.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// GET /api/events — public, only published events, soonest first
router.get("/", async (req, res) => {
  try {
    const events = await Event.find({ status: "published" }).sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to load events.", error: err.message });
  }
});

// GET /api/events/all — admin only, includes unpublished events
router.get("/all", requireAdmin, async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "Failed to load events.", error: err.message });
  }
});

// POST /api/events — admin only
router.post("/", requireAdmin, async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ message: "Failed to create event.", error: err.message });
  }
});

// PUT /api/events/:id — admin only
router.put("/:id", requireAdmin, async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!event) return res.status(404).json({ message: "Event not found." });
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: "Failed to update event.", error: err.message });
  }
});

// DELETE /api/events/:id — admin only
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) return res.status(404).json({ message: "Event not found." });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: "Failed to delete event.", error: err.message });
  }
});

export default router;
