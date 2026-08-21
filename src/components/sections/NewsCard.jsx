import React from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowUpRight } from "lucide-react";

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return dateStr;
  }
}

export default function NewsCard({ title, description, date, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group rounded-3xl glass-panel glow-border overflow-hidden hover:-translate-y-1.5 transition-all duration-400 p-6 flex flex-col"
    >
      <div className="flex items-center gap-2 text-xs text-gold-400 mb-3">
        <Calendar size={13} /> {formatDate(date)}
      </div>
      <h3 className="font-semibold text-white mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-white/55 leading-relaxed flex-1">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-white/70 group-hover:text-gold-400 transition-colors">
        Read more <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </span>
    </motion.article>
  );
}
