import { useEffect, useState } from "react";
import { SearchIcon } from "./Icons";

export const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

interface Props {
  active: string;
  onOpenPalette: () => void;
}

export function Nav({ active, onOpenPalette }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMac = typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label="Back to top">
          <span className="mono">~/</span>aung
        </a>
        <nav aria-label="Main">
          <ul id="nav-links" className={`nav__links${open ? " is-open" : ""}`}>
            {SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={active === s.id ? "is-active" : undefined} onClick={() => setOpen(false)}>
                  <span className="mono nav__num">0{i}.</span> {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav__actions">
          <button className="kbd-btn" onClick={onOpenPalette} aria-label="Open command menu">
            <SearchIcon />
            <span className="mono">{isMac ? "⌘K" : "Ctrl K"}</span>
          </button>
          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
