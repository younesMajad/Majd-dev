import { ArrowDown, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreProjects: () => void;
}

export default function Hero({ onExploreProjects }: HeroProps) {
  // Infinite marquee elements
  const marqueeItems = [
    'DESIGN', 'DEVELOPMENT', 'INTERACTION', 'BRAND STRATEGY', 
    'CREATIVE DIRECTION', 'UI/UX DESIGN', 'PERFORMANCE ENGINE', 'MINIMALISM'
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden">
      {/* Editorial Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#F8F9FA]" />
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
        {/* Left Column: Bio & Title */}
        <div className="md:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Status indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-800 font-mono text-[10px] uppercase tracking-widest font-semibold shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Hire
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tighter leading-[1.1]"
          >
            I craft digital products with <span className="text-gray-400">clean code</span> & <span className="italic font-serif font-light text-gray-400">classic style.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed font-sans"
          >
            A multidisciplinary designer and front-end developer based in San Francisco. Building refined web architectures governed by visual rhythm, minimalism, and technical precision.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-2"
          >
            <button
              onClick={onExploreProjects}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-gray-800 transition-all duration-300 shadow-sm cursor-pointer"
            >
              Explore Work 
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-800 font-mono text-xs uppercase tracking-wider transition-all duration-300 shadow-xs"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right Column: Premium Interactive Portrait Frame */}
        <div className="md:col-span-5 flex justify-center md:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring', delay: 0.2 }}
            className="relative group cursor-pointer"
          >
            {/* Background absolute layout decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-transparent rounded-[32px] blur-xl opacity-20 group-hover:opacity-35 transition-opacity duration-500" />
            
            {/* Double Border Frame */}
            <div className="relative p-3 rounded-[32px] border border-gray-200 bg-white backdrop-blur-sm shadow-md overflow-hidden transition-all duration-500 group-hover:border-black">
              <div className="relative aspect-square w-64 md:w-72 lg:w-80 rounded-2xl overflow-hidden bg-gray-50">
                <img 
                  src="/src/assets/images/me-2.jpeg" 
                  alt="Portrait" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-110 brightness-95"
                />
                
                {/* Overlay visual border decoration */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Bottom tag inside frame */}
              <div className="mt-4 flex items-center justify-between px-2">
                <div className="text-left">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 font-bold">CREATOR</div>
                  <div className="text-xs font-display font-semibold text-gray-800">Majd</div>
                </div>
                <div className="h-7 w-7 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-black group-hover:border-black transition-all duration-300">
                  <ArrowRight className="h-3.5 w-3.5 -rotate-45" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="w-full bg-white border-y border-gray-200 backdrop-blur-xs py-4 mt-20 overflow-hidden relative z-10 flex items-center select-none">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-content {
            display: flex;
            white-space: nowrap;
            animation: marquee 30s linear infinite;
          }
        `}} />
        <div className="marquee-content gap-16 min-w-full">
          {/* Double array elements to ensure seamless loop */}
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <span 
              key={index} 
              className="text-[10px] font-mono tracking-[0.25em] text-gray-400 hover:text-black transition-colors duration-300 flex items-center gap-3 font-semibold"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-gray-300" />
            </span>
          ))}
        </div>
      </div>

      {/* Bottom anchor for scrolling indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.a 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('#work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="flex flex-col items-center gap-1.5 text-[9px] font-mono tracking-widest text-gray-400 hover:text-black uppercase transition-colors font-bold"
        >
          Scroll Down <ArrowDown className="h-3 w-3 mb-30" />
        </motion.a>
      </div>
    </section>
  );
}
