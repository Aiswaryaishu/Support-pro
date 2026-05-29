---
name: SupportPRO Website Redesign
description: Modern enterprise B2B website redesign for SupportPRO's outsourced technical support, cloud, and server operations services.
status: draft
sources:
  - user-provided SupportPRO Website Revamp Document, 2026-05-28
  - _bmad-output/planning-artifacts/architecture.md, 2026-05-28
  - _bmad-output/planning-artifacts/prds/prd-support-pro-web-2026-05-28/prd.md, updated 2026-05-29
  - current website/src/components visual revamp, 2026-05-29
updated: 2026-05-29
colors:
  black-950: '#050505'
  black-900: '#080808'
  zinc-950: '#09090B'
  orange-700: '#C2410C'
  orange-600: '#EA580C'
  orange-500: '#F97316'
  orange-400: '#FB923C'
  amber-400: '#FBBF24'
  cream-50: '#FFFAF5'
  cream-100: '#FFF7ED'
  cream-200: '#FFEDD5'
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
    background: '{colors.orange-500}'
    foreground: '{colors.white}'
    radius: '{rounded.full}'
  button-secondary:
    background: '{colors.white}'
    foreground: '{colors.orange-600}'
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
    background: rgba(5,5,5,0.72)
    border: rgba(249,115,22,0.28)
    radius: '{rounded.xl}'
  trust-chip:
    background: rgba(255,255,255,0.72)
    foreground: '{colors.slate-700}'
    border: rgba(255,255,255,0.90)
    radius: '{rounded.full}'
---

## Brand & Style

SupportPRO should feel like a mature infrastructure operations partner, not a generic SaaS product. The visual language is enterprise B2B, technical, stable, and human-supported: warm orange/cream hero energy, clean white proof sections, a black/orange services moment, crisp typography, structured cards, and clear proof points near the top of the page.

The existing SupportPRO logo remains unchanged and anchors brand recognition. The redesign modernizes the surrounding presentation layer only: layout, hierarchy, navigation, cards, section rhythm, CTA emphasis, responsive behavior, and trust storytelling.

The site should communicate that SupportPRO has operated since 2003, provides 24/7 transparent and white-label technical support, serves hosting companies, MSPs, data centers, SaaS companies, cloud businesses, and maintains US presence with offshore delivery centers in South India.

## Colors

- **Orange (`{colors.orange-600}` / `{colors.orange-500}` / `{colors.orange-400}`)** is the primary brand action and highlight color for Request for Quote, icon tiles, card accents, section contour lines, and key proof moments.
- **Cream (`{colors.cream-50}` / `{colors.cream-100}` / `{colors.cream-200}`)** provides the warm hero and trust-section surfaces. It should feel premium and calm, not saturated.
- **Black / Zinc (`{colors.black-950}` / `{colors.black-900}` / `{colors.zinc-950}`)** is reserved for the Our Services section and footer-style high-contrast surfaces.
- **White and Soft Gray (`{colors.white}`, `{colors.gray-50}`, `{colors.gray-100}`)** provide clean B2B content surfaces and keep long service sections readable.
- **Success Green (`{colors.success-600}`)** is reserved for uptime, availability, healthy status, and operational proof.
- **Urgent Orange (`{colors.urgent-600}`)** can share the orange family but must use copy/icon treatment to signal urgency; do not rely on color alone.

Avoid blue-first styling, bright multi-color gradients, decorative rainbow icon sets, and excessive accent colors. Trust comes from restraint.

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

Section rhythm should guide conversion: hero CTA, trust strip, value proposition, platforms, services, proof, number game, testimonials, contact.

## Elevation & Depth

Depth should feel professional and subtle. Cards use soft borders and low-opacity shadows only when they improve scanning. Dark sections may use glass-style cards with translucent borders, but glassmorphism must stay understated.

Use:

- Light cards: white fill, soft orange/neutral border, soft shadow on hover.
- Cream cards: warm white fill over `{colors.cream-50}` / `{colors.cream-100}` surfaces for trust and number-game sections.
- Dark cards: black glass fill, translucent orange border, white text, and orange icon tiles.
- Hero visual: floating support cards and a headset/support operations motif that implies human support, not a software product.

Avoid heavy shadows, floating neon effects, excessive blur, and decorative depth that makes the page feel like a product dashboard instead of a managed services website.

## Shapes

Use rounded corners consistently:

- `{rounded.full}` for pill buttons, compact trust chips, and status labels.
- `{rounded.md}` for inputs, dropdown items, and small utility cards.
- `{rounded.lg}` for service, platform, testimonial, and value proposition cards.
- `{rounded.xl}` for hero visual containers, CTA panels, and contact containers.

Do not mix sharp cards with very pill-shaped cards in the same section. Consistency is part of the trust signal.

## Components

- **Sticky header**: white or lightly frosted surface on scroll, unchanged logo on the left, grouped navigation in the center, utility links and CTAs on the right. The header should be visually lighter than the current crowded navigation.
- **Mega menu**: structured category panels with short descriptions. Use clear grouping for Cloud Support, Server Administration, Outsourced Tech Support, Services, and Development.
- **Primary button**: `{components.button-primary}`. Use for Request for Quote and the main submit action.
- **Secondary button**: `{components.button-secondary}`. Use for Free Server Checkup and lower-priority CTAs.
- **Urgent button / badge**: `{components.button-urgent}`. Use only for Emergency Support.
- **Hero visual**: warm cream/orange support visual with floating cards for Cloud Support, Secure & Safe, Live Monitoring, and 24/7 Desk. Ends with a smooth cream wave and subtle orange contour lines into the trust section.
- **Trust strip**: cream/white certification area immediately after hero with eyebrow "Trusted by thousands", heading "Certified. Secure. Trusted Worldwide.", certification cards, and 23+ Years Experience seal.
- **Value proposition card**: white card on white/neutral section, orange circular icon badge, heading, 2-3 line description, orange bottom accent line.
- **Service finder card**: need-led title, short descriptor, CTA link, arrow affordance.
- **Platform group card**: group title, supported platform logos or labels, short capability line.
- **Service card**: black glass card over black section, image, dark overlay, orange icon block, title, 1-2 line explanation, Learn More CTA, orange accent line.
- **Metric card**: compact white card in cream "number game" panel, orange gradient icon tile, large black number, concise label. Preserve existing frontend data when available.
- **Testimonial card**: quote mark, testimonial excerpt, person/company attribution, View Testimonials CTA nearby.
- **Contact section**: two-column consultation panel with form on the left and contact details plus quick action cards on the right.
- **Footer**: dark black/zinc or very dark neutral background, unchanged logo, short brand statement, grouped links, contact information, social links, copyright.

## Do's and Don'ts

| Do | Don't |
|---|---|
| Keep the existing SupportPRO logo unchanged | Redesign or reinterpret the logo |
| Use orange, cream, white, black, and soft gray as the core visual system | Revert to the older blue-first visual system or introduce many bright colors |
| Make Request for Quote the dominant CTA | Let Login, Sign Up, and service links compete equally with the primary CTA |
| Show certifications and trust proof near the top | Hide trust badges deep in the page |
| Use grouped mega menus and clear service cards | Show every service link at once in a crowded header |
| Treat Emergency Support as visually urgent with text/icon support | Rely on orange color alone to signal urgency |
| Show testimonials and metrics directly on the homepage | Depend only on hidden carousel content |
| Build a responsive single-column mobile experience | Preserve desktop density on small screens |
