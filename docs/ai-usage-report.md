# AI Usage Report

## Tools Used & Use Cases

- **Claude (Anthropic, Claude Code CLI)** — Used as the primary AI assistant
  for this assignment. Specific use cases:
  - Generating the initial HTML structure for the About, Projects, Skills,
    and Contact sections based on the assignment requirements.
  - Writing the CSS (Flexbox/Grid layout, responsive breakpoints, dark/light
    theme using CSS custom properties).
  - Writing the JavaScript interactivity: the theme toggle, the time-of-day
    greeting message, the mobile navigation menu, and the contact form
    validation/feedback.
  - Drafting the README.md and this documentation.

## Benefits & Challenges

**Benefits**
- Sped up boilerplate work (repeating section markup, CSS resets) so more
  time could go into refining layout, spacing, and content.
- Helped generate a working dark/light theme toggle pattern (CSS variables +
  `data-theme` attribute + `localStorage`) that would have taken longer to
  research from scratch.
- Useful as a sanity check for responsive breakpoints and accessibility
  attributes (e.g., `aria-expanded`, `aria-live` on the form status message).

**Challenges**
- AI-suggested code sometimes needed adjustment to match the specific folder
  structure and naming required by the assignment (e.g., `css/styles.css`,
  `js/script.js`).
- Had to double-check that generated JavaScript didn't silently rely on
  elements that didn't exist yet in the HTML (IDs had to match exactly).
- Placeholder images generated as inline SVG needed manual review to keep
  file sizes small and visuals simple, in line with "keep it simple" guidance.

## Learning Outcomes

- Reinforced how CSS custom properties (`:root` variables) can drive a full
  theme system without duplicating styles.
- Learned a clean pattern for persisting user preference (theme) with
  `localStorage` and respecting `prefers-color-scheme` as a fallback.
- Practiced structuring a static site into clear folders (`css/`, `js/`,
  `assets/`, `docs/`) for maintainability.
- Better understanding of basic accessibility considerations (semantic tags,
  `aria-label`, `aria-expanded`, `aria-live`) for a simple form-driven page.

## Responsible Use & Modifications

All AI-generated code was reviewed line by line before inclusion:
- Section content (About Me text, project descriptions) was rewritten in my
  own words rather than used as-is.
- CSS variable names, spacing scale, and color palette were adjusted to a
  consistent style rather than accepting the first suggestion.
- JavaScript was tested manually in the browser (theme toggle, greeting
  message, mobile menu, form submission) to confirm it behaved correctly
  before committing.
- No AI output was submitted unmodified; every section was adapted to fit
  the assignment's specific structure and to reflect my own understanding
  of how the code works, so I can explain and extend it in future
  assignments.
