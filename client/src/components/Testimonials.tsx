import { TESTIMONIALS } from '../data';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 border-b border-gray-200 bg-white/40 relative z-10">
      <div className="container max-w-5xl mx-auto px-6">
        
        {/* Title header */}
        <div className="flex flex-col items-start text-left mb-16">
          <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">REVIEWS</span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight">
            Kind Words From Clients.
          </h2>
        </div>

        {/* Testimonials Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-[32px] border border-gray-200 bg-white p-8 text-left flex flex-col justify-between hover:border-black shadow-sm transition-all duration-300"
            >
              {/* Quote icon banner decoration */}
              <div className="absolute top-6 right-8 text-gray-100 group-hover:text-gray-200 transition-colors duration-300">
                <Quote className="h-8 w-8" />
              </div>

              {/* Review Text */}
              <div className="flex flex-col gap-6">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-black text-black" />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed italic font-sans">
                  "{review.text}"
                </p>
              </div>

              {/* Client Info Block */}
              <div className="flex items-center gap-4 mt-8 border-t border-gray-100 pt-6">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-gray-200 bg-gray-50">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover filter grayscale contrast-110"
                  />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs text-gray-800 group-hover:text-black transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mt-0.5 font-bold">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
