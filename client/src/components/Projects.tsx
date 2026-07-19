import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ArrowUpRight, X, Sparkles, Briefcase, Calendar, User, Code } from 'lucide-react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Design' | 'Development' | 'Branding'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: ('All' | 'Design' | 'Development' | 'Branding')[] = ['All', 'Design', 'Development', 'Branding'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-24 border-b border-gray-200 relative z-10">
      <div className="container max-w-5xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">PORTFOLIO</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight">
              Selected Creations.
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? 'bg-black text-white font-semibold'
                    : 'text-gray-500 hover:text-black bg-white hover:bg-gray-50 border border-gray-200 shadow-xs'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative cursor-pointer flex flex-col items-start"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Frame with Double Border */}
                <div className="w-full aspect-[4/3] rounded-[32px] overflow-hidden border border-gray-200 bg-white p-2 transition-all duration-500 group-hover:border-black shadow-xs">
                  <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                    />
                    
                    {/* Dark gradient vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Hover detail slide-in trigger */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="font-mono text-[9px] tracking-widest text-black uppercase px-2.5 py-1 rounded bg-white/95 border border-gray-200">
                        {project.category}
                      </span>
                      <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center shadow-lg transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Typography info */}
                <div className="mt-4 w-full text-left flex justify-between items-start">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                      {project.year} • {project.category}
                    </span>
                    <h3 className="font-display font-bold text-lg text-gray-800 group-hover:text-black transition-colors mt-0.5">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Study Detail Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white border border-gray-200 w-full max-w-4xl rounded-[32px] overflow-hidden shadow-2xl relative my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-50 border border-gray-200 hover:border-black text-gray-500 hover:text-black z-10 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Cover Image Frame */}
              <div className="relative w-full h-64 md:h-80 bg-gray-100 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 filter contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                
                {/* Meta Header */}
                <div className="absolute bottom-6 left-8 right-8 text-left">
                  <span className="font-mono text-xs text-gray-800 uppercase tracking-widest bg-white/90 px-3 py-1 rounded-full border border-gray-200 inline-block mb-3 font-semibold">
                    {selectedProject.category}
                  </span>
                  <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] tracking-tight">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Case Study Grid Content */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 max-h-[calc(100vh-22rem)] overflow-y-auto">
                {/* Main description left block */}
                <div className="md:col-span-8 flex flex-col gap-6 text-left">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-gray-400" /> OVERVIEW
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 flex items-center gap-1.5">
                      <Code className="h-3 w-3 text-gray-400" /> THE CHALLENGE
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-gray-400" /> OUR SOLUTION
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Side parameters column */}
                <div className="md:col-span-4 flex flex-col gap-6 text-left border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
                  {/* Client info */}
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold block mb-1">CLIENT</span>
                    <span className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5 text-gray-400" /> {selectedProject.client}
                    </span>
                  </div>

                  {/* Year */}
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold block mb-1">YEAR</span>
                    <span className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-gray-400" /> {selectedProject.year}
                    </span>
                  </div>

                  {/* Role */}
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold block mb-1">ROLE</span>
                    <span className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-gray-400" /> {selectedProject.role}
                    </span>
                  </div>

                  {/* Tags list */}
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 font-bold block mb-2">TECHNOLOGY</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono text-gray-600 bg-gray-50 px-2.5 py-1 border border-gray-200 rounded font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
