---
stepsCompleted: [1]
inputDocuments:
  - _bmad-output/planning-artifacts/prds/prd-support-pro-web-2026-05-28/prd.md
  - _bmad-output/planning-artifacts/architecture.md
  - _bmad-output/planning-artifacts/ux-designs/ux-support-pro-web-2026-05-28/DESIGN.md
  - _bmad-output/planning-artifacts/ux-designs/ux-support-pro-web-2026-05-28/EXPERIENCE.md
---

# support-pro-web — Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for the SupportPRO website redesign, decomposing requirements from the PRD, UX Design spines, and Architecture analysis into implementable stories.

---

## Requirements Inventory

### Functional Requirements

FR-1.1: Display the existing SupportPRO logo unchanged in shape, color, and proportion.
FR-1.2: Implement sticky header — remains visible on scroll; reduces height or adds shadow after 20px scroll.
FR-1.3: Desktop navigation: five grouped mega menu dropdowns (Cloud Support, Server Administration, Outsourced Tech Support, Services, Development). Opens on hover/keyboard focus, closes on outside click or Escape.
FR-1.4: Each mega menu item includes a one-sentence descriptor line in addition to the link label.
FR-1.5: Right utility area: Free Checkup link, Login, Sign Up, Emergency Support (urgent styling), Request for Quote (primary pill button).
FR-1.6: Mobile: header collapses to logo + hamburger. Full-screen overlay with accordion groups. Emergency Support and Request for Quote appear near the top without requiring accordion expansion.
FR-1.7: All navigation links resolve to existing routes currently live on supportpro.com.
FR-2.1: Replace the current slider-based hero with a single static trust-first hero.
FR-2.2: Hero headline communicates: 24/7 outsourced technical support for hosting, cloud, and server businesses.
FR-2.3: Subheadline names key services (cloud management, server administration, helpdesk, emergency support) and primary customer types (hosting companies, MSPs, data centers, SaaS, service providers).
FR-2.4: Three CTAs visible above the fold: Request for Quote (primary pill), Get Free Server Checkup (secondary/ghost), and "Need urgent help? Get Emergency Support" (urgent text link).
FR-2.5: Four to five trust chips below CTAs: Since 2003, 24/7/365 Support, White-Label Support, Certified Experts, US + Offshore Delivery.
FR-2.6: Desktop: hero visual on the right — support operations dashboard concept with live support queue, server health status, engineer availability, response time, and resolution time. Visual must not imply SupportPRO is a software product.
FR-2.7: Mobile: hero visual hidden; copy and CTAs stack in a single column.
FR-3.1: Certification/trust badge strip immediately follows the hero section.
FR-3.2: Displays: Red Hat, cPanel, Better Business Bureau, AICPA SOC, ISO 27001, ISO 9001:2015, and 23+ Years Experience badge.
FR-3.3: Every logo has an accessible text label; label remains visible if image fails to load.
FR-3.4: Strip heading: "Trusted Technical Support Backed by Certified Processes".
FR-4.1: Three value proposition cards using existing live site copy: Transparent Technical Support, 24/7 Customer Support, Proactive Server Management.
FR-4.2: Each card: icon, heading, 2–3 line description, optional micro CTA linking to relevant service page.
FR-5.1: Six guided need cards linking to existing service pages: cloud infrastructure support, server management, outsourced customer support, urgent emergency support, dedicated technical staff, development support.
FR-5.2: Each card: icon, need-led title, 1–2 line descriptor, CTA with arrow affordance.
FR-5.3: Whole card is an accessible link. Accessible name derived from card title.
FR-6.1: All platforms from live site displayed: AWS, Google Cloud, Azure, DigitalOcean, OpenStack, Red Hat, Windows, VMware, OpenVZ, cPanel, Plesk, DirectAdmin.
FR-6.2: Grouped into three categories: Cloud Platforms, Server & OS, Hosting Control Panels.
FR-6.3: Section heading: "Supporting the Platforms Your Business Runs On".
FR-6.4: Platform labels remain visible if logos are unavailable.
FR-7.1: Six service cards matching live site services: Cloud Management, Full Time or Part Time Dedicated Tech, 24×7 Server Support, Outsourced Hosting Support, Emergency Server/Cloud Support, Application Development.
FR-7.2: Each card: blue accent line, icon, title, 1–2 line description, Learn More link to existing service page with accessible label including service name.
FR-7.3: Section-level CTA after the grid linking to Request for Quote.
FR-8.1: Two-column layout on desktop for Why SupportPRO section.
FR-8.2: Left copy uses existing live site text verbatim, including ISO 9001:2015 certification mention.
FR-8.3: Right: eight proof point bullet cards with check icons (23+ years, QA/ISO 9001, ISO 27001, certified engineers, 24/7/365, white-label, Chicago HQ + 3 ODCs, matrix-driven QA).
FR-8.4: Section CTA: Request a Quote → quote flow.
FR-9.1: Five expertise cards using existing live site content: Cloud Infrastructure Management, Linux Administration, Windows Administration, Data Center and NOC Operations, End User Tech Support.
FR-9.2: Each card: icon, title, 2–3 line description of the specialization.
FR-10.1: Metrics section heading: "Our Numbers Since January 2015".
FR-10.2: Four metric cards: Helpdesk Tickets Handled, Live Chats Attended, Average Resolution Hours, Average Response Minutes.
FR-10.3: Metric values sourced from existing frontend data or backend data logic — not placeholder values at launch.
FR-10.4: Metrics reveal on scroll (Intersection Observer); final values readable without animation (reduced-motion compliance).
FR-10.5: Section CTA after metrics: "Start Working with SupportPRO" → Request for Quote.
FR-11.1: Three testimonial cards displayed directly (not carousel-only) on desktop: Toby Wolf, Eric W, TYWITSolutions Group — exact quotes from live site.
FR-11.2: Each card: quote icon, testimonial excerpt, author name, company label.
FR-11.3: "View All Testimonials" link → existing testimonials page.
FR-12.1: Two-column contact section on desktop (3 of 5 columns form, 2 of 5 columns contact details + quick actions).
FR-12.2: Contact form fields: Full Name (required), Email (required), Company, Service Interested In (dropdown of all services), Message (required).
FR-12.3: Form states: idle, submitting (loading spinner, duplicate submit disabled, values preserved), success ("Thanks. Our team will contact you shortly."), error (readable message + fallback email/phone).
FR-12.4: Existing form submission behavior and endpoint preserved.
FR-12.5: Right side contact details: Phone 1-(847)-607-6123, sales@supportpro.com, support@supportpro.com, MS Team, Postal address.
FR-12.6: Three quick action cards: Request for Quote (primary), Emergency Support (urgent), Free Server Checkup.
FR-12.7: Mobile: form stacks above contact details.
FR-13.1: Dark navy footer with unchanged SupportPRO logo and short brand statement.
FR-13.2: Four link columns preserving all existing footer links: Industry Solutions, About Us, Popular Plans, Legal.
FR-13.3: Contact column in footer with phone, sales email, support email, postal address.
FR-13.4: Social links (LinkedIn, Twitter/X, Facebook).
FR-13.5: Copyright line: "© [year] SupportPRO.com. All Rights Reserved."
FR-14.1–14.10: Service page template (10-section consistent structure for all existing service pages).
FR-15.1–15.4: Plan page template (pricing cards, comparison table, custom plan block).
FR-16.1–16.5: Blog/resources page template (featured article, card grid, filters, search, sidebar).

### NonFunctional Requirements

NFR-1: LCP ≤ 2.5 seconds on desktop (3G fast connection), measured on Lighthouse or WebPageTest.
NFR-2: CLS ≤ 0.1 — metric cards and platform logos must not cause layout shift on load.
NFR-3: Total homepage JS bundle ≤ 300 KB gzipped.
NFR-4: WCAG 2.2 Level AA compliance across all pages.
NFR-5: All interactive elements (mega menus, accordions, dropdowns, forms) are keyboard operable. Focus order follows visual reading order.
NFR-6: Escape key closes open menus, dropdowns, and dialogs.
NFR-7: Touch targets ≥ 44px height on mobile.
NFR-8: All images have descriptive alt text. Decorative backgrounds use aria-hidden.
NFR-9: Emergency Support must never rely on color alone — must include text label or icon alongside the urgent color.
NFR-10: Form errors programmatically associated with their fields (aria-describedby or equivalent).
NFR-11: Reduced-motion: all scroll reveal and counter animations disabled; final content renders immediately.
NFR-12: Existing URL structure maintained — no redirects introduced by the redesign.
NFR-13: All page titles, meta descriptions, and heading hierarchy preserved or improved.
NFR-14: Structured data carried forward if present on the existing site.
NFR-15: Fully functional on Chrome, Firefox, Safari, and Edge (last two major versions).
NFR-16: Responsive at three breakpoints: desktop ≥ 1024px, tablet 768–1023px, mobile < 768px.
NFR-17: Content integrity — live site testimonials (verbatim), certifications, contact details, all navigation and footer links preserved.

### Additional Requirements

- ARCH-1: Migrate from Vite/React CSR to Next.js 16.2.6 App Router with SSG rendering (unanimous recommendation from multi-agent roundtable analysis; required to meet NFR-1 and NFR-13 reliably).
- ARCH-2: First implementation story must scaffold the Next.js project: `npx create-next-app@latest support-pro-web --typescript --eslint --no-tailwind --app --no-src-dir --import-alias "@/*"` then install Tailwind CSS v3 + Lucide React.
- ARCH-3: Replace `@import url('...')` CSS font loading with `next/font/google` for Inter — eliminates render-blocking font (key NFR-1 improvement).
- ARCH-4: Implement `export const metadata` per `app/page.tsx`, `app/[slug]/page.tsx`, and all route files — static, crawler-native SEO metadata (required for NFR-13).
- ARCH-5: Audit and add `"use client"` directive to all components using `useState`, `useEffect`, or browser APIs — estimated ~8–12 of 20 existing components.
- ARCH-6: Contact form submission endpoint is UNKNOWN (OQ-1) — must be resolved before Story implementing F-12.4. Use environment variable `NEXT_PUBLIC_FORM_ENDPOINT` as the integration point.
- ARCH-7: Metrics data source is UNKNOWN (OQ-2) — metric values must be real data before launch. Story must use static data initially with a clear handoff point for real data integration.
- ARCH-8: Certification and platform logo assets must be placed in `public/` folder with documented fallback text labels.
- ARCH-9: App Router file structure: `app/page.tsx` (homepage), `app/[service-slug]/page.tsx` (service pages), `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`.

### UX Design Requirements

UX-DR1: Implement full DESIGN.md token system in `tailwind.config.js`: colors (navy-950, navy-900, navy-800, blue-700, blue-600, cyan-500, success-600, urgent-600, border-soft), typography scale (display, display-mobile, heading-lg, heading-md, heading-sm, body-lg, body-md, label), spacing scale, and rounded scale.
UX-DR2: Sticky header scroll behavior: add `bg-white/95 backdrop-blur-md shadow-lg` after 20px scroll; header must not obscure anchor targets.
UX-DR3: Desktop mega menu: opens on `mouseenter` and keyboard focus; closes on `mouseleave`, outside click (`mousedown`), or Escape key. Each item must include label + short descriptor line.
UX-DR4: Mobile accordion navigation: body scroll locks when mobile menu is open; Escape or backdrop tap closes menu. Emergency Support and Request for Quote must be accessible at the top level without expanding accordion groups.
UX-DR5: Hero operations dashboard visual: layered dark-card with live support queue indicator, server health status chip, engineer availability bar grid, response time metric, resolution time metric, supported platform tags, and two floating cards (resolution time badge, years in business badge).
UX-DR6: Intersection Observer for metric counters: animate final values on first viewport entry; `prefers-reduced-motion: reduce` disables animation and renders final value immediately.
UX-DR7: Contact form state machine: idle → submitting (disable button, show spinner, preserve all field values) → success (confirmation message with next-step expectation) → error (human-readable message with fallback to email/phone). Form must not reset on error.
UX-DR8: Platform logos grouped into three category cards (Cloud Platforms, Server & OS, Hosting Control Panels). Each platform has a visible text label. Image load failure must not leave a blank space — text label remains.
UX-DR9: Testimonial section: minimum 2–3 testimonial cards visible simultaneously on desktop viewport. Carousel/slider is not acceptable as the sole display mechanism on desktop.
UX-DR10: All mega menu dropdown items include a one-sentence description below the link label, not just a label alone.
UX-DR11: Emergency Support affordance: uses `urgent-600` (#EA580C) color AND an icon (AlertTriangle or equivalent) AND text label — never color-only (NFR-9 compliance).
UX-DR12: Service finder cards: entire card is a keyboard-accessible link. Accessible name must be derived from the card's title, not just "Learn More".
UX-DR13: Responsive layout breakpoints per EXPERIENCE.md: desktop (≥ 1024px) — 2-col hero, 3-col card grids, 5-col contact split; tablet (768–1023px) — 2-col card grids, hero may stack; mobile (< 768px) — single-column all sections, CTAs stack vertically.
UX-DR14: Voice and tone: professional, direct, consultative microcopy. "Request a quote" not "Get started now!!!". "Get a free server checkup" not "Claim your freebie". See EXPERIENCE.md Voice and Tone table.
UX-DR15: Service page template: 10 consistent sections per EXPERIENCE.md Service Page Template (hero, benefits, audience, features, process, plans, why SupportPRO, related services, FAQ, CTA).
UX-DR16: Plan page template: pricing cards with plan name, price, features list, per-plan CTA. Comparison table on desktop; stacked on mobile. "Need a custom plan?" block.
UX-DR17: Blog page template: featured article at top, blog card grid, category filters and search above grid, recent posts sidebar on desktop (collapses below content on mobile), sidebar service CTA on desktop.
UX-DR18: WCAG 2.2 AA: focus rings visible at AA contrast; aria-live regions on form state transitions; screen reader announcements when navigation surfaces change; all form fields have visible labels and programmatic error association.
UX-DR19: Use `next/font/google` for Inter typeface — zero CLS font loading, replaces CSS `@import url(...)`.
UX-DR20: Page-level `export const metadata` per route in App Router — static title, description, and Open Graph tags for each page.

### FR Coverage Map

_To be populated in Step 2 during epic design._

## Epic List

_To be populated in Step 2 during epic design._
