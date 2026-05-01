# Practice Dashboard

Static HTML/CSS/Bootstrap 5 implementation of a Practice Dashboard, derived
pixel-by-pixel from a UI screenshot.

## Files

- `index.html` – semantic HTML layout (top bar, KPI strip, toolbar, data table).
- `assets/css/styles.css` – custom styles layered on top of Bootstrap 5.
- `assets/js/app.js` – minimal vanilla JS for the dark-mode toggle and the
  table's "select all" checkbox.

## Running locally

The project is a static site. Open `index.html` directly in a browser, or
serve the directory with any static server, e.g.:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Conventions

- Bootstrap 5 utilities and components are used wherever possible to keep
  custom CSS small.
- Custom styles live in `assets/css/styles.css` and follow a BEM-ish naming
  scheme (`.kpi-card__value`, `.time-pill--green`, etc.).
- No build step or backend logic is required.
