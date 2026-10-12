import { profile } from "../data";
import { useTypewriter } from "../hooks/useTypewriter";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

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
          <span className="caret" aria-hidden="true" />
        </p>
        <p className="hero__lead reveal">
          I connect AI to the tools businesses already use, automating repetitive work with LLMs, and I build
          the full-stack apps around it with React, TypeScript and Python.
        </p>
        <div className="hero__cta reveal">
          <a href="#work" className="btn btn--solid">View my work</a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>
        <div className="hero__meta reveal">
          {profile.available && (
            <span className="status mono">
              <span className="status__dot" /> available for new projects
            </span>
          )}
          <span className="hero__links">
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub"><GitHubIcon /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </span>
        </div>
      </div>
    </section>
  );
}
