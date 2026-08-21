import React from "react";
import { motion } from "framer-motion";
import { Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Mentors({ mentors = [] }) {
  const visible = mentors.slice(0, 4);
  return (
    <section id="mentors" className="py-20 px-5 md:px-10 lg:px-16" style={{ background: "#F8FAFF" }}>
      <div className="container-shell max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="section-label mb-4">Mentors</div>
            <h2 className="font-display font-bold" style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", color: "#0F172A" }}>
              Meet Our Mentors
            </h2>
          </div>
          <Link
            to="/mentors"
            className="inline-flex items-center gap-1.5 text-sm font-semibold shrink-0 transition-colors duration-200"
            style={{ color: "#2563EB" }}
            onMouseEnter={e => e.currentTarget.style.color = "#1D4ED8"}
            onMouseLeave={e => e.currentTarget.style.color = "#2563EB"}
          >
            View all mentors <ArrowRight size={14} />
          </Link>
        </motion.div>

        {mentors.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-sm" style={{ color: "#94A3B8" }}>Mentor profiles coming soon.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visible.map((mentor, index) => (
              <motion.div
                key={mentor.id || mentor.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="card-white p-5 flex flex-col items-center text-center group"
              >
                {/* Photo */}
                <div
                  className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 transition-all duration-300 group-hover:border-[#2563EB] group-hover:shadow-[0_4px_20px_rgba(37,99,235,0.15)]"
                  style={{ borderColor: "#DBEAFE", background: "#EFF6FF" }}
                >
                  <img
                    src={mentor.image} alt={mentor.name} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h3 className="font-display font-bold text-sm mb-0.5 line-clamp-1 transition-colors duration-200 group-hover:text-[#2563EB]" style={{ color: "#0F172A" }}>
                  {mentor.name}
                </h3>
                <p className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "#2563EB" }}>
                  {mentor.designation}
                </p>
                <p className="text-xs leading-relaxed line-clamp-2 mb-4" style={{ color: "#64748B" }}>{mentor.bio}</p>

                {mentor.linkedin && (
                  <a
                    href={mentor.linkedin} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                    style={{ background: "#EFF6FF", color: "#2563EB", border: "1px solid #BFDBFE" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#EFF6FF"; e.currentTarget.style.color = "#2563EB"; }}
                  >
                    <Linkedin size={12} /> Connect
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
