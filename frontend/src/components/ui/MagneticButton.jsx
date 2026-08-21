import React, { useMemo, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion.js";

/**
 * A button that gently follows the cursor within its bounds (max ~10px)
 * using spring physics, and glides back to rest when the cursor leaves.
 * Disabled under prefers-reduced-motion.
 */
export default function MagneticButton({ as: Tag = "button", className = "", children, strength = 10, ...rest }) {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMouseMove(e) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const relY = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  // Memoized so the motion-wrapped tag keeps a stable identity across
  // re-renders (recreating it every render would remount the element).
  const MotionTag = useMemo(() => motion(Tag), [Tag]);

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={reducedMotion ? undefined : { x: springX, y: springY }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
