# Skillex — Frontend Markup Task

A responsive catalog layout (music streaming theme) built with React and SCSS, matching a Figma structure without chasing pixel-perfect parity. Focus: clean markup, a maintainable CSS architecture, and a sidebar that behaves correctly across breakpoints.

**Live demo:** https://skillex-task.web.app

## Stack

- **React 19** — function components + hooks, no external state library
- **Vite** — dev server + build
- **Sass** — no CSS framework; BEM + CSS custom properties throughout
- **ESLint** — `react-hooks` + `react-refresh` rules

## Running it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint
```

## Features

- **Responsive layout** — mobile, tablet, and desktop breakpoints. The sidebar goes from a mobile drawer (with backdrop + Escape-to-close) to a collapsible desktop rail.
- **Data-driven content** — every list (nav items, catalog items, artists, labels, footer links) is a plain array in `src/constants/`. Adding or removing an item never touches component markup.
- **Catalog filtering** — format, category, and search filters live in `Main` and flow down to `TopCharts`/`FilterBar`.
- **Reusable pieces** — a shared `MediaCard` component for the two carousels with matching card shapes, plus SCSS mixins (`horizontal-scroll-row`, `icon-chip`, `accent-circle-button`) shared across components.

## A few notable decisions

- **BEM, one level deep.** Every stylesheet nests exactly one level: `.block { &__element {} &--modifier {} }`. Elements never nest inside other elements — BEM elements are flat members of a block, not a DOM-depth chain.
- **Shared `MediaCard`.** "New Releases" and "Trending Artists" rendered the same card shape with only the data changing, so it's one component instead of two copies to keep in sync.
- **`useId()` on repeated icons.** Icons that can render more than once on the same page (`IconHome`, `IconLogo`, etc.) generate unique SVG ids per instance — a hardcoded id breaks the moment the icon appears twice.

## Project structure

```
src/
  components/   one folder per component: ComponentName.jsx + .scss
  constants/    all content as flat, mappable data
  hooks/        shared logic (e.g. useHorizontalScroll)
  styles/       design tokens, breakpoints, shared mixins
  assets/       images/icons grouped by the section that uses them
```
