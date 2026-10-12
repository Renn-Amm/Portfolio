import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

/** Types each word, pauses, deletes it, then moves to the next one. */
export function useTypewriter(words: string[], { typeMs = 70, deleteMs = 35, holdMs = 2400 } = {}): string {
  const reduced = useReducedMotion();
  const [text, setText] = useState(words[0] ?? "");

  useEffect(() => {
    if (reduced || words.length < 2) {
      setText(words[0] ?? "");
      return;
    }
    let w = 0;
    let ch = words[0].length;
    let deleting = true;
    let timer: number;
    const tick = () => {
      ch += deleting ? -1 : 1;
      setText(words[w].slice(0, ch));
      if (deleting && ch === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        timer = window.setTimeout(tick, 250);
      } else if (!deleting && ch === words[w].length) {
        deleting = true;
        timer = window.setTimeout(tick, holdMs);
      } else {
        timer = window.setTimeout(tick, deleting ? deleteMs : typeMs);
      }
    };
    timer = window.setTimeout(tick, holdMs);
    return () => window.clearTimeout(timer);
  }, [words, reduced, typeMs, deleteMs, holdMs]);

  return text;
}
