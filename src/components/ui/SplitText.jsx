import React from "react";
import { motion } from "framer-motion";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion.js";

const charVariants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Reveals `text` character-by-character, sliding up from inside an
 * overflow-hidden mask, staggered. Falls back to a plain fade for
 * prefers-reduced-motion users.
 */
export default function SplitText({ text, className = "", delayChildren = 0.2, staggerChildren = 0.035 }) {
  const reducedMotion = usePrefersReducedMotion();
  const chars = Array.from(text);

  if (reducedMotion) {
    return (
      <motion.span
        className={className}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {text}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { delayChildren, staggerChildren } } }}
      aria-label={text}
    >
      {chars.map((char, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span variants={charVariants} className="inline-block">
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
