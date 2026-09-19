# AI Usage Report

## Tools Used & Use Cases

- **Claude (Anthropic, Claude Code CLI)** — Used as the primary AI assistant
  for this assignment, in an interactive back-and-forth conversation rather
  than a single one-shot generation. Specific use cases:
  - Generating the initial HTML structure (About, Projects, Skills, Contact)
    from the assignment's requirements.
  - Writing the CSS layout and styling, and the JavaScript interactivity
    (theme toggle, time-of-day greeting, mobile menu, contact form).
  - Drafting the README.md and this documentation.
  - Iterating on the result based on my direction: I asked for specific
    project content (e.g. swapping one project for a Java Hospital
    Management System using data structures), and later asked Claude to
    rewrite the CSS/JS to use only beginner-level techniques (no CSS
    variables, no Grid, no `localStorage`, no ARIA attributes) so the code
    matches what has actually been covered in the course, instead of more
    advanced patterns an AI defaults to.

## Benefits & Challenges

**Benefits**
- Sped up boilerplate work (repeating section markup, CSS resets) so more
  time could go into deciding what content and structure the site should
  actually have.
- Made it easy to course-correct: when the code looked too advanced for a
  first assignment, I could ask for a simpler version and compare the two
  directly, which helped me see the difference between an "easy" and a
  "more advanced" way of solving the same problem (e.g. `classList.toggle()`
  vs. CSS custom properties + `localStorage` for a theme switch).

**Challenges**
- The first version Claude produced used patterns beyond what we've covered
  in class (CSS custom properties, `:root` theming, `localStorage`, ARIA
  attributes). I had to explicitly ask for a simplified rewrite so the code
  would be something I can actually explain and defend as my own level of
  understanding.
- Had to stay involved throughout — picking the project content, deciding
  the site structure, and pushing back when the output didn't fit the
  assignment's "keep it simple" guidance — rather than accepting the first
  result.

## Learning Outcomes

- Learned the difference between a CSS-variable/`localStorage`-based theme
  system and a simple one built with `classList.toggle()` on `<body>` — and
  why the simpler approach is what fits a first HTML/CSS/JS assignment.
- Learned how Flexbox (`display: flex`, `flex-wrap`, `gap`) alone can build
  a responsive layout without needing CSS Grid.
- Practiced reading generated JavaScript closely enough to understand what
  each event listener does (`getElementById`, `addEventListener`,
  `classList.toggle`, basic `if/else`).
- Learned to structure a static site into clear folders (`css/`, `js/`,
  `assets/`, `docs/`) for maintainability.

## Responsible Use & Modifications

I want to be transparent about how this project was built: Claude generated
the code for this site based on my instructions and follow-up requests, and
I did not hand-write the HTML/CSS/JS myself. What I did contribute:

- Decided the site's content and structure (which sections, which two
  projects to feature, and what each project should describe).
- Reviewed the first version and judged it too advanced for my current
  level, then directed a full simplification pass to beginner-appropriate
  HTML/CSS/JS.
- Tested the live result in the browser (theme toggle, mobile menu, greeting
  message, contact form) to confirm everything worked as expected.
- Read through the final code so I can explain what each part does — the
  goal before submitting is to be able to walk through `js/script.js` and
  `css/styles.css` line by line and explain the purpose of each rule.

This is disclosed here per the assignment's academic integrity policy: the
code is AI-generated under my direction, not copied from another student or
misrepresented as hand-written from scratch, and I take responsibility for
understanding and being able to explain the resulting solution.
