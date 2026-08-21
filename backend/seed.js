/**
 * Seeds the database with:
 *  - one Admin account (so you can log into /admin/login)
 *  - the demo Events, Mentors, Gallery images, Announcements and SiteContent
 *    that currently live in the frontend placeholder file
 *
 * Run with: npm run seed   (from the backend/ folder, after setting .env)
 *
 * Change ADMIN_USERNAME / ADMIN_PASSWORD below before running in production,
 * or better, set them via environment variables.
 */
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { connectDB } from "./config/db.js";
import mongoose from "mongoose";

import Admin from "./models/Admin.js";
import Event from "./models/Event.js";
import Mentor from "./models/Mentor.js";
import Gallery from "./models/Gallery.js";
import Announcement from "./models/Announcement.js";
import SiteContent from "./models/SiteContent.js";

dotenv.config();

const ADMIN_USERNAME = process.env.SEED_ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.SEED_ADMIN_PASSWORD || "changeme123";

async function seed() {
  await connectDB();

  const existingAdmin = await Admin.findOne({ username: ADMIN_USERNAME });
  if (!existingAdmin) {
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10);
    await Admin.create({ username: ADMIN_USERNAME, passwordHash });
    console.log(`Created admin user "${ADMIN_USERNAME}" (password: ${ADMIN_PASSWORD}) — change this immediately.`);
  } else {
    console.log(`Admin user "${ADMIN_USERNAME}" already exists, skipping.`);
  }

  if ((await Event.countDocuments()) === 0) {
    await Event.insertMany([
      {
        title: "Startup Pitching Competition",
        description: "Student founders pitch early-stage ideas to a panel of investors and industry mentors for feedback and seed opportunities.",
        date: "2026-08-20",
        time: "10:00 AM",
        location: "VIIT Auditorium",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
        registrationUrl: "#",
        status: "published",
      },
      {
        title: "Entrepreneurship Workshop",
        description: "A hands-on workshop covering ideation, validation, and building a minimum viable product from scratch.",
        date: "2026-08-28",
        time: "2:00 PM",
        location: "Seminar Hall, Block A",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
        registrationUrl: "#",
        status: "published",
      },
      {
        title: "Founder Talk",
        description: "An evening conversation with a founder on lessons learned building and scaling a startup from zero.",
        date: "2026-09-10",
        time: "5:00 PM",
        location: "ED Cell Lounge",
        image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=500&fit=crop",
        registrationUrl: "#",
        status: "published",
      },
    ]);
    console.log("Seeded demo events.");
  }

  if ((await Mentor.countDocuments()) === 0) {
    await Mentor.insertMany([
      { name: "Dr. Rajesh Kumar", designation: "Faculty Mentor", bio: "Guides student ventures through early-stage validation and campus-industry collaboration.", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces", linkedin: "https://linkedin.com" },
      { name: "Ms. Priya Sharma", designation: "Industry Mentor", bio: "Brings a decade of product and growth experience to ED Cell startup teams.", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces", linkedin: "https://linkedin.com" },
      { name: "Mr. Arjun Reddy", designation: "Startup Mentor", bio: "Founder-turned-mentor helping students navigate fundraising and go-to-market strategy.", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces", linkedin: "https://linkedin.com" },
      { name: "Ms. Sneha Rao", designation: "Entrepreneurship Mentor", bio: "Runs ideation workshops and design-thinking sprints for first-time founders.", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces", linkedin: "https://linkedin.com" },
    ]);
    console.log("Seeded demo mentors.");
  }

  if ((await Gallery.countDocuments()) === 0) {
    await Gallery.insertMany([
      { image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=600&fit=crop", caption: "Ideation workshop", category: "Workshops" },
      { image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=600&fit=crop", caption: "Pitch competition finals", category: "Competitions" },
      { image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=600&fit=crop", caption: "Guest lecture on venture funding", category: "Guest Lectures" },
      { image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=600&fit=crop", caption: "Founder panel discussion", category: "Seminars" },
      { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop", caption: "Startup demo day", category: "Startup Events" },
      { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop", caption: "Team building activity", category: "Team Activities" },
    ]);
    console.log("Seeded demo gallery images.");
  }

  if ((await Announcement.countDocuments()) === 0) {
    await Announcement.insertMany([
      { title: "Applications open for Winter Incubation Batch", description: "Student teams can now apply for the upcoming incubation cohort. Deadline extended to end of month.", date: "2026-08-05", status: "published" },
      { title: "New mentor sessions added every Friday", description: "Drop-in mentor office hours are now available weekly for one-on-one guidance.", date: "2026-08-01", status: "published" },
    ]);
    console.log("Seeded demo announcements.");
  }

  if ((await SiteContent.countDocuments()) === 0) {
    await SiteContent.create({
      about: {
        intro: "The Entrepreneurship Development Cell (ED Cell) at Vignan Institute of Information Technology is a student-driven initiative dedicated to building an entrepreneurial mindset across campus.",
        vision: "To be the launchpad where student ideas grow into ventures that create real, lasting impact.",
        mission: "To equip students with the mentorship, resources, and network they need to take an idea from concept to company.",
      },
      statistics: { studentsImpacted: "1000+", eventsConducted: "50+", expertMentors: "20+", startupInitiatives: "15+" },
      contact: { email: "edcell@viit.ac.in", phone: "+91 00000 00000", address: "Vignan Institute of Information Technology, Duvvada, Visakhapatnam, Andhra Pradesh 530049" },
      socialLinks: { instagram: "https://instagram.com", linkedin: "https://linkedin.com", youtube: "https://youtube.com" },
    });
    console.log("Seeded site content.");
  }

  await mongoose.disconnect();
  console.log("Seed complete.");
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
