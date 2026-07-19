import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Scroll3DContainer, { Scroll3DPreset } from './components/Scroll3DWrapper';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [scrollPreset, setScrollPreset] = useState<Scroll3DPreset>('cylinder');

  // Simulate premium layout loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Interactively observe scroll position to trigger navbar state highlights
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Triggers accurately when sections cross the middle of the screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleExploreProjects = () => {
    const element = document.querySelector('#work');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-black selection:text-white">
      {/* Visual Loader Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-[#F8F9FA] z-50 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              {/* Spinning clean minimalist indicator */}
              <div className="relative flex h-10 w-10">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/10 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-10 w-10 border border-neutral-200 bg-white flex items-center justify-center">
                  <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
                </span>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="font-mono text-[16px] uppercase tracking-[0.25em] text-neutral-400 font-bold"
              >
                MAJD  • PORTFOLIO
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Layout App */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Sticky floating glassmorphic navbar */}
          <Navbar activeSection={activeSection} />

          {/* Floating 3D Scroll Preset Controller */}
          <div className="fixed bottom-6 left-6 z-40 hidden md:flex flex-col items-start gap-1.5 font-mono">
            <div className="text-[9px] text-gray-400 font-bold tracking-widest uppercase bg-white/80 px-2.5 py-1 rounded-full border border-gray-100 backdrop-blur-xs shadow-xs">
              3D Scroll Engine
            </div>
  
          </div>

      
          {/* Core Page sections wrapped in 3D perspective scroll engine */}
          <main className="relative z-10 w-full">
            <Scroll3DContainer preset={scrollPreset}>
              {/* Hero Banner Intro */}
              <Hero onExploreProjects={handleExploreProjects} />

              {/* Metric Counters section */}
              <Stats />

              {/* About Me section */}
              <About />

              {/* Filterable projects portfolio */}
              <Projects />

              {/* Modular core services info */}
              <Services />

              {/* Professional work timeline */}
              <Experience />

              {/* Client feedback sliders */}
              <Testimonials />

              {/* High end contact forms */}
              <Contact />
            </Scroll3DContainer>
          </main>
        </motion.div>
      )}
    </div>
  );
}
