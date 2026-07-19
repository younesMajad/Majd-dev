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

## 4. Engineering & Code Standards

### Strict Type Safety
- **No `any`:** Always define precise TypeScript types. Interface templates are declared in `src/types.ts`.
- **Data Extensibility:** If you add new portfolio metrics, projects, services, or work experiences, ensure you add them to `src/data.ts` adhering strictly to the interfaces defined in `src/types.ts`.
- **Suppressing Warnings:** Never suppress linter rules, type checking, or compile-time warnings. Use explicit typescript declarations.



### Code Splitting & Modularity
- Keep `App.tsx` clean. It should only manage top-level page state, the 3D scroll presets controller, and serve as the main page shell.
- All discrete pages or layouts must be isolated as self-contained React functional components in `src/components/`.
