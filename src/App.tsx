import { useCallback, useEffect, useRef, useState } from "react";
import { profile, projectById, trackForSkill, tracks } from "./data";
import { useActiveSection } from "./hooks/useActiveSection";
import { useReveal } from "./hooks/useReveal";
import { About } from "./components/About";
import { CommandPalette } from "./components/CommandPalette";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Nav, SECTIONS } from "./components/Nav";
import { ProjectModal } from "./components/ProjectModal";
import { Work } from "./components/Work";

const SECTION_IDS = SECTIONS.map((s) => s.id);
const scrollTo = (id: string) => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
};

export default function App() {
  const [tab, setTab] = useState(tracks[0].id);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(() => location.hash.match(/^#project-(.+)$/)?.[1] ?? null);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number>();
  const active = useActiveSection(SECTION_IDS);
  useReveal();

  const notify = useCallback((msg: string) => {
    setToast(msg);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2200);
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      notify("Email copied ✓");
    } catch {
      notify(profile.email);
    }
  }, [notify]);

  // Clicking a skill highlights the work that uses it and jumps to the right tab.
  const onSkill = useCallback((id: string) => {
    if (activeSkill === id) {
      setActiveSkill(null);
      return;
    }
    const t = trackForSkill(id);
    if (t) setTab(t.id);
    setActiveSkill(id);
    requestAnimationFrame(() => scrollTo("work"));
  }, [activeSkill]);

  const onTab = useCallback((id: string) => {
    setTab(id);
    setActiveSkill(null);
  }, []);

  const openProject = useCallback((id: string) => {
    setOpenId(id);
    history.replaceState(null, "", `#project-${id}`);
  }, []);
  const closeProject = useCallback(() => {
    setOpenId(null);
    if (location.hash.startsWith("#project-")) history.replaceState(null, "", "#work");
  }, []);

  const openTab = useCallback((id: string) => {
    onTab(id);
    scrollTo("work");
  }, [onTab]);

  // ⌘K / Ctrl+K toggles the command menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav active={active} onOpenPalette={() => setPaletteOpen(true)} />
      <main id="main">
        <Hero />
        <About activeSkill={activeSkill} onSkill={onSkill} />
        <Work tab={tab} onTab={onTab} activeSkill={activeSkill} onClearSkill={() => setActiveSkill(null)} onOpenProject={openProject} />
        <Contact onCopyEmail={copyEmail} notify={notify} />
      </main>
      <footer className="footer">
        <div className="container footer__inner mono">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>
            built with React + TypeScript ·{" "}
            <a href="https://github.com/Renn-Amm/portfolio" target="_blank" rel="noopener">source</a>
          </span>
        </div>
      </footer>

      <ProjectModal project={openId ? projectById[openId] ?? null : null} onClose={closeProject} />
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        goTo={scrollTo}
        openProject={openProject}
        openTab={openTab}
        copyEmail={copyEmail}
      />
      <div className={`toast${toast ? " is-visible" : ""}`} role="status" aria-live="polite">{toast}</div>
    </>
  );
}
