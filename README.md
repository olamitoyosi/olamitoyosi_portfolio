# Olamitoyosi Oladunjoye — Portfolio

Personal portfolio site for **Olamitoyosi Oladunjoye**, an AI & Robotics Engineer working across artificial intelligence, machine learning, embedded systems, IoT and computer vision.

Live sections: Home · About · Skills · Projects · Contact.

## Tech Stack

- **HTML5** — semantic markup, SEO and Open Graph meta tags
- **CSS3** — custom properties (CSS variables) for theming, CSS Grid/Flexbox layout, `color-mix()` for tonal variants
- **Vanilla JavaScript** — no framework, no build step
- **[Lucide Icons](https://lucide.dev/)** — icon set, loaded via CDN
- **[Inter](https://fonts.google.com/specimen/Inter)** — typeface, loaded via Google Fonts

## Features

- Responsive layout (desktop, tablet, mobile nav with a toggleable menu)
- Dark mode with preference saved in `localStorage`
- Contact form that opens a pre-filled email via `mailto:`
- Project cards linking out to individual GitHub repositories

## Project Structure

```
.
├── index.html              # Page markup and content
├── css/
│   └── style.css           # All styling, theme variables, responsive rules
├── js/
│   └── script.js           # Icons, nav toggle, dark mode, contact form
├── assets/
│   └── images/
│       └── fire-extinguishing-robot.jpg
└── package.json
```

## Running Locally

No build tools or dependencies are required — it's a static site.

**Option 1 — npm script**
```bash
npm run dev
```
This runs `npx serve .` and serves the site locally (defaults to `http://localhost:3000`).

**Option 2 — open directly**
Just open `index.html` in a browser.

## Deployment

Being a static site, it can be deployed as-is to any static host, e.g. GitHub Pages, Netlify, or Vercel — no build step needed.

## Contact

- Email: [olamitoyosirokeeb@gmail.com](mailto:olamitoyosirokeeb@gmail.com)
- GitHub: [github.com/olamitoyosi](https://github.com/olamitoyosi)
- LinkedIn: [linkedin.com/in/olamitoyosi](https://www.linkedin.com/in/olamitoyosi)