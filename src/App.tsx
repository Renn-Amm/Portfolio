/* =============================================================
   APP: page layout (top → bottom) and the state shared between
   sections:
   - activeTab     which Work tab is open
   - activeSkill   skill clicked in Skills → highlights work
   - openProjectId project shown in the modal
   - paletteOpen   ⌘K command menu
   ============================================================= */
import { useCallback, useEffect, useState } from "react";
import { profile, projectById, trackForSkill, tracks } from "./content";
import { useActiveSection } from "./hooks/useActiveSection";
import { useReveal } from "./hooks/useReveal";

import { Nav, NAV_LINKS } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { ProjectModal } from "./components/ProjectModal/ProjectModal";
import { CommandPalette } from "./components/CommandPalette/CommandPalette";
import { Toast, useToast } from "./components/Toast/Toast";

import { Hero } from "./sections/Hero/Hero";
import { About } from "./sections/About/About";
import { Skills } from "./sections/Skills/Skills";
import { Experience } from "./sections/Experience/Experience";
import { Work } from "./sections/Work/Work";
import { Contact } from "./sections/Contact/Contact";

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

function scrollToSection(id: string) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
}

/** "#project-dmar" in the URL opens that project on load */
const projectIdFromUrl = () => location.hash.match(/^#project-(.+)$/)?.[1] ?? null;

export default function App() {
  const [activeTab, setActiveTab] = useState(tracks[0].id);
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [openProjectId, setOpenProjectId] = useState<string | null>(projectIdFromUrl);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { message, notify } = useToast();
  const activeSection = useActiveSection(SECTION_IDS);
  useReveal();

  /* ---------- Work tabs ---------- */
  const changeTab = useCallback((tabId: string) => {
    setActiveTab(tabId);
    setActiveSkill(null);
  }, []);

  const openTabAndScroll = useCallback((tabId: string) => {
    changeTab(tabId);
    scrollToSection("work");
  }, [changeTab]);

  /* ---------- Skill click: highlight matching work in the right tab ---------- */
  const toggleSkill = useCallback((skillId: string) => {
    if (activeSkill === skillId) {
      setActiveSkill(null);
      return;
    }
    const tab = trackForSkill(skillId);
    if (tab) setActiveTab(tab.id);
    setActiveSkill(skillId);
    requestAnimationFrame(() => scrollToSection("work"));
  }, [activeSkill]);

  /* ---------- Project modal (URL updates so it can be shared) ---------- */
  const openProject = useCallback((projectId: string) => {
    setOpenProjectId(projectId);
    history.replaceState(null, "", `#project-${projectId}`);
  }, []);

  const closeProject = useCallback(() => {
    setOpenProjectId(null);
    if (location.hash.startsWith("#project-")) history.replaceState(null, "", "#work");
  }, []);

  /* ---------- Copy email ---------- */
  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      notify("Email copied ✓");
    } catch {
      notify(profile.email);
    }
  }, [notify]);

  /* ---------- ⌘K / Ctrl+K toggles the command menu ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---------- Page ---------- */
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav activeId={activeSection} onOpenPalette={() => setPaletteOpen(true)} />

      <main id="main">
        <Hero />

        <About>
          <Skills activeSkill={activeSkill} onSkillClick={toggleSkill} />
          <Experience />
        </About>

        <Work
          activeTab={activeTab}
          onTabChange={changeTab}
          activeSkill={activeSkill}
          onClearSkill={() => setActiveSkill(null)}
          onOpenProject={openProject}
        />

        <Contact onCopyEmail={copyEmail} notify={notify} />
      </main>

      <Footer />

      {/* ---------- Overlays ---------- */}
      <ProjectModal project={openProjectId ? projectById[openProjectId] ?? null : null} onClose={closeProject} />
      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        goTo={scrollToSection}
        openProject={openProject}
        openTab={openTabAndScroll}
        copyEmail={copyEmail}
      />
      <Toast message={message} />
    </>
  );
}
