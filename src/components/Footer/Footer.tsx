import { profile } from "../../content";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner mono">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>
          built with React + TypeScript ·{" "}
          <a href={profile.repo} target="_blank" rel="noopener">source</a>
        </span>
      </div>
    </footer>
  );
}
