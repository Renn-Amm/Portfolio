/** Project card: greyscale thumbnail (full colour on hover), text, tags, links. */
import type { Project } from "../../types";
import { ExternalIcon, GitHubIcon, LockIcon } from "../../components/Icons";
import { Tags } from "../../components/Tags";

interface Props {
  project: Project;
  highlight: string | null;
  dimmed: boolean;
  onOpen: (projectId: string) => void;
}

export function ProjectCard({ project: p, highlight, dimmed, onOpen }: Props) {
  const state = dimmed ? " is-dim" : highlight ? " is-match" : "";

  return (
    <article className={`card${state}`}>
      <button className="card__media" onClick={() => onOpen(p.id)} aria-label={`Open ${p.title} details`}>
        <img src={p.thumb} alt="" loading="lazy" width={1200} height={750} />
        <span className="card__hint mono">view screenshots →</span>
      </button>

      <div className="card__body">
        <p className="kicker mono">{p.kicker}</p>
        <h3 className="card__title">
          <button className="link-btn" onClick={() => onOpen(p.id)}>{p.title}</button>
        </h3>
        <p className="card__summary">{p.summary}</p>
        <Tags stack={p.stack} highlight={highlight} />

        <div className="card__links">
          <button className="text-link" onClick={() => onOpen(p.id)}>Details</button>
          {p.repo ? (
            <a className="text-link" href={p.repo} target="_blank" rel="noopener"><GitHubIcon /> Code</a>
          ) : (
            <span className="text-link is-muted" title="Private repo"><LockIcon /> Private</span>
          )}
          {p.demo && (
            <a className="text-link" href={p.demo} target="_blank" rel="noopener"><ExternalIcon /> Live</a>
          )}
        </div>
      </div>
    </article>
  );
}
