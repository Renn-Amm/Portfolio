/* =============================================================
   TOAST: small message at the bottom of the screen.
   Usage:  const { message, notify } = useToast();
           notify("Email copied ✓");  <Toast message={message} />
   ============================================================= */
import { useCallback, useRef, useState } from "react";
import "./Toast.css";

export function useToast(durationMs = 2200) {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<number>();

  const notify = useCallback(
    (text: string) => {
      setMessage(text);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setMessage(null), durationMs);
    },
    [durationMs],
  );

  return { message, notify };
}

export function Toast({ message }: { message: string | null }) {
  return (
    <div className={`toast${message ? " is-visible" : ""}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}
