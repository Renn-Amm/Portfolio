import { experience, profile, skillGroups, skillUsage } from "../data";
import { DownloadIcon, SkillIcon } from "./Icons";
import { SectionTitle } from "./SectionTitle";

interface Props {
  activeSkill: string | null;
  onSkill: (id: string) => void;
}

export function About({ activeSkill, onSkill }: Props) {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle num="01" title="About" />
        <div className="about">
          <div className="about__text reveal">
            <p>
              I'm an <strong>AI &amp; automation specialist</strong> and <strong>full-stack developer</strong> based in
              Barcelona. I'm currently an AI &amp; Automation Specialist intern at <strong>bsport</strong>, and I hold a
              master's in Computer Science from Harbour.Space University.
            </p>
            <p>
              I build automations with n8n and Zapier, work with LLM APIs like OpenAI and Claude, and connect them to the
              tools teams already use: HubSpot, Intercom, Linear, Google Sheets, Databricks and Metabase. As a freelancer I
              built a pipeline that tracks viral fashion content for a luxury leather-goods brand.
            </p>
            <p>
              Before that I built full-stack products: a Flask learning platform with Google login and an admin dashboard,
              and React apps built with designers and back-end developers. So I can ship the whole thing, not just the
              automation.
            </p>
            <a href={profile.cv} className="btn btn--ghost btn--sm" download>
              <DownloadIcon /> Download CV
            </a>
          </div>
          <figure className="about__photo reveal">
            <img src="assets/img/profile.webp" alt={`Portrait of ${profile.name}`} width={340} height={480} loading="lazy" />
          </figure>
        </div>

        <div className="sub" id="skills">
          <h3 className="sub__title reveal">
            <span className="mono dim">//</span> Skills &amp; technologies
          </h3>
          <p className="sub__hint reveal">Skills with a number are used in my projects. Click one to see where.</p>
          <div className="skills">
            {skillGroups.map((g) => (
              <div className="skill-group reveal" key={g.group}>
                <h4 className="mono">{g.group}</h4>
                <div className="skill-grid">
                  {g.items.map((s) => {
                    const n = skillUsage(s.id);
                    const content = (
                      <>
                        <SkillIcon id={s.id} />
                        <span className="skill__name">{s.label}</span>
                        {n > 0 && <span className="skill__count mono">{n}</span>}
                      </>
                    );
                    return n > 0 ? (
                      <button
                        key={s.id}
                        className={`skill is-clickable${activeSkill === s.id ? " is-active" : ""}`}
                        onClick={() => onSkill(s.id)}
                        aria-pressed={activeSkill === s.id}
                        title={`Used in ${n} project${n > 1 ? "s" : ""}: click to highlight`}
                      >
                        {content}
                      </button>
                    ) : (
                      <div key={s.id} className="skill">{content}</div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sub" id="experience">
          <h3 className="sub__title reveal">
            <span className="mono dim">//</span> Experience &amp; education
          </h3>
          <ol className="timeline">
            {experience.map((x) => (
              <li className="reveal" key={x.title}>
                <span className="timeline__when mono">{x.when}</span>
                <div>
                  <h4>{x.title}</h4>
                  <p className="timeline__org">{x.org}</p>
                  {x.note && <p className="timeline__note">{x.note}</p>}
                  {x.points && x.points.length > 0 && (
                    <ul className="bullets">{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
