import React from "react";
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 w-screen h-screen z-[99999] flex flex-col items-center justify-center overflow-hidden select-none"
      style={{ background: "linear-gradient(135deg, #F8FAFF 0%, #EFF6FF 50%, #DBEAFE 100%)" }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Soft radiating blue glow behind logo */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "480px", height: "480px",
          background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(147,197,253,0.08) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Expanding ring around logo */}
      <motion.div
        className="absolute rounded-full border-2 pointer-events-none"
        style={{ borderColor: "rgba(37,99,235,0.18)" }}
        initial={{ width: "80px", height: "80px", opacity: 0 }}
        animate={{ width: "260px", height: "260px", opacity: [0, 0.8, 0.3] }}
        transition={{ delay: 0.5, duration: 1.1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute rounded-full border pointer-events-none"
        style={{ borderColor: "rgba(37,99,235,0.10)" }}
        initial={{ width: "80px", height: "80px", opacity: 0 }}
        animate={{ width: "340px", height: "340px", opacity: [0, 0.5, 0.15] }}
        transition={{ delay: 0.65, duration: 1.2, ease: "easeOut" }}
      />

      {/* Logo */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.75, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.34, 1.2, 0.64, 1] }}
      >
        {/* Subtle blue ring */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{ inset: "-8px", border: "2px solid rgba(37,99,235,0.15)", borderRadius: "50%" }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="/ed-cell-logo.jpeg"
          alt="ED CELL VIIT Logo"
          className="rounded-full object-cover"
          style={{
            width: "clamp(120px, 25vmin, 160px)",
            height: "clamp(120px, 25vmin, 160px)",
            boxShadow: "0 8px 40px rgba(37,99,235,0.20), 0 2px 8px rgba(0,0,0,0.06)",
            border: "3px solid rgba(37,99,235,0.15)",
          }}
          animate={{
            boxShadow: [
              "0 8px 30px rgba(37,99,235,0.15), 0 2px 8px rgba(0,0,0,0.05)",
              "0 10px 45px rgba(37,99,235,0.28), 0 2px 12px rgba(0,0,0,0.07)",
              "0 8px 30px rgba(37,99,235,0.15), 0 2px 8px rgba(0,0,0,0.05)",
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          onError={(e) => { e.target.src = "/ed-cell.jpeg"; }}
        />
      </motion.div>

      {/* Text block */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 text-center z-10"
      >
        <motion.h1
          className="font-display font-bold tracking-[0.15em] uppercase mb-1.5"
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
            background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "0.22em",
          }}
        >
          ED CELL
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="text-[9px] tracking-[0.2em] uppercase font-semibold"
          style={{ color: "#64748B", maxWidth: "240px" }}
        >
          VIGNAN INSTITUTE OF INFORMATION TECHNOLOGY
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.4 }}
          className="text-[10px] font-medium mt-2"
          style={{ color: "#2563EB", letterSpacing: "0.08em" }}
        >
          Innovate • Inspire • Impact
        </motion.p>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
          className="flex items-center justify-center gap-1.5 mt-5"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="rounded-full"
              style={{ width: "5px", height: "5px", background: "#2563EB" }}
              animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.3, 0.8] }}
              transition={{ duration: 1.0, repeat: Infinity, delay: i * 0.18 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Floating blue particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${10 + (i * 6.1) % 80}%`,
            top: `${10 + (i * 5.3) % 80}%`,
            background: i % 2 === 0 ? "#2563EB" : "#93C5FD",
            opacity: 0,
          }}
          animate={{ opacity: [0, 0.5, 0], y: [-10, -30, -10] }}
          transition={{
            delay: 0.4 + i * 0.1,
            duration: 2.5 + (i % 3) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
