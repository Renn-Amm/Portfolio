/* =============================================================
   PROJECTS: the cards in the Work section.

   Each project needs:
   - a thumbnail and gallery images in public/assets/img/projects/
   - `stack`: skill ids from content/skills.ts
   - `repo`: GitHub URL, or null for a private repo
   - `demo` (optional): live URL, which adds a "Live" link
   Then add its `id` to a tab in content/work.ts.
   ============================================================= */
import type { Project, SmallProject } from "../types";

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

/* Smaller projects without screenshots: the "also built" list. */
export const smallProjects: SmallProject[] = [
  { title: "Music Player", note: "Android · Java: browse songs, playback controls, playlists", stack: ["android"] },
  { title: "Food Ordering App", note: "Android · Java: menus, cart and order review flow", stack: ["android"] },
  { title: "This portfolio", note: "React + TypeScript + Vite, deployed to GitHub Pages with GitHub Actions", stack: ["typescript", "react"] },
];
