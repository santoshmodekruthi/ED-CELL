/**
 * DEMO / PLACEHOLDER CONTENT
 * ---------------------------------------------------------------
 * Everything in this file is placeholder data used only until the
 * backend + MongoDB are connected (see src/lib/api.js). Each public
 * section fetches from the API first and falls back to this file if
 * the request fails, so the site is always visually complete during
 * local development.
 *
 * Replace via the Admin Panel (/admin/dashboard) once the backend is
 * running — do NOT hand-edit this file for real content.
 */

export const siteContent = {
  about: {
    intro:
      "The Entrepreneurship Development Cell (ED Cell) at Vignan Institute of Information Technology is a student-driven initiative dedicated to building an entrepreneurial mindset across campus.",
    vision:
      "To be the launchpad where student ideas grow into ventures that create real, lasting impact.",
    mission:
      "To equip students with the mentorship, resources, and network they need to take an idea from concept to company.",
  },
  statistics: {
    studentsImpacted: "1000+",
    eventsConducted: "50+",
    expertMentors: "20+",
    startupInitiatives: "15+",
  },
  contact: {
    email: "edcell@viit.ac.in",
    phone: "+91 00000 00000",
    address: "Vignan Institute of Information Technology, Duvvada, Visakhapatnam, Andhra Pradesh 530049",
  },
  socialLinks: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const mentors = [
  {
    id: "m1",
    name: "Dr. Rajesh Kumar",
    designation: "Faculty Mentor",
    bio: "Guides student ventures through early-stage validation and campus-industry collaboration.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces",
    linkedin: "https://linkedin.com",
  },
  {
    id: "m2",
    name: "Ms. Priya Sharma",
    designation: "Industry Mentor",
    bio: "Brings a decade of product and growth experience to ED Cell startup teams.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces",
    linkedin: "https://linkedin.com",
  },
  {
    id: "m3",
    name: "Mr. Arjun Reddy",
    designation: "Startup Mentor",
    bio: "Founder-turned-mentor helping students navigate fundraising and go-to-market strategy.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces",
    linkedin: "https://linkedin.com",
  },
  {
    id: "m4",
    name: "Ms. Sneha Rao",
    designation: "Entrepreneurship Mentor",
    bio: "Runs ideation workshops and design-thinking sprints for first-time founders.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces",
    linkedin: "https://linkedin.com",
  },
];

export const events = [
  {
    id: "e1",
    title: "Ideation Tracks",
    description: "Transform raw thoughts into validated startup concepts. Access validation sprint tools, sandbox user research, and early market size assessment advice.",
    date: "2026-08-20",
    time: "10:00 AM",
    location: "VIIT Campus",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop",
    registrationUrl: "#",
    status: "published",
  },
  {
    id: "e2",
    title: "Incubation Sandbox",
    description: "Launch early MVPs with web/cloud credits, dedicated local lab prototyping support, legal check templates, and workspace allocations on campus.",
    date: "2026-08-28",
    time: "02:00 PM",
    location: "ED Cell Hub",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop",
    registrationUrl: "#",
    status: "published",
  },
  {
    id: "e3",
    title: "Pitch Seminars",
    description: "Present startup progress and pitch deck slides in front of active early-stage investors, operators, alumni networks, and faculty advisors.",
    date: "2026-09-10",
    time: "05:00 PM",
    location: "Seminar Hall",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=500&fit=crop",
    registrationUrl: "#",
    status: "published",
  },
  {
    id: "e4",
    title: "IP Advisory",
    description: "Get assistance with legal guidelines, patent filing pathways, copyright frameworks, and technical structuring for student innovations.",
    date: "2026-09-18",
    time: "11:00 AM",
    location: "Innovators Lounge",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
    registrationUrl: "#",
    status: "published",
  },
  {
    id: "e5",
    title: "Tech Prototyping",
    description: "Leverage active electronics sandboxes, 3D printers, developer tool licenses, and mechanical modeling workshops to construct physical versions.",
    date: "2026-09-25",
    time: "03:00 PM",
    location: "Maker Space VIIT",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop",
    registrationUrl: "#",
    status: "published",
  },
];

export const galleryItems = [
  { id: "g1", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=600&fit=crop", caption: "Ideation workshop", category: "Workshops" },
  { id: "g2", image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=600&fit=crop", caption: "Pitch competition finals", category: "Competitions" },
  { id: "g3", image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=600&fit=crop", caption: "Guest lecture on venture funding", category: "Guest Lectures" },
  { id: "g4", image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=600&fit=crop", caption: "Founder panel discussion", category: "Seminars" },
  { id: "g5", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop", caption: "Startup demo day", category: "Startup Events" },
  { id: "g6", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop", caption: "Team building activity", category: "Team Activities" },
];

export const announcements = [
  {
    id: "a1",
    title: "Applications open for Winter Incubation Batch",
    description: "Student teams can now apply for the upcoming incubation cohort. Deadline extended to end of month.",
    date: "2026-08-05",
    status: "published",
  },
  {
    id: "a2",
    title: "New mentor sessions added every Friday",
    description: "Drop-in mentor office hours are now available weekly for one-on-one guidance.",
    date: "2026-08-01",
    status: "published",
  },
];
