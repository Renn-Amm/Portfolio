import { useEffect, useRef, type KeyboardEvent } from "react";
import { projectById, skillLabel, smallProjects, tracks } from "../data";
import type { CaseStudy, Project } from "../types";
import { ExternalIcon, GitHubIcon, LockIcon, SkillIcon } from "./Icons";
import { SectionTitle } from "./SectionTitle";

interface Props {
  tab: string;
  onTab: (id: string) => void;
  activeSkill: string | null;
  onClearSkill: () => void;
  onOpenProject: (id: string) => void;
}

const matches = (stack: string[], skill: string | null) => skill !== null && stack.includes(skill);

export function Work({ tab, onTab, activeSkill, onClearSkill, onOpenProject }: Props) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = tracks.find((t) => t.id === tab) ?? tracks[0];
  const items = current.projects.map((id) => projectById[id]).filter(Boolean);
  const isEmpty = items.length === 0 && current.cases.length === 0;
  const filtering = activeSkill !== null;

  // Keep the selected tab visible when the tab strip scrolls sideways on small screens
  useEffect(() => {
    const i = tracks.findIndex((t) => t.id === current.id);
    const btn = tabRefs.current[i];
    const strip = btn?.parentElement;
    if (!btn || !strip) return;
    const left = btn.offsetLeft; // .tabs is position: relative
    if (left < strip.scrollLeft || left + btn.offsetWidth > strip.scrollLeft + strip.clientWidth) {
      strip.scrollTo({ left: Math.max(0, left - 16), behavior: "smooth" });
    }
  }, [current.id]);

  // Arrow keys move between tabs (WAI-ARIA tabs pattern)
  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!d) return;
    e.preventDefault();
    const next = (i + d + tracks.length) % tracks.length;
    onTab(tracks[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionTitle num="02" title="Work" sub="Pick an area to see what I do there, the tools I use and the projects behind it." />

        <div className="tabs reveal" role="tablist" aria-label="Areas of work">
          {tracks.map((t, i) => {
            const count = t.projects.length + t.cases.length;
            const selected = t.id === current.id;
            return (
              <button
                key={t.id}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                tabIndex={selected ? 0 : -1}
                className="tab"
                onClick={() => onTab(t.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {t.label}
                {count > 0 && <span className="tab__count mono">{count}</span>}
              </button>
            );
          })}
        </div>

        <div
          key={current.id}
          className={`tabpanel${filtering ? " is-filtering" : ""}`}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
        >
          <div className="track">
            <p className="track__intro">{current.intro}</p>
            <div className="track__stack">
              {current.skills.map((s) => (
                <span className="stack-pill" key={s}>
                  <SkillIcon id={s} size={14} />
                  {skillLabel[s] ?? s}
                </span>
              ))}
            </div>
          </div>

          {filtering && (
            <p className="filter-note mono">
              Showing work that uses <strong>{skillLabel[activeSkill]}</strong> ·{" "}
              <button className="link-btn" onClick={onClearSkill}>clear</button>
            </p>
          )}

          {items.length > 0 && (
            <div className="projects">
              {items.map((p) => (
                <ProjectCard key={p.id} project={p} dim={filtering && !matches(p.stack, activeSkill)} activeSkill={activeSkill} onOpen={onOpenProject} />
              ))}
            </div>
          )}

          {current.cases.length > 0 && (
            <div className="cases">
              {current.cases.map((c) => (
                <CaseCard key={c.title} item={c} dim={filtering && !matches(c.stack, activeSkill)} activeSkill={activeSkill} />
              ))}
            </div>
          )}

          {isEmpty && (
            <div className="empty">
              <p className="mono dim">// internal work</p>
              <h3>Built for real teams</h3>
              <p>
                My work in this area so far has been internal company projects, so there's no public code or screenshots.
                I'm happy to walk you through what I built and the results in a call.
              </p>
              <a href="#contact" className="btn btn--solid btn--sm">Ask me about it</a>
            </div>
          )}

          {current.showSmallProjects && (
            <div className="small">
              <h3 className="mono small__title">also built</h3>
              <ul>
                {smallProjects.map((s) => (
                  <li key={s.title} className={filtering && !matches(s.stack, activeSkill) ? "is-dim" : filtering ? "is-match" : undefined}>
                    <strong>{s.title}</strong>
                    <span>{s.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Tags({ stack, activeSkill }: { stack: string[]; activeSkill: string | null }) {
  return (
    <ul className="tags mono">
      {stack.map((s) => (
        <li key={s} className={s === activeSkill ? "is-match" : undefined}>{skillLabel[s] ?? s}</li>
      ))}
    </ul>
  );
}

function ProjectCard({ project: p, dim, activeSkill, onOpen }: { project: Project; dim: boolean; activeSkill: string | null; onOpen: (id: string) => void }) {
  return (
    <article className={`card${dim ? " is-dim" : ""}${activeSkill && !dim ? " is-match" : ""}`}>
      <button className="card__media" onClick={() => onOpen(p.id)} aria-label={`Open ${p.title} details`}>
        <img src={p.thumb} alt="" loading="lazy" width={1200} height={750} />
        <span className="card__hint mono">view screenshots →</span>
      </button>
      <div className="card__body">
        <p className="card__kicker mono">{p.kicker}</p>
        <h3 className="card__title">
          <button className="link-btn" onClick={() => onOpen(p.id)}>{p.title}</button>
        </h3>
        <p className="card__summary">{p.summary}</p>
        <Tags stack={p.stack} activeSkill={activeSkill} />
        <div className="card__links">
          <button className="text-link" onClick={() => onOpen(p.id)}>Details</button>
          {p.repo ? (
            <a className="text-link" href={p.repo} target="_blank" rel="noopener"><GitHubIcon /> Code</a>
          ) : (
            <span className="text-link is-muted" title="Private repo"><LockIcon /> Private</span>
          )}
          {p.demo && <a className="text-link" href={p.demo} target="_blank" rel="noopener"><ExternalIcon /> Live</a>}
        </div>
      </div>
    </article>
  );
}

function CaseCard({ item, dim, activeSkill }: { item: CaseStudy; dim: boolean; activeSkill: string | null }) {
  return (
    <article className={`case${dim ? " is-dim" : ""}`}>
      <p className="card__kicker mono">{item.context ?? "Work project"}</p>
      <h3 className="card__title">{item.title}</h3>
      <ul className="bullets">{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
      <Tags stack={item.stack} activeSkill={activeSkill} />
    </article>
  );
}
