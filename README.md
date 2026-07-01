# Jaize — Family Fashion Destination

A live website demo built for **Jaize**, a family clothing store on Velachery Main Road,
Pallikaranai, Chennai — 4.8★ rating across 344 Google reviews.

Built as a real-world web development project: a static, dependency-free site created from
the business's actual Google Business posts, reviews, address, and contact details.

---

## 🔗 Live Demo

https://subhashri11.github.io/FUTURE_FS_03/

---

## 📁 Project Structure

```
jaize-website/
├── index.html      # Page markup — hero, about, collections, reviews, visit, footer
├── style.css       # All styling — colours, layout, responsive rules, animations
├── script.js       # Mobile nav toggle + scroll-reveal animation
├── assets/         # Reserved for product photos / images
├── README.md       # This file
└── PITCH.md        # Client-facing pitch explaining business value
```

All three core files must stay in the same folder — `index.html` links to `style.css` and
`script.js` using relative paths.

---

## 🛠️ Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Markup | HTML5 | Semantic sections, no framework |
| Styling | CSS3 | Custom properties (CSS variables), Grid & Flexbox, no preprocessor |
| Interactivity | Vanilla JavaScript | Mobile menu toggle, `IntersectionObserver` scroll reveal |
| Fonts | Google Fonts | Fraunces (display), Inter (body), Space Grotesk (labels) |
| Map | Google Maps embed | No API key required |

No npm, no build pipeline, no dependencies to install — the project runs by opening the
HTML file.

---

## ✨ Features

- **Signature swatch ribbon** — an interactive colour strip built from the exact 11 shirt
  colours listed in the owner's own posts (Pink, Black, White, Grey, Sky Blue, Maroon, Fawn,
  Teal, Navy, Red, Magenta) — hover to reveal each colour name.
- **Real trust signals** — the 4.8★ / 344-review rating and real customer quotes are shown
  up front, not buried.
- **Four product collections** — Women's, Men's, Kids', and Nightwear, taken from the store's
  actual offerings.
- **One-tap contact** — click-to-call (`tel:`) link and a floating WhatsApp (`wa.me`) button
  using the store's real number.
- **Embedded map** — the store's real address, no API key needed.
- **Fully responsive** — mobile nav collapses under 880px; grids restack for phone screens.
- **Scroll-reveal animation** — cards and sections fade/slide in on scroll via
  `IntersectionObserver`, with no external animation library.

---

---

## 🎨 Design Notes

The design was built directly from the business's own content rather than a generic
template:

- **Colour palette** draws from the store's product colours plus a warm cream / maroon /
  indigo / marigold combination that reads as festive and family-oriented without leaning on
  clichéd "boutique" defaults.
- **Typography** pairs Fraunces (a characterful serif) for headings with Inter for body text,
  and Space Grotesk for small labels/eyebrows.
- **Copy** is written from real reviews and posts — nothing is invented filler.

---

## 📌 Roadmap / Next Steps

- [ ] Add real product photography (owner can supply phone photos to start)
- [ ] Add a simple, owner-editable "New Arrivals" section
- [ ] Connect `jaize.grexa.site` to the deployed site
- [ ] Optional: WhatsApp catalog integration for direct ordering
