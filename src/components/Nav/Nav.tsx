/* =============================================================
   NAV: fixed top bar with section links, ⌘K button and the
   mobile menu. Edit NAV_LINKS to add/rename menu items.
   ============================================================= */
import { useEffect, useState } from "react";
import { SearchIcon } from "../Icons";
import "./Nav.css";

export const NAV_LINKS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
] as const;

interface Props {
  activeId: string;
  onOpenPalette: () => void;
}

export function Nav({ activeId, onOpenPalette }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMac = /Mac|iPhone|iPad/.test(navigator.platform);

  // add a bottom border once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Esc closes the mobile menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
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
          <ul id="nav-links" className={`nav__links${menuOpen ? " is-open" : ""}`}>
            {NAV_LINKS.map((link, i) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? "is-active" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="mono nav__num">0{i}.</span> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <button className="nav__kbd" onClick={onOpenPalette} aria-label="Open command menu">
            <SearchIcon />
            <span className="mono">{isMac ? "⌘K" : "Ctrl K"}</span>
          </button>
          <button
            className="nav__toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
