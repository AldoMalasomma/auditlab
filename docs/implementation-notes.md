# Implementation Notes

## Foundation choices

- Keep the initial structure small and legible.
- Prefer one base layout over page-specific shells.
- Keep styling in Tailwind where it is local to the component and in `src/styles/global.css` where it is global.
- Avoid adding extra abstraction until a real reuse pattern appears.
- Keep docs current as part of the implementation workflow, not as a separate cleanup task.
- Treat the report page as the canonical showcase route and let the home page act as a lighter gateway.
- Use static routes to represent report variants so the project stays frontend-only.
- Use a variant-aware narrative block near the top of the report to guide the read without creating a comparison dashboard.
- End the report with a next-step handoff block that feels like a continuation of the audit, not a marketing CTA.
- Keep the homepage as a guided entry point into the report, not a separate marketing site.
- Add portfolio framing through a minimal shared footer note and a separate context page rather than expanding the product pages.
- Replace the small footer note with a compact site-wide closing layer once the project needs clearer completeness.
- Add realistic static support pages when the footer needs legal or disclosure links, but keep them short and clearly fictional.
- Frame portfolio contact details as owner contact, not product support.
- Reserve visual slots with semantic placeholders rather than generating fake screenshots in code.
- Make report routes go through the shared `BaseLayout` so they inherit the same visual system as the rest of the site.
- Use the first hero visual as a product mockup in the supporting column rather than adding a decorative illustration.
- Link the brand mark back to home so the site has a predictable escape hatch from any page.
- Keep favicon assets in a dedicated `public/favicons/` folder and derive them from the same AL mark used in the header.
- Add a skip link and visible focus styles globally so keyboard navigation remains obvious.
- Make the main content landmark focusable so skip-link navigation lands on a predictable target.
- Add a tiny mobile navigation menu in the shared header using static controls rather than a JS-heavy menu system.
- Prefer native disclosure behavior (`details`/`summary`) for small mobile menus when the goal is reliability and keyboard support.
- Anchor the mobile dropdown to the header container so it reads like an expanded header state, not a separate card.

## Current implementation details

- `BaseLayout` owns the HTML skeleton, meta tags, and background layer.
- `src/pages/index.astro` renders the first product-facing frame.
- `src/pages/index.astro` now acts as the report-first entry flow.
- `src/pages/index.astro` now includes `/images/auditlab-visual-1.png` in the hero support panel.
- `src/layouts/BaseLayout.astro` now links the logo area home, wires the favicon assets from `public/favicons/`, and includes a skip link.
- `src/layouts/BaseLayout.astro` now also carries the minimal mobile navigation trigger and essential-link menu.
- the mobile navigation now uses `<details>/<summary>` so it opens reliably without JavaScript.
- the mobile navigation panel is attached directly below the header summary and uses the same surface treatment.
- the main content areas now carry `tabindex="-1"` so the skip link can land on a focusable target.
- `src/styles/global.css` now defines visible `:focus-visible` styling for interactive controls.
- `src/pages/demo-report.astro` composes the report page from reusable local components.
- `src/pages/case.astro` provides the thin portfolio context layer.
- `src/pages/privacy.astro`, `src/pages/cookies.astro`, `src/pages/accessibility.astro`, `src/pages/terms.astro`, and `src/pages/portfolio-disclosure.astro` provide the static support pages.
- `src/pages/demo-report/[variant].astro` renders the alternate static report variant.
- `src/components/report/ReportPage.astro` keeps the report shell consistent across variants.
- `src/components/report/ReportPage.astro` now wraps the report shell in `BaseLayout` so the routes receive the global site frame.
- `src/components/report/ReportNarrative.astro` adds a short state summary and subtle comparison cue.
- `src/components/report/FinalCta.astro` now presents next-step options and a trust line.
- `src/components/support/SupportPage.astro` keeps the support pages concise and reusable.
- `src/components/support/VisualPlaceholderGrid.astro` provides the semantic placeholder pattern for future visuals.
- `src/data/demo-report.ts` contains the structured sample report data.
- the homepage is responsive without relying on hidden desktop-only content.
- `docs/project-brief.md` is the top-level product and design brief.
- `docs/prompt-log.md` records prompt-by-prompt history with progressive numbering.
- `src/layouts/BaseLayout.astro` now carries the global footer and site-wide disclosure.
- the footer now links to the support pages and shows the portfolio owner contact.

## Guardrails

- do not introduce a large design system too early
- do not split content into many tiny files before there is clear reuse
- keep copy concise and technical rather than legalistic
- do not add fictional implementation details to the docs
- do not couple the report page to a backend or CMS at this stage
