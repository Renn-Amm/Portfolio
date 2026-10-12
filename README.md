# portfolio

Personal portfolio of **Aung Min Myat**, AI automation & full-stack developer.

**Live:** https://renn-amm.github.io/portfolio/

React 18 + TypeScript + Vite. Deployed to GitHub Pages by GitHub Actions on every push to `main`.

---

## Where to edit what

| I want to change…                         | Edit this file                          |
| ----------------------------------------- | --------------------------------------- |
| Name, links, CV, photo, hero text, About  | `src/content/profile.ts`                |
| Skills (icon grid)                        | `src/content/skills.ts` + icon in `public/assets/icons/` |
| Experience & education timeline           | `src/content/experience.ts`             |
| Projects (cards + screenshots)            | `src/content/projects.ts` + images in `public/assets/img/projects/` |
| Work tabs and case studies                | `src/content/work.ts`                   |
| Contact text and services list            | `src/content/contact.ts`                |
| Colours, fonts, spacing (whole site)      | `src/styles/tokens.css`                 |
| Look of one section                       | the `.css` file next to that section, e.g. `src/sections/Hero/Hero.css` |
| Menu items                                | `NAV_LINKS` in `src/components/Nav/Nav.tsx` |
| ⌘K menu entries                           | `commands` in `src/components/CommandPalette/CommandPalette.tsx` |
| Page order / which sections appear        | `src/App.tsx`                           |

Content files are plain data. TypeScript checks them against `src/types.ts`, so a typo fails `npm run build` instead of breaking the live site. In About text, `**bold**` is supported.

---

## Project structure

```
src/
├── content/            ← ALL TEXT & DATA (edit these)
│   ├── profile.ts        name, links, hero + about text
│   ├── skills.ts         skill groups
│   ├── experience.ts     timeline
│   ├── projects.ts       project cards + "also built"
│   ├── work.ts           tabs + case studies
│   ├── contact.ts        contact text
│   └── index.ts          re-exports + small helpers (no editing needed)
│
├── sections/           ← one folder per page section, in page order
│   ├── Hero/             Hero.tsx + Hero.css
│   ├── About/            About.tsx + About.css   (wraps Skills + Experience)
│   ├── Skills/           Skills.tsx + Skills.css
│   ├── Experience/       Experience.tsx + Experience.css
│   ├── Work/             Work.tsx, ProjectCard.tsx, CaseCard.tsx + Work.css
│   └── Contact/          Contact.tsx + Contact.css
│
├── components/         ← shared pieces used by several sections
│   ├── Nav/              top bar + mobile menu
│   ├── Footer/
│   ├── ProjectModal/     screenshot gallery pop-up
│   ├── CommandPalette/   ⌘K menu
│   ├── Toast/            "Email copied ✓" message + useToast hook
│   ├── SectionTitle.tsx  "01. About ────" heading
│   ├── Tags.tsx          tech tags under cards
│   ├── RichText.tsx      **bold** support for content text
│   └── Icons.tsx         skill icons + small UI icons
│
├── hooks/              ← reusable behaviour
│   ├── useTypewriter.ts    typing effect in the hero
│   ├── useReveal.ts        fade-in on scroll
│   ├── useActiveSection.ts highlights the current menu item
│   └── useReducedMotion.ts respects the OS "reduce motion" setting
│
├── styles/
│   ├── tokens.css        colours, fonts, sizes
│   └── base.css          reset, typography, buttons, shared bits
│
├── types.ts            ← shape of the content
├── App.tsx             ← page layout + shared state
└── main.tsx            ← entry point
```

Each section file starts with a short comment explaining what it shows and where its content comes from.

---

## Common tasks

**Add a project**
1. Add screenshots to `public/assets/img/projects/` (thumbnail ~1200×750, WebP).
2. Add an entry to `projects` in `src/content/projects.ts`.
3. Add its `id` to a tab's `projects` list in `src/content/work.ts`.

**Add work without screenshots** (e.g. company work): add a `CaseStudy` to `aiCases` or `automationCases` in `src/content/work.ts`.

**Add a skill**
1. Add `{ id, label }` to a group in `src/content/skills.ts`.
2. Save a single-colour SVG as `public/assets/icons/<id>.svg` ([Simple Icons](https://simpleicons.org) has most brands).
3. Use the `id` in a project's `stack` and it becomes clickable with a project count.

**Add a section**
1. Create `src/sections/MySection/MySection.tsx` (+ `.css`).
2. Render it in `src/App.tsx`.
3. Add it to `NAV_LINKS` in `src/components/Nav/Nav.tsx` if it should appear in the menu.

---

## Run locally

Needs Node.js 18+.

```bash
npm install        # first time only
npm run dev        # http://localhost:5173, live reload
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build at http://localhost:4173
```

## Deploy

1. Push to `main` on `github.com/Renn-Amm/portfolio`.
2. One-time: repo **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` rebuilds and publishes the site (`.github/workflows/deploy.yml`).

## Credits

Icons: [Simple Icons](https://simpleicons.org) (CC0) and [Lucide](https://lucide.dev) (ISC).
