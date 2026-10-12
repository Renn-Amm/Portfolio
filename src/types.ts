export interface Skill {
  /** Matches the icon file in public/assets/icons/<id>.svg and the ids used in `stack` arrays. */
  id: string;
  label: string;
}

export interface SkillGroup {
  group: string;
  items: Skill[];
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

/** Work you can describe but not show (no screenshots or public code). */
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
  skills: string[];
  projects: string[];
  cases: CaseStudy[];
  showSmallProjects?: boolean;
}

export interface ExperienceItem {
  when: string;
  title: string;
  org: string;
  note?: string;
  points?: string[];
}

export interface Profile {
  name: string;
  shortName: string;
  email: string;
  github: string;
  linkedin: string;
  cv: string;
  roles: string[];
  available: boolean;
}
