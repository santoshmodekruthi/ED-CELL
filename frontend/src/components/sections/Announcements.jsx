import React from "react";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import SectionHeading from "../ui/SectionHeading.jsx";

export default function Announcements({ announcements = [] }) {
  const published = announcements.filter((a) => a.status !== "unpublished");
  if (published.length === 0) return null;

  return (
    <section className="relative py-32">
      <div className="container-shell">
        <SectionHeading 
          eyebrow="Stay Updated" 
          title="Latest Announcements"
          description="Important updates and news from ED Cell"
        />
        
        <div className="mt-16 max-w-3xl mx-auto space-y-5">
          {published.map((announcement, index) => (
            <motion.div
              key={announcement.id || announcement._id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group glass-panel glow-border rounded-2xl p-7 flex gap-5 hover:border-[#A855F7]/50 transition-all duration-300 backdrop-blur-xl"
            >
              <div className="h-12 w-12 shrink-0 rounded-lg bg-gradient-to-br from-[#A855F7] to-[#EC4899] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Bell size={18} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-white text-base mb-2">{announcement.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed">{announcement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
