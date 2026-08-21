import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AnimatedBackground from "./ui/AnimatedBackground.jsx";
import NecLink from "./ui/NecLink.jsx";

const overlayVariants = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { duration: 0.55, ease: [0.65, 0, 0.35, 1] } },
  exit: { x: "100%", transition: { duration: 0.45, ease: [0.65, 0, 0.35, 1] } },
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function MobileMenu({ open, onClose, links }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          variants={overlayVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="fixed inset-0 z-[100] bg-ink-950"
        >
          <AnimatedBackground variant="menu" />

          <div className="relative z-10 flex items-center justify-between px-6 h-20">
            <span className="text-lg font-display font-extrabold text-gradient-gold">VIGNAN UNIVERSITY</span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-white p-2 focus-visible:outline-2 focus-visible:outline-gold-500 rounded-full"
            >
              <X size={26} />
            </button>
          </div>

          <motion.ul
            variants={listVariants}
            initial="hidden"
            animate="show"
            className="relative z-10 flex flex-col items-start gap-2 px-8 mt-10"
          >
            {links.map((link) => (
              <motion.li key={link.label} variants={itemVariants} className="w-full">
                <a
                  href={link.to}
                  onClick={onClose}
                  className="block py-3 text-3xl font-display font-semibold text-white/90 hover:text-gold-400 transition-colors"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
            <motion.li variants={itemVariants} className="w-full pt-6">
              <a
                href="#admissions"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full bg-grad-gold px-7 py-3 text-sm font-bold text-ink-950 shadow-glow-gold"
              >
                Apply Now
              </a>
            </motion.li>
            <motion.li variants={itemVariants} className="w-full pt-3">
              <NecLink
                className="inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white"
                onClick={onClose}
              />
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
