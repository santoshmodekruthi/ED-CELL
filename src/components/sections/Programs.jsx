import React from "react";
import { motion } from "framer-motion";
import { Cpu, LineChart, FlaskConical, PenTool, ArrowRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const PROGRAMS = [
  { icon: Cpu, title: "Computer Science & Engineering", text: "AI, systems and software engineering with strong industry partnerships." },
  { icon: LineChart, title: "Business & Management", text: "Analytics-driven programs building the next generation of leaders." },
  { icon: FlaskConical, title: "Applied Sciences", text: "Research-first curriculum spanning physics, chemistry and data science." },
  { icon: PenTool, title: "Design & Innovation", text: "Human-centered design thinking applied to real product challenges." },
];

export default function Programs() {
  return (
    <div className="container-shell">
      <SectionHeading
        eyebrow="Academic Programs"
        title="Programs built for the world ahead"
        description="Undergraduate and postgraduate programs blending rigorous theory with hands-on practice."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROGRAMS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group rounded-2xl panel-on-light p-6 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300"
          >
            <div className="h-11 w-11 rounded-xl bg-grad-primary flex items-center justify-center mb-5">
              <p.icon size={18} className="text-white" />
            </div>
            <h3 className="font-semibold text-ink-900 mb-2">{p.title}</h3>
            <p className="text-sm text-ink-900/60 leading-relaxed mb-4">{p.text}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#123B66] group-hover:text-gold-600 transition-colors">
              Learn more <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
