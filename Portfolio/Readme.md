# Christian Reynz Agosto — Portfolio

This repository contains my personal portfolio website — a single-page site
built to showcase who I am, the coursework I've completed, the tools I work
with, and the projects I've built as an Information Technology graduate
specializing in full-stack web development.

## Live Site

**[https://cagosto250000001184-cyber.github.io/Portfolio/](https://cagosto250000001184-cyber.github.io/Portfolio/index.html)**

The site is deployed with GitHub Pages directly from this repository, so it
updates automatically whenever changes are pushed to the main branch.

## About This Project

The portfolio is a single `index.html` page split into the following
sections, all reachable from the sticky navigation bar:

| Section | What it covers |
|---|---|
| **Home** | Introduction, short bio, and contact cards (Email, LinkedIn, GitHub) |
| **Education** | Course activities from my HTML/CSS classes, each linking to a live demo |
| **Tech Stack** | The exact languages, layout tools, and workflow tools used to build this site |
| **Projects** | Selected personal and class projects |
| **About** | A longer look at who I am and my hobbies |
| **Contact** | A contact form plus direct links to reach me |

The page also includes small interaction details — scroll-reveal animations,
an active-link indicator that tracks scroll position, and a subtle animated
portrait — all built with plain CSS and a small amount of vanilla
JavaScript.

## Built With

- **HTML5** — page structure and content
- **CSS3** — styling, layout (Flexbox/Grid), and animations
- **JavaScript (vanilla)** — scroll-reveal effects and active nav-link tracking
- **GitHub Pages** — hosting/deployment

No frameworks or build tools are used — the site runs directly from static
files.

## Repository Structure

```
Portfo/
├── index.html      # Main page markup and content
├── style.css        # All styling and animations
├── logo.png          # Nav bar logo/icon
├── akashi.jpg        # Portrait photo
├── fashion.png        # Course activity screenshot
├── wine.png            # Course activity screenshot
├── burger.png           # Course activity screenshot
└── README.md              # This file
```

## Running Locally

Since this is a static site with no build step, you can run it locally with
just a browser:

1. Clone the repository:
   ```bash
   git clone https://github.com/cagosto250000001184-cyber/Portfo.git
   ```
2. Open `index.html` directly in your browser, **or** serve it locally for
   the best experience (so relative image paths and smooth scrolling behave
   the same as on the live site):
   ```bash
   cd Portfo
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.

## 📬 Contact

- **Email:** cgosto_250000001184@uic.edu.ph
- **LinkedIn:** [Christian Reynz Agosto](https://www.linkedin.com/in/christian-reynz-agosto-9645b1428/)
- **GitHub:** [@cagosto250000001184-cyber](https://github.com/cagosto250000001184-cyber)
