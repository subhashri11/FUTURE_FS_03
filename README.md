# Jaize — Family Fashion Destination

A live website demo built for **Jaize**, a family clothing store on Velachery Main Road,
Pallikaranai, Chennai — 4.8★ rating across 344 Google reviews.

Built as a real-world web development project: a static, dependency-free site created from
the business's actual Google Business posts, reviews, address, and contact details.

---

## 🔗 Live Demo

Open `index.html` in any browser — no installation, no build step, no server required.

To publish it publicly, see [Deployment](#-deployment) below.

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

## 💻 Running Locally

**Option A — just open it:**
Double-click `index.html`. It will open in your default browser and work fully offline
except for Google Fonts and the embedded map, which need internet access.

**Option B — local server (recommended for development):**
```bash
cd jaize-website
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

---

## 🚀 Deployment

The easiest free options, in order of setup speed:

### 1. GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit — Jaize website"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
Then in the repo: **Settings → Pages → Deploy from branch → main → / (root)**.
Live in about a minute at `https://<username>.github.io/<repo-name>/`.

### 2. Netlify / Vercel
Drag the `jaize-website` folder onto [netlify.com/drop](https://app.netlify.com/drop) (or
the Vercel dashboard) for an instant live URL — no git required.

### 3. Custom domain
The store already owns `jaize.grexa.site`. Once hosted on GitHub Pages/Netlify/Vercel, that
domain can be pointed at the new site via a CNAME record.

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

---

## 📄 License

Built as a project demo for Jaize. Free to reuse and adapt for the business.
