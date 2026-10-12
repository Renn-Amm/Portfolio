/* =============================================================
   SKILLS: icon grid grouped by area (inside About).
   Skills used in a project show a count and are clickable:
   clicking highlights the matching work (handled in App.tsx).
   Edit the list in content/skills.ts.
   ============================================================= */
import { skillGroups, skillUsage } from "../../content";
import { SkillIcon } from "../../components/Icons";
import "./Skills.css";

interface Props {
  activeSkill: string | null;
  onSkillClick: (skillId: string) => void;
}

export function Skills({ activeSkill, onSkillClick }: Props) {
  return (
    <div className="sub" id="skills">
      <h3 className="sub__title reveal"><span className="mono dim">//</span> Skills &amp; technologies</h3>
      <p className="sub__hint reveal">Skills with a number are used in my projects. Click one to see where.</p>

      <div className="skills">
        {skillGroups.map((group) => (
          <div className="skills__group reveal" key={group.group}>
            <h4 className="mono">{group.group}</h4>

            <div className="skills__grid">
              {group.items.map((skill) => {
                const count = skillUsage(skill.id);
                const inner = (
                  <>
                    <SkillIcon id={skill.id} />
                    <span className="skill__name">{skill.label}</span>
                    {count > 0 && <span className="skill__count mono">{count}</span>}
                  </>
                );

                // not used in any project → plain tile
                if (count === 0) return <div key={skill.id} className="skill">{inner}</div>;

                // used in projects → clickable tile
                const active = activeSkill === skill.id;
                return (
                  <button
                    key={skill.id}
                    className={`skill is-clickable${active ? " is-active" : ""}`}
                    onClick={() => onSkillClick(skill.id)}
                    aria-pressed={active}
                    title={`Used in ${count} project${count > 1 ? "s" : ""}: click to highlight`}
                  >
                    {inner}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
