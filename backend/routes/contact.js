import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// POST /api/contact
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const contact = await Contact.create({ name, email, subject, message });
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (err) {
    res.status(500).json({ message: "Failed to send message.", error: err.message });
  }
});

export default router;
