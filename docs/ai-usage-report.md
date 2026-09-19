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
- Helped generate a simple dark/light theme toggle pattern (a `.dark-mode`
  class toggled on `<body>` with `classList.toggle()`) that matched what I
  had actually learned in class, instead of a more advanced approach.
- Useful as a sanity check for responsive breakpoints and for keeping the
  CSS/JS at a beginner level (plain selectors, `flex`, basic `if/else`)
  rather than techniques not covered yet in the course.

**Challenges**
- AI-suggested code sometimes needed adjustment to match the specific folder
  structure and naming required by the assignment (e.g., `css/styles.css`,
  `js/script.js`).
- Had to double-check that generated JavaScript didn't silently rely on
  elements that didn't exist yet in the HTML (IDs had to match exactly).
- Placeholder images generated as inline SVG needed manual review to keep
  file sizes small and visuals simple, in line with "keep it simple" guidance.

## Learning Outcomes

- Reinforced how `classList.toggle()` can switch a whole page's look by
  adding/removing a single CSS class, without needing anything more advanced.
- Practiced using plain `if / else if / else` logic in JavaScript to change
  page content based on the current time.
- Practiced structuring a static site into clear folders (`css/`, `js/`,
  `assets/`, `docs/`) for maintainability.
- Better understanding of how Flexbox (`display: flex`, `flex-wrap`, `gap`)
  alone can build a responsive layout without more advanced CSS features.

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
