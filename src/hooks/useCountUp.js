import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../utils/motion";

/* Animates 0 -> `to` once `active` is true. */
export default function useCountUp(to, active, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }
    let raf;
    let start;
    const step = (ts) => {
      start ??= ts;
      const p = Math.min((ts - start) / duration, 1);
      setValue(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, to, duration]);

  return value;
}
