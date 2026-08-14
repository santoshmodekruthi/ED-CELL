import React from "react";
import { motion } from "framer-motion";
import { Compass, Target, Users, Rocket } from "lucide-react";

const pillars = [
  { icon: Compass, title: "Vision-led", text: "A clear direction: turning student ideas into ventures with lasting impact." },
  { icon: Target, title: "Mission-driven", text: "Mentorship, resources and network — from concept to company." },
  { icon: Users, title: "Mentorship", text: "Faculty, industry and startup mentors guiding teams at every stage." },
  { icon: Rocket, title: "Startup ecosystem", text: "Workshops, pitch events and incubation support across campus." },
];

export default function About({ content }) {
  return (
    <section id="about" className="relative py-16 px-6">
      <div className="container-shell max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Vision & Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="bg-[#08060B]/60 rounded-2xl border border-[rgba(255,255,255,0.08)] p-8 flex flex-col justify-between hover:border-[#8B2CFF]/40 transition duration-300 hover:shadow-[0_0_25px_rgba(139,44,255,0.08)]"
          >
            <div className="mb-8">
              <p className="text-[9px] font-extrabold text-[#8B2CFF] uppercase tracking-wider mb-2">Our Vision</p>
              <h3 className="text-lg font-bold text-white mb-3">Empowering Innovation</h3>
              <p className="text-xs text-[#9A96A5] leading-relaxed font-semibold">{content?.vision}</p>
            </div>
            <div className="border-t border-white/5 pt-8">
              <p className="text-[9px] font-extrabold text-[#8B2CFF] uppercase tracking-wider mb-2">Our Mission</p>
              <h3 className="text-lg font-bold text-white mb-3">Building Leaders</h3>
              <p className="text-xs text-[#9A96A5] leading-relaxed font-semibold">{content?.mission}</p>
            </div>
          </motion.div>

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-[#08060B]/60 rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 flex flex-col hover:border-[#8B2CFF]/50 transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,44,255,0.1)] hover:-translate-y-1"
              >
                <div className="h-10 w-10 rounded-xl bg-[#8B2CFF]/15 border border-[#8B2CFF]/40 text-[#8B2CFF] flex items-center justify-center mb-5 group-hover:bg-[#8B2CFF]/20 transition-colors duration-300">
                  <pillar.icon size={18} />
                </div>
                <h3 className="font-bold text-white mb-2 text-sm">{pillar.title}</h3>
                <p className="text-xs text-[#9A96A5] leading-relaxed font-semibold">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
