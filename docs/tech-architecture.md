# Tech Architecture

## Stack

- Astro for page rendering and file-based routing
- Tailwind CSS for utility-first styling
- TypeScript for typed frontmatter and shared data
- Prettier for formatting consistency
- `@astrojs/check` for Astro file diagnostics

## Structure

- `src/layouts/` holds reusable page shells
- `src/pages/` contains routes
- `src/components/report/` holds the reusable report building blocks
- `src/components/support/` holds the reusable support-page shell and visual placeholder pattern
- `src/components/report/ReportNarrative.astro` carries the variant-aware summary block
- `src/data/` holds small local data models for structured demo content
- `src/styles/` holds global styling and design tokens
- `public/` stores static assets
- `public/favicons/` stores the dedicated AL favicon set
- `docs/` stores project context and decisions
- `src/pages/demo-report/[variant].astro` provides a static alternate report state
- `src/pages/privacy.astro`, `src/pages/cookies.astro`, `src/pages/accessibility.astro`, `src/pages/terms.astro`, and `src/pages/portfolio-disclosure.astro` provide static support pages

## Folder conventions

- keep route-level pages in `src/pages/`
- keep shared shells and wrappers in `src/layouts/`
- keep global CSS in `src/styles/`
- keep static images and icons in `public/`
- keep product and implementation records in `docs/`
- keep report data and page-local structures in `src/data/`
- keep report component logic small and reusable in `src/components/report/`
- keep alternate report states route-based so the demo stays static and frontend-only
- keep the narrative block above the scorecards so the page reads like a guided audit
- expose a keyboard skip link and clear focus styles from the shared global shell

## Layout strategy

The interface is built mobile first and then expanded for wide screens with:

- a centered content column
- layered background treatment
- section widths that stop the page from feeling stretched
- stacked content on smaller screens
- split-panel sections on larger screens

## Data strategy

The first phase keeps copy and display data colocated with the page or layout when it is small.
This report uses a small typed data module so the two variants stay consistent without introducing a CMS.
If the demo grows, move repeatable content into `src/lib/` or a dedicated `src/content/` layer.

## Styling strategy

- Tailwind handles layout and component-level styling
- global CSS defines the page background, selection color, and base text behavior
- the layout should stay reusable rather than page-specific

## Implementation patterns

- use a single base layout for shared HTML and metadata
- colocate small static arrays with the route that uses them
- extract components only when repetition or page complexity makes reuse obvious
- keep report-related content data-driven once the report page exists
- keep severity and category labels as local TypeScript unions so the demo data stays consistent
- use route-based variant toggles instead of query-param state for static builds
- let the top-of-page summary explain the state before the scorecard and findings
- use a shared support-page wrapper so policy and disclosure pages stay concise and consistent
- use semantic placeholder frames for future visuals instead of fake screenshots or decorative mock art
