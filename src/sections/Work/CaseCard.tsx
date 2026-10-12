/** Case-study card: work without screenshots (title, context, bullet points, tags). */
import type { CaseStudy } from "../../types";
import { Tags } from "../../components/Tags";

interface Props {
  item: CaseStudy;
  highlight: string | null;
  dimmed: boolean;
}

export function CaseCard({ item, highlight, dimmed }: Props) {
  return (
    <article className={`case${dimmed ? " is-dim" : ""}`}>
      <p className="kicker mono">{item.context ?? "Work project"}</p>
      <h3 className="card__title">{item.title}</h3>
      <ul className="bullets">
        {item.points.map((point) => <li key={point}>{point}</li>)}
      </ul>
      <Tags stack={item.stack} highlight={highlight} />
    </article>
  );
}
