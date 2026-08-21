import { useEffect, useRef, useState } from "react";

/**
 * Animates a number from 0 to the numeric part of `value` (e.g. "1000+")
 * once `start` becomes true. Preserves any non-numeric suffix like "+".
 */
export default function useCountUp(value, start, duration = 1400) {
  const numeric = parseInt(String(value).replace(/[^0-9]/g, ""), 10) || 0;
  const suffix = String(value).replace(/[0-9]/g, "");
  const [display, setDisplay] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numeric));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [start, numeric, duration]);

  return `${display}${suffix}`;
}
