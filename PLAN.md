# SynMynd Website Rebuild — Plan

Branch: `rebuild/v2`
Status: **Phase 0 complete.** Design system, content layer, app shell, and all
routes are live and building clean. Phase 1 next.

---

## 1. Where we started

The v1 site was a single-page Next.js app: one route (`/`), seven scroll-anchored
sections, all copy hardcoded inline in JSX, one contact form posting to an n8n
webhook. The stack was healthy (Next 16 App Router, React 19, Tailwind v4,
Framer Motion, TypeScript strict) but the structure capped what the site could do
commercially.

Core problems:

| Problem | Consequence |
| --- | --- |
| Single route, anchor navigation | One URL, one `<title>`, one meta description. Cannot rank for more than one query. |
| Content hardcoded in components | Every copy change is a code change and a deploy. |
| No proof — no clients, logos, numbers | All claim, no evidence. Highest-friction thing for a buyer. |
| Generic corporate blue (`#3267a6`) on white | Reads like a template consultancy, not an AI agency. |
| One conversion path (contact form) | No calendar, no chat, no pricing anchor to qualify leads. |

Already done: Laiyr / "Mega Project" removed completely — `MegaProject.tsx`
deleted, `public/laiyr-mockup.png` deleted, hero secondary CTA repointed to
`#services`. No references remain.

---

## 2. Decisions locked

| Decision | Choice |
| --- | --- |
| Color palette | **B — Carbon & Acid.** Base `#0B0C0A`, accent `#B6FF3C`. Locked. |
| Theme mode | Dark-first with a light-mode toggle. |
| Client proof | Real Upwork / Fiverr projects. Each shows project, description, client review, and a "Read the full review" link out to the Upwork profile. Links render as **Coming soon** until URLs are supplied. |
| Client logos | Not shown. Anonymised descriptors only, until told otherwise. |
| Hero visual | Interactive WebGL/canvas agent-network. No background video. |
| Services vs. Solutions | Ship Services only at launch. Solutions (industry pages) in Phase 2. |
| Pricing | Published tiers — 7 fixed-price project packages + 4 monthly retainers. See §8. |
| Team | 6 named members with roles. See §9. |
| Agents page | Portfolio grid (thumbnail + title) → detail page with full video, deep-dive on scroll, 3 suggested projects at the end. |
| Scheduling | Embed Cal.com. Do not build a scheduler. |
| Live chat | n8n webhook backend, with rate limiting and human handoff. Webhook URL pending. |

---

## 3. Rationale on the contested calls

**No background video.** A high-graphics video hero is the fastest way to wreck
Largest Contentful Paint and Interaction to Next Paint, both of which Google uses
for ranking. It also burns mobile data on the devices most of your traffic uses. A
canvas/WebGL agent-network — pulsing nodes, data packets travelling along edges,
cursor-reactive — ships in a fraction of the bytes, is literally a picture of what
the company sells, and is not something competitors have. If video is added later
it must be: poster image first, muted WebM under 2 MB, disabled on mobile and
under `prefers-reduced-motion`.

**FAQ is not a nav item.** Almost nobody clicks "FAQs" in a top nav. FAQ blocks go
at the bottom of Services, Pricing, and Contact — where the objection actually
occurs — marked up with `FAQPage` JSON-LD so the answers surface directly in
Google results. That drives more traffic as schema than it ever would as a page.

**Services only at launch.** "Services" and "Solutions" sound identical to a buyer.
The split only works when Solutions carries genuinely distinct, industry-specific
proof. Publishing thin near-duplicate pages before that proof exists dilutes
ranking signals across both.

**Pricing page is mandatory.** On agency sites it is consistently the second most
visited page. Even "engagements start at $X/mo" filters out unqualified leads
before they consume your time.

**Upwork/Fiverr reviews are an asset, not a weakness.** A review hosted on Upwork
carries third-party verification that a testimonial on your own site never will —
the visitor knows you can't have written it. Linking out to the live review is
stronger proof than a quoted blurb with a stock headshot. It also means the case
study pages can go live before any client gives logo permission.

---

## 4. Site architecture

```
/                       Home
/company                Who we are, team, story, values
/services               Overview + capability grid
  /services/[slug]      ai-agents, n8n-orchestration, custom-python, saas-engineering
/agents                 AI Agents showcase — demos, flow diagrams, live sandboxes
/work                   Client Stories — case study index
  /work/[slug]          Individual case study
/pricing                Engagement models + FAQ block
/contact                Form + Cal.com embed + FAQ block
/blog                   Insights (SEO engine)
  /blog/[slug]
/privacy  /terms        Legal — required once chat + data collection are live
```

Deferred to Phase 2: `/solutions/[industry]` — e-commerce, real estate,
recruiting, customer support.

### Home page section order

1. Hero — WebGL agent-network, headline, dual CTA
2. Platform marquee — n8n, Zapier, Make, Slack, OpenAI, Airtable, HubSpot, Notion (infinite scroll, both directions)
3. Why SynMynd — differentiators with evidence
4. Services preview — 4 cards linking to detail pages
5. Our Plans — how we work: engagement strategy and process
6. Client Stories preview — 2–3 strongest results with hard numbers
7. Agents teaser — one live flow diagram animating, linking to `/agents`
8. Tagline band — "Hire us full-time. Skip the payroll."
9. Final CTA — book a call

---

## 5. Design system

Dark-first, light-mode toggle via `next-themes`. Tokens as CSS custom properties
in `globals.css` under Tailwind v4's `@theme inline`, so a palette swap is a
one-file change.

### Palette — B, Carbon & Acid (locked)

| Token | Value | Use |
| --- | --- | --- |
| `base` | `#0B0C0A` | Page background |
| `surface` | `#161814` | Cards, nav, elevated panels |
| `surface-alt` | `#1E211B` | Nested cards, inputs, code blocks |
| `border` | `#31362C` | Hairlines, dividers, card edges |
| `accent` | `#B6FF3C` | Primary CTA, links, active states, node highlights |
| `accent-soft` | `rgba(182,255,60,0.13)` | Icon chips, pills, subtle fills |
| `highlight` | `#E4FFA8` | Metrics, stat numbers, emphasis |
| `text` | `#EDEFEA` | Body copy |
| `muted` | `#8E9584` | Secondary copy, labels, captions |

Contrast note: `#B6FF3C` is a very light accent, so it must always carry **dark**
text (`#0B0C0A`) when used as a button fill — never white. On the dark base it
passes AA comfortably for both text and large text. Light mode inverts the
neutrals and darkens the accent to roughly `#5B8F00` to stay legible on white.

Type: keep Geist Sans for UI, add a display face with more character for headlines.
Geist Mono stays for code, metrics, and flow-diagram labels.

Motion: Framer Motion, `prefers-reduced-motion` respected throughout.
Components: shadcn/ui as the primitive layer (unstyled, owned in-repo, no lock-in).

---

## 6. Content layer

Content stops living in JSX. MDX files with Zod-validated frontmatter, typed at
build time:

```
content/
  services/*.mdx
  work/*.mdx          # case studies
  agents/*.mdx        # agent demos + flow definitions
  blog/*.mdx
  faqs/*.mdx
```

Non-technical edits become a file change, not a component change. If a visual
editor is needed later this migrates cleanly to Sanity or Payload.

---

## 7. Features

### Meeting scheduling
Cal.com embedded on `/contact` and behind every "Book a call" CTA. Free tier now,
self-hostable later. Zero build cost.

### Live support chat (n8n)
Floating widget → `/api/chat` route handler → n8n webhook → LLM → streamed back.

Non-negotiable guardrails:
- Rate limit per IP and per session (Upstash Redis)
- Hard token ceiling per conversation
- System prompt scoped strictly to SynMynd services
- Conversation persisted to `sessionStorage` so a refresh doesn't lose context
- "Talk to a human" escalation that routes to inbox/Slack
- Server-side only API keys — never in the client bundle

Without rate limiting, a single bad actor drains the LLM credits in an afternoon.

### AI Agents page — portfolio pattern

**Index (`/agents`)** — responsive grid of cards. Each card: 16:9 thumbnail with a
play affordance on hover, agent title, one-line outcome, and platform tags
(n8n / OpenAI / Slack). Filterable by platform and by use case.

**Detail (`/agents/[slug]`)** — top of page is the full demo video (self-hosted
`<video>` with poster, or Mux if files get large). Scrolling down gives the
deep-dive: the problem, the build, the interactive React Flow diagram of the
workflow, the stack, and the measured result. Page ends with **three suggested
agents** — same-platform or same-use-case first, filling with most-recent.

Videos are supplied later. Until then the grid renders from MDX with placeholder
thumbnails and a "Demo coming soon" state, so the page ships and layout is locked.

Phase 3: one or two genuinely live sandbox agents, email-gated (which turns the
demo into a lead magnet), hard rate limits, timeout and cost ceilings.

### Platform marquee
CSS-driven infinite scroll, duplicated track, `prefers-reduced-motion` aware,
greyscale logos that colourise on hover.

### Client Stories — Upwork / Fiverr pattern

Grid of project cards → detail page per project. Each carries the project title,
what was built, the client's verbatim review, the star rating, and the source
platform badge (Upwork or Fiverr). A **"Read the verified review"** button links
out to the live review — rendered as a disabled **Coming soon** chip until the
URLs land, so nothing blocks the build.

No client logos and no client names until permission is given — use descriptors
like "US-based e-commerce operator, 12-person team".

---

## 8. Pricing

Anchored to 2026 market rates for n8n / Make / Zapier automation work. Published
agency rates run $2.5K–$15K for a first project and $500–$8K/mo on retainer;
Upwork mid-range for the same deliverables sits materially lower. These numbers
deliberately sit **between Upwork mid-range and full US agency rate** — credible
to a buyer comparing quotes, without leaving money on the table.

All figures are proposals and need your sign-off before they go live.

### Project packages — fixed price, one-time

| # | Package | Price | What it is |
| --- | --- | --- | --- |
| 1 | Automation Audit | **$249** | Review of current processes, map of what's automatable, prioritised roadmap with ROI estimates. Delivered in 72 hours. Fee credited against any build booked within 30 days. |
| 2 | Single Workflow Build | **$749** | One production workflow, up to 3 app integrations, error handling, handover docs. |
| 3 | Self-Hosted n8n Setup | **$999** | Server provisioning, Docker, Postgres, SSL, backups, monitoring. You own the stack. |
| 4 | Multi-Tool Automation System | **$2,499** | 3–5 connected workflows across your stack, shared error handling, logging dashboard. |
| 5 | Platform Migration | **$2,999** | Zapier / Make / Power Automate → n8n. Up to 10 workflows rebuilt, tested, cut over with no downtime. |
| 6 | AI Agent Build | **$3,999** | Production LLM agent: RAG over your data, tool-calling, memory, guardrails, cost monitoring. |
| 7 | Custom Engine / SaaS | **from $7,500** | Bespoke Python services, scrapers, data pipelines, or a full product build. Scoped per project. |

The **$249 audit is the important one.** It is the lowest-friction way for a
stranger to become a paying client, and crediting it against a build makes saying
yes nearly free. Expect it to feed most of the higher tiers.

### Monthly retainers

| # | Tier | Price | Scope |
| --- | --- | --- | --- |
| 8 | Essential Care | **$499/mo** | Uptime monitoring, error alerts, credential/OAuth refresh, 1 small build per month, monthly report. 1–2 live automations. |
| 9 | Growth Ops | **$1,499/mo** | Everything above, plus 2–3 new workflows per month, prompt tuning, 24h response SLA, quarterly review. 3–8 live automations. |
| 10 | AI Agent Ops | **$2,999/mo** | Everything above, for live LLM agents: prompt iteration, evaluation, token-cost monitoring and optimisation, model upgrades. |
| 11 | Embedded Engineer | **$5,500/mo** | A full-time engineer inside your team. Dedicated Slack channel, 4h SLA, unlimited queued builds, weekly strategy call. |

**Tier 11 is the tagline made purchasable.** "Hire us full-time. Skip the payroll."
should link directly to it — the headline promise and the product should be the
same thing.

### Page mechanics
Monthly/annual toggle with two months free on annual. One tier visually flagged
as "Most popular" (Growth Ops). Comparison table below the cards. FAQ block with
`FAQPage` schema. Every tier CTA opens Cal.com, not a form. A note that
infrastructure costs (n8n Cloud, VPS, LLM API usage) are billed at cost and
separately — stated upfront, because hiding it causes disputes later.

---

## 9. Team

For `/company`. Photos pending.

| Name | Role |
| --- | --- |
| Anas Bin Saeed | Founder & CEO |
| Shaaf Fareed | Co-Founder |
| Saad Kiyani | AI Automation Engineer |
| Sadia Abdullah | AI Automation Engineer |
| Tayyab Arshad | AI Automation Engineer |
| Areeba Abdullah | AI Automation Engineer |

Cards carry name, role, and short bio, with optional LinkedIn and GitHub links.
Until photos arrive, initials render on a generated accent-tinted background —
consistent and intentional-looking rather than an obvious placeholder.

---

## 10. Phases

**Phase 0 — Foundation — DONE**
Carbon & Acid tokens in `globals.css`, dark-first with light-mode override and
`next-themes` toggle. Hand-rolled UI primitives (`Button`, `Card`, `Badge`,
`Container`, `Section`, `SectionHeading`, `PageHeader`). Multi-page App Router
structure with real navigation and footer. All 11 routes live. SEO baseline
shipped: sitemap, robots, Organization / Service / FAQPage JSON-LD, skip link,
404 page. Contact API hardened with Zod validation, honeypot, and rate limiting.

Two deviations from the original plan, both deliberate:

- **Typed TS content instead of MDX.** Content lives in `src/content/*.ts`,
  validated by Zod at import time, so a malformed entry fails the build. MDX
  adds a build-tooling dependency that Turbopack support is still uneven on, and
  these pages are structured data (metrics, feature lists, flow nodes) rather
  than long-form prose — structure enforces layout consistency in a way freeform
  markdown does not. MDX gets added for the blog in Phase 4, where prose is the
  actual content type.
- **Hand-rolled primitives instead of shadcn/ui.** shadcn's generator targets
  Tailwind v3 conventions; on v4 with `@theme inline` it fights the token setup.
  The primitives we need are small and now map directly to our own tokens.

**Phase 1 — Core pages (3–5 days)**
Home with WebGL hero and platform marquee. Company incl. the 6-person team grid.
Services overview + four detail pages. Contact with Cal.com. SEO baseline:
per-page metadata, `sitemap.ts`, `robots.ts`, Organization + Service JSON-LD,
dynamic OG images.

**Phase 2 — Proof and conversion (week 2)**
Agents portfolio grid + detail template with video, React Flow diagram, and
3-suggested block. Client Stories index and case study template with Upwork/Fiverr
review links ("Coming soon" state). FAQ blocks with schema. Pricing page with all
11 tiers.

**Phase 3 — Interactive layer (week 3)**
Chat widget with full guardrails. Gated live agent sandboxes. Analytics (PostHog).
Contact form hardening: honeypot, rate limit, server-side validation.

**Phase 4 — Polish and launch (week 4)**
Lighthouse 95+ across the board. WCAG AA: keyboard nav, focus states, contrast,
screen-reader pass. Privacy and Terms. Blog scaffold with two launch posts.
404/500 pages. Production deploy.

---

## 11. Copy

Tagline, to sit as a band above the footer and as the nav CTA:
**"Hire us full-time. Skip the payroll."**
Alternates: "Your engineering team — without the headcount." / "Full-time engineering. Fractional cost."

Platforms to name explicitly (SEO value — these are searched terms):
n8n, Zapier, Make, Slack, OpenAI, Anthropic, LangChain, Airtable, HubSpot, Notion,
Google Workspace, Stripe, Shopify, Supabase.

---

## 12. Open items — pending from you

Nothing here blocks the build. Each has a defined placeholder state so pages ship
now and content drops in later.

| # | Item | Placeholder until supplied |
| --- | --- | --- |
| 1 | Upwork / Fiverr review URLs | Disabled "Coming soon" chip on each case study |
| 2 | Project details — problem, build, measured outcome, verbatim review | Sample content in MDX, clearly marked `draft: true` |
| 3 | Agent demo videos + thumbnails | Grid renders with generated thumbnails and "Demo coming soon" |
| 4 | n8n chat webhook URL | Widget built, reads `N8N_CHAT_WEBHOOK_URL`, disabled if unset |
| 5 | Cal.com account / event link | CTAs fall back to the contact form |
| 6 | Team photos | Initials on accent-tinted background |
| 7 | Pricing sign-off | §8 figures used as-is until changed |
| 8 | Client logo permission | Anonymised descriptors only |
