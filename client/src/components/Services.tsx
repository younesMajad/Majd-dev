import { SERVICES } from '../data';
import { motion } from 'motion/react';
import { LayoutTemplate, Code, Sparkles, MousePointerClick, HelpCircle } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<any>> = {
  LayoutTemplate,
  Code,
  Sparkles,
  MousePointerClick
};

export default function Services() {
  return (
    <section id="services" className="py-24 border-b border-gray-200 bg-white/40 relative z-10">
      <div className="container max-w-5xl mx-auto px-6">
        
        {/* Header Title Block */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">EXPERTISE</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight">
            How I Can Help You.
          </h2>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, idx) => {
            // Dynamically resolve the Lucide Icon
            const IconComponent = iconMap[service.iconName] || HelpCircle;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-[32px] border border-gray-200 bg-white p-8 text-left transition-all duration-300 hover:border-black hover:shadow-md overflow-hidden flex flex-col justify-between"
              >
                {/* Visual grid blur backdrop decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full pointer-events-none group-hover:bg-gray-100 transition-colors duration-300" />
                
                <div>
                  {/* Icon Circle */}
                  <div className="h-12 w-12 rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center text-gray-500 group-hover:text-black group-hover:border-black group-hover:bg-white transition-all duration-300 mb-6">
                    <IconComponent className="h-5 w-5" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-display font-bold text-xl text-gray-800 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="border-t border-gray-100 pt-6 mt-8">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-gray-400 font-bold mb-3">DELIVERABLES</div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-800 transition-colors">
                        <span className="h-1 w-1 rounded-full bg-gray-300 group-hover:bg-black" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
