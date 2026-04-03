# Worklog

## Current status

- the Astro foundation is in place
- Tailwind, Prettier, and Astro diagnostics are configured
- the homepage is now a report-first entry point with clear access to both variants
- the `/demo-report` showcase has two static report variants and a shared shell
- the report now includes a variant-aware narrative block and contextual score language
- the report ends with a variant-aware next-step handoff instead of a generic CTA
- the site now has a thin portfolio context layer with a dedicated `/case` page and a subtle footer note
- the site now has a compact global footer that closes the product flow and carries the portfolio disclosure
- the site now includes static support pages, portfolio contact references, and reusable visual placeholder slots
- the report routes now render inside the shared global layout instead of bypassing the site frame
- the homepage hero now includes a real product mockup image in the supporting panel
- the AuditLab logo now links back to the homepage across the main site frames
- the site now uses dedicated AL favicon assets under `public/favicons`
- the layout now has a skip link and visible focus styles for keyboard navigation
- the base text size has been increased slightly across pages and footer for readability
- the global header now includes a minimal mobile navigation trigger and essential-link menu
- the mobile navigation now uses a native disclosure pattern so the links actually appear on tap/click
- the mobile navigation now reads as an attached dropdown rather than a floating block
- the documentation system is persistent and versioned inside `docs/`

## 2026-04-03

- created the `auditlab` Astro project in a subfolder of `portfolio`
- installed the initial Astro dependencies
- added Tailwind CSS and Prettier
- added `@astrojs/check` and TypeScript to support diagnostics
- introduced a reusable base layout
- replaced the starter home page with a calm SaaS-style landing shell
- added the project documentation folder
- added the persistent documentation system, including the prompt log and project brief
- built the report foundation with a structured data model and reusable components
- added a second report variant and route-based switch
- refined the report copy, severity treatment, and priority section
- added a variant-aware summary block and stronger section transitions
- replaced the generic CTA with a concrete next-step handoff
- redesigned the homepage as a guided entry flow into the report experience
- added a lightweight project context page and a subtle portfolio footer note
- replaced the footer note with a site-wide closing layer and internal links
- added static privacy, cookies, accessibility, terms, and portfolio disclosure pages
- framed the portfolio owner contact clearly and added a visual placeholder pattern for future product visuals
- fixed the report routes so they inherit the global layout, background, spacing, and footer
- inserted the first product visual into the homepage hero while keeping the existing structure intact
- linked the brand mark back to the homepage and replaced the generic favicon wiring with dedicated AL assets
- added a global skip link and stronger focus indicators
- increased the global typographic scale so page copy and footer text read slightly larger
- added a compact mobile navigation menu for the essential site routes
- replaced the checkbox-based mobile toggle with a native disclosure element
- reworked the mobile menu so the panel is visually attached to the header container

## Attention points

- keep prompt-log entries synchronized with future prompts
- avoid overstating any future report functionality before it is implemented
- preserve the lightweight foundation while the report page gets refined
- keep variant content believable and distinct without drifting into dashboard styling
- keep the narrative block subtle so it guides the read without becoming another dashboard module
- keep the handoff calm and practical rather than promotional
- keep the homepage aligned with the report tone instead of drifting into generic SaaS marketing
- keep the portfolio layer thin so the report still feels like the main product experience
- keep the footer compact so it closes the page without competing with the content above it

## Notes

- the portfolio root was left untouched
- the report page is front-end only and uses fictional sample data
- the CTA block is a static placeholder for the next step after the audit
- the homepage now points directly into the report experience
- the `/case` page exists for portfolio clarity without replacing the product pages
- the footer now carries the portfolio disclosure, internal links, and a small stack note
- the support pages are static and concise on purpose; they exist for realism and structure rather than live operations
- the visual placeholder section on the case page is ready for screenshots or renders without generating fake imagery
- the report pages were visually disconnected because they bypassed `BaseLayout`; that is now corrected
- the homepage hero now has a product mockup rather than a text-only support panel
- the current accessibility pass closes the most obvious keyboard and focus issues, but it is not a formal EAA certification
- the typographic increase is small and global, so hierarchy remains intact
- the mobile menu is intentionally minimal and keeps legal/support links in the footer
- the previous toggle pattern was not reliable in practice; the disclosure version is the durable fix
- the current dropdown pattern is the integrated version, not a separate floating card

## Next recommended step

- refine the report export or share story only if the demo needs a more explicit deliverable
