# Technical Documentation

## Overview

This is a static, single-page portfolio built with plain HTML, CSS, and
JavaScript — no frameworks, build tools, or external libraries beyond a
Google Fonts stylesheet.

## File Structure

| Path                          | Purpose                                            |
| ------------------------------ | --------------------------------------------------- |
| `index.html`                  | Page markup — Home/Hero, About, Projects, Skills, Contact sections. |
| `css/styles.css`               | All styling: layout, colors, responsive rules, dark/light theme. |
| `js/script.js`                 | Interactivity: nav toggle, theme toggle, greeting, contact form handling. |
| `assets/images/`               | Placeholder SVG images (profile + project thumbnails). |
| `docs/ai-usage-report.md`      | AI tool usage documentation. |
| `docs/technical-documentation.md` | This file. |

## HTML Structure

The page is a single `index.html` with five main sections, each identified
by an `id` used for navigation:

1. `#home` — hero section with greeting, name, tagline, and buttons.
2. `#about` — short bio and profile image.
3. `#projects` — list of project cards (image, title, description, tags).
4. `#skills` — list of core skills/technologies.
5. `#contact` — a client-side-only contact form.

Basic semantic elements (`header`, `nav`, `main`, `section`, `footer`) are
used to keep the structure clear and readable.

## CSS Architecture

- **Colors**: plain hex color values, kept consistent across the page
  (e.g. `#4f46e5` as the main accent color).
- **Layout**: Flexbox (`display: flex`, `flex-wrap: wrap`, `gap`) is used
  throughout — the navbar, the About section, the project cards, the
  skills list, and the hero buttons — so the layout wraps naturally on
  smaller screens.
- **Dark mode**: a `.dark-mode` class is added to `<body>` by JavaScript;
  CSS rules under `body.dark-mode` override the background and text colors
  for the header, sections, cards, and form fields.
- **Responsiveness**: two `@media` breakpoints (`max-width: 768px` for the
  mobile navigation menu, `max-width: 480px` for tighter spacing on small
  phones).

## JavaScript Behavior

`js/script.js` contains a few independent, beginner-level features:

1. **Mobile navigation toggle** — a `click` listener on the menu button
   toggles an `.open` class on the nav list with `classList.toggle()`.
2. **Dark/light theme toggle** — a `click` listener toggles a `.dark-mode`
   class on `<body>` and updates the button's text ("Dark Mode" /
   "Light Mode"). The choice is only kept for the current page view (no
   storage is used).
3. **Time-of-day greeting** — uses `new Date().getHours()` with a simple
   `if / else if / else` to show "Good morning!", "Good afternoon!", or
   "Good evening!" above the hero heading.
4. **Contact form handling** — listens for the form's `submit` event, calls
   `event.preventDefault()`, checks the three fields aren't empty with a
   plain `if` statement, and shows a message in a `<p>` element. No data is
   sent anywhere (no backend, as per assignment scope).
5. **Footer year** — sets the copyright year using `new Date().getFullYear()`.

## Browser/Device Testing

Manually verified via browser DevTools responsive mode at:
- Desktop (≥1200px)
- Tablet (~768px)
- Mobile (~375px)

## Known Limitations

- The contact form does not send data anywhere (by design — the assignment
  does not require a backend).
- The dark mode choice resets on page reload since no storage is used.
- Images are lightweight placeholder SVGs; they should be replaced with
  real project screenshots and a real profile photo in future iterations.
