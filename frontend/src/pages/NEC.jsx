import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, Instagram, Linkedin } from "lucide-react";
import Footer from "../components/Footer.jsx";

import { siteContent } from "../lib/placeholderContent.js";

const activities = [
  { title: "Ideation Sprints", text: "Structured sessions to help teams move from a rough idea to a testable concept." },
  { title: "Startup Bootcamps", text: "Multi-day intensives on validation, MVPs and early customer discovery." },
  { title: "Networking Circles", text: "Curated meetups connecting student founders with alumni and industry operators." },
];

const necTeam = [
  { name: "Team Lead", role: "NEC Coordinator" },
  { name: "Team Member", role: "Operations" },
  { name: "Team Member", role: "Outreach" },
];

export default function NEC() {
  return (
    <div className="relative min-h-screen bg-[#020818] text-[#F5F5F5]">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#020818]/85 backdrop-blur-md border-b border-white/10">
          <div className="container-shell max-w-5xl mx-auto h-20 flex items-center justify-between px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#9A96A5] hover:text-white px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition active:scale-95 duration-150">
              <ArrowLeft size={14} /> Back to ED Cell
            </Link>
            <span className="text-xs font-display font-extrabold tracking-wider uppercase text-[#8B2CFF]">NEC Circle</span>
          </div>
        </header>

        {/* Hero */}
        <section className="relative flex items-center pt-40 pb-20 overflow-hidden border-b border-dashed border-white/10">
          <div className="container-shell max-w-5xl mx-auto text-center px-6">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-wider font-bold text-[#8B2CFF] mb-3">
              A part of ED Cell
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight"
            >
              NEC — <span className="bg-gradient-to-r from-[#D600FF] to-[#FF2D8D] bg-clip-text text-transparent">New Entrepreneurs Circle</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 max-w-xl mx-auto text-xs text-[#9A96A5] font-semibold leading-relaxed"
            >
              NEC operates as a focused wing within ED Cell, running hands-on programs for first-time student builders at VIIT.
            </motion.p>
          </div>
        </section>

        {/* About Activities */}
        <section className="relative py-20 px-6">
          <div className="container-shell max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-wider font-bold text-[#8B2CFF] mb-3">About NEC</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">Where first ideas find their footing</h2>
              <p className="text-xs text-[#9A96A5] mt-4 max-w-xl mx-auto leading-relaxed font-semibold">{siteContent.about.mission}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {activities.map((a, i) => (
                <div key={a.title} className="bg-[#08060B]/60 rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 flex flex-col hover:border-[#8B2CFF]/50 hover:shadow-[0_0_25px_rgba(139,44,255,0.1)] hover:-translate-y-1 transition-all duration-300">
                  <span className="text-[9px] font-extrabold text-[#8B2CFF] mb-3 block uppercase tracking-wider">Activity 0{i + 1}</span>
                  <h3 className="font-bold text-white mb-2 text-sm">{a.title}</h3>
                  <p className="text-xs text-[#9A96A5] leading-relaxed font-semibold">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team members */}
        <section className="relative py-20 border-y border-dashed border-white/10 bg-[#08060B]/20 px-6">
          <div className="container-shell max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-wider font-bold text-[#8B2CFF] mb-3">NEC Coordinator Team</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">The people behind NEC</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {necTeam.map((t) => (
                <div key={t.name} className="bg-[#08060B]/60 rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 text-center hover:border-[#8B2CFF]/50 hover:shadow-[0_0_25px_rgba(139,44,255,0.1)] hover:-translate-y-1 transition-all duration-300">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#8B2CFF] to-[#D600FF] mx-auto mb-4 border border-white/5" />
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-[9px] uppercase tracking-wider font-extrabold text-[#8B2CFF] mt-1">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="relative py-20 text-center px-6">
          <div className="container-shell max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs uppercase tracking-wider font-bold text-[#8B2CFF] mb-3">Contact NEC</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">Want to get involved?</h2>
            </div>
            <div className="flex justify-center gap-4">
              <a href={`mailto:${siteContent.contact.email}`} className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#8B2CFF] to-[#D600FF] hover:shadow-[0_0_15px_#FF2D8D] text-white px-5 py-3 text-[10px] uppercase tracking-wider font-bold active:scale-95 duration-150 transition">
                <Mail size={12} />
                <span>Email NEC</span>
              </a>
              <a href={siteContent.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 border border-white/10 bg-[#08060B] flex items-center justify-center rounded-lg text-[#9A96A5] hover:text-[#8B2CFF] hover:border-[#8B2CFF] hover:shadow-[0_0_10px_rgba(139,44,255,0.15)] hover:bg-[#8B2CFF]/15 active:scale-95 duration-150 transition"><Instagram size={14} /></a>
              <a href={siteContent.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 border border-white/10 bg-[#08060B] flex items-center justify-center rounded-lg text-[#9A96A5] hover:text-[#8B2CFF] hover:border-[#8B2CFF] hover:shadow-[0_0_10px_rgba(139,44,255,0.15)] hover:bg-[#8B2CFF]/15 active:scale-95 duration-150 transition"><Linkedin size={14} /></a>
            </div>
          </div>
        </section>

      <Footer contact={siteContent.contact} socialLinks={siteContent.socialLinks} />
    </div>
  );
}


