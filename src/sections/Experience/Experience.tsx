/* =============================================================
   EXPERIENCE & EDUCATION: timeline (inside About).
   Edit the entries in content/experience.ts.
   ============================================================= */
import { experience } from "../../content";
import "./Experience.css";

export function Experience() {
  return (
    <div className="sub" id="experience">
      <h3 className="sub__title reveal"><span className="mono dim">//</span> Experience &amp; education</h3>

      <ol className="timeline">
        {experience.map((item) => (
          <li className="timeline__item reveal" key={`${item.title}-${item.org}`}>
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
        ))}
      </ol>
    </div>
  );
}
