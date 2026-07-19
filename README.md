 Majd Portfolio Architecture & Conventions

Welcome to **Majd Portfolio**, a premium, modular, and highly interactive digital portfolio inspired by editorial minimalism. It features high-end typography, 3D scrolling perspective dynamics, and fluid interaction states.

This document serves as the foundational mandate for all development work, architectural patterns, styling guidelines, and tool workflows in this repository.

---

## 1. Core Technology Stack & Configuration

- **Frontend Framework:** React 19 (using strict functional components and modern hooks)
- **Programming Language:** TypeScript ~5.8 (with strict typing)
- **Build Tool:** Vite 6
- **Styling Engine:** Tailwind CSS v4 (with custom `@theme` configuration)
- **Animation Engine:** Motion v12 (`motion/react`)
- **Icon Set:** `lucide-react`
- **Utility/Backend Preparation:** `@google/genai` (v2.4.0) & Express (v4.21.2) are installed for potential AI-powered server-side capabilities.

### Development Environment & HMR Control
To support heavy automated edits without causing excessive CPU usage or browser flickering in AI Studio, `vite.config.ts` includes a performance control block:
- When the environment variable `DISABLE_HMR` is set to `'true'`, file watching and Hot Module Replacement (HMR) are disabled.
- Do not modify or disable this behavior, as it ensures agent edits remain smooth and performance-friendly.

---

## 2. Core Architectural Components

The codebase is organized as follows:
```text
/home/majad/Downloads/majd-portfolio/
├── tsconfig.json             # TS Config
├── vite.config.ts            # Vite Setup
├── src/
│   ├── main.tsx              # Application Entry
│   ├── App.tsx               # Root App & Scroll Observer
│   ├── index.css             # Tailwind v4 Styles & Fonts
│   ├── types.ts              # TypeScript Interfaces
│   ├── data.ts               # Static Portfolio Data
│   ├── assets/               # Local Images & Visual Assets
│   └── components/           # Modular Page Sections
```

### Key Components

- **`Scroll3DWrapper.tsx` (The Scroll Engine):** 
  Applies dynamic 3D translations (`rotateX`, `rotateY`, `scale`, `opacity`, `z`) to child components depending on viewport-relative scroll position.
  - *Presets:* `cylinder` (curved cylinder rotation), `depth` (zooming perspective), `book` (folding page transition), and `none` (standard scroll).
  - Uses Framer Motion's `useScroll` and `useTransform` hooks with custom hardware-accelerated transforms (`transformStyle: "preserve-3d"`, `will-change-transform`).
- **`Navbar.tsx`:** 
  A floating glassmorphic header navigation. Monitors `activeSection` and renders a smooth spring-based layout pill overlay over the active link.
- **`Hero.tsx`:** 
  Includes responsive grid layouts, a premium hover-sensitive portrait container, and a custom infinite-loop typographic marquee banner.
- **`Projects.tsx`:** 
  Interactive case studies grid with categorized filtration (All, Design, Development, Branding). Features `AnimatePresence` layout animations and a details-rich full overlay modal.
- **`Contact.tsx`:** 
  Contains a live SF timezone clock, a copyable email hook, and an animated, state-driven response feedback submission form.

---

## 3. Design & Styling Conventions (Tailwind CSS v4)

Our visual identity is defined by visual rhythm, minimalism, and strict border grids. 

### Font Theme (Configured in `src/index.css`)
We define four utility font families:
- **`font-sans`:** `Inter` — Used for body copy, paragraphs, and descriptions.
- **`font-display`:** `Plus Jakarta Sans` — Used for headings, titles, and section titles.
- **`font-serif`:** `Playfair Display` — Used for stylized italic overlays.
- **`font-mono`:** `JetBrains Mono` — Used for technical stats, dates, category indicators, buttons, and system clocks.

### Core Spacing and Visual Rhythm
1. **Border Grids:** Use clean, subtle dividers (`border-gray-200`) and border wrappers to frame components.
2. **Minimal Grayscale:** Prioritize a clean, high-contrast palette. Background `#F8F9FA`, main text `#1A1A1A`. Accentuate using subtle grayscale levels (`text-gray-400`, `text-gray-500`).
3. **Interactive Grayscale Transition:** Images should render in grayscale with high contrast by default (`filter grayscale contrast-110`). On hover, transition them smoothly to full color (`group-hover:grayscale-0`).
4. **Interactive Hover States:** Standard components should use elegant transitions (`transition-all duration-300`, `group-hover:border-black`, subtle hardware-accelerated scaling up to `1.03` or `1.05`).

---

## 4. Engineering & Code Standards

### Strict Type Safety
- **No `any`:** Always define precise TypeScript types. Interface templates are declared in `src/types.ts`.
- **Data Extensibility:** If you add new portfolio metrics, projects, services, or work experiences, ensure you add them to `src/data.ts` adhering strictly to the interfaces defined in `src/types.ts`.
- **Suppressing Warnings:** Never suppress linter rules, type checking, or compile-time warnings. Use explicit typescript declarations.

### Smooth Scroll Implementation
Anchor navigation scroll offsets are handled programmatically to avoid being covered by the sticky navbar. Standardize on the following formula for scrolling offsets:
```typescript
const offset = 80; // height of floating navigation
const bodyRect = document.body.getBoundingClientRect().top;
const elementRect = element.getBoundingClientRect().top;
const elementPosition = elementRect - bodyRect;
const offsetPosition = elementPosition - offset;

window.scrollTo({
  top: offsetPosition,
  behavior: 'smooth'
});
```

### Code Splitting & Modularity
- Keep `App.tsx` clean. It should only manage top-level page state, the 3D scroll presets controller, and serve as the main page shell.
- All discrete pages or layouts must be isolated as self-contained React functional components in `src/components/`.

---

## 5. Potential AI / Server Extensions

If integrating Server-Side Gemini API or Express:
- **API Setup:** Place any backend controllers inside an Express `server.js` or separate folder. Ensure `server.js` is cleaned up correctly during builds (as defined in the package `"clean"` script).
- **Credentials:** Secure your `GEMINI_API_KEY` inside `.env.local` or environment variables. Do **not** commit keys or `.env` files to git.
- **SDK Usage:** Leverage the new `@google/genai` library for seamless interaction with Gemini models. Maintain robust error handling and fallbacks for when API keys are missing or invalid.
