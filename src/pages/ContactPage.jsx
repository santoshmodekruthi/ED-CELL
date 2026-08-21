import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Contact from "../components/sections/Contact.jsx";

import useSiteData from "../hooks/useSiteData.js";

export default function ContactPage() {
  const { content } = useSiteData();

  return (
    <div className="relative min-h-screen bg-[#020818] text-[#F5F5F5]">
        <Navbar />
        
        <main className="pt-28">
          {/* Page Hero Section */}
          <section className="relative flex items-center justify-center pt-20 pb-12 overflow-hidden border-b border-dashed border-white/10">
            <div className="container-shell text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xs uppercase tracking-[0.25em] font-bold text-[#8B2CFF] mb-3">Get in Touch</p>
                <h1 className="text-4xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tight leading-tight font-display">
                  Contact <span className="bg-gradient-to-r from-[#D600FF] to-[#FF2D8D] bg-clip-text text-transparent">ED Cell</span>
                </h1>
                <p className="text-xs sm:text-sm text-[#9A96A5] max-w-xl mx-auto leading-relaxed font-semibold">
                  We are here to support your startup journey. Send us a message or visit our campus coworking space.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact info grid */}
          <div className="pb-20">
            <Contact contact={content?.contact} socialLinks={content?.socialLinks} />
          </div>
        </main>
        
        <Footer contact={content?.contact} socialLinks={content?.socialLinks} />
    </div>
  );
}


