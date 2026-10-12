/* =============================================================
   WORK TABS: Full-Stack / AI Development / Automation.

   Each tab shows: intro text → tool pills → project cards
   (by id, from content/projects.ts) → case studies.
   A tab with no projects and no cases shows the "internal work"
   message below.

   Case studies are work you can describe but not show
   (no screenshots or public code).
   ============================================================= */
import type { CaseStudy, Track } from "../types";

/* ---------- Case studies ---------- */

const aiCases: CaseStudy[] = [
  // { title: "…", context: "bsport", points: ["What it does", "Result"], stack: ["openai", "python"] },
];

const automationCases: CaseStudy[] = [
  {
    title: "Viral content tracker",
    context: "Freelance · Luxury leather-goods brand, Barcelona",
    points: [
      "Automated workflow that finds viral videos about bags and fashion in Barcelona.",
      "Captures posting time, views, likes, comments and captions for each video.",
      "Collects creator profile data (names, bios…) and stores everything in Google Sheets for the marketing team.",
    ],
    stack: ["gsheets"], // ← add "n8n" or "zapier", whichever you used
  },
];

/* ---------- Tabs ---------- */

export const tracks: Track[] = [
  {
    id: "fullstack",
    label: "Full-Stack",
    intro: "End-to-end web apps: React front-ends, Python/Flask back-ends, SQL databases, authentication and admin tooling.",
    skills: ["typescript", "react", "tailwind", "python", "flask", "postgresql"],
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
    intro: "Automating repetitive business workflows with n8n and Zapier, from data collection pipelines to CRM and support processes in HubSpot, Intercom and Linear, so teams spend less time on manual work.",
    skills: ["n8n", "zapier", "hubspot", "gsheets", "intercom", "linear"],
    projects: [],
    cases: automationCases,
  },
];

/* ---------- Section text ---------- */

export const workText = {
  subtitle: "Pick an area to see what I do there, the tools I use and the projects behind it.",
  empty: {
    title: "Built for real teams",
    body: "My work in this area so far has been internal company projects, so there's no public code or screenshots. I'm happy to walk you through what I built and the results in a call.",
    cta: "Ask me about it",
  },
};
