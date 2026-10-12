/* =============================================================
   SKILLS: shown as icon + name in the About section.

   To add a skill:
   1. Add { id, label } to a group below.
   2. Put a single-colour SVG at public/assets/icons/<id>.svg
      (brand logos: https://simpleicons.org).
   3. Use the same `id` in a project's `stack` to link them.
   ============================================================= */
import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    group: "AI & Automation",
    items: [
      { id: "openai", label: "OpenAI API" },
      { id: "claude", label: "Claude API" },
      { id: "prompt", label: "Prompt engineering" },
      { id: "n8n", label: "n8n" },
      { id: "zapier", label: "Zapier" },
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
      { id: "postgresql", label: "PostgreSQL" },
      { id: "sql", label: "MySQL" },
    ],
  },
  {
    group: "Data & Tools",
    items: [
      { id: "databricks", label: "Databricks" },
      { id: "metabase", label: "Metabase" },
      { id: "gsheets", label: "Google Sheets" },
      { id: "intercom", label: "Intercom" },
      { id: "linear", label: "Linear" },
      { id: "github", label: "Git & GitHub" },
      { id: "android", label: "Android" },
      { id: "wordpress", label: "WordPress" },
    ],
  },
];
