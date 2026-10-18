import { useEffect, useRef, useState } from "react";
import { prefersReducedMotion } from "../utils/motion";

/* Types and deletes each word in turn. Starts on the first word, fully typed. */
export default function useTypewriter(words) {
  const [text, setText] = useState(words[0]);
  const state = useRef({ i: 0, j: 0, del: false });

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let timer;
    const tick = () => {
      const s = state.current;
      const word = words[s.i];
      s.j += s.del ? -1 : 1;
      setText(word.slice(0, s.j));
      let delay = s.del ? 35 : 75;
      if (!s.del && s.j === word.length) {
        s.del = true;
        delay = 1500;
      } else if (s.del && s.j === 0) {
        s.del = false;
        s.i = (s.i + 1) % words.length;
        delay = 350;
      }
      timer = setTimeout(tick, delay);
    };
    state.current = { i: 0, j: words[0].length, del: true };
    timer = setTimeout(tick, 1800);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}
