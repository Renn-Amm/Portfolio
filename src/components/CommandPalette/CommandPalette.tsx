import { useEffect, useMemo, useRef, useState } from "react";
/* =============================================================
   COMMAND MENU (⌘K / Ctrl+K): search and jump to sections,
   work tabs and projects, or run quick actions.
   Add entries to the `commands` list below.
   ============================================================= */
import { profile, projects, tracks } from "../../content";
import { SearchIcon } from "../Icons";
import "./CommandPalette.css";

export interface Command {
  id: string;
  group: string;
  label: string;
  hint?: string;
  run: () => void;
}

interface Props {
  open: boolean;
  onClose: () => void;
  goTo: (sectionId: string) => void;
  openProject: (id: string) => void;
  openTab: (id: string) => void;
  copyEmail: () => void;
}

export function CommandPalette({ open, onClose, goTo, openProject, openTab, copyEmail }: Props) {
  const [query, setQuery] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const commands = useMemo<Command[]>(
    () => [
      { id: "s-about", group: "Navigate", label: "About", hint: "section", run: () => goTo("about") },
      { id: "s-skills", group: "Navigate", label: "Skills", hint: "section", run: () => goTo("skills") },
      { id: "s-work", group: "Navigate", label: "Work", hint: "section", run: () => goTo("work") },
      { id: "s-contact", group: "Navigate", label: "Contact", hint: "section", run: () => goTo("contact") },
      ...tracks.map((t) => ({ id: `t-${t.id}`, group: "Work areas", label: t.label, hint: "tab", run: () => openTab(t.id) })),
      ...projects.map((p) => ({ id: `p-${p.id}`, group: "Projects", label: p.title, hint: p.kicker, run: () => openProject(p.id) })),
      { id: "a-email", group: "Actions", label: "Copy email address", hint: profile.email, run: copyEmail },
      { id: "a-cv", group: "Actions", label: "Download CV", hint: "pdf", run: () => window.open(profile.cv, "_blank") },
      { id: "a-gh", group: "Actions", label: "Open GitHub", hint: "github.com/Renn-Amm", run: () => window.open(profile.github, "_blank", "noopener") },
      { id: "a-li", group: "Actions", label: "Open LinkedIn", hint: "linkedin", run: () => window.open(profile.linkedin, "_blank", "noopener") },
    ],
    [goTo, openProject, openTab, copyEmail],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => `${c.label} ${c.group} ${c.hint ?? ""}`.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setSel(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setSel(0), [query]);

  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>(`[data-idx="${sel}"]`)?.scrollIntoView({ block: "nearest" });
  }, [sel]);

  if (!open) return null;

  const run = (c: Command | undefined) => {
    if (!c) return;
    onClose();
    c.run();
  };

  let lastGroup = "";
  return (
    <div className="palette" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="palette__box" role="dialog" aria-modal="true" aria-label="Command menu">
        <div className="palette__input">
          <SearchIcon />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            aria-label="Search commands"
            aria-controls="palette-list"
            aria-activedescendant={results[sel] ? `cmd-${results[sel].id}` : undefined}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(s + 1, results.length - 1)); }
              else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(s - 1, 0)); }
              else if (e.key === "Enter") { e.preventDefault(); run(results[sel]); }
              else if (e.key === "Escape") { e.preventDefault(); onClose(); }
            }}
          />
          <kbd className="mono">esc</kbd>
        </div>
        <ul className="palette__list" id="palette-list" role="listbox" ref={listRef}>
          {results.length === 0 && <li className="palette__empty mono">no results for “{query}”</li>}
          {results.map((c, i) => {
            const header = c.group !== lastGroup ? c.group : null;
            lastGroup = c.group;
            return (
              <li key={c.id} role="presentation">
                {header && <p className="palette__group mono">{header}</p>}
                <button
                  id={`cmd-${c.id}`}
                  data-idx={i}
                  role="option"
                  aria-selected={i === sel}
                  className="palette__item"
                  onMouseMove={() => setSel(i)}
                  onClick={() => run(c)}
                >
                  <span>{c.label}</span>
                  {c.hint && <span className="mono dim">{c.hint}</span>}
                </button>
              </li>
            );
          })}
        </ul>
        <p className="palette__foot mono dim">↑↓ navigate · ↵ select · esc close</p>
      </div>
    </div>
  );
}
