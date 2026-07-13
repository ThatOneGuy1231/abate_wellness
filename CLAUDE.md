# Abate Wellness — Booking System (project context)

This file is read automatically by Claude Code at the start of every session. It is the
single source of truth for what this project is and what's been decided. Keep it updated.

## What this is

A custom booking + scheduling experience for **Abate Wellness**, a personal training /
mobility / yoga studio run by **Andrea** in Lake Ridge / Woodbridge, VA
(abatewellness.com). The studio's site is built on **Wix**. The long-term goal is to move
scheduling onto the Wix site (away from WellnessLiving) and add custom behavior Wix doesn't
do natively. This repo is the **front-end prototype** of that experience — real look, real
logic, mock data — built to validate UX before wiring it to Wix.

The prototype is the spec. Components here map onto Wix Velo later (see "Wix plan").

## The three-tier system (core idea)

Every bookable time belongs to one of three tiers. This is the heart of the product:

- **Preferred** — times Andrea recommends. Brand **orange**. Visually the strongest pull;
  the design nudges clients toward these.
- **Open** (a.k.a. non-preferred) — available, but not preferred. Brand **white**. Lower
  visual weight. Booking an Open slot triggers a soft nudge offering the nearest free
  Preferred slot the same day.
- **Reserved** — taken by another client (or held by Andrea). Dimmed/hatched, not bookable.
  Clients can **join a waitlist** (gets a position number) and would be auto-offered the
  slot if it frees up.

A client's own booking renders as a solid-orange "Your session" card.

## Screens (in src/components/)

1. **BookingView.jsx** — CLIENT booking. Month title + week nav arrows + day strip → slots
   grouped by Morning/Afternoon/Evening. Book / join-waitlist / cancel. Preferred nudge.
   Bottom "Your sessions" bar. ✅ Fully branded to Andrea's site (see Design tokens).
2. **AdminReschedule.jsx** — TRAINER reschedule loop. Andrea picks a client → multi-selects
   candidate times → "send" → simulated text+email with a link → client opens link, picks
   one → schedule auto-updates. ✅ Reskinned to dark/orange tokens. Has client name search
   + date filter on the schedule view.
3. **AvailabilityEditor.jsx** — TRAINER availability. Add time blocks per day, tag each one
   preferred / non-preferred / reserved via a segmented control. ✅ Reskinned to dark/orange
   tokens. Has month title + week nav arrows matching BookingView.

`src/App.jsx` is a dev-only tab switcher to preview all three.

## Design tokens (match abatewellness.com)

- Background: `#0B0B0C` (near-black). Surfaces: `#161617`, `#1C1C1E`. Borders: `#2A2A2D`.
- Text: `#FFFFFF`; muted `#9C988F`.
- **Orange (primary / Preferred):** `#F5841F`  ← confirm exact hex against live site.
- **White (secondary / Open):** `#FFFFFF`.
- Reserved: dimmed grey, hatched, `opacity: .5`.
- Fonts: headings/accent words = **Cormorant** (elegant serif, italic for accent words,
  echoing the site's "custom *plan*…" treatment). UI + **all numbers** (times, dates) =
  **Inter** (sans). Loaded via Google Fonts @import inside each component.
- Header is the **logo image** (`src/assets/logo.png`, white wordmark), NOT text. No tagline.
- Icons: lucide-react. Preferred = `Flame`. Open = `Clock3`. Reserved = `Lock`.

### Andrea's explicit design preferences (do not regress)
- Logo is an image, not typed text. No "Personal Training · Mobility · Yoga" subline.
- Numbers use a normal sans font, not the serif.
- Flame icon marks Preferred picks.
- Reserved should look clearly greyed-out / de-emphasized.
- Open uses white — distinct from Preferred (orange) and Reserved (grey).

## Andrea's real services (confirmed in Wix Booking Services)

Three categories, all 1-on-1 appointments:

| Category | Service | Duration | Price |
|---|---|---|---|
| Consultation | Phone Consultation | 15 min | Free |
| Consultation | Intro Offer - Wellness Consultation | 30 min | $175 (intro) |
| Mobility & MFR | Mobility Training | 30 min | Purchase Option only |
| Personal Training & Mobility | Personal Training | 30 min | $79 / session |
| Personal Training & Mobility | Personal Training | 45 min | $115 / session |
| Personal Training & Mobility | Personal Training | 60 min | $165 / session |

### Official service descriptions (from Andrea)

**Mobility & Myofascial Release - Mobility Training (30 min)**
This guided mobility session includes myofascial release, and mobility drills designed to improve joint function, increase range of motion, and reduce muscular tension and stiffness. Through targeted movements and release techniques, you'll experience greater freedom in your body, enhanced recovery, and improved overall movement quality. Perfect for addressing tightness, imbalances, or simply maintaining supple, resilient mobility.

**Consultation - Phone Consultation (15 min) - Free**
A free 15-minute Discovery & Consult call to discuss your health history, goals, and schedule. This introductory conversation helps us understand your needs and determine the best path forward. Let's get you started on your wellness journey with clarity and confidence.

**Consultation - Intro Offer - Wellness Consultation (30 min)**
A comprehensive 30-minute one-on-one training assessment with Abate Wellness. During this session, we'll evaluate your movement patterns, strength, mobility, and overall wellness. You'll receive personalized insights, a clear understanding of your current baseline, and a tailored roadmap to help you achieve your goals safely and effectively.

**Personal Training - 60 min**
Build strength, confidence, and overall well-being through fully customized one-on-one training. Each 60-minute session blends functional strength and resistance training. The program design is tailored specifically for your goals, fitness level, and any limitations - helping you move better, feel stronger, and progress with purpose.

**Personal Training - 45 min**
Build strength, confidence, and overall well-being through fully customized one-on-one training. Each 45-minute session blends functional strength and resistance training. The program design is tailored specifically for your goals, fitness level, and any limitations - helping you move better, feel stronger, and progress with purpose.

**Personal Training - 30 min**
Build strength, confidence, and overall well-being through fully customized one-on-one training. Each 30-minute session blends functional strength and resistance training. The program design is tailored specifically for your goals, fitness level, and any limitations - helping you move better, feel stronger, and progress with purpose.

**Pricing plans (purchase options):** Single sessions, 3/10/12-session packs ($385–$900),
memberships (unlimited/month: $500/$800/$1,200), student 10-pack ($665), private group
Yoga or MFR 1-session ($450).

**Key constraint:** Most services are "Purchase Option only" — clients must hold a pre-paid
plan before booking a slot. The Velo booking flow must verify plan ownership before
confirming a booking (use `wix-pricing-plans.v2` to check member entitlements).

## Role-based access model (decided)

Three-stage funnel. Each stage unlocks the next screen:

### Stage 1 - Public / Waitlist
- Anyone hits the site, sees "Join Waitlist"
- Form collects: first name, last name, email, phone, program type
  (Full Health Assessment / Personal Training / Mobility Coaching)
- After submitting, Andrea reviews manually
- If accepted: Andrea assigns Wix member role "consult_approved"

### Stage 2 - Consult Approved
- Member logs in and sees ONLY the Phone Consultation booking page
- They book the 15-min call, Andrea runs it
- If it's a good fit: Andrea assigns role "active_client", removes "consult_approved"
- Phone Consultation is no longer visible after this role change

### Stage 3 - Active Client
- Member sees the full booking interface (the 3-tier schedule from the prototype)
- What they can book depends on what plan/tier they hold
- This is where BookingView.jsx ports to a Velo page

**Wix member roles (created Jun 24, 2026):**
- `Consult Approved` - unlocks Phone Consultation booking only
- `Active Client (In-person)` - unlocks in-person booking schedule (BookingView)
- `Active Client (Online)` - unlocks online/digital program pages (MOBILE section)

**Implementation plan:**
- All services priced in Wix Bookings (done)
- Velo checks `currentMember.getRoles()` on each page load
- No role / public -> show waitlist form only
- `consult_approved` -> show Phone Consultation booking widget
- `active_client` -> show full BookingView schedule
- Role assignment is Andrea's manual step in Wix Members dashboard
- The existing "Join Waitlist" form on the site may already be a Wix form - check
  if submissions are going to a Wix collection before rebuilding it

## Wix plan (for later, when wiring to real data)

- Build on Wix **Velo** (full-stack: Wix Data collections, backend web modules, wix-fetch).
- Use the **V2 Bookings SDK** (Time Slots / Bookings / eCommerce). The old V1 Velo API is
  being removed — do NOT use V1 or pre-2025 tutorials.
- **Native Wix already does** (no code): owner reschedule/cancel/edit availability from the
  Booking Calendar, client self-reschedule/cancel via My Bookings, booking policies.
- **Custom (what this repo is for):** the 3-tier display + nudge, the on-site automated
  waitlist, and the curated reschedule-offer link flow.
- Tier data → a `slotPreferences` collection keyed by day+time, with a `tier` field that
  BookingView reads. Reschedule "auto move" = Wix's Reschedule Booking API (removes old
  session, adds new, can notify the client in the same call).
- SMS = Twilio via a backend web module (needs US **A2P 10DLC** registration — has lead
  time, start early). Email = Wix native or SendGrid.
- Access note: to edit Velo code as a collaborator, Ahmad needs a role with **Edit Site**
  permission (not a basic editor role); publishing/live testing needs owner or publish access.
- **Access confirmed** — Ahmad has Edit Site + publish via Developer Mode in the Wix editor.

## Status & next steps

- [x] Client BookingView — branded, responsive, logic complete (mock data).
- [x] Admin reschedule loop — reskinned to dark/orange tokens, mock data.
- [x] Availability editor — reskinned to dark/orange tokens, mock data.
- [x] Audit existing Wix setup — Bookings app installed, services + pricing plans confirmed (see above).
- [x] Services & pricing documented — 3 categories, 6 service types, full pricing plan list.
- [ ] Get Andrea's availability + preferred-vs-open rules (which times she wants to flag as Preferred).
- [ ] Check Editor for existing Velo code / Data collections before writing anything.
- [ ] Confirm exact brand orange hex + the real logo serif font.
- [ ] Create `slotPreferences` Wix Data collection and port BookingView to Velo.
- [ ] Wire Twilio for SMS (start A2P 10DLC registration early — it has lead time).

## Conventions

- React 18 + Vite. Single-file components, default export, scoped CSS in a `<style>` tag
  (no Tailwind, no CSS framework). Keep that pattern.
- No browser localStorage (kept out so it ports cleanly). State is in-memory for now.
- All three views share the same header structure: logo image → rule → (optional role pill
  for trainer views) → h1. Wrap padding-top is 24px across all three.
