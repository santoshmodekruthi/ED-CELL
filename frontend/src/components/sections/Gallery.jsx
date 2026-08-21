import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, X } from "lucide-react";

const CATEGORIES = ["All", "Workshops", "Competitions", "Seminars", "Guest Lectures", "Startup Events", "Team Activities"];

export default function Gallery({ items = [] }) {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(
    () => (active === "All" ? items : items.filter((it) => it.category === active)),
    [items, active]
  );

  return (
    <section id="gallery" className="relative py-16 px-6">
      <div className="container-shell max-w-5xl mx-auto">
        {/* Categories Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {CATEGORIES.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActive(category)}
              className={`rounded-lg px-4.5 py-2 text-[10px] font-extrabold uppercase tracking-wider transition-all duration-200 border ${
                active === category
                  ? "bg-[#8B2CFF] border-[#8B2CFF] text-white shadow-[0_0_15px_rgba(139,44,255,0.3)]"
                  : "bg-[#08060B]/60 border-[rgba(255,255,255,0.08)] text-[#9A96A5] hover:bg-[#8B2CFF]/10 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Masonry Columns Grid */}
        <div className="mt-12 columns-2 md:columns-3 gap-6 [column-fill:_balance]">
          {filtered.map((item, index) => (
            <motion.button
              key={item.id || item._id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
              onClick={() => setLightbox(item)}
              className="group relative mb-6 w-full overflow-hidden rounded-2xl block border border-[rgba(255,255,255,0.08)] bg-[#08060B]/60 hover:border-[#8B2CFF]/50 hover:shadow-[0_0_25px_rgba(139,44,255,0.1)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-[#050407]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 rounded-2xl">
                <div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-2.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye size={18} className="text-white" />
                </div>
                <p className="text-[10px] text-white uppercase tracking-wider font-bold text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.caption}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#050407]/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#08060B] rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.image} alt={lightbox.caption} className="w-full max-h-[70vh] object-contain bg-[#050407]" />
              <div className="p-6 flex items-center justify-between border-t border-white/5">
                <p className="text-xs uppercase tracking-wider font-extrabold text-white">{lightbox.caption}</p>
                <button
                  onClick={() => setLightbox(null)}
                  aria-label="Close"
                  className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#9A96A5] hover:text-white hover:bg-white/10 active:scale-95 transition-all duration-200"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
