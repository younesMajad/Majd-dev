import { Project, Service, Experience, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-nextjs',
    title: 'E-Commerce Store',
    category: 'Development',
    description: 'A production-ready eCommerce platform with Supabase backend, Zustand cart persistence, and AI-powered features.',
    longDescription: 'A modern, full-stack e-commerce platform built with Next.js 16, React 19, and Supabase. Features include product catalog with advanced filtering, user authentication via Supabase (Email, Magic Link, Google OAuth), persistent cart state with Zustand, and a complete checkout flow. The platform emphasizes performance with server-side rendering, type safety with TypeScript and Zod validation, and smooth animations powered by Framer Motion.',
    image: '/images/project-ecommerce.png',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Zustand', 'Framer Motion'],
    client: 'Personal Project',
    year: '2026',
    link: 'https://github.com/younesMajad/Ecommerce-nextjs',
    role: 'Full-Stack Developer',
    challenge: 'Building a scalable e-commerce solution with real-time inventory, secure authentication, and seamless cart persistence across sessions while maintaining excellent performance.',
    solution: 'Leveraged Supabase for backend infrastructure including auth and database, implemented Zustand for client-side state management with persistence, and used Next.js App Router for optimal rendering and routing.'
  },
  {
    id: 'beirouk-agency',
    title: 'Beirouk Agency',
    category: 'Branding',
    description: 'A modern, responsive agency website with theme support, interactive charts, and accessible UI components.',
    longDescription: 'A polished agency website built with Next.js 16, React 19, and Tailwind CSS v4. The project delivers a fast, accessible, and visually appealing experience with mobile-first design, dark/light theme support via next-themes, smooth Framer Motion animations, and accessible components powered by Radix UI. Includes form validation with React Hook Form & Zod, interactive data visualizations with Recharts, and Vercel Analytics integration.',
    image: '/images/beirouk.png',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Framer Motion', 'Recharts'],
    client: 'Beirouk',
    year: '2026',
    link: 'https://beirouk-agency-nyt5ed6m5-younes-projects-7f72d052.vercel.app/',
    role: 'Front-End Developer',
    challenge: 'Creating a highly accessible, theme-aware agency site that maintains visual polish across devices while integrating complex interactive components like charts and forms.',
    solution: 'Built a component-driven architecture using Radix UI primitives for accessibility, implemented theme switching with next-themes, and used Recharts for data visualization with consistent styling via Tailwind CSS v4.'
  },
  {
    id: 'socio-space-travel',
    title: 'Socio Space Travel Booking',
    category: 'Development',
    description: 'A high-fidelity travel booking platform with 3D scrolling, real-time price alerts, and AI itinerary planning.',
    longDescription: 'A premium travel booking and itinerary planner featuring flight and hotel comparison across 6 destinations (Tokyo, Paris, Bali, Rome, New York, Iceland). Built with interactive 3D scrolling, real-time budget price alerts with a volatility ticker simulator that checks every 15 seconds, and an AI-powered itinerary planner using Google Gemini that generates custom 1-7 day travel plans. Includes a complete booking checkout flow with a minimalist, luxury aesthetic.',
    image: '/images/socio-space.png',
    tags: ['TypeScript', 'Vite', 'Google Gemini AI', '3D Graphics', 'Real-time Data'],
    client: 'Personal Project',
    year: '2026',
    link: 'https://github.com/younesMajad/socio-space-travel-booking',
    role: 'Full-Stack Developer',
    challenge: 'Building a visually immersive travel platform that combines 3D scroll interactions, real-time price monitoring, and AI-generated itineraries without sacrificing performance or usability.',
    solution: 'Implemented a custom 3D scroll engine for immersive destination browsing, integrated Google Gemini AI for dynamic itinerary generation, and built a real-time price monitoring system with WebSocket-style polling for live budget alerts.'
  },
  {
    id: 'asil-luxury',
    title: 'ASIL Luxury Agency',
    category: 'Branding',
    description: 'A premium luxury agency website with refined aesthetics, video integration, and elegant typography.',
    longDescription: 'A premium luxury agency website crafted for the ASIL brand. The site emphasizes sophisticated visual storytelling through full-screen video integration, refined typography, and a muted luxury color palette. Built with Next.js and Tailwind CSS, it delivers an immersive browsing experience with smooth page transitions, high-quality imagery, and meticulous attention to spacing and visual hierarchy that reflects the brand\'s premium positioning.',
    image: 'https://raw.githubusercontent.com/younesMajad/Asil/main/public/villa-atlas.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Video Integration', 'Luxury UI'],
    client: 'ASIL',
    year: '2026',
    link: 'https://asilbrief.vercel.app',
    role: 'Front-End Developer',
    challenge: 'Translating a premium luxury brand identity into a digital experience that feels as refined and exclusive as the physical brand, with seamless video integration and elegant motion.',
    solution: 'Developed a cinematic layout system with full-bleed video backgrounds, custom typography scaling, and subtle scroll-triggered transitions that let the brand imagery and content breathe while maintaining a sense of luxury.'
  },
  {
    id: 'client-portfolio-site',
    title: 'Client Portfolio',
    category: 'Development',
    description: 'A personal portfolio website built for a friend to showcase projects, skills, and contact information.',
    longDescription: 'A clean, modern portfolio website built with Next.js for a friend to showcase their work, skills, and contact information. The site features a responsive layout, smooth page transitions, project gallery with filtering, and a contact section. Built with a focus on performance, SEO optimization, and mobile-first design principles to ensure the portfolio looks great on all devices.',
    image: 'https://raw.githubusercontent.com/younesMajad/client-portfolio/main/public/labbar.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'SEO'],
    client: 'Friend / Colleague',
    year: '2026',
    link: 'https://younesmajad.github.io/client-portfolio/',
    role: 'Full-Stack Developer',
    challenge: 'Creating a versatile, easy-to-customize portfolio template that showcases work effectively while being simple for the client to maintain and update.',
    solution: 'Built a modular Next.js application with reusable components, clean content sections for projects and skills, and responsive layouts that adapt elegantly from mobile to desktop.'
  },
  {
    id: 'boxing-platform',
    title: 'Boxing Platform',
    category: 'Development',
    description: 'A boxing content platform with fighter profiles, match highlights, news, and training resources.',
    longDescription: 'A comprehensive boxing content platform delivering fighter profiles, match highlights, news articles, and training resources in a fast, user-friendly interface. Built with Next.js and modern UI components, the site prioritizes content discoverability and visual impact with high-contrast imagery, card-based layouts, and responsive grids. Features include category-based navigation, search functionality, and optimized image loading for performance.',
    image: '/images/gym.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Content Platform'],
    client: 'Personal Project',
    year: '2026',
    link: 'https://boxing-5w43.vercel.app/',
    role: 'Full-Stack Developer',
    challenge: 'Building a content-rich platform that serves diverse boxing content — fighter data, match highlights, news, and training guides — in a fast, visually engaging layout that works across all devices.',
    solution: 'Implemented a card-based content architecture with category filtering, used Radix UI for accessible interactive components, and optimized image delivery with responsive loading strategies for fast page performance.'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Designing premium digital interfaces that balance visual elegance with flawless usability.',
    iconName: 'LayoutTemplate',
    features: [
      'Interactive Figma prototypes',
      'High-end typography and layouts',
      'Responsive design systems',
      'Tactile micro-interactions'
    ]
  },
  {
    id: 'front-end',
    title: 'Web Development',
    description: 'Translating visual concepts into robust, performant React and TypeScript codebases.',
    iconName: 'Code',
    features: [
      'Clean modular architecture',
      'Stunning Motion animations',
      'SEO & performance optimization',
      'WebGL & Interactive Canvas'
    ]
  },
  {
    id: 'full-stack ',
    title: 'Brand Strategy',
    description: 'Crafting memorable visual identities and guidelines that establish deep luxury positioning.',
    iconName: 'Sparkles',
    features: [
      'Visual identity systems',
      'Tactile digital guidelines',
      'Editorial style design',
      'Positioning & art direction'
    ]
  },
  {
    id: 'interaction',
    title: 'Interaction Design',
    description: 'Breathing life into applications through state-driven motion, transitions, and hover effects.',
    iconName: 'MousePointerClick',
    features: [
      'Scroll-triggered sequences',
      'Complex layout transitions',
      'Custom physics/gravity effects',
      'Haptic hover feedbacks'
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'lead-ux & Creative UI/UX Designer',
    role: 'Lead UX Engineer & Front-End Architect',
    duration: '2024 - 2025',
    description: 'Directing the visual identity and UI infrastructure for core product offerings. Engineered a multi-platform design token system and led the rebuild of enterprise analytical dashboards, improving application loading speeds by 42%.',
    skills: ['HTML ','CSS',  'JavaScript', 'Tailwind CSS', 'D3.js', 'Figma' , 'banana ']
  },
  {
    id: 'Full stack developer ',
    role: ' Web Developer',
    duration: '2025 - Present',
    description: 'Crafted high-performance marketing landing pages, interactive product visualizers, and customized dashboard widgets. Collaborated closely with executive designers to introduce interactive canvas motion frameworks and modular component libraries.',
    skills: ['MongoDB','ReactJS', 'NodeJS','ExpressJS', 'typescript', 'Postgres', 'GSAP', 'Framer Motion', 'TailwindCss']
  },

];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev-1',
    name: 'maryam',
    role: 'CEO & Co-founder',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'Majd completely reimagined our digital presence. He has a rare ability to bridge the gap between classical luxury typography and cutting-edge interactive technology. The level of detail in his layout designs is absolute perfection.',
    rating: 5
  },
  {
    id: 'rev-2',
    name: 'Idris ',
    role: 'Social Media Management ',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'Working with Majd on our analytical suite was a masterclass in collaboration. He brought clean, high-performance TypeScript components and beautiful animations that elevated our entire user experience. Highly recommended.',
    rating: 5
  },
  {
    id: 'rev-3',
    name: 'Sarah ',
    role: 'Design Director',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'Majd is a designer who codes and a coder who designs. His dedication to visual rhythm, crisp border grids, and smooth interaction states sets a new gold standard for front-end craftsmanship. Absolute professional.',
    rating: 5
  }
];
