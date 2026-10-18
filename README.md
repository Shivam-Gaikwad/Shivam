# Shivam Gaikwad – Portfolio

React (JavaScript) + Vite portfolio with a component-based architecture.

## Run locally
```bash
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production
```bash
npm run build
npm run preview
```

## Project structure
```
src/
├── main.jsx                  entry point
├── App.jsx                   composes the page from components
├── data/portfolio.js         ALL content (profile, skills, projects...) - edit here
├── hooks/                    reusable logic
│   ├── useInView.js          scroll-reveal trigger
│   ├── useCountUp.js         number count-up animation
│   ├── useTypewriter.js      typing effect
│   ├── useTheme.js           dark / light theme
│   └── useScrollProgress.js  top progress bar
├── utils/                    motion.js, spotlight.js helpers
├── styles/base.css           design tokens (colours, fonts), resets, shared styles
├── assets/shivam.jpg         your photo
└── components/
    ├── ui/                   small reusable pieces
    │   Button, ButtonRow, Chips, BulletList, GlassCard,
    │   Reveal, Section, Typewriter, Counter
    ├── layout/               Header, ThemeToggle, Footer, Background, ScrollProgress
    └── sections/             Hero (Portrait, Stats), Skills (SkillCard),
                              Experience, Projects (ProjectCard), Education, Extras
```
Each component has its own `.css` file next to it.

## Common edits
- Text, links, projects: `src/data/portfolio.js`
- Colours and fonts: the `:root` block in `src/styles/base.css`
- Photo: replace `src/assets/shivam.jpg`

## Deploy
Push to GitHub, then import the repo on Vercel or Netlify.
Build command: `npm run build`  Output directory: `dist`
