/* =============================================================
   PROFILE: who you are. Used by the Hero, About, Contact,
   Footer and the ⌘K menu.
   Tip: wrap words in **double asterisks** to make them bold.
   ============================================================= */
import type { Profile } from "../types";

export const profile: Profile = {
  name: "Aung Min Myat",
  email: "aungminmyat2212@gmail.com",
  github: "https://github.com/Renn-Amm",
  linkedin: "https://www.linkedin.com/in/aung-min-myat",
  cv: "assets/Aung-Min-Myat-CV.pdf",
  photo: "assets/img/profile.webp",
  repo: "https://github.com/Renn-Amm/portfolio",

  // Shows the "available for new projects" line in the hero
  available: true,

  /* ---------- Hero ---------- */
  // These cycle with a typing effect under your name
  roles: ["AI Automation Developer", "AI Developer", "Full-Stack Developer"],
  heroIntro:
    "I connect AI to the tools businesses already use, automating repetitive work with LLMs, and I build the full-stack apps around it with React, TypeScript and Python.",

  /* ---------- About ---------- */
  about: [
    "I'm an **AI & automation specialist** and **full-stack developer** based in Barcelona. I'm currently an AI & Automation Specialist intern at **bsport**, and I hold a master's in Computer Science from Harbour.Space University.",
    "I build automations with n8n and Zapier, work with LLM APIs like OpenAI and Claude, and connect them to the tools teams already use: HubSpot, Intercom, Linear, Google Sheets, Databricks and Metabase. As a freelancer I built a pipeline that tracks viral fashion content for a luxury leather-goods brand.",
    "Before that I built full-stack products: a Flask learning platform with Google login and an admin dashboard, and React apps built with designers and back-end developers. So I can ship the whole thing, not just the automation.",
  ],
};
