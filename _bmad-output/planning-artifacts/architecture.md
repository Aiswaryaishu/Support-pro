---
stepsCompleted: [1, 2]
inputDocuments:
  - _bmad-output/planning-artifacts/prds/prd-support-pro-web-2026-05-28/prd.md
  - _bmad-output/planning-artifacts/ux-designs/ux-support-pro-web-2026-05-28/DESIGN.md
  - _bmad-output/planning-artifacts/ux-designs/ux-support-pro-web-2026-05-28/EXPERIENCE.md
workflowType: architecture
project_name: support-pro-web
user_name: Aiswarya Binu
date: 2026-05-28
---

# Architecture Decision Document — SupportPRO Website Redesign

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

---

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
16 FR groups covering all homepage sections (F-1 through F-13), three page templates (F-14 Service, F-15 Plan, F-16 Blog), sticky header/footer, and contact/quote forms. All requirements are presentation-layer — no backend, no auth, no database. The redesign must preserve existing SupportPRO routes, content, and functional flows exactly. Key interactive requirements: mega menu (hover + keyboard), mobile accordion navigation, intersection-observer metric counters, contact form with 5 states (idle/submitting/success/error/fallback), and emergency support reachable from 5 distinct locations.

**Non-Functional Requirements:**
- **Performance:** LCP ≤ 2.5s, CLS ≤ 0.1, JS bundle ≤ 300 KB gzipped (NFR-1, NFR-2, NFR-3)
- **Accessibility:** WCAG 2.2 AA — keyboard-operable menus and accordions, focus management, reduced-motion compliance, 44px touch targets, aria-labeled form fields, programmatic error association (NFR-4 through NFR-11)
- **SEO:** Existing URL structure preserved exactly; no redirects introduced; page titles, meta descriptions, heading hierarchy preserved or improved (NFR-12, NFR-13)
- **Browser support:** Chrome, Firefox, Safari, Edge — last 2 major versions (NFR-15)
- **Content integrity:** All three testimonials verbatim, SupportPRO Difference copy preserved, all certification names, contact details, navigation and footer links (NFR-17)

**Scale & Complexity:**
- Primary domain: Responsive multi-page B2B marketing website
- Complexity level: Low-Medium (presentation layer only, no backend)
- Estimated route components: homepage + ~15 service pages + ~5 plan pages + blog listing + blog post ≈ 25+ routes
- Estimated shared components: ~20 already built (homepage), ~10 additional for page templates

### Key Architectural Decision Surfaced

**Rendering strategy: CSR vs SSG**

The PRD simultaneously requires SEO URL preservation (NFR-12), LCP ≤ 2.5s (NFR-1), and crawlable page titles/meta (NFR-13). The current Vite/React implementation is a pure CSR SPA with no routing. These three NFRs are in tension with CSR on a marketing website.

Multi-agent roundtable analysis (Amelia/John/Sally) independently converged:
- **CSR risk:** LCP likely misses 2.5s on mid-range mobile cold load; social scrapers may not execute JS (OpenGraph/Twitter Cards degraded); meta tags require `react-helmet-async` runtime DOM mutation — unreliable for non-Googlebot crawlers
- **Next.js SSG benefit:** Pre-rendered HTML at build time; `next/font/google` eliminates render-blocking Inter font `@import`; `export const metadata` per page is static and crawler-native; LCP routinely ≤1.5s; migration effort ~3–5 days (mechanical, not architectural — all 20 existing components are plain functional React)
- **Astro alternative:** Superior bundle size, but dual rendering model (`.astro` + React islands) creates mental-model drift for a React-native team
- **Business risk (John):** SupportPRO's 23-year domain authority is the primary SEO moat — CSR puts it at variable crawler risk with no upside
- **UX risk (Sally):** A blank CSR screen during initial load is unacceptable for the emergency support user (the highest-stakes touchpoint in the entire UX)

**Preliminary recommendation: Next.js SSG.** Decision to be formally recorded in Step 3.

### Technical Constraints & Dependencies

- Tech stack in progress: React + Vite + TypeScript + Tailwind CSS v3 (website/ directory)
- 20 homepage components already built — all framework-agnostic functional components
- Contact form submission endpoint: **UNKNOWN** (OQ-1, blocking F-12.4)
- Metrics data source: **UNKNOWN** (OQ-2, blocking F-10.3 — placeholder values in current code)
- Google Fonts (Inter): currently loaded via `@import` in `index.css` — render-blocking
- No routing implemented yet
- Logo and certification image assets not yet sourced

### Cross-Cutting Concerns Identified

1. **Rendering / routing architecture** — CSR vs SSG decision gates the entire implementation approach; must be resolved before service page work begins
2. **Form integration** — Contact form endpoint determines whether any runtime API fetch layer exists; currently mocked
3. **Metrics data** — Static values vs dynamic API call; affects whether any server-side data fetching is needed
4. **Accessibility enforcement** — Mega menu keyboard handling, focus trapping, aria-live regions for form states, reduced-motion across all components
5. **Asset pipeline** — Certification logos, platform logos, and SupportPRO logo require a managed public/ asset strategy with alt-text fallbacks
6. **Performance budget** — Inter font loading + Lucide icons + component JS must stay within 300 KB gzipped; font strategy is the highest-impact lever
7. **SEO metadata** — Page-level titles and meta descriptions for 25+ routes require a scalable metadata strategy

### Open Question for Implementation Prioritization

- **OQ-Arch-1:** Does the client have Google Search Console access? Knowing which service pages currently rank determines migration order priority.
