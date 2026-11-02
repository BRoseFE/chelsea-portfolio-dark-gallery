# Chelsea Rose – Art Portfolio (React)

A responsive React portfolio showcasing original artwork by Chelsea Rose.
This project focuses on clean component architecture, accessible semantic HTML, and a scalable structure for managing artwork content without over-engineering.

---

## 🌐 Live Website

[chelsearose.art](https://chelsearose.art)

---

## ✨ Features

* Responsive artwork gallery layout
* Individual artwork pages with metadata
* Featured artwork section on the homepage
* Client-side routing with React Router
* Accessible semantic HTML structure
* Reusable component architecture
* Optimized image loading using WebP
* Centralized artwork data module
* Dynamic image path utilities based on artwork slugs
* SPA routing configured for Netlify deployment

---

## 🧭 Routing Overview

| Route            | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `/`              | Home page featuring highlighted artworks and artist introduction |
| `/portfolio`     | Full artwork gallery                                             |
| `/about`         | About page describing the artist and portfolio                   |
| `/artwork/:slug` | Individual artwork page generated dynamically                    |

Navigation is implemented using **React Router**.
Artwork pages are dynamically rendered using a **slug-based routing pattern**, allowing each artwork to have its own URL.

---

## 🎨 Artwork System

Artwork content is managed through a centralized data module.

Each artwork entry includes:

* title
* year
* description
* slug
* featured ranking

The slug is used to dynamically generate:

* thumbnail image paths
* full artwork image paths
* artwork routes

Images follow a consistent structure:

```
public/artwork/{slug}/thumb.webp
public/artwork/{slug}/full.webp
```

Utility helpers generate the paths automatically so components remain clean and reusable.

---

## 🧠 Design & Engineering Decisions

* **Centralized artwork data**
  All artwork metadata lives in `src/data/artworks.js`. This keeps the UI components simple and allows artwork content to be modified without touching presentation logic.

* **Slug-based image system**
  Image paths are generated dynamically using utility functions (`getThumbPath`, `getFullPath`). This avoids hardcoding asset paths throughout the codebase.

* **Component reuse**
  Shared components such as artwork cards, buttons, header, footer, and the about section are reused across multiple pages to keep the UI consistent.

* **Semantic HTML**
  Landmarks such as `header`, `nav`, `main`, `section`, `article`, and `figure` are used intentionally to improve accessibility and document structure.

* **Deployment configuration**
  A Netlify `_redirects` file ensures client-side routing works correctly when refreshing pages or accessing routes directly.

* **Testing**
  Basic testing files are included via Create React App setup. The primary focus of this project is component structure, routing behaviour, and accessibility.

---

## 🧱 Tech Stack

* **React**
* **React Router**
* **CSS Modules**
* **JavaScript (ES6+)**
* **Netlify (Deployment)**

No UI frameworks or component libraries were used — layout and styling are fully custom.

---

## 📁 Project Structure

```text
public
├── artwork/              # artwork images organized by slug
├── index.html
├── manifest.json
└── _redirects            # Netlify SPA routing

src
├── assets/
│   ├── images/
│   └── textures/
│
├── data/
│   └── artworks.js       # centralized artwork metadata
│
├── pages/                # route-level components
│   ├── home/
│   ├── portfolio/
│   ├── artwork/
│   └── about/
│
├── shared/               # reusable UI components
│   └── components/
│       ├── header/
│       ├── footer/
│       ├── button/
│       ├── artwork-card/
│       └── about/
│
├── utils/                # helper functions
│   └── imagePaths.js
│
├── App.js
└── index.js
```

Components are grouped primarily by **feature** and **shared functionality**, keeping the codebase easier to scale and reason about as the project grows.

---

## 🚧 Project Status

This project represents a complete, production-ready portfolio for displaying artwork.

Potential future enhancements could include:

* Artwork filtering and categorization
* Search functionality
* Admin interface for managing artwork entries
* Image lazy loading improvements
* Expanded artwork metadata and tagging

---

## 🚀 Getting Started

```bash
npm install
npm start
```
