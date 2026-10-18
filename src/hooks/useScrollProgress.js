import { useEffect, useRef } from "react";

/* Attach the returned ref to an element; it is scaled 0 -> 1 as the page scrolls. */
export default function useScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight || 1;
      if (ref.current) ref.current.style.transform = `scaleX(${h.scrollTop / max})`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return ref;
}
