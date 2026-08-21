import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import NetworkVisualization from "../ui/NetworkVisualization.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 pb-20 px-5 md:px-10 lg:px-16 overflow-hidden bg-white">
      {/* Light blue gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 15% 50%, rgba(219,234,254,0.6) 0%, transparent 65%), radial-gradient(ellipse 55% 50% at 85% 20%, rgba(239,246,255,0.8) 0%, transparent 60%)",
        }}
      />

      <div className="container-shell max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

        {/* ── LEFT ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Eyebrow label */}
          <motion.div variants={fadeUp} custom={0} className="section-label mb-7">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse inline-block" />
            ED CELL • VIGNAN INSTITUTE OF INFORMATION TECHNOLOGY
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp} custom={0.1}
            className="font-display mb-6"
            style={{ fontSize: "clamp(2.6rem, 5.5vw, 4rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em" }}
          >
            <span className="block" style={{ color: "#0F172A" }}>Building the</span>
            <span className="block text-blue-gradient">Entrepreneurial</span>
            <span className="block text-blue-gradient">Ecosystem</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp} custom={0.22}
            className="text-base leading-relaxed mb-9 max-w-lg"
            style={{ color: "#64748B" }}
          >
            ED Cell is dedicated to fostering innovation, leadership and entrepreneurial thinking among students at Vignan Institute of Information Technology.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} custom={0.34} className="flex flex-wrap gap-3">
            <Link
              to="/events"
              className="btn-primary"
            >
              Explore Events
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/about"
              className="btn-secondary"
            >
              <Sparkles size={14} style={{ color: "#2563EB" }} />
              Join ED Cell
            </Link>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp} custom={0.46}
            className="mt-12 flex items-center gap-8 pt-8"
            style={{ borderTop: "1px solid #E2E8F0" }}
          >
            {[["100+", "Students"], ["20+", "Mentors"], ["50+", "Events"]].map(([num, label]) => (
              <div key={label} className="flex flex-col">
                <span className="font-display font-bold text-2xl" style={{ color: "#2563EB" }}>{num}</span>
                <span className="text-xs font-semibold" style={{ color: "#94A3B8", letterSpacing: "0.06em" }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Network ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          {/* Card background for network */}
          <div
            className="w-full rounded-3xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #F8FAFF 0%, #EFF6FF 100%)",
              border: "1px solid #DBEAFE",
              boxShadow: "0 4px 30px rgba(37,99,235,0.08), 0 1px 4px rgba(0,0,0,0.04)",
              padding: "24px",
            }}
          >
            <NetworkVisualization />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
