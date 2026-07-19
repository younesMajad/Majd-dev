import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// Define the available 3D styles
export type Scroll3DPreset = 'cylinder' | 'depth' | 'book' | 'none';

interface Scroll3DSectionProps {
  children: React.ReactNode;
  preset: Scroll3DPreset;
}

export function Scroll3DSection({ children, preset }: Scroll3DSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track viewport relative scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Preset configuration matrices
  const rotateXRange = preset === 'cylinder' ? [15, 0, 0, -15] 
                     : preset === 'book' ? [8, 0, 0, -8]
                     : [0, 0, 0, 0];

  const rotateYRange = preset === 'book' ? [12, 0, 0, -12] 
                     : [0, 0, 0, 0];

  const scaleRange = preset === 'cylinder' ? [0.94, 1, 1, 0.94]
                   : preset === 'depth' ? [0.8, 1, 1, 0.8]
                   : preset === 'book' ? [0.95, 1, 1, 0.95]
                   : [1, 1, 1, 1];

  const opacityRange = preset === 'depth' ? [0.05, 1, 1, 0.05]
                     : [0.15, 1, 1, 0.15];

  const zRange = preset === 'cylinder' ? [-80, 0, 0, -80]
               : preset === 'depth' ? [-250, 0, 0, -250]
               : preset === 'book' ? [-40, 0, 0, -40]
               : [0, 0, 0, 0];

  // Map progress seamlessly to values
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 2.7, 1], rotateXRange);
  const rotateY = useTransform(scrollYProgress, [0, 0.3, 2.7, 1], rotateYRange);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], scaleRange);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], opacityRange);
  const z = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], zRange);

  if (preset === 'none') {
    return <div ref={containerRef} className="w-full h-full">{children}</div>;
  }

  return (
    <div 
      ref={containerRef} 
      className="relative w-full overflow-visible py-4"
      style={{ perspective: "1500px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          opacity,
          z,
          transformStyle: "preserve-3d"
        }}
        className="w-full h-full origin-center will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

interface Scroll3DContainerProps {
  children: React.ReactNode;
  preset: Scroll3DPreset;
}

export default function Scroll3DContainer({ children, preset }: Scroll3DContainerProps) {
  return (
    <div className="w-full overflow-x-hidden" style={{ perspective: "1500px" }}>
      {React.Children.map(children, (child) => {
        if (!child) return null;
        return <Scroll3DSection preset={preset}>{child}</Scroll3DSection>;
      })}
    </div>
  );
}
