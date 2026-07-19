import React, { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-4">
      <div 
        className={`max-w-5xl mx-auto rounded-full border border-gray-200/80 bg-white/70 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'py-2 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-gray-300 bg-white/95' : 'py-4 px-6 md:px-8'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="font-display font-extrabold text-lg tracking-tight text-[#1A1A1A] hover:text-black transition-colors flex items-center gap-2"
          >
            MAJD
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-black rounded-full -z-10 border border-black"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="flex items-center gap-1.5 text-xs font-mono tracking-widest uppercase border border-black bg-black text-white hover:bg-gray-800 hover:border-gray-800 transition-all duration-300 px-5 py-2.5 rounded-full"
            >
              Hire Me <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-black transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-white border border-gray-200 rounded-3xl p-6 shadow-2xl z-40 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className={`py-2 text-sm font-mono tracking-wider uppercase border-b border-gray-100 ${
                      isActive ? 'text-black font-semibold' : 'text-gray-500'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="mt-2 w-full flex items-center justify-center gap-2 text-xs font-mono tracking-widest uppercase border border-black bg-black text-white hover:bg-gray-800 py-3 rounded-full transition-all duration-300"
              >
                Hire Me <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
