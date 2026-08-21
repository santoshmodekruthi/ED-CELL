import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Box, Award, ShieldAlert, Cpu, ArrowRight } from "lucide-react";

const opportunities = [
  { title: "Ideation Tracks", desc: "Turn raw ideas into structured concepts with sandbox templates and validation guides.", Icon: Lightbulb, color: "#2563EB" },
  { title: "Incubation Sandbox", desc: "Receive seed support, workspace resources, and workspace integrations.", Icon: Box, color: "#0EA5E9" },
  { title: "Pitch Seminars", desc: "Gain access to mock pitch panels, presentation reviews, and early discovery pathways.", Icon: Award, color: "#6366F1" },
  { title: "IP Advisory", desc: "Guidance on copyright, patents, and tech-transfer frameworks.", Icon: ShieldAlert, color: "#1D4ED8" },
  { title: "Tech Prototyping", desc: "Leverage college innovation labs to engineer hardware/software verification milestones.", Icon: Cpu, color: "#0EA5E9" },
];

export default function OpportunitiesSection() {
  return (
    <section className="py-24 px-5 md:px-10 lg:px-16" style={{ background: "#F8FAFF" }}>
      <div className="container-shell max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <div className="section-label mx-auto mb-5">Opportunities</div>
          <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: "#0F172A" }}>
            Opportunities for Every Innovator
          </h2>
          <p className="max-w-lg mx-auto text-sm" style={{ color: "#64748B" }}>
            Dedicated pathways designed to accelerate student innovations and validate technology startups.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {opportunities.slice(0, 3).map((item, idx) => (
            <OppCard key={item.title} item={item} idx={idx} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {opportunities.slice(3).map((item, idx) => (
            <OppCard key={item.title} item={item} idx={idx + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OppCard({ item, idx }) {
  const { Icon } = item;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="card-white p-6 flex flex-col group cursor-pointer"
    >
      {/* Icon */}
      <motion.div
        className="h-11 w-11 rounded-xl flex items-center justify-center mb-5"
        style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <Icon size={20} style={{ color: item.color }} />
      </motion.div>

      <h3 className="font-display font-bold text-sm mb-2" style={{ color: "#0F172A" }}>{item.title}</h3>
      <p className="text-xs leading-relaxed flex-1" style={{ color: "#64748B" }}>{item.desc}</p>

      <a
        href="/contact"
        className="inline-flex items-center gap-1.5 text-xs font-semibold mt-5 transition-colors duration-200"
        style={{ color: "#94A3B8" }}
        onMouseEnter={e => e.currentTarget.style.color = "#2563EB"}
        onMouseLeave={e => e.currentTarget.style.color = "#94A3B8"}
      >
        <span>Learn More</span>
        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </a>
    </motion.div>
  );
}
