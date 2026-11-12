# Personal Developer Portfolio Website

A clean, modern, professional, and fully responsive personal portfolio website for **Gullapudi Bhargava Subrahmanyam Guptha**. Built with **React.js**, **HTML5**, **CSS3**, and **JavaScript** using **Vite**.

Designed specifically for showcasing on your resume, GitHub, and LinkedIn profile.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/` (or the URL shown in your terminal).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture & Components

```
Portfolio/
├── index.html                   # HTML entry point with metadata & typography
├── package.json                 # Project configuration & scripts
├── vite.config.js               # Vite configuration
├── src/
│   ├── main.jsx                 # React root mounting
│   ├── App.jsx                  # Main application layout
│   ├── index.css                # Global theme variables & responsive styles
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for personal data
│   ├── components/
│   │   ├── Navbar.jsx           # Fixed responsive navigation with mobile drawer
│   │   ├── Hero.jsx             # Hero section with full name & CTAs
│   │   ├── About.jsx            # Professional introduction & core focus areas
│   │   ├── Education.jsx        # Vertical timeline with B.Tech, Inter & 10th
│   │   ├── Skills.jsx           # Categorized skill cards and badges
│   │   ├── Projects.jsx         # Exactly 2 verified projects (Zombie Runner & CareMinds)
│   │   ├── SocialLinks.jsx      # Dedicated GitHub & LinkedIn profile links
│   │   ├── Contact.jsx          # Contact form, editable email & profile links
│   │   ├── Footer.jsx           # Professional footer with full name
│   │   └── Icons.jsx            # SVG icon components (GitHub & LinkedIn)
│   └── styles/
│       ├── index.css            # Base design system & utility classes
│       ├── Navbar.css           # Navigation styling & mobile menu animations
│       ├── Hero.css             # Hero layout, glow effects & stat cards
│       ├── About.css            # About layout & feature pillar styling
│       ├── Education.css        # Timeline nodes & score badge styling
│       ├── Skills.css           # Grid layout & skill badge hover states
│       ├── Projects.css         # Project cards & action button styling
│       ├── SocialLinks.css      # Social card cards & hover micro-interactions
│       ├── Contact.css          # Form styling & contact method cards
│       └── Footer.css           # Footer layout & back-to-top button
```

---

## ⚙️ Customizing Your Data

All personal information, education records, skills, and projects are centralized in `src/data/portfolioData.js`:

- **Full Name**: `Gullapudi Bhargava Subrahmanyam Guptha`
- **Email Address Placeholder**: Edit `email: "bhargav.guptha@example.com"` whenever you wish to use your real email address.
- **GitHub**: `https://github.com/2303A51740`
- **Actual LinkedIn Profile**: `https://www.linkedin.com/in/gullapudi-bhargav-guptha-1aab40347/`
- **Zombie Runner Gameplay Video**: `https://lnkd.in/p/gRS2iNiR` (isolated strictly to the Zombie Runner project card).

---

## 🎨 Design Highlights

- **Palette**: Dark navy / black background (`#07090e`, `#0d121d`) with blue (`#3b82f6`) and purple (`#8b5cf6`) accents.
- **Performance**: Zero heavy 3D/Three.js or distracting canvas loops — instantaneous 60fps load speeds.
- **Responsiveness**: Tested across mobile phones, tablets, laptops, and ultra-wide screens.
- **Accessibility**: Semantic HTML5 tags, accessible colors, and secure external links (`target="_blank"` with `rel="noopener noreferrer"`).
