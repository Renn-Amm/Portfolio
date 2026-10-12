/* =============================================================
   EXPERIENCE & EDUCATION: the two tabs of the timeline in the
   About section. Newest first. `note` and `points` are optional.
   ============================================================= */
import type { ExperienceItem } from "../types";
 
/* ---------- Experience tab ---------- */
export const experience: ExperienceItem[] = [
  {
    when: "Aug 2026 — Jan 2027",
    title: "AI & Automation Specialist Intern",
    org: "bsport · Barcelona",
    note: "AI and workflow automation for internal teams at bsport, a management platform for fitness and wellness studios.",
    points: [
      // ← add 2–3 concrete things you've built, e.g.
      // "Built … with the OpenAI API, saving the support team ~N h/week.",
    ],
  },
  {
    when: "Freelance",
    title: "Automation Developer",
    org: "Luxury leather-goods brand · Barcelona",
    note: "Built an automated pipeline that tracks viral fashion and bag videos in Barcelona and turns them into a structured dataset for the marketing team.",
    points: [
      "Collects trending videos about bags and fashion, with posting time, views, likes, comments and captions.",
      "Enriches each post with creator profile data: names, bios and more.",
      "Writes everything to Google Sheets automatically, ready for analysis.",
    ],
  },
];
 
/* ---------- Education tab ---------- */
export const education: ExperienceItem[] = [
  {
    when: "2025 — 2026",
    title: "MSc Computer Science",
    org: "Harbour.Space University · Barcelona",
  },
  {
    when: "2022 — 2025",
    title: "BSc Computer Science",
    org: "International Leadership University",
    note: "GPA 3.5 / 4.0. Plus a certificate in Social Media & Online Advertising.",
  },
];
