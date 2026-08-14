import React from "react";
import AnimatedBackground from "./AnimatedBackground.jsx";

/**
 * tone: "dark" | "light" | "navy-gradient"
 * Wraps a section in the correct alternating background environment,
 * with the shared AnimatedBackground system underneath at reduced
 * strength so motion feels continuous across the page.
 */
export default function SectionWrapper({ id, tone = "dark", className = "", children }) {
  const isLight = tone === "light";
  return (
    <section
      id={id}
      className={`relative py-24 sm:py-28 overflow-hidden ${isLight ? "text-ink-900 section-light" : "text-white"} ${className}`}
    >
      <AnimatedBackground variant={isLight ? "section-light" : "section-dark"} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
