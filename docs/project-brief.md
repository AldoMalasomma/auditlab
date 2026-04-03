# Project Brief

## Project

AuditLab is a portfolio-grade Astro demo for a fictional SaaS product that audits websites across four lenses:

- privacy / GDPR
- cookies
- accessibility
- UX clarity

## Product direction

The product should feel:

- clear
- precise
- calm
- technically trustworthy
- premium but usable

It should read like a credible modern SaaS interface, not a generic template and not a legal-tech cliché.

## Audience

- small businesses
- agencies
- consultants
- local businesses
- early-stage teams

## Core goals

- demonstrate strong Astro implementation quality
- present a polished SaaS-style interface
- support a realistic report page with credible findings
- keep the codebase clean and portfolio-ready

## Design principles

- mobile first
- wide-screen aware
- strong visual hierarchy
- clean responsive behavior
- maintainable component structure
- portfolio-grade execution

## Current foundation

- Astro is installed and configured in `auditlab`
- Tailwind CSS is wired through the Astro Vite config
- TypeScript support is present through the Astro starter setup and `@astrojs/check`
- Prettier is configured for project-wide formatting
- the homepage uses a reusable base layout and a responsive SaaS-style shell
- the `/demo-report` showcase now has two front-end variants, built from structured local report data and reusable components
- the report includes a variant-aware summary block that guides the read without creating a comparison dashboard
- the docs folder is the active working record for design and implementation decisions

## Planned direction

The next major product step is refining report-content polish, navigation cues, and any additional report states that make the demo feel more complete.
