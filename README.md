# Khashayar Ramezani: underwater portfolio

Static site (HTML, CSS, vanilla JS). No build step, no dependencies.

## Deploy on GitHub Pages
1. Create a repository and upload all files, keeping `index.html` at the root.
2. Open Settings, then Pages. Under Source choose "Deploy from a branch", pick `main` and `/ (root)`, and save.
3. Your site goes live at `https://<username>.github.io/<repo>/`. All paths are relative, so subpaths work.

## Structure
- `css/style.css`: layout, depth colors, creature and reduced-motion rules
- `js/ocean.js`: bubble and plankton canvas
- `js/cursor-creature.js`: jellyfish cursor (ambient drift on touch devices)
- `js/main.js`: depth gauge, reveals, parallax, return to surface

Content comes from the owner's latest resume and portfolio.

## Languages (English / Persian)
- English text lives in `index.html`; every translatable element has `data-i18n="N"` (N = its index).
- Other languages are entries in `T` in `js/i18n.js`: `{dir, m, title, s:[...]}` where `s` is one string per `data-i18n` index, in order. A language with the wrong count is ignored.
- To add a language: add an entry to `T` (use `dir:'rtl'` for right-to-left), add a `@font-face` and `:lang(xx)` font rule in `css/style.css` if needed, and update the labels on the `#lang` button.
- The choice is saved in `localStorage`; otherwise `navigator.language` decides. Switching never reloads the page and keeps your scroll position.
- CSS uses logical properties, so layout, timeline and sea decorations mirror automatically in RTL. Persian digits are applied in JS for `fa`.
- Fonts (all SIL OFL, licenses in `assets/fonts/licenses/`): Persian body Estedad, Persian headings Lalezar, English headings Cinzel Decorative. They are declared at the end of `css/style.css`; change `--display`, `--sans` and `--serif` to swap them.

- Contact icons: Bootstrap Icons (MIT, `assets/icons/bootstrap-icons-MIT.txt`), inlined in `index.html` and given the neon glow in `css/style.css`.
