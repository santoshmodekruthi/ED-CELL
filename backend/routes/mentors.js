import express from "express";
import Mentor from "../models/Mentor.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

// GET /api/mentors — public
router.get("/", async (req, res) => {
  try {
    const mentors = await Mentor.find().sort({ createdAt: 1 });
    res.json(mentors);
  } catch (err) {
    res.status(500).json({ message: "Failed to load mentors.", error: err.message });
  }
});

// POST /api/mentors — admin only
router.post("/", requireAdmin, async (req, res) => {
  try {
    const mentor = await Mentor.create(req.body);
    res.status(201).json(mentor);
  } catch (err) {
    res.status(400).json({ message: "Failed to create mentor.", error: err.message });
  }
});

// PUT /api/mentors/:id — admin only
router.put("/:id", requireAdmin, async (req, res) => {
  try {
    const mentor = await Mentor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!mentor) return res.status(404).json({ message: "Mentor not found." });
    res.json(mentor);
  } catch (err) {
    res.status(400).json({ message: "Failed to update mentor.", error: err.message });
  }
});

// DELETE /api/mentors/:id — admin only
router.delete("/:id", requireAdmin, async (req, res) => {
  try {
    const mentor = await Mentor.findByIdAndDelete(req.params.id);
    if (!mentor) return res.status(404).json({ message: "Mentor not found." });
    res.status(204).end();
  } catch (err) {
    res.status(400).json({ message: "Failed to delete mentor.", error: err.message });
  }
});

export default router;
