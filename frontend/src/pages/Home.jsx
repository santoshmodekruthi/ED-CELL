import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import OpportunitiesSection from "../components/sections/OpportunitiesSection.jsx";

import useSiteData from "../hooks/useSiteData.js";

export default function Home() {
  const { content } = useSiteData();
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    // Check session storage to see if animation has played
    const hasPlayed = sessionStorage.getItem("edcell_logo_animation_played");
    if (!hasPlayed) {
      setShowAnimation(true);
      sessionStorage.setItem("edcell_logo_animation_played", "true");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020818] text-[#F5F5F5] overflow-x-hidden">
      
      {/* Fixed Background Logo Watermark for entire Home Page */}
      <div className="fixed inset-0 z-[40] flex items-center justify-center pointer-events-none overflow-hidden">
        <img 
          src="/ed-cell-logo.jpeg" 
          alt="ED Cell Watermark" 
          className="w-[90vw] md:w-[60vw] max-w-[800px] object-contain opacity-[0.03] grayscale mix-blend-multiply"
        />
      </div>

      <AnimatePresence>
        {showAnimation && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            onAnimationComplete={() => setShowAnimation(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 pointer-events-none"
          >
            <div className="relative">
              {/* Subtle blue radial glow */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 bg-blue-400 rounded-full blur-[60px] opacity-20"
              />
              
              {/* Logo */}
              <motion.img
                src="/ed-cell-logo.jpeg"
                alt="ED Cell Logo"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl relative z-10 shadow-lg border border-blue-100"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <OpportunitiesSection />
      </main>
      
      <Footer contact={content?.contact} socialLinks={content?.socialLinks} />
    </div>
  );
}
