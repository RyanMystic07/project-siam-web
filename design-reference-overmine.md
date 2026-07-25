# Design Reference — store.overmine.online

> Reference เท่านั้น — ใช้เป็น inspiration สำหรับ Siam Portal ไม่ใช่ copy

## Visual Style

- Dark / gaming aesthetic (Minecraft server store)
- Thai-language UI
- Mood: Professional dark store, structure ชัดเจน ไม่หวือหวา

---

## Layout Structure

```
[ Navbar ]
[ Hero — logo + server status + IP ]
[ Icon Grid — 4 shortcuts ]
[ Footer ]
```

### Navbar
- Logo (ซ้าย) + nav links (ขวา): หน้าแรก, คู่มือ, ร้านค้า, เติมเงิน, อันดับ
- Cart icon ขวาสุด
- Dark background, sticky top

### Hero
- Centered layout
- Large logo/banner image
- Server status indicator ("กำลังเชื่อมต่อ…" / online)
- Server IP — styled, click-to-copy

### Icon Grid (4 cards)
- Image icon + Thai label + link
- Large tap targets, even spacing
- Items: เติมเงิน, ร้านค้า, ดิสคอร์ด, คู่มือ

### Footer
- Logo + links (left) / Social icons (right): Discord, Facebook, YouTube
- Legal: "เราไม่มีส่วนเกี่ยวข้องกับ Mojang AB และ Microsoft"
- Copyright line

---

## Color Palette (inferred)

| Role | Estimated |
|---|---|
| Background | `#0d0d0d` – `#111111` |
| Surface/Card | `#1a1a1a` – `#1e1e1e` |
| Border | `#2a2a2a` |
| Text primary | `#f0f0f0` |
| Text muted | `#888888` |
| Online status | `#22c55e` |
| Discord CTA | `#5865F2` |

> Inspect จริงด้วย DevTools เพื่อ hex ที่แน่นอน

---

## Typography

- Thai-support font — likely **Sarabun**, **Prompt**, หรือ **Kanit**
- Weight hierarchy: 400 body / 600 label / 700 heading

---

## Components

### Status Indicator
```
● กำลังเชื่อมต่อ…  →  ● ออนไลน์ (X ผู้เล่น)
```
Dot: `#f59e0b` (connecting) / `#22c55e` (online)

### Icon Cards
- Rounded corners ~`12px`
- Hover: scale up + brightness lift
- Image top / label bottom

### CTAs
- Discord: `#5865F2`
- Store: accent color ของ server

---

## Spacing

- Section padding: `64–96px` vertical
- Card gap: `16–24px`
- Max content width: ~`1200px` centered

---

## Patterns ที่น่า borrow สำหรับ Siam Portal

- Icon card grid → ใช้เป็น quick-access shortcuts (เติมเงิน, ร้านค้า, Discord, คู่มือ)
- Server status indicator → อาจ adapt เป็น server online status บน hero
- Navbar structure → ใกล้เคียงกับที่ Siam Portal มีอยู่แล้ว
- Footer social icons pattern → reuse ได้เลย
