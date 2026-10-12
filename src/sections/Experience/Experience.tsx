/* =============================================================
   EXPERIENCE & EDUCATION: timeline with two tabs (inside About).
   Edit the entries in content/experience.ts.
   ============================================================= */
import { useRef, useState, type KeyboardEvent } from "react";
import { education, experience } from "../../content";
import type { ExperienceItem } from "../../types";
import "./Experience.css";
 
const TABS = [
  { id: "experience", label: "Experience", items: experience },
  { id: "education", label: "Education", items: education },
] as const;
 
type TabId = (typeof TABS)[number]["id"];
 
export function Experience() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = TABS.find((t) => t.id === activeTab) ?? TABS[0];
 
  // ← / → move between tabs (WAI-ARIA tabs pattern)
  const onTabKeyDown = (e: KeyboardEvent, index: number) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (index + step + TABS.length) % TABS.length;
    setActiveTab(TABS[next].id);
    tabRefs.current[next]?.focus();
  };
 
  return (
    <div className="sub" id="experience">
      <h3 className="sub__title reveal"><span className="mono dim">//</span> Experience &amp; education</h3>
 
      {/* ---------- Tab bar ---------- */}
      <div className="timeline__tabs reveal" role="tablist" aria-label="Experience and education">
        {TABS.map((tab, i) => {
          const selected = tab.id === current.id;
          return (
            <button
              key={tab.id}
              ref={(el) => (tabRefs.current[i] = el)}
              id={`timeline-tab-${tab.id}`}
              role="tab"
              aria-selected={selected}
              aria-controls={`timeline-panel-${tab.id}`}
              tabIndex={selected ? 0 : -1}
              className="timeline__tab"
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => onTabKeyDown(e, i)}
            >
              {tab.label}
              <span className="timeline__tab-count mono">{tab.items.length}</span>
            </button>
          );
        })}
      </div>
 
      {/* ---------- Timeline ---------- */}
      <ol
        key={current.id}
        id={`timeline-panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`timeline-tab-${current.id}`}
        className="timeline"
      >
        {current.items.map((item) => (
          <TimelineItem key={`${item.title}-${item.org}`} item={item} />
        ))}
      </ol>
    </div>
  );
}
 
function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <li className="timeline__item">
      <span className="timeline__when mono">{item.when}</span>
      <div>
        <h4>{item.title}</h4>
        <p className="timeline__org">{item.org}</p>
        {item.note && <p className="timeline__note">{item.note}</p>}
        {item.points && item.points.length > 0 && (
          <ul className="bullets">
            {item.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
        )}
      </div>
    </li>
  );
}
 