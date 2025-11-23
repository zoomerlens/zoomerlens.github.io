# zoomerlens.github.io

zoomerlens - photography and graphic designing

This repository is the source for the ZoomerLens GitHub Pages site. I added a simple, static portfolio scaffold that displays a responsive gallery with a lightbox.

How to customize

- Add your images to the `images/` folder (create it at the repo root).
- Edit `gallery.json` to point `src` (full-size) and `thumb` (thumbnail) to your images, or replace the sample Unsplash URLs.
- Update titles and descriptions in `gallery.json` to show captions.

Preview locally

1. Open `index.html` in a browser (double-click or use a local static server). For a quick local server run:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Deployment

Push to the `main` branch (already done here). For `zoomerlens.github.io` the repository root `index.html` is served by GitHub Pages automatically.

Next steps (optional)

- Replace gallery JSON with a tiny script that auto-generates entries from `/images` (requires updating manually or using GitHub Actions).
- Add contact, about, and portfolio categories.
- Use a Jekyll theme if you prefer markdown-driven pages and collections.
