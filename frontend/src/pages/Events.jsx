import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Events from "../components/sections/Events.jsx";

import NetworkVisualization from "../components/ui/NetworkVisualization.jsx";
import useSiteData from "../hooks/useSiteData.js";

export default function EventsPage() {
  const { content, events } = useSiteData();

  return (
    <div className="relative min-h-screen bg-[#020818] text-[#F5F5F5]">
        <Navbar />
        
        <main className="pt-28">
          {/* Page Hero Section */}
          <section className="relative px-6 py-16 md:py-20 border-b border-dashed border-white/10">
            <div className="container-shell max-w-5xl mx-auto grid md:grid-cols-12 gap-10 items-center">
              
              {/* Left Side: Left-aligned Texts */}
              <div className="md:col-span-7 text-left">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xs uppercase tracking-[0.25em] font-bold text-[#8B2CFF] mb-3"
                >
                  UPCOMING OPPORTUNITIES
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                  className="text-4xl sm:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-tight font-display"
                >
                  Events & <br />
                  <span className="bg-gradient-to-r from-[#D600FF] to-[#FF2D8D] bg-clip-text text-transparent">Opportunities</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                  className="text-xs sm:text-sm text-[#9A96A5] max-w-md leading-relaxed font-semibold"
                >
                  Join our workshops, competitions, seminars, and networking events. Learn from industry leaders and connect with fellow entrepreneurs.
                </motion.p>
              </div>

              {/* Right Side: Network Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="md:col-span-5 flex items-center justify-center w-full"
              >
                <NetworkVisualization labels={["EVENTS", "WORKSHOPS", "IDEAS", "NETWORKING", "MENTORS"]} />
              </motion.div>

            </div>
          </section>

          {/* Events list */}
          <div className="pb-20">
            <Events events={events} />
          </div>
        </main>
        
        <Footer contact={content?.contact} socialLinks={content?.socialLinks} />
    </div>
  );
}


