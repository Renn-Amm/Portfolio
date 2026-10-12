# portfolio

Personal portfolio of **Aung Min Myat**, AI automation & full-stack developer.

**Live:** https://renn-amm.github.io/portfolio/

Built with **React 18 + TypeScript + Vite**. Deployed to GitHub Pages by GitHub Actions on every push to `main`.

## Features

- **Work tabs** (Full-Stack / AI Development / Automation) with keyboard navigation (WAI-ARIA tabs pattern)
- **Skill → project highlighting**: click a skill and the matching projects are highlighted in the right tab
- **Project modal** with screenshot gallery: thumbnails, arrow keys, swipe, deep links (`#project-habit-flow`)
- **Command menu** (`⌘K` / `Ctrl K`): jump to sections, tabs and projects, copy email, download CV
- Contact form that opens the visitor's email app (no backend needed)
- Monochrome design, scroll-reveal, respects `prefers-reduced-motion`, keyboard & screen-reader friendly
- Fully typed content model: a typo in `src/data.ts` fails the build instead of breaking the page

## Project structure

```
src/
  data.ts              ← ALL content: profile, skills, projects, tabs, experience
  types.ts             content types
  App.tsx              page state (tab, highlighted skill, open project, command menu)
  components/          Nav, Hero, About, Work, ProjectModal, Contact, CommandPalette…
  hooks/               useTypewriter, useReveal, useActiveSection, useReducedMotion
  styles.css           design tokens + styles
public/assets/         images, skill icons, CV, favicon, social preview
.github/workflows/     GitHub Pages deploy
```

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Updating content

Everything is in `src/data.ts`:

- **Project:** add to `projects` (thumbnail + gallery images in `public/assets/img/projects/`), then add its `id` to a tab in `tracks`.
- **Live demo:** set `demo: "https://…"` on a project.
- **AI / automation work without screenshots:** add `CaseStudy` items to `aiCases` / `automationCases`.
- **Experience:** add to `experience` (newest first).
- **Skill:** add to `skillGroups` and put a monochrome SVG at `public/assets/icons/<id>.svg`.

## Deploy (one-time setup)

1. Push to `main` on `github.com/Renn-Amm/portfolio`.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` now builds and publishes the site.

## Credits

Skill icons: [Simple Icons](https://simpleicons.org) (CC0) and [Lucide](https://lucide.dev) (ISC).
