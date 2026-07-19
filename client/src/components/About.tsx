import { Download, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const highlights = [
  { icon: Briefcase, label: 'Experience', value: '2+ Years' },
  { icon: GraduationCap, label: 'Education', value: 'CS Graduate' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#F8F9FA]" />
        <div className="absolute inset-0 opacity-[0.3] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 max-w-[40px] bg-gray-300" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 font-bold">
              About Me
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#1A1A1A] tracking-tighter leading-tight">
            The person behind <br className="hidden md:block" />
            <span className="italic font-serif font-light text-gray-400">the pixels.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left Column: Bio Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-7 flex flex-col gap-6"
          >
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-sans">
              I'm <span className="font-semibold text-[#1A1A1A]">Majd</span>, a multidisciplinary
              developer and designer who thrives at the intersection of clean engineering and refined
              visual design. I believe great digital products are born from obsessive attention to
              detail, rigorous code architecture, and an unwavering commitment to simplicity.
            </p>
            <p className="text-gray-500 text-base leading-relaxed font-sans">
              My journey started with curiosity about how websites are built, and it quickly evolved
              into a deep passion for crafting performant, beautiful web experiences. From building
              full-stack applications with React and Node.js to designing brand systems and editorial
              layouts, I approach every project with the same philosophy: <span className="italic font-serif text-gray-600">less is more, but better.</span>
            </p>
            <p className="text-gray-500 text-base leading-relaxed font-sans">
              When I'm not writing code or pushing pixels, you'll find me exploring new design
              trends, experimenting with creative coding, and constantly pushing the boundaries of
              what's possible on the web.
            </p>

            {/* Download Resume Button */}
            <div className="mt-4">
              <a
                href="/resume.pdf"
                download="Majd_Resume.pdf"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-black text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-gray-800 transition-all duration-300 shadow-sm cursor-pointer"
              >
                <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Column: Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-5 grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                className="group p-5 rounded-2xl border border-gray-200 bg-white hover:border-black transition-all duration-300 cursor-default"
              >
                <item.icon className="h-4 w-4 text-gray-400 group-hover:text-black transition-colors duration-300 mb-3" />
                <div className="font-mono text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                  {item.label}
                </div>
                <div className="font-display font-semibold text-sm text-[#1A1A1A]">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
