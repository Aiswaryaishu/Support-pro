---
title: SupportPRO Website Redesign — Product Requirements Document
status: draft
created: 2026-05-28
updated: 2026-05-28
project: support-pro-web
sources:
  - https://www.supportpro.com/ (live site content, 2026-05-28)
  - SupportPRO Website Revamp Document (user-provided brief, 2026-05-28)
  - DESIGN.md — UX visual identity spine (2026-05-28)
  - EXPERIENCE.md — UX experience spine (2026-05-28)
---

# SupportPRO Website Redesign — PRD

## Problem Statement

The current SupportPRO website (https://www.supportpro.com/) does not adequately communicate the company's 23-year track record, technical depth, and enterprise-grade service quality. The hero relies on a dated slider pattern, the navigation exposes all links without hierarchy, trust signals appear too late in the page, and the visual design does not match the calibre of the services offered. As a result, potential enterprise buyers — hosting companies, MSPs, data centers, SaaS businesses — may not quickly grasp what SupportPRO does or why they should trust it, reducing quote request conversions.

The redesign must modernize the presentation layer only. All existing content, logo, service offerings, navigation links, functional flows, contact details, certifications, testimonials, and footer structure must remain intact.

---

## Goals

| # | Goal | Success Metric | Counter-metric |
|---|---|---|---|
| G-1 | Increase Request for Quote submissions | Quote form submissions per month ↑ | Bounce rate on quote page (must not rise) |
| G-2 | Communicate SupportPRO's value within first viewport | Time-to-understanding as measured by session engagement | Average time on page (must not decrease) |
| G-3 | Improve trust perception | Certification and testimonials scroll-depth ↑ | Exit rate from trust/certification section |
| G-4 | Make service discovery faster | Clicks to correct service page ↓ | Navigation abandonment rate |
| G-5 | Improve mobile usability | Mobile conversion rate ↑ | Mobile bounce rate |

---

## Users

**Primary buyers** (main conversion targets):

- **Operations leads at MSPs and hosting companies** — evaluating outsourced support vendors. They need to understand scope, trust, and price quickly. [ASSUMPTION: primary traffic source is search/referral from hosting communities]
- **Founders of web hosting companies** — looking for white-label helpdesk or server support. Service finder clarity is critical.
- **Procurement stakeholders at data centers and cloud businesses** — validating credibility via certifications, metrics, and testimonials before initiating a quote.
- **Cloud business owners and SaaS companies** — evaluating cloud management or 24/7 NOC support.

**Urgent visitors** (non-buyer, time-critical):

- **Server/site owners during an active incident** — need Emergency Support instantly, cannot navigate multiple menu levels.

**Returning users:**

- **Existing clients** — login, support portal access. Their path must stay unchanged.

---

## Scope

### In scope

- Homepage redesign (all 13 sections per EXPERIENCE.md)
- Sticky header with grouped mega menu and mobile accordion
- Service page template (consistent layout for all existing service pages)
- Plan page template (redesigned pricing cards, comparison layout)
- Blog / resources page template
- Responsive behavior across desktop (≥ 1024px), tablet (768–1023px), and mobile (< 768px)
- Contact and quote form (preserve existing submission behavior; improve states)
- Footer redesign (preserve all existing links and contact information)
- Visual system: tokens, typography, spacing, cards, CTAs per DESIGN.md

### Out of scope

- SupportPRO logo (unchanged)
- Business model or service offerings (unchanged)
- Existing service page content (reorganized, not rewritten)
- Backend systems, CRM integrations, or pricing logic
- New services not currently on the live site
- Multi-language support [ASSUMPTION: English-only, consistent with live site]

---

## Functional Requirements

### F-1 — Header

**F-1.1** Display the existing SupportPRO logo on the left. Logo must be unchanged in shape, color, and proportion.

**F-1.2** Sticky header: must remain visible on scroll. Header height may reduce or add a shadow after the user scrolls past 20px.

**F-1.3** Desktop navigation: five grouped mega menu dropdowns — Cloud Support, Server Administration, Outsourced Tech Support, Services, Development. Each dropdown opens on hover and keyboard focus, closes on outside click or Escape.

**F-1.4** Each mega menu item includes a short descriptor line (1 sentence) in addition to the link label.

**F-1.5** Right utility area: Free Checkup link, Login, Sign Up, Emergency Support (visually distinct, urgent styling), Request for Quote (primary pill button).

**F-1.6** Mobile: header collapses to logo + hamburger. Menu opens as a full-screen overlay with accordion groups. Emergency Support and Request for Quote must appear near the top of the mobile menu without requiring accordion expansion.

**F-1.7** All navigation links must resolve to existing routes currently live on supportpro.com.

---

### F-2 — Hero Section

**F-2.1** Replace the current slider-based hero with a single static trust-first hero.

**F-2.2** Headline communicates the primary value proposition: 24/7 outsourced technical support for hosting, cloud, and server businesses.

**F-2.3** Subheadline names the key services (cloud management, server administration, helpdesk, emergency support) and primary customer types (hosting companies, MSPs, data centers, SaaS, service providers).

**F-2.4** Three CTAs visible above the fold:
  - Primary: Request for Quote (pill button, brand blue)
  - Secondary: Get Free Server Checkup (outline/glass button)
  - Urgent link: "Need urgent help? Get Emergency Support" (orange text link)

**F-2.5** Four to five trust chips below the CTAs: Since 2003, 24/7/365 Support, White-Label Support, Certified Experts, US + Offshore Delivery.

**F-2.6** Desktop: hero visual on the right side — a support operations dashboard concept showing live support queue, server health status, engineer availability, response time, and resolution time metrics. Visual must not imply SupportPRO is a software product.

**F-2.7** Mobile: hero visual is hidden; copy and CTAs stack in a single column.

---

### F-3 — Certification / Trust Badge Strip

**F-3.1** Immediately follows the hero section.

**F-3.2** Displays the following certifications and trust markers: Red Hat, cPanel, Better Business Bureau, AICPA SOC, ISO 27001, ISO 9001:2015, and a 23+ Years Experience badge.

**F-3.3** Every logo has an accessible text label. If an image fails to load, the label remains visible.

**F-3.4** Strip heading: "Trusted Technical Support Backed by Certified Processes".

---

### F-4 — Outsourced Technical Support Experts Section

**F-4.1** Three value proposition cards using existing live site copy:
  - Transparent Technical Support (white-label outsourced support)
  - 24/7 Customer Support (always-on engineer support)
  - Proactive Server Management (preventive infrastructure care)

**F-4.2** Each card: icon, heading, 2–3 line description, optional micro CTA linking to the relevant service page.

---

### F-5 — Service Finder ("What Type of Support Do You Need?")

**F-5.1** Six guided need cards, each linking to an existing service page:
  1. Cloud infrastructure support → Cloud Management
  2. Server management → Dedicated Server Support
  3. Outsourced customer support → Helpdesk Support
  4. Urgent emergency support → Emergency Support (urgent styling, orange)
  5. Dedicated technical staff → Dedicated Tech Support
  6. Development support → Hire a Developer

**F-5.2** Each card: icon, need-led title, 1–2 line descriptor, CTA text with arrow affordance.

**F-5.3** Whole card is a link. Accessible name derived from card title.

---

### F-6 — Supported Platforms

**F-6.1** All platforms from the live site are displayed: AWS, Google Cloud, Azure, DigitalOcean, OpenStack, Red Hat, Windows, VMware, OpenVZ, cPanel, Plesk, DirectAdmin.

**F-6.2** Grouped into three categories: Cloud Platforms, Server & OS, Hosting Control Panels.

**F-6.3** Section heading: "Supporting the Platforms Your Business Runs On".

**F-6.4** Platform labels remain visible if logos are unavailable.

---

### F-7 — Our Services

**F-7.1** Six service cards matching the live site services:
  1. Cloud Management
  2. Full Time or Part Time Dedicated Tech
  3. 24×7 Server Support
  4. Outsourced Hosting Support
  5. Emergency Server / Cloud Support (urgent styling)
  6. Application Development

**F-7.2** Each card: accent line, icon, title, 1–2 line description, Learn More link to the existing service page. Learn More has an accessible label including the service name.

**F-7.3** Section-level CTA after the grid: "Get a Custom Quote for Your Business" → Request for Quote.

---

### F-8 — Why SupportPRO

**F-8.1** Two-column layout on desktop: left side prose explanation; right side bullet proof point cards.

**F-8.2** Left copy uses existing live site text about the SupportPRO Difference verbatim, including the ISO 9001:2015 certification mention.

**F-8.3** Right side: eight proof point cards with check icons:
  - 23+ years in outsourced technical support
  - Strict QA process with ISO 9001:2015 certification
  - ISO 27001 certified support process
  - Red Hat, cPanel, Microsoft, and AWS certified engineers
  - 24/7/365 availability
  - White-label delivery model
  - Headquartered in Chicago with 3 ODCs in South India
  - Matrix-driven evaluation for consistent service quality

**F-8.4** Section CTA: Request a Quote → quote flow.

---

### F-9 — Expertise Areas

**F-9.1** Five expertise cards using existing live site content:
  1. Cloud Infrastructure Management
  2. Linux Administration
  3. Windows Administration
  4. Data Center and NOC Operations
  5. End User Tech Support

**F-9.2** Each card: icon, title, 2–3 line description of the specialization.

---

### F-10 — Metrics Section

**F-10.1** Heading: "Our Numbers Since January 2015".

**F-10.2** Four metric cards from the live site:
  - Helpdesk Tickets Handled
  - Live Chats Attended
  - Average Resolution Hours
  - Average Response Minutes

**F-10.3** Metric values must be sourced from existing frontend data or backend data logic. Placeholder display values may be used in development but must be replaced before launch. [ASSUMPTION: exact metric values are available from the existing site's data source]

**F-10.4** Metrics reveal on scroll (intersection observer). Rendered final values must be readable without animation (reduced-motion compliance).

**F-10.5** Section CTA after metrics: "Start Working with SupportPRO" → Request for Quote.

---

### F-11 — Testimonials

**F-11.1** Three testimonial cards displayed directly (not carousel-only) on desktop, using existing live site testimonials:
  - Toby Wolf: exact quote as on the live site
  - Eric W: exact quote as on the live site
  - TYWITSolutions Group: exact quote as on the live site

**F-11.2** Each card: quote icon, testimonial excerpt, author name, company label.

**F-11.3** "View All Testimonials" link below the cards → existing testimonials page.

---

### F-12 — Contact / Request Consultation

**F-12.1** Two-column layout on desktop. Contact form on the left (3 of 5 columns), contact details and quick actions on the right (2 of 5 columns).

**F-12.2** Contact form fields: Full Name (required), Email (required), Company, Service Interested In (dropdown of all services), Message (required).

**F-12.3** Form states: idle, submitting (loading spinner, duplicate submit disabled, values preserved), success ("Thanks. Our team will contact you shortly."), error (readable message + fallback email/phone).

**F-12.4** Existing form submission behavior and endpoint must be preserved. [ASSUMPTION: existing form submits to a backend or third-party email handler; endpoint to be confirmed during implementation]

**F-12.5** Right side contact details using existing live site data:
  - Phone: 1-(847)-607-6123
  - Sales email: sales@supportpro.com
  - Support email: support@supportpro.com
  - MS Team contact: support@supportpro.com
  - Postal address: 1020 Milwaukee Ave, #245, Deerfield, IL-60015, USA

**F-12.6** Three quick action cards on the right: Request for Quote (primary), Emergency Support (urgent), Free Server Checkup.

**F-12.7** Mobile: form stacks above contact details.

---

### F-13 — Footer

**F-13.1** Dark navy background. Unchanged SupportPRO logo and short brand statement.

**F-13.2** Four link columns preserving all existing footer links:
  - Industry Solutions: Web Hosting Services, Service Providers, E-Commerce Companies, Software Vendors, Web Developers, ISPs
  - About Us: Company, Technical Blog, Careers, FAQ, Partners, Site Map
  - Popular Plans: Dedicated Team Support, Helpdesk Support, Hourly Administration
  - Legal: Privacy Statement, Terms of Use

**F-13.3** Contact column: phone, sales email, support email, postal address.

**F-13.4** Social links (LinkedIn, Twitter/X, Facebook). [ASSUMPTION: social profile URLs exist; to be confirmed during implementation]

**F-13.5** Copyright line: "© [year] SupportPRO.com. All Rights Reserved."

---

### F-14 — Service Page Template

All existing service pages adopt the following consistent section structure:

**F-14.1** Service hero: title, short value proposition, Request for Quote CTA, relevant secondary CTA.

**F-14.2** Quick benefit cards (3–4 cards).

**F-14.3** "Who this service is for" section.

**F-14.4** Features included list or grid.

**F-14.5** Process / how it works section.

**F-14.6** Plans or pricing section (when applicable to the service).

**F-14.7** Why choose SupportPRO section (abbreviated version of F-8).

**F-14.8** Related services section (2–3 links).

**F-14.9** FAQ accordion (accessible disclosure pattern, keyboard operable).

**F-14.10** Bottom Request for Quote CTA.

---

### F-15 — Plan Page Template

**F-15.1** Existing plan names and pricing are preserved exactly.

**F-15.2** Redesigned pricing cards: plan name, price display, features list, per-plan CTA.

**F-15.3** Comparison table on desktop for pages with multiple plans; stacked comparison cards on mobile.

**F-15.4** "Need a custom plan?" consultation block with contact / quote CTA.

---

### F-16 — Blog / Resources Template

**F-16.1** Featured article at top.

**F-16.2** Blog card grid: title, excerpt, date/category, accessible image alt text, link to post.

**F-16.3** Category filters and search above the grid.

**F-16.4** Recent posts sidebar on desktop; sidebar collapses below content on mobile.

**F-16.5** Sidebar service CTA on desktop.

---

## Non-Functional Requirements

### Performance

**NFR-1** Largest Contentful Paint (LCP) ≤ 2.5 seconds on desktop (3G fast connection). [ASSUMPTION: measured on Lighthouse or WebPageTest against production build]

**NFR-2** Cumulative Layout Shift (CLS) ≤ 0.1. Metric cards and platform logos must not cause layout shift on load.

**NFR-3** Total bundle size ≤ 300 KB gzipped for the homepage JS.

---

### Accessibility

**NFR-4** WCAG 2.2 Level AA compliance across all pages.

**NFR-5** All interactive elements (mega menus, accordions, dropdowns, forms, modals) are keyboard operable. Focus order follows visual reading order.

**NFR-6** Escape closes open menus, dropdowns, and dialogs.

**NFR-7** Touch targets ≥ 44px height on mobile.

**NFR-8** All images have descriptive alt text. Decorative backgrounds use aria-hidden.

**NFR-9** Emergency Support must never rely on color alone; it must include a text label or icon.

**NFR-10** Form errors must be programmatically associated with their fields (aria-describedby or equivalent).

**NFR-11** Reduced-motion: all scroll reveal and counter animations are disabled; final content renders immediately.

---

### SEO Preservation

**NFR-12** Existing URL structure must be maintained. No redirects introduced by the redesign. [ASSUMPTION: the redesign is a presentation-layer change; routing is unchanged]

**NFR-13** All page titles, meta descriptions, and heading hierarchy must be preserved or improved.

**NFR-14** Structured data (if present on the existing site) must be carried forward.

---

### Browser and Device Support

**NFR-15** Fully functional on Chrome, Firefox, Safari, and Edge (last two major versions).

**NFR-16** Responsive at three breakpoints: desktop ≥ 1024px, tablet 768–1023px, mobile < 768px.

---

### Content Integrity

**NFR-17** The following live site content must appear verbatim or as a faithful condensation:
  - Since 2003 in business
  - Chicago, IL headquarters + 3 ODCs in South India
  - All three live site testimonials (Toby Wolf, Eric W, TYWITSolutions Group)
  - SupportPRO Difference text (including ISO 9001:2015 mention)
  - All certification names and existing contact details
  - All navigation links, footer links, and service routes

---

## Open Questions

| # | Question | Owner | Blocking? |
|---|---|---|---|
| OQ-1 | What is the existing form submission endpoint (backend URL or third-party service)? | Engineering | Yes — F-12.4 |
| OQ-2 | Are exact metric values (tickets handled, chats attended, resolution/response times) available from the existing frontend or a data API? | Engineering | Yes — F-10.3 |
| OQ-3 | Are actual logo image assets available for all certifications (Red Hat, cPanel, BBB, AICPA SOC, ISO 27001, ISO 9001)? | Design / Marketing | No — fallback text labels cover the gap |
| OQ-4 | What are the exact social media profile URLs for LinkedIn, Twitter/X, and Facebook? | Marketing | No — footer can use placeholder links |
| OQ-5 | Should the blog page redesign be in scope for the first release, or deferred to a subsequent phase? | PM | No |
| OQ-6 | Are service page content rewrites in scope, or is the layout template the only deliverable for service pages? | PM | No |
| OQ-7 | Is ISO 9001:2015 certification currently active and should it appear in the certification strip? (Live site mentions it in copy but not in the badge strip.) | Marketing | No |

---

## Assumptions

- `[ASSUMPTION]` The redesign is being built as a React + Vite + TypeScript + Tailwind CSS application (confirmed by implementation work already in progress).
- `[ASSUMPTION]` The existing site's URL routing and SEO structure will be replicated exactly. No redirects will be needed.
- `[ASSUMPTION]` Primary traffic is English-language. No i18n scope.
- `[ASSUMPTION]` Metric values (F-10) will be provided by the engineering team from an existing data source before launch.
- `[ASSUMPTION]` The contact form currently submits to an existing backend or email handler; the redesign must wire to the same endpoint.
- `[ASSUMPTION]` Social media accounts exist; exact URLs to be confirmed by Marketing.

---

## Success Criteria (Launch Gate)

Before this redesign is considered ready for production:

- [ ] All existing navigation routes resolve correctly.
- [ ] Request for Quote CTA is visible above the fold on desktop and mobile.
- [ ] Emergency Support is reachable from header, hero, service finder, contact quick actions, and footer.
- [ ] Hero section explains SupportPRO's offer and audience in the first viewport.
- [ ] Certification strip appears immediately after the hero.
- [ ] All three testimonials display directly on desktop (not carousel-only).
- [ ] Contact form shows loading, success, and error states.
- [ ] Metric values are real data from the existing source (not placeholders).
- [ ] WCAG 2.2 AA passes on automated scan (Axe or Lighthouse).
- [ ] LCP ≤ 2.5s and CLS ≤ 0.1 on Lighthouse (desktop).
- [ ] Mobile layout is single-column with no hidden CTAs.
- [ ] SupportPRO logo is pixel-identical to the current live site logo.
- [ ] All footer links resolve to existing pages.
