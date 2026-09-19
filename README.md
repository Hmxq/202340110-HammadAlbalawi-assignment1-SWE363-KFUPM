# Hammad Albalawi — Personal Portfolio (Assignment 1)

A simple, responsive personal portfolio website built as Assignment 1 for the
"Foundation & AI Integration" assignment. It introduces me, showcases a couple
of projects, and provides a way to get in touch.

## Live Demo

Deployed with GitHub Pages: `https://hmxq.github.io/202340110-HammadAlbalawi-assignment1-SWE363-KFUPM/`
(enable Pages in the repository settings — Settings → Pages → Deploy from branch `main` / root)

## Features

- **About Me** section with a short intro and tagline.
- **Projects** section featuring the Bank Management System (C++) and this
  portfolio site itself.
- **Skills** section listing core technologies.
- **Contact** form (Name, Email, Message) — front-end only, no backend.
- **Dark / light theme toggle** that remembers your preference (`localStorage`).
- **Time-based greeting** ("Good morning/afternoon/evening") generated with JavaScript.
- **Responsive design** using CSS Flexbox/Grid — tested on desktop, tablet, and mobile widths.
- **Mobile navigation menu** with a hamburger toggle.

## Project Structure

```
.
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   └── images/
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
└── .gitignore
```

## Setup Instructions (Run Locally)

No build tools or dependencies are required — this is a static HTML/CSS/JS site.

1. Clone the repository:
   ```bash
   git clone https://github.com/Hmxq/202340110-HammadAlbalawi-assignment1-SWE363-KFUPM.git
   cd 202340110-HammadAlbalawi-assignment1-SWE363-KFUPM
   ```
2. Open `index.html` directly in your browser, **or** serve it locally for a
   more accurate preview:
   ```bash
   # Python 3
   python3 -m http.server 8000
   # then open http://localhost:8000
   ```
3. That's it — no installation, no dependencies.

## AI Usage

This project was built with help from an AI assistant (Claude). A full
breakdown of tools used, how they were used, and what was learned is in
[`docs/ai-usage-report.md`](docs/ai-usage-report.md). Technical implementation
notes are in [`docs/technical-documentation.md`](docs/technical-documentation.md).

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (custom properties, Flexbox, Grid, media queries)
- Vanilla JavaScript (no frameworks)

## License

This project is for educational purposes as part of a course assignment.
