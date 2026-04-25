# UI/UX Design Fundamentals — Project Portfolio

**Author:** Angel Mary Jose

---

## Projects

This repository contains three web development projects built as part of the UI/UX Design Fundamentals course.

---

### 1. 🛒 Product Store — LnT Angular ESE

An Angular 17 e-commerce application called **Luminary**, built with Angular Material and a static JSON backend.

**Tech Stack:** Angular 17 (standalone components) · Angular Material · RxJS · TypeScript

**Features:**
- Product listing with search and category filter
- Product detail page
- Shopping cart with quantity controls
- Checkout form with reactive form validation
- Lazy-loaded routes

**Folder:** `LnT-Angular_ESE-main/`

**Run locally:**
```bash
cd LnT-Angular_ESE-main
npm install
ng serve
```
Then open `http://localhost:4200`

---

### 2. 💳 Business Card Template

A responsive, interactive digital business card builder where users can customize and preview their card in real time.

**Tech Stack:** HTML5 · CSS3 · Bootstrap 5 · JavaScript · jQuery · Font Awesome · LocalStorage

**Features:**
- Live card preview as you type
- Input validation with green/red feedback
- LocalStorage persistence across page reloads
- Social media link support (LinkedIn, Twitter, Facebook)
- Success alert with fade animation
- Reset to default values

**File:** `business_card.html` — open directly in any browser, no setup needed.

---

### 3. ✈️ Holiday Planner (API Version)

An AI-powered holiday planning web app that lets users search destinations, plan activities, build an itinerary, and calculate their travel budget.

**Tech Stack:** HTML5 · CSS3 · Bootstrap 5 · JavaScript · jQuery · Font Awesome · Wikipedia REST API · Unsplash API · Google Gemini API

**Features:**
- Destination search with Wikipedia summary and Unsplash photo
- AI travel insights powered by Google Gemini (API key required)
- Activity checklist with preset costs
- Budget calculator (transport + hotel + food + activities)
- Custom itinerary builder with add/remove
- AI-suggested activities for searched destination

**File:** `Holiday_Planner_API_Version.html` — open directly in any browser.

> **Note:** To enable AI features, paste a valid Google Gemini API key into the input field at the top of the page. Get one free at [console.anthropic.com](https://console.anthropic.com) / [aistudio.google.com](https://aistudio.google.com).

---

## Repository Structure

```
├── LnT-Angular_ESE-main/          # Project 1 — Angular Product Store
│   ├── src/
│   │   └── app/
│   │       ├── components/        # navbar, product-list, product-detail, cart, checkout
│   │       ├── services/          # product.service, cart.service
│   │       ├── models/            # product.model.ts
│   │       └── pipes/             # filter.pipe.ts
│   ├── angular.json
│   └── package.json
│
├── business_card.html             # Project 2 — Business Card Template
├── Holiday_Planner_API_Version.html  # Project 3 — Holiday Planner
└── README.md
```

---

## Getting Started

Projects 2 and 3 are single HTML files — just open them in a browser. No installation needed.

For Project 1 (Angular), Node.js v18+ and Angular CLI are required:

```bash
npm install -g @angular/cli
cd LnT-Angular_ESE-main
npm install
ng serve
```

---

## License

© 2025 Angel Mary Jose. All rights reserved.
