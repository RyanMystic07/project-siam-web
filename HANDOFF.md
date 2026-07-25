# Project Handoff: เนรมิตสยาม Landing Page

**Date:** 2026-07-20  
**Branch:** `improve/landing-page-upgrades`  
**PR:** [#2](https://github.com/RyanMystic07/project-siam-web/pull/2)  
**Status:** Ready for review/merge

---

## Overview

This is a Thai Roblox roleplay game landing page set in the Rattanakosin era. The project uses **vanilla JavaScript, HTML, and CSS** (no frameworks). It consists of:

- **Landing page** (`index.html`, `style.css`, `app.js`) — main marketing page
- **Portal hub** (`portal.html`, `portal.css`, `portal.js`) — multi-project dashboard with dynamic theming
- **Data source** (`projects-data.js`) — contains all portal content (currently placeholder "not ready yet" data)

---

## Recent Changes (PR #2)

### Language Refinements
Updated Thai copy for more natural, conversational tone:
1. **Line 54** `index.html`: "โลกกำลังถูกสร้าง" → "กำลังสร้างโลก" (active voice)
2. **Line 73**: "ไม่เคยหยุดนิ่ง" → "ยังไม่หยุดนิ่ง" (present focus)
3. **Line 116**: "บทบาทที่มีน้ำหนัก" → "บทบาทที่มีความหมาย" (more natural)
4. **Line 142**: "โลกเริ่มมีลมหายใจแล้ว" (kept as-is per user preference)
5. **Line 74**: "ของตนเอง" (kept as-is per user preference)

### Button Optimization
- **Removed** Discord button from header (`index.html` line 36-43) — was redundant
- **Removed** Discord link from footer (`index.html` line 166) — prevents visual clutter near final CTA
- **Remaining:** 2 Discord CTAs (hero section + final invitation) — strategically placed for conversion

### Visual Effects (Already Implemented)
- **A. Parallax hero** — 0.28 scroll multiplier on hero image
- **B. Gold particles** — 60 canvas particles with fade lifecycle
- **C. Typewriter effect** — 90ms per character on h1
- **E. War diagram animation** — CSS transform draw-in on scroll (threshold 0.4)
- **Custom cursor** — Dot + ring with lerp (factor 0.14), hover/click states

### Animation Timing
- **Scroll reveal threshold:** 0.22 (was 0.08) — slower trigger so users can see animations
- **Transition duration:** 800ms (was 600ms)

---

## Important Constants & Settings

### Discord
- **URL:** `https://discord.gg/kQPdnQNF8a` (**permanent invite, never expires**)
- **Location:** `<body data-discord-url="...">` in `index.html` line 16
- **Handler:** `app.js` line 77-84 (`openDiscord()` function)

### Motion Settings
- **Particles:** `app.js` line 249-341 — 60 particles, oklch(72% 0.09 80)
- **Parallax:** `app.js` line 236-247 — multiplier 0.28
- **Typewriter:** `app.js` line 343-373 — 90ms delay, 400ms start delay
- **Cursor:** `app.js` line 158-234 — lerp 0.14, only on `pointer: fine`

### LocalStorage Keys
- `neramit-theme` — "light" | "dark"
- `neramit-motion` — "on" | "off"

### Color System
Uses `oklch()` color space throughout. Portal has dynamic theming via CSS custom properties (`--gold-color`, `--crimson-color`, etc.) set in `portal.js` lines 95-102.

---

## Git Workflow

**Origin:** `RyanMystic07/project-siam-web` (upstream, no push access)  
**Fork:** `Gaxia-XP/project-siam-web` (user's fork)  
**Remote setup:**
```bash
git remote -v
# origin	https://github.com/RyanMystic07/project-siam-web.git (fetch)
# origin	https://github.com/RyanMystic07/project-siam-web.git (push)
# fork	https://github.com/Gaxia-XP/project-siam-web.git (fetch)
# fork	https://github.com/Gaxia-XP/project-siam-web.git (push)
```

**To push changes:**
```bash
git push fork improve/landing-page-upgrades
```

**Current PR:** https://github.com/RyanMystic07/project-siam-web/pull/2

---

## Critical Issues to Address Before Launch

### 🔴 Priority 1
1. **Portal data is all placeholder** — `projects-data.js` is 100% "not ready yet"
2. **No SEO tags** — Missing Open Graph, Twitter Card, JSON-LD structured data
3. **No error handling** — If `projects-data.js` fails to load, page breaks silently

### 🟡 Priority 2
4. **Performance** — Particles run forever (should pause when off-viewport), no image lazy loading for hero
5. **Accessibility** — No arrow key navigation for portal tabs, focus management in dialogs incomplete
6. **Code duplication** — `localStorage` helpers duplicated in `app.js` and `portal.js` (extract to `utils.js`)

### 🟢 Nice to Have
7. **Analytics** — No tracking (GA4, Plausible, etc.)
8. **404 page** — Missing
9. **Security headers** — No CSP, no `security.txt`
10. **i18n** — Currently hard-coded Thai (would need full refactor for multi-language)

---

## File Structure

```
project-siam-web/
├── index.html          # Landing page
├── style.css           # Landing page styles (large file)
├── app.js              # Landing page interactions
├── portal.html         # Portal hub page
├── portal.css          # Portal styles
├── portal.js           # Portal interactions
├── projects-data.js    # Data source (placeholder content)
├── assets/
│   ├── neramit-siam-mark.png
│   ├── development-world.png
│   └── world-map.jpg
└── HANDOFF.md          # This file
```

---

## Key Decisions

### Why Vanilla JS?
- Only 2 main pages, no complex state management needed
- Portal already uses data-driven architecture (`projects-data.js`)
- No build step = faster iteration
- Framework overhead not justified yet

**When to reconsider:**
- 5+ pages with shared state
- Need for authentication system
- Real-time data sync required
- Team grows and needs strict component reusability

**Best framework candidates (if needed later):**
- **Astro** — Best fit for content sites (islands architecture)
- **SvelteKit** — Lightweight, close to vanilla feel
- **Next.js** — Full ecosystem, best for SEO-heavy sites

### Why 2 Discord CTAs?
- **Hero CTA** — First conversion point, high intent users
- **Final invitation** — Re-engagement after reading full story
- User decided 3 was too many (removed header + footer)

---

## Testing Checklist

Before merging PR #2:
- [ ] Test Discord link opens correctly (permanent invite confirmed)
- [ ] Test all animations respect `prefers-reduced-motion`
- [ ] Test cursor on touch devices (should be hidden)
- [ ] Test mobile menu collapse/expand
- [ ] Test theme toggle persistence across refresh
- [ ] Test map dialog keyboard escape
- [ ] Verify no console errors
- [ ] Check all images load
- [ ] Test on mobile (portrait/landscape)
- [ ] Test on tablet
- [ ] Lighthouse audit (Performance, Accessibility, Best Practices, SEO)

---

## Next Session Recommendations

1. **If launching soon:** Focus on Priority 1 issues (portal data, SEO, error handling)
2. **If adding analytics:** Use Plausible (privacy-friendly) or GA4
3. **For SEO:** Add to `<head>`:
   ```html
   <meta property="og:title" content="เนรมิตสยาม | โลกสยามแฟนตาซียุครัตนโกสินทร์">
   <meta property="og:description" content="ก้าวสู่โลกสยามยุครัตนโกสินทร์และร่วมทำสงครามไปด้วยกัน · โลก Roleplay บน Roblox">
   <meta property="og:image" content="https://yourdomain.com/assets/og-image.jpg">
   <meta property="og:url" content="https://yourdomain.com/">
   <meta name="twitter:card" content="summary_large_image">
   ```
4. **For performance:** Add `IntersectionObserver` to pause particles when hero is off-screen

---

## Commands Reference

### Git
```bash
# Check status
git status

# Commit changes
git add .
git commit -m "Your message

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"

# Push to fork
git push fork improve/landing-page-upgrades

# Pull latest from upstream
git fetch origin
git merge origin/master
```

### Development
```bash
# Local server (if needed)
python -m http.server 8000
# or
npx serve

# Open in browser
start index.html    # Windows
open index.html     # Mac
xdg-open index.html # Linux
```

---

## Contact & Resources

- **User:** Gaxia-XP
- **Project Owner:** RyanMystic07
- **Discord (permanent):** https://discord.gg/kQPdnQNF8a
- **PR:** https://github.com/RyanMystic07/project-siam-web/pull/2

---

**Last Updated:** 2026-07-20  
**Next Review:** When PR is merged or when launching portal
