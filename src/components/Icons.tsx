/* =============================================================
   ICONS
   - SkillIcon: logo files from public/assets/icons/<id>.svg
   - the rest: small inline UI icons (GitHub, mail, arrows…)
   ============================================================= */
import type { CSSProperties } from "react";

/** Monochrome skill logo. The SVG is used as a mask, so it takes the text colour. */
export function SkillIcon({ id, size = 32 }: { id: string; size?: number }) {
  const url = `url("assets/icons/${id}.svg")`;
  const style: CSSProperties = { width: size, height: size, WebkitMaskImage: url, maskImage: url };
  return <span className="skill-icon" style={style} aria-hidden="true" />;
}

/* ---------- UI icons ---------- */
type P = { className?: string };
const base = { viewBox: "0 0 24 24", "aria-hidden": true } as const;

export const GitHubIcon = ({ className }: P) => (
  <svg {...base} className={`fill ${className ?? ""}`}>
    <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5z" />
  </svg>
);
export const LinkedInIcon = ({ className }: P) => (
  <svg {...base} className={`fill ${className ?? ""}`}>
    <path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.5H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z" />
  </svg>
);
export const MailIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const ExternalIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
);
export const LockIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
);
export const DownloadIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>
);
export const CopyIcon = ({ className }: P) => (
  <svg {...base} className={className}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>
);
export const CloseIcon = ({ className }: P) => (
  <svg {...base} className={className}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const ChevronIcon = ({ dir, className }: P & { dir: "left" | "right" }) => (
  <svg {...base} className={className}><path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 6l6 6-6 6"} /></svg>
);
export const SearchIcon = ({ className }: P) => (
  <svg {...base} className={className}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
);
