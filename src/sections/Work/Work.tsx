/* =============================================================
   WORK: "02. Work". Tabs (Full-Stack / AI / Automation), each
   with intro, tool pills, project cards, case studies and the
   "also built" list.
   Edit tabs in content/work.ts and projects in content/projects.ts.
   ============================================================= */
import { useEffect, useRef, type KeyboardEvent } from "react";
import { projectById, skillLabel, smallProjects, tracks, workText } from "../../content";
import { SkillIcon } from "../../components/Icons";
import { SectionTitle } from "../../components/SectionTitle";
import { CaseCard } from "./CaseCard";
import { ProjectCard } from "./ProjectCard";
import "./Work.css";

interface Props {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  /** skill selected in the Skills grid; matching work is highlighted */
  activeSkill: string | null;
  onClearSkill: () => void;
  onOpenProject: (projectId: string) => void;
}

const uses = (stack: string[], skill: string | null) => skill !== null && stack.includes(skill);

export function Work({ activeTab, onTabChange, activeSkill, onClearSkill, onOpenProject }: Props) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const track = tracks.find((t) => t.id === activeTab) ?? tracks[0];
  const trackProjects = track.projects.map((id) => projectById[id]).filter(Boolean);
  const isEmpty = trackProjects.length === 0 && track.cases.length === 0;
  const filtering = activeSkill !== null;

  /* ---------- tabs: keyboard arrows (WAI-ARIA tabs pattern) ---------- */
  const onTabKeyDown = (e: KeyboardEvent, index: number) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (index + step + tracks.length) % tracks.length;
    onTabChange(tracks[next].id);
    tabRefs.current[next]?.focus();
  };

  /* ---------- tabs: keep the selected tab visible on small screens ---------- */
  useEffect(() => {
    const btn = tabRefs.current[tracks.findIndex((t) => t.id === track.id)];
    const strip = btn?.parentElement;
    if (!btn || !strip) return;
    const left = btn.offsetLeft; // .work__tabs is position: relative
    if (left < strip.scrollLeft || left + btn.offsetWidth > strip.scrollLeft + strip.clientWidth) {
      strip.scrollTo({ left: Math.max(0, left - 16), behavior: "smooth" });
    }
  }, [track.id]);

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionTitle num="02" title="Work" subtitle={workText.subtitle} />

        {/* ---------- Tab bar ---------- */}
        <div className="work__tabs reveal" role="tablist" aria-label="Areas of work">
          {tracks.map((t, i) => {
            const count = t.projects.length + t.cases.length;
            const selected = t.id === track.id;
            return (
              <button
                key={t.id}
                ref={(el) => (tabRefs.current[i] = el)}
                id={`tab-${t.id}`}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                tabIndex={selected ? 0 : -1}
                className="work__tab"
                onClick={() => onTabChange(t.id)}
                onKeyDown={(e) => onTabKeyDown(e, i)}
              >
                {t.label}
                {count > 0 && <span className="work__tab-count mono">{count}</span>}
              </button>
            );
          })}
        </div>

        {/* ---------- Tab content ---------- */}
        <div
          key={track.id}
          id={`panel-${track.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${track.id}`}
          className={`work__panel${filtering ? " is-filtering" : ""}`}
        >
          <div className="work__intro">
            <p>{track.intro}</p>
            <div className="work__tools">
              {track.skills.map((id) => (
                <span className="work__tool" key={id}>
                  <SkillIcon id={id} size={14} />
                  {skillLabel[id] ?? id}
                </span>
              ))}
            </div>
          </div>

          {filtering && (
            <p className="work__filter mono">
              Showing work that uses <strong>{skillLabel[activeSkill]}</strong> ·{" "}
              <button className="link-btn" onClick={onClearSkill}>clear</button>
            </p>
          )}

          {trackProjects.length > 0 && (
            <div className="work__grid">
              {trackProjects.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  highlight={activeSkill}
                  dimmed={filtering && !uses(p.stack, activeSkill)}
                  onOpen={onOpenProject}
                />
              ))}
            </div>
          )}

          {track.cases.length > 0 && (
            <div className="work__grid">
              {track.cases.map((c) => (
                <CaseCard key={c.title} item={c} highlight={activeSkill} dimmed={filtering && !uses(c.stack, activeSkill)} />
              ))}
            </div>
          )}

          {isEmpty && (
            <div className="work__empty">
              <p className="mono dim">// internal work</p>
              <h3>{workText.empty.title}</h3>
              <p>{workText.empty.body}</p>
              <a href="#contact" className="btn btn--solid btn--sm">{workText.empty.cta}</a>
            </div>
          )}

          {track.showSmallProjects && (
            <div className="work__small">
              <h3 className="mono">also built</h3>
              <ul>
                {smallProjects.map((s) => {
                  const state = !filtering ? undefined : uses(s.stack, activeSkill) ? "is-match" : "is-dim";
                  return (
                    <li key={s.title} className={state}>
                      <strong>{s.title}</strong>
                      <span>{s.note}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
