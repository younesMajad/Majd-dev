import { Project, Service, Experience, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'E-commerce website ',
    title: 'E-commerce website ',
    category: 'Development',
    description: 'An AI-powered real-time data visualizer with dynamic widget layouts and canvas animations.',
    longDescription: 'Nexus is a comprehensive analytical platform designed for high-scale enterprise operations. It integrates real-time telemetry pipelines, custom WebGL canvas charts, and modular grids to deliver millisecond-level responsiveness. The project required deep optimization of React rendering cycles and heavy leverage of memory-efficient data structures.',
    image: 'src/assets/images/project-ecommerce.png',  
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    client: 'Zenith Labs Inc.',
    year: '2025',
    link: '#',
    role: 'E-commerce website ',
    challenge: 'Handling over 50,000 real-time data points per second with complex mathematical aggregations, without causing lag or frame drops in browser animations.',
    solution: 'Implemented Web Workers to deserialize and aggregate data off the main thread, utilizing SharedArrayBuffers and HTML5 Canvas for ultra-fast rendering.'
  },
  {
    id: 'Beirouk',
    title: 'start up company ',
    category: 'Branding',
    description: 'A premium, high-contrast visual guideline and interactive digital stylebook for a luxury brand.',
    longDescription: 'Aurelia is a luxury Swiss watch brand targeting next-generation collectors. We crafted a highly editorial visual system centered on timeless geometric harmony, spacious off-white canvases, and delicate dark-chocolate typography. The project delivered a full interactive brand portal with live-updating asset downloads.',
    image: '/src/assets/images/beirouk.png',
    tags: [ 'Brand Strategy', 'Typography', 'Illustrator'],
    client: 'services ',
    year: '2025',
    link: '#',
    role: 'Lead Brand Strategist & UI Designer',
    challenge: 'Translating a 150-year heritage of physical watchcraft into a modern, fluid digital design system that feels premium and tactile.',
    solution: 'Established a layout style governed by the Golden Ratio, using sharp editorial grid dividers, micro-interactions, and high-fidelity video loops of watch movements.'
  },
  {
    id: 'ethera-app',
    title: 'Ethera Collaborative Canvas',
    category: 'Design',
    description: 'A responsive collaborative workspace with fluid drag-and-drop mechanics and spatial layout tools.',
    longDescription: 'Ethera is a virtual whiteboard tool tailored for distributed design teams. It emphasizes absolute speed, intuitive gesture control, and spatial layout engines. Built with canvas rendering, it supports real-time multi-user cursor tracking and dynamic physics-based connectors.',
    image: 'https://picsum.photos/seed/creative/800/600',
    tags: ['UI/UX Design', 'Figma', 'Interaction Design', 'Motion Design'],
    client: 'Ethera Workspace Ltd.',
    year: '2024',
    link: '#',
    role: 'Senior Interaction Designer',
    challenge: 'Designing a highly functional infinite canvas that remains perfectly intuitive on mobile touch targets while supporting complex click/drag states on desktop.',
    solution: 'Created a customized gesture engine that translates touch pinch-to-zoom and multi-finger pans, paired with adaptive toolbars that slide out of focus during deep work.'
  },
  {
    id: 'Gym',
    title: 'Nova Editorial Landing Page',
    category: 'Development',
    description: 'A typographic-first, grid-aligned promotional landing page with high-performance scroll physics.',
    longDescription: 'Nova is a modern web experiment celebrating swiss minimalism. We discarded standard templates, utilizing strict border grids, large grotesque display typography, and asymmetrical layouts. The page features smooth scroll-triggered scroll-sections and fluid image zoom sequences.',
    image: '/src/assets/images/gym.png',
    tags: ['React', 'Motion', 'Tailwind CSS', 'Vite'],
    client: 'Nova Lab',
    year: '2023',
    link: '#',
    role: 'Front-End Engineer',
    challenge: 'Achieving consistent 60fps scroll transitions and heavy imagery lazy-loading across all modern desktop and mobile browsers.',
    solution: 'Utilized Motion layout orchestrations and CSS hardware acceleration, disabling active JavaScript scroll listners in favor of native CSS scroll-driven animations.'
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
    skills: ['MongoDB','ReactJS', 'NodeJS','ExpressJS', 'typescript' , '' , 'Postgres', 'GSAP', 'Framer Motion', 'TailwindCss']
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
