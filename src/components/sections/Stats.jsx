import React from "react";
import { motion } from "framer-motion";
import useCountUp from "../../hooks/useCountUp.js";
import useInView from "../../hooks/useInView.js";

function StatCard({ value, label }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const display = useCountUp(value, inView);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="bg-[#0a070f]/75 border border-[#B446FF]/25 rounded-[22px] p-8 text-center hover:border-[#B446FF]/65 hover:shadow-[0_15px_30px_rgba(180,70,255,0.15)] hover:-translate-y-[3px] transition-all duration-300 ease-out backdrop-blur-md"
    >
      <div className="text-5xl sm:text-6xl font-display font-bold text-gradient mb-3">{display}</div>
      <p className="text-xs sm:text-sm uppercase tracking-wider font-medium text-white/50">{label}</p>
    </motion.div>
  );
}

export default function Stats({ statistics }) {
  const items = [
    { value: statistics?.studentsImpacted, label: "Students Impacted" },
    { value: statistics?.eventsConducted, label: "Events Conducted" },
    { value: statistics?.expertMentors, label: "Expert Mentors" },
    { value: statistics?.startupInitiatives, label: "Startup Initiatives" },
  ];

  return (
    <section className="relative py-20 border-y border-white/5">
      <div className="container-shell">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
