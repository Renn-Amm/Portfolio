/* =============================================================
   HERO: "$ whoami", your name, typed role, intro, buttons.
   Text comes from content/profile.ts (roles, heroIntro).
   ============================================================= */
import { profile } from "../../content";
import { useTypewriter } from "../../hooks/useTypewriter";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../../components/Icons";
import "./Hero.css";

export function Hero() {
  const role = useTypewriter(profile.roles);

  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="hero__prompt mono reveal">
          <span className="dim">$</span> whoami
        </p>

        <h1 className="hero__name reveal">{profile.name}</h1>

        <p className="hero__role reveal" aria-live="polite">
          <span className="mono dim">&gt; </span>
          {role}
          <span className="hero__caret" aria-hidden="true" />
        </p>

        <p className="hero__intro reveal">{profile.heroIntro}</p>

        <div className="hero__buttons reveal">
          <a href="#work" className="btn btn--solid">View my work</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>

        <div className="hero__footer reveal">
          {profile.available && (
            <span className="hero__status mono">
              <span className="hero__dot" /> available for new projects
            </span>
          )}
          <span className="hero__socials">
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </span>
        </div>
      </div>
    </section>
  );
}
