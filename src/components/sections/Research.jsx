import React from "react";
import { motion } from "framer-motion";
import { Microscope, BookOpen, Globe2 } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const AREAS = [
  { icon: Microscope, title: "Applied Research Labs", text: "Dedicated labs across AI, materials science and robotics." },
  { icon: BookOpen, title: "Published Faculty Work", text: "Faculty regularly publish in peer-reviewed international journals." },
  { icon: Globe2, title: "Global Collaborations", text: "Joint research and exchange programs with partner universities abroad." },
];

export default function Research() {
  return (
    <div className="container-shell">
      <SectionHeading
        eyebrow="Research & Innovation"
        title="Advancing knowledge that matters"
        description="A culture of inquiry — where faculty and students work side by side on real problems."
      />

      <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {AREAS.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl panel-on-light p-7 text-center hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="h-12 w-12 rounded-xl bg-grad-primary flex items-center justify-center mx-auto mb-5">
              <a.icon size={20} className="text-white" />
            </div>
            <h3 className="font-semibold text-ink-900 mb-2">{a.title}</h3>
            <p className="text-sm text-ink-900/60 leading-relaxed">{a.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
