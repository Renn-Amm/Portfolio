/* =============================================================
   ABOUT: "01. About". Intro paragraphs + photo.
   Skills and Experience are rendered inside it (see App.tsx).
   Text comes from content/profile.ts (about, photo, cv).
   ============================================================= */
import type { ReactNode } from "react";
import { profile } from "../../content";
import { DownloadIcon } from "../../components/Icons";
import { RichText } from "../../components/RichText";
import { SectionTitle } from "../../components/SectionTitle";
import "./About.css";

export function About({ children }: { children?: ReactNode }) {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle num="01" title="About" />

        <div className="about">
          <div className="about__text reveal">
            {profile.about.map((paragraph) => (
              <p key={paragraph}><RichText text={paragraph} /></p>
            ))}
            <a href={profile.cv} className="btn btn--ghost btn--sm" download>
              <DownloadIcon /> Download CV
            </a>
          </div>

          <figure className="about__photo reveal">
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} width={640} height={800} loading="lazy" />
          </figure>
        </div>

        {children}
      </div>
    </section>
  );
}
