# Skillex — Frontend Markup Task

A responsive, component-driven catalog layout (music streaming theme) built with React and SCSS, matching a provided Figma structure without chasing pixel-perfect parity. The goal was clean markup, a maintainable CSS architecture, and a sidebar that behaves correctly across breakpoints — not a real product.

**Live demo:** _add your deployed link here_

## Stack

- **React 19** — function components + hooks, no external state library (state is local or lifted only where two components genuinely share it)
- **Vite** — dev server + build
- **Sass** — no CSS framework; everything is hand-written BEM + CSS custom properties
- **ESLint** — `react-hooks` + `react-refresh` rules

## Running it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint
```

## What's implemented

- **Responsive layout** — mobile, tablet, and desktop breakpoints (`src/styles/_breakpoints.scss`), with the sidebar changing from an off-canvas bottom sheet to a persistent rail at desktop width.
- **Sidebar open/close** — collapses to an icon-only rail on desktop, slides in as a mobile drawer with a click-outside backdrop and Escape-to-close, both driven by one `isOpen` flag lifted to `Layout`.
- **Data-driven sections** — every list (nav items, catalog items, artists, labels, footer links) is a plain array in `src/constants/`; components map over it. Adding or removing a card/row/menu item never touches component markup.
- **Catalog filtering** — format + category + search state lives in `Main` and flows down to `TopCharts`/`FilterBar`, which is the one section in the app that's controlled by its parent (documented inline, since every sibling section is self-contained).
- **Reusable primitives** — a shared `MediaCard` component for the two carousels that render the same "cover + title + subtitle" shape, and three SCSS mixins (`horizontal-scroll-row`, `icon-chip`, `accent-circle-button`) that de-duplicate patterns repeated across 5+ components.

## Architecture decisions worth knowing about

**BEM nesting convention.** Every stylesheet nests exactly one level from the block: `.block { &__element {} &--modifier {} }`, using the element's full name even when it's hyphenated (`&__logo-mark`, not `&__logo { &-mark {} }`). Elements never nest inside other elements just because their names share a prefix — BEM elements are flat, independent members of a block, not a DOM-depth chain, so the Sass nesting doesn't pretend otherwise. Pseudo-classes and media queries nest freely inside whatever they modify. The one exception is a modifier that drives state on a _different_ sibling element (e.g. `.footer__section--open .footer__section-chevron`) — those stay as standalone compound selectors since they can't cleanly nest under either element.

**Why a shared `MediaCard`.** The "New Releases" and "Trending Artists" carousels rendered identical markup and CSS with only the data changing. Rather than leave two copies of the same card in sync by hand, it's one component with an `imagePosition` prop for the one real visual difference (artist headshots crop from the top; release covers don't need to).

**SVG id collisions.** Icons that render more than once on screen at the same time (`IconHome`, `IconFire`, `IconCircle`, `IconLogo`, and a few footer/theme icons) namespace their internal `clipPath`/`filter`/`gradient` ids with React's `useId()`. A hardcoded id is invalid the moment the same icon renders twice in one document — this bit the project once and every multi-instance icon was audited and fixed the same way.

## Project structure

```
src/
  components/       one folder per component: ComponentName.jsx + .scss
  constants/         all content as flat, mappable data
  hooks/              useHorizontalScroll — shared scroll-by-button logic
  styles/            design tokens (_variables.scss), breakpoints, shared mixins
  assets/            images/icons grouped by the section that uses them
```

Each component owns its own stylesheet (no global overrides reaching into another component's classes) and imports only the design tokens/mixins it needs via `@use`.
