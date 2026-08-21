import React from "react";
import { motion } from "framer-motion";

export default function StackedCard({ children, className = "", delay = 0, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className={`relative z-10 bg-[#0a070f]/75 backdrop-blur-md border border-[#B446FF]/25 rounded-[22px] p-6 sm:p-8 hover:-translate-y-[3px] hover:border-[#B446FF]/65 hover:shadow-[0_15px_30px_rgba(180,70,255,0.15)] transition-all duration-300 ease-out cursor-pointer select-none overflow-hidden ${className}`}
    >
      {/* Subtle purple gradient background overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#B446FF]/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {children}
    </motion.div>
  );
}
