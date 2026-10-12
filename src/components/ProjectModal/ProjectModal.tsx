import { useEffect, useRef, useState } from "react";
/* =============================================================
   PROJECT MODAL: opens when a project card is clicked.
   Left: screenshot gallery (arrows, thumbnails, swipe).
   Right: summary, what I built, stack, links.
   Uses the native <dialog> for focus trapping and Esc.
   ============================================================= */
import type { Project } from "../../types";
import { ChevronIcon, CloseIcon, ExternalIcon, GitHubIcon, LockIcon } from "../Icons";
import { Tags } from "../Tags";
import "./ProjectModal.css";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [idx, setIdx] = useState(0);
  const touchX = useRef<number | null>(null);

  // open / close the native <dialog> when `project` changes
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (project && !d.open) {
      setIdx(0);
      d.showModal();
      document.body.style.overflow = "hidden";
    } else if (!project && d.open) {
      d.close();
    }
  }, [project]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const handleClose = () => {
      document.body.style.overflow = "";
      onClose();
    };
    d.addEventListener("close", handleClose);
    return () => d.removeEventListener("close", handleClose);
  }, [onClose]);

  /* ---------- gallery ---------- */
  const shots = project?.gallery ?? [];
  const multi = shots.length > 1;
  const go = (delta: number) => setIdx((i) => (i + delta + shots.length) % shots.length);

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="modal-title"
      onClick={(e) => e.target === ref.current && ref.current?.close()}
      onKeyDown={(e) => {
        if (!multi) return;
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      {project && (
        <div className="modal__inner">
          <button className="icon-btn modal__close" onClick={() => ref.current?.close()} aria-label="Close">
            <CloseIcon />
          </button>

          <div className="gallery">
            <div
              className="gallery__stage"
              onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
                touchX.current = null;
              }}
            >
              <img key={shots[idx]?.src} src={shots[idx]?.src} alt={`${project.title}: ${shots[idx]?.caption}`} />
              {multi && (
                <>
                  <button className="gallery__nav gallery__nav--prev" onClick={() => go(-1)} aria-label="Previous screenshot"><ChevronIcon dir="left" /></button>
                  <button className="gallery__nav gallery__nav--next" onClick={() => go(1)} aria-label="Next screenshot"><ChevronIcon dir="right" /></button>
                </>
              )}
            </div>
            <div className="gallery__meta">
              <p className="gallery__caption">{shots[idx]?.caption}</p>
              {multi && <span className="mono dim">{idx + 1}/{shots.length}</span>}
            </div>
            {multi && (
              <div className="gallery__thumbs">
                {shots.map((s, i) => (
                  <button key={s.src} onClick={() => setIdx(i)} aria-label={`Screenshot ${i + 1}: ${s.caption}`} aria-current={i === idx}>
                    <img src={s.src} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="modal__body">
            <p className="kicker mono">{project.kicker}</p>
            <h3 id="modal-title">{project.title}</h3>
            <p className="modal__summary">{project.summary}</p>
            <h4 className="mono">what I built</h4>
            <ul className="bullets">{project.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
            <h4 className="mono">stack</h4>
            <Tags stack={project.stack} />
            <div className="modal__links">
              {project.demo && <a className="btn btn--solid btn--sm" href={project.demo} target="_blank" rel="noopener"><ExternalIcon /> Live demo</a>}
              {project.repo ? (
                <a className="btn btn--ghost btn--sm" href={project.repo} target="_blank" rel="noopener"><GitHubIcon /> View code</a>
              ) : (
                <span className="text-link is-muted"><LockIcon /> Private repo: happy to walk through it</span>
              )}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
