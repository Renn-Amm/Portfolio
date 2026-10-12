/* ------------------------------------------------------------------
   All portfolio content lives here. TypeScript checks the shape, so a
   typo in a field name fails the build instead of breaking the page.
   - Project `stack` values must match a skill `id` (and an icon file in
     public/assets/icons/<id>.svg).
   - Add a `demo` URL to a project and a "Live demo" link appears.
   - `repo: null` shows "Private repo".
------------------------------------------------------------------- */
import type { CaseStudy, ExperienceItem, Profile, Project, SkillGroup, SmallProject, Track } from "./types";

export const profile: Profile = {
  name: "Aung Min Myat",
  shortName: "Aung",
  email: "aungminmyat2212@gmail.com",
  github: "https://github.com/Renn-Amm",
  linkedin: "https://www.linkedin.com/in/aung-min-myat",
  cv: "assets/Aung-Min-Myat-CV.pdf",
  roles: ["AI Automation Developer", "AI Developer", "Full-Stack Developer"],
  available: true,
};

export const skillGroups: SkillGroup[] = [
  {
    group: "AI & Automation",
    items: [
      { id: "openai", label: "OpenAI API" },
      { id: "claude", label: "Claude API" },
      { id: "prompt", label: "Prompt engineering" },
      { id: "automation", label: "Workflow automation" }, // ← swap for the exact tool (n8n, Zapier, Make…)
      { id: "hubspot", label: "HubSpot" },
    ],
  },
  {
    group: "Full-Stack",
    items: [
      { id: "typescript", label: "TypeScript" },
      { id: "javascript", label: "JavaScript" },
      { id: "react", label: "React" },
      { id: "tailwind", label: "Tailwind CSS" },
      { id: "htmlcss", label: "HTML & CSS" },
      { id: "python", label: "Python" },
      { id: "flask", label: "Flask" },
      { id: "sql", label: "MySQL" },
    ],
  },
  {
    group: "Data & Tools",
    items: [
      { id: "databricks", label: "Databricks" },
      { id: "metabase", label: "Metabase" },
      { id: "github", label: "Git & GitHub" },
      { id: "android", label: "Android" },
      { id: "wordpress", label: "WordPress" },
    ],
  },
];

/* Newest first. Add your AI / automation role here, e.g.
   {
     when: "2025 — now", title: "AI Automation Developer", org: "Company",
     note: "One line on scope.",
     points: ["Built an LLM assistant that …, cutting X by Y%.", "Automated … in HubSpot, saving ~N h/week."],
   },
*/
export const experience: ExperienceItem[] = [
  {
    when: "Degree",
    title: "BSc Computer Science",
    org: "International Leadership University",
    note: "Machine-learning fundamentals, software engineering and web/mobile development. Plus a certificate in Social Media & Online Advertising.",
  },
];

export const projects: Project[] = [
  {
    id: "dmar",
    title: "D-Mar-Learn",
    kicker: "Full-stack web app",
    summary:
      "Gamified English-learning platform with video lessons, vocabulary mini-games, a premium tier, Google login and an admin dashboard.",
    thumb: "assets/img/projects/dmar-thumb.webp",
    gallery: [
      { src: "assets/img/projects/dmar-1.webp", caption: "Home page" },
      { src: "assets/img/projects/dmar-2.webp", caption: "Hangman vocabulary game" },
      { src: "assets/img/projects/dmar-3.webp", caption: "Word scramble game" },
      { src: "assets/img/projects/dmar-4.webp", caption: "Course catalogue" },
    ],
    highlights: [
      "Flask back-end with SQLAlchemy models and migrations, served with Gunicorn.",
      "Google OAuth login (Authlib) with premium-only content gating.",
      "Admin dashboard with user search, pagination and premium management.",
      "Two JavaScript mini-games (hangman, word scramble) to reinforce each lesson.",
    ],
    stack: ["python", "flask", "sql", "javascript", "htmlcss"],
    repo: "https://github.com/Renn-Amm/D-Mar-Learn",
  },
  {
    id: "habit-flow",
    title: "Habit Flow",
    kicker: "Web app · Team project",
    summary:
      "Habit tracker for building routines: daily task list, mood check-ins, a streak calendar and a full settings area.",
    thumb: "assets/img/projects/habit-flow-thumb.webp",
    gallery: [
      { src: "assets/img/projects/habit-flow-1.webp", caption: "Landing page" },
      { src: "assets/img/projects/habit-flow-2.webp", caption: "Dashboard: tasks, calendar and mood check-in" },
      { src: "assets/img/projects/habit-flow-3.webp", caption: "Profile settings" },
      { src: "assets/img/projects/habit-flow-4.webp", caption: "Login with email or Google" },
    ],
    highlights: [
      "Built the front-end in React 18 + Vite with React Router (11 routes: auth, dashboard, settings, FAQs, support).",
      "Google sign-in with Firebase Authentication.",
      "Responsive Tailwind UI, built with a UI/UX designer and back-end developers over ~6 weeks.",
    ],
    stack: ["react", "javascript", "tailwind", "htmlcss"],
    repo: "https://github.com/Renn-Amm/Habitify",
  },
  {
    id: "progress-path",
    title: "Progress Path",
    kicker: "Web app",
    summary:
      "Personal goal and activity tracker with a habit calendar, progress dashboard, event reminders and a journaling tool.",
    thumb: "assets/img/projects/progress-path-thumb.webp",
    gallery: [
      { src: "assets/img/projects/progress-path-1.webp", caption: "Reminders: month/week/day/agenda calendar views" },
    ],
    highlights: [
      "Calendar-based reminders with month, week, day and agenda views.",
      "Goal-progress dashboard and daily journaling flow.",
      "Component-based React UI with shared state across views.",
    ],
    stack: ["react", "javascript", "tailwind"],
    repo: null, // The linked repo (Project-Edge) is private or missing. Put the URL back once it's public.
  },
  {
    id: "rogue",
    title: "Adventure Time",
    kicker: "Game · Python",
    summary: "Roguelike dungeon crawler with procedurally generated levels, turn-based combat and RPG progression.",
    thumb: "assets/img/projects/rogue-thumb.webp",
    gallery: [
      { src: "assets/img/projects/rogue-1.webp", caption: "Turn-based combat against an orc" },
      { src: "assets/img/projects/rogue-2.webp", caption: "Exploring a procedurally generated level" },
      { src: "assets/img/projects/rogue-3.webp", caption: "Fog of war: only explored rooms are revealed" },
    ],
    highlights: [
      "Procedural dungeon generation (rooms + corridors) with fog of war.",
      "Turn-based combat, inventory, equipment and XP/levelling systems.",
      "Object-oriented game architecture in Python + Pygame, with save/load.",
    ],
    stack: ["python"],
    repo: "https://github.com/Renn-Amm/Adventure-time",
  },
];

export const smallProjects: SmallProject[] = [
  { title: "Music Player", note: "Android · Java: browse songs, playback controls, playlists", stack: ["android"] },
  { title: "Food Ordering App", note: "Android · Java: menus, cart and order review flow", stack: ["android"] },
  { title: "This portfolio", note: "React + TypeScript + Vite, deployed to GitHub Pages with GitHub Actions", stack: ["typescript", "react"] },
];

/* Add work you can describe but not show. Example:
   { title: "Internal knowledge assistant", context: "Work project",
     points: ["What it does", "Result / impact"], stack: ["openai", "prompt", "python"] } */
const aiCases: CaseStudy[] = [];
const automationCases: CaseStudy[] = [];

export const tracks: Track[] = [
  {
    id: "fullstack",
    label: "Full-Stack",
    intro: "End-to-end web apps: React front-ends, Python/Flask back-ends, SQL databases, authentication and admin tooling.",
    skills: ["typescript", "react", "tailwind", "python", "flask", "sql"],
    projects: ["dmar", "habit-flow", "progress-path", "rogue"],
    cases: [],
    showSmallProjects: true,
  },
  {
    id: "ai",
    label: "AI Development",
    intro: "Building features on top of LLM APIs like OpenAI and Claude: prompt design, structured outputs, and connecting model responses to real apps and data.",
    skills: ["openai", "claude", "prompt", "python"],
    projects: [],
    cases: aiCases,
  },
  {
    id: "automation",
    label: "Automation",
    intro: "Automating repetitive business workflows, from CRM processes in HubSpot to reporting with Databricks and Metabase, so teams spend less time on manual work.",
    skills: ["automation", "hubspot", "databricks", "metabase"],
    projects: [],
    cases: automationCases,
  },
];

export const services = [
  "AI automations & LLM integrations",
  "Internal tools and AI assistants",
  "Full-stack web apps (React + Python)",
  "CRM & workflow automation",
];

/* ---------- derived helpers ---------- */
export const skillLabel: Record<string, string> = Object.fromEntries(
  skillGroups.flatMap((g) => g.items.map((s) => [s.id, s.label])),
);
export const projectById: Record<string, Project> = Object.fromEntries(projects.map((p) => [p.id, p]));

/** How many showable things (projects, small projects, case studies) use a skill. */
export function skillUsage(id: string): number {
  const all = [...projects, ...smallProjects, ...tracks.flatMap((t) => t.cases)];
  return all.filter((x) => x.stack.includes(id)).length;
}

/** The first tab that contains something using this skill. */
export function trackForSkill(id: string): Track | undefined {
  return tracks.find(
    (t) =>
      t.projects.some((pid) => projectById[pid]?.stack.includes(id)) ||
      t.cases.some((c) => c.stack.includes(id)) ||
      (t.showSmallProjects && smallProjects.some((s) => s.stack.includes(id))),
  );
}
