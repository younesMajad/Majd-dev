import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: '02+', label: 'Years Experience', detail: 'In product architecture & brand design' },
    { value: '10+', label: 'Delivered Projects', detail: 'Responsive web apps & design systems' },
    { value: '99%', label: 'Success Satisfaction', detail: 'Five-star reviews from world clients' },
    { value: '24k', label: 'Hours Crafted', detail: 'Designing and polishing pristine code' },
  ];

  return (
    <section className="py-12 border-b border-gray-200 bg-white relative z-10">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-start text-left border-l border-gray-200 pl-6 relative group"
            >
              {/* Subtle hover timeline bullet */}
              <div className="absolute top-2 left-0 h-4 w-[1px] bg-gray-300 transition-all duration-300 group-hover:bg-black group-hover:h-8" />
              
              <div className="font-display font-bold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight leading-none">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-gray-400 mt-2 font-bold">
                {stat.label}
              </div>
              <div className="text-gray-500 text-xs mt-1 leading-relaxed max-w-[160px]">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
