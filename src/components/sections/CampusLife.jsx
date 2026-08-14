import React from "react";
import { motion } from "framer-motion";
import { Users, Music, Trophy, Home as HomeIcon } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

const HIGHLIGHTS = [
  { icon: Users, title: "80+ Student Clubs", text: "From robotics to debate — a community for every interest." },
  { icon: Trophy, title: "Sports & Athletics", text: "State-level facilities across cricket, athletics and indoor sports." },
  { icon: Music, title: "Arts & Culture", text: "Annual fests, music nights and cultural showcases year-round." },
  { icon: HomeIcon, title: "On-Campus Living", text: "Modern hostels with dedicated wings for men and women." },
];

export default function CampusLife() {
  return (
    <div className="container-shell">
      <SectionHeading
        eyebrow="Campus Life"
        title="A campus built for connection"
        description="Beyond the classroom, students find community, competition and creative outlets."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {HIGHLIGHTS.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-panel rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="h-11 w-11 rounded-xl bg-grad-gold flex items-center justify-center mb-5">
              <h.icon size={18} className="text-ink-950" />
            </div>
            <h3 className="font-semibold text-white mb-2">{h.title}</h3>
            <p className="text-sm text-white/55 leading-relaxed">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
