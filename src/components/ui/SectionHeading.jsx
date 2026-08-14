import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}
    >
      {eyebrow && <p className="section-eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">{title}</h2>
      {description && <p className="text-lg text-white/60 leading-relaxed">{description}</p>}
    </motion.div>
  );
}
