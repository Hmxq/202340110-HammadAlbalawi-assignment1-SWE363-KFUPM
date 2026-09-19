# Technical Documentation

## Overview

This is a static, single-page portfolio built with plain HTML, CSS, and
JavaScript — no frameworks or build tools required.

## File Structure

| Path                          | Purpose                                            |
| ------------------------------ | --------------------------------------------------- |
| `index.html`                  | Page markup — Home/Hero, About, Projects, Skills, Contact sections. |
| `css/styles.css`               | All styling: design tokens, layout, responsive rules, dark/light theme. |
| `js/script.js`                 | Interactivity: nav toggle, theme toggle, greeting, contact form handling. |
| `assets/images/`               | Placeholder SVG images (profile + project thumbnails). |
| `docs/ai-usage-report.md`      | AI tool usage documentation. |
| `docs/technical-documentation.md` | This file. |

## HTML Structure

The page is a single `index.html` with five main landmarks:

1. `#home` — hero section with greeting, name, tagline, and CTA buttons.
2. `#about` — short bio and profile image.
3. `#projects` — grid of project cards (image, title, description, tags).
4. `#skills` — list of core skills/technologies.
5. `#contact` — a client-side-only contact form.

Semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`)
are used throughout for accessibility and SEO.

## CSS Architecture

- **Design tokens** are defined as CSS custom properties on `:root`
  (colors, spacing radius, shadow, max width, transition speed).
- **Theming**: a `[data-theme="dark"]` attribute on `<html>` overrides the
  token values for dark mode. `js/script.js` toggles this attribute and
  persists the choice in `localStorage`.
- **Layout**: CSS Grid is used for the About section (image + text) and the
  Projects grid (`repeat(auto-fit, minmax(280px, 1fr))` for a responsive,
  card-based layout). Flexbox is used for the navbar, hero buttons, skills
  list, and form groups.
- **Responsiveness**: two breakpoints (`max-width: 768px` for tablet/mobile
  nav collapse, `max-width: 480px` for tighter mobile spacing) adjust the
  navigation into a collapsible menu and stack the About section.

## JavaScript Behavior

`js/script.js` is organized into independent, self-contained features:

1. **Mobile navigation toggle** — toggles an `.open` class on the nav list
   and updates `aria-expanded` on the hamburger button; closes the menu
   automatically when a link is clicked.
2. **Theme toggle** — reads/writes `localStorage['portfolio-theme']`,
   falls back to the OS-level `prefers-color-scheme` media query on first
   visit, and updates the toggle button icon (🌙 / ☀️).
3. **Time-of-day greeting** — uses `Date().getHours()` to render "Good
   morning / afternoon / evening" text above the hero heading.
4. **Contact form handling** — intercepts `submit`, runs native HTML5
   validation (`checkValidity()`), and shows a success/error message in a
   `role="status"` element. No data is sent anywhere (no backend, as per
   assignment scope).
5. **Footer year** — sets the copyright year dynamically.

## Accessibility Notes

- All interactive controls have `aria-label` or visible text labels.
- The mobile nav toggle exposes `aria-expanded` state.
- The contact form status message uses `aria-live="polite"` so screen
  readers announce submission feedback.
- Color contrast for both themes was chosen to stay readable (dark text on
  light background and vice versa).

## Browser/Device Testing

Manually verified via browser DevTools responsive mode at:
- Desktop (≥1200px)
- Tablet (~768px)
- Mobile (~375px)

No external dependencies beyond a Google Fonts stylesheet (Poppins), so the
site loads quickly and works offline once cached.

## Known Limitations

- The contact form does not send data anywhere (by design — the assignment
  does not require a backend).
- Images are lightweight placeholder SVGs; they should be replaced with
  real project screenshots and a real profile photo in future iterations.
