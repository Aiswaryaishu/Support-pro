---
name: SupportPRO Website Redesign
description: Modern enterprise B2B website redesign for SupportPRO's outsourced technical support, cloud, and server operations services.
status: draft
sources:
  - user-provided SupportPRO Website Revamp Document, 2026-05-28
updated: 2026-05-28
colors:
  navy-950: '#07162D'
  navy-900: '#0B1F3A'
  navy-800: '#102A4C'
  blue-700: '#1263B3'
  blue-600: '#1677D2'
  cyan-500: '#20C7E8'
  slate-900: '#111827'
  slate-700: '#334155'
  slate-500: '#64748B'
  gray-100: '#F3F6FA'
  gray-50: '#F8FAFC'
  white: '#FFFFFF'
  success-600: '#16A34A'
  urgent-600: '#EA580C'
  border-soft: '#DCE6F2'
typography:
  display:
    fontFamily: Inter, Manrope, Plus Jakarta Sans, system-ui, sans-serif
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.05'
    letterSpacing: -0.04em
  display-mobile:
    fontFamily: Inter, Manrope, Plus Jakarta Sans, system-ui, sans-serif
    fontSize: 38px
    fontWeight: '700'
    lineHeight: '1.12'
    letterSpacing: -0.03em
  heading-lg:
    fontFamily: Inter, Manrope, Plus Jakarta Sans, system-ui, sans-serif
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.15'
    letterSpacing: -0.03em
  heading-md:
    fontFamily: Inter, Manrope, Plus Jakarta Sans, system-ui, sans-serif
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  heading-sm:
    fontFamily: Inter, Manrope, Plus Jakarta Sans, system-ui, sans-serif
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter, Open Sans, system-ui, sans-serif
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.65'
  body-md:
    fontFamily: Inter, Open Sans, system-ui, sans-serif
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.65'
  label:
    fontFamily: Inter, system-ui, sans-serif
    fontSize: 13px
    fontWeight: '700'
    lineHeight: '1.35'
    letterSpacing: 0.08em
rounded:
  sm: 8px
  md: 12px
  lg: 18px
  xl: 24px
  full: 9999px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '5': 20px
  '6': 24px
  '8': 32px
  '10': 40px
  '12': 48px
  '16': 64px
  '20': 80px
  section-y-mobile: 64px
  section-y-desktop: 104px
  container-x-mobile: 20px
  container-x-desktop: 32px
components:
  button-primary:
    background: '{colors.blue-600}'
    foreground: '{colors.white}'
    radius: '{rounded.full}'
  button-secondary:
    background: '{colors.white}'
    foreground: '{colors.blue-700}'
    border: '{colors.border-soft}'
    radius: '{rounded.full}'
  button-urgent:
    background: '{colors.urgent-600}'
    foreground: '{colors.white}'
    radius: '{rounded.full}'
  card:
    background: '{colors.white}'
    border: '{colors.border-soft}'
    radius: '{rounded.lg}'
  dark-card:
    background: '{colors.navy-800}'
    border: rgba(255,255,255,0.14)
    radius: '{rounded.xl}'
  trust-chip:
    background: rgba(255,255,255,0.10)
    foreground: '{colors.white}'
    border: rgba(255,255,255,0.18)
    radius: '{rounded.full}'
---

## Brand & Style

SupportPRO should feel like a mature infrastructure operations partner, not a generic SaaS product. The visual language is enterprise B2B, technical, stable, and human-supported: deep navy foundations, disciplined blue accents, crisp typography, structured cards, and clear proof points near the top of the page.

The existing SupportPRO logo remains unchanged and anchors brand recognition. The redesign modernizes the surrounding presentation layer only: layout, hierarchy, navigation, cards, section rhythm, CTA emphasis, responsive behavior, and trust storytelling.

The site should communicate that SupportPRO has operated since 2003, provides 24/7 transparent and white-label technical support, serves hosting companies, MSPs, data centers, SaaS companies, cloud businesses, and maintains US presence with offshore delivery centers in South India.

## Colors

The color system is restrained and infrastructure-oriented.

- **Deep Navy (`{colors.navy-950}` / `{colors.navy-900}`)** is the hero, footer, expertise, and high-trust background color. It should make SupportPRO feel secure, operational, and enterprise-ready.
- **Support Blue (`{colors.blue-700}` / `{colors.blue-600}`)** is the primary brand action color for Request for Quote, links, active navigation, card accents, and important section highlights.
- **Cyan (`{colors.cyan-500}`)** is a limited technical accent for dashboard highlights, platform capability markers, and subtle gradients. It should not dominate the brand.
- **White and Soft Gray (`{colors.white}`, `{colors.gray-50}`, `{colors.gray-100}`)** provide clean B2B content surfaces and keep long service sections readable.
- **Success Green (`{colors.success-600}`)** is reserved for uptime, availability, healthy status, and operational proof.
- **Urgent Orange (`{colors.urgent-600}`)** is reserved for Emergency Support and time-sensitive assistance. It must not be reused for general marketing decoration.

Avoid bright multi-color gradients, decorative rainbow icon sets, and excessive accent colors. Trust comes from restraint.

## Typography

Use Inter as the preferred production font. Manrope or Plus Jakarta Sans are acceptable substitutes for headings if the implementation already uses them. Body text may use Inter or Open Sans.

Headings should be direct and benefit-led. Use large, confident type in the hero and section headers, with paragraph widths capped for readability. Avoid small cramped text, low-contrast body copy, and all-caps paragraphs.

Suggested type roles:

- `display` for the homepage hero headline only.
- `heading-lg` for major section titles.
- `heading-md` for subsection and service group headings.
- `heading-sm` for card titles.
- `body-lg` for hero and section lead copy.
- `body-md` for cards, descriptions, footer, and form helper text.
- `label` for trust badges, eyebrow text, platform group labels, and metrics captions.

## Layout & Spacing

Use a centered responsive container with generous section spacing. Desktop sections should feel spacious and premium; mobile sections should remain compact enough to preserve momentum.

Default layout rules:

- Desktop container max width: 1200-1280px.
- Mobile horizontal padding: `{spacing.container-x-mobile}`.
- Desktop horizontal padding: `{spacing.container-x-desktop}`.
- Major vertical section spacing: `{spacing.section-y-mobile}` on mobile, `{spacing.section-y-desktop}` on desktop.
- Use 2-column layouts for hero, why SupportPRO, and contact sections on desktop.
- Use 3-column card grids for value props, services, testimonials, and platform groups where content length allows.
- Collapse all major content sections to single-column on mobile.

Section rhythm should guide conversion: hero CTA, trust strip, value proposition, support need finder, services, proof, testimonials, contact.

## Elevation & Depth

Depth should feel professional and subtle. Cards use soft borders and low-opacity shadows only when they improve scanning. Dark sections may use glass-style cards with translucent borders, but glassmorphism must stay understated.

Use:

- Light cards: white fill, `{colors.border-soft}` border, soft shadow on hover.
- Dark cards: navy fill, translucent white border, low-opacity highlight gradient.
- Dashboard visual: layered cards, status chips, and metrics that imply a support operations command center.

Avoid heavy shadows, floating neon effects, excessive blur, and decorative depth that makes the page feel like a product dashboard instead of a managed services website.

## Shapes

Use rounded corners consistently:

- `{rounded.full}` for pill buttons, compact trust chips, and status labels.
- `{rounded.md}` for inputs, dropdown items, and small utility cards.
- `{rounded.lg}` for service, platform, testimonial, and value proposition cards.
- `{rounded.xl}` for hero dashboard, CTA panels, and contact containers.

Do not mix sharp cards with very pill-shaped cards in the same section. Consistency is part of the trust signal.

## Components

- **Sticky header**: white or lightly frosted surface on scroll, unchanged logo on the left, grouped navigation in the center, utility links and CTAs on the right. The header should be visually lighter than the current crowded navigation.
- **Mega menu**: structured category panels with short descriptions. Use clear grouping for Cloud Support, Server Administration, Outsourced Tech Support, Services, and Development.
- **Primary button**: `{components.button-primary}`. Use for Request for Quote and the main submit action.
- **Secondary button**: `{components.button-secondary}`. Use for Free Server Checkup and lower-priority CTAs.
- **Urgent button / badge**: `{components.button-urgent}`. Use only for Emergency Support.
- **Hero visual**: support operations dashboard concept with live support queue, server health, cloud platform icons, engineer availability, response metric, and resolution metric.
- **Trust strip**: compact certification/logo row immediately after hero. Logos should be consistent in size and alignment.
- **Value proposition card**: icon, heading, 2-3 line description, optional micro CTA.
- **Service finder card**: need-led title, short descriptor, CTA link, arrow affordance.
- **Platform group card**: group title, supported platform logos or labels, short capability line.
- **Service card**: icon/illustration, service title, 1-2 line explanation, Learn More CTA, blue accent line.
- **Metric card**: large number, concise label, supporting text. Preserve existing frontend data when available.
- **Testimonial card**: quote mark, testimonial excerpt, person/company attribution, View Testimonials CTA nearby.
- **Contact section**: two-column consultation panel with form on the left and contact details plus quick action cards on the right.
- **Footer**: dark navy background, unchanged logo, short brand statement, grouped links, contact information, social links, copyright.

## Do's and Don'ts

| Do | Don't |
|---|---|
| Keep the existing SupportPRO logo unchanged | Redesign or reinterpret the logo |
| Use navy, blue, white, and soft gray as the core visual system | Introduce many bright colors or playful gradients |
| Make Request for Quote the dominant CTA | Let Login, Sign Up, and service links compete equally with the primary CTA |
| Show certifications and trust proof near the top | Hide trust badges deep in the page |
| Use grouped mega menus and guided service cards | Show every service link at once in a crowded header |
| Treat Emergency Support as visually urgent | Use the urgent color for general decoration |
| Show testimonials and metrics directly on the homepage | Depend only on hidden carousel content |
| Build a responsive single-column mobile experience | Preserve desktop density on small screens |
