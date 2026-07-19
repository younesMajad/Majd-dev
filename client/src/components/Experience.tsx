import { EXPERIENCE } from '../data';
import { motion } from 'motion/react';
import { Calendar, Briefcase, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-gray-200 relative z-10">
      <div className="container max-w-4xl mx-auto px-6">
        
        {/* Title block */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">TIMELINE</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight">
            Professional Journey.
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-gray-200 ml-4 md:ml-8 pl-8 md:pl-12 flex flex-col gap-12 text-left">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Connector Indicator Node */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 h-6 w-6 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center text-gray-400 group-hover:text-black group-hover:border-black transition-colors duration-300">
                <Briefcase className="h-2.5 w-2.5" />
              </div>

              {/* Card content */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-gray-800 group-hover:text-black transition-colors">
                      {exp.role}
                    </h3>

                  </div>
                  
                  {/* Duration Label */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-200 bg-white text-gray-500 font-mono text-[10px] uppercase tracking-wider self-start md:self-auto shadow-xs">
                    <Calendar className="h-3 w-3" /> {exp.duration}
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed max-w-3xl mt-1 font-sans">
                  {exp.description}
                </p>

                {/* Technical Skills Pills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.skills.map(skill => (
                    <span 
                      key={skill} 
                      className="text-[10px] font-mono text-gray-600 bg-gray-50 hover:bg-gray-100 px-2.5 py-1 border border-gray-200 rounded font-semibold transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
