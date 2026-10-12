/* =============================================================
   Content types. TypeScript uses these to check src/content/*,
   so a missing or misspelt field fails the build.
   ============================================================= */

export interface Profile {
  name: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  photo: string;
  repo: string;
  available: boolean;
  roles: string[];
  heroIntro: string;
  /** Paragraphs. **bold** is supported. */
  about: string[];
}

export interface Skill {
  /** Also the icon file name: public/assets/icons/<id>.svg */
  id: string;
  label: string;
}

export interface SkillGroup {
  group: string;
  items: Skill[];
}

export interface ExperienceItem {
  when: string;
  title: string;
  org: string;
  note?: string;
  points?: string[];
}

export interface Screenshot {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  thumb: string;
  gallery: Screenshot[];
  highlights: string[];
  /** Skill ids from content/skills.ts */
  stack: string[];
  /** null = private repo */
  repo: string | null;
  demo?: string;
}

export interface SmallProject {
  title: string;
  note: string;
  stack: string[];
}

export interface CaseStudy {
  title: string;
  context?: string;
  points: string[];
  stack: string[];
}

export interface Track {
  id: string;
  label: string;
  intro: string;
  /** Skill ids shown as pills under the intro */
  skills: string[];
  /** Project ids from content/projects.ts */
  projects: string[];
  cases: CaseStudy[];
  /** Show the "also built" list in this tab */
  showSmallProjects?: boolean;
}
