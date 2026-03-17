import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function CategoryCard({ icon, title, description, delay = 0 }: CategoryCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative h-full flex flex-col justify-between border-l border-white/10 bg-black/40 backdrop-blur-sm p-8 hover:bg-black/60 transition-colors duration-500"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle spotlight that only appears on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 107, 0, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 space-y-6">
        <div className="flex justify-between items-start">
           <div className="text-gray-500 group-hover:text-primary transition-colors duration-300">
             {icon}
           </div>
           <ArrowUpRight className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
        
        <h3 className="text-2xl font-light tracking-tight text-white group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        
        <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-400 transition-colors duration-300">
          {description}
        </p>
      </div>

      <div className="relative z-10 mt-8">
        <div className="h-[1px] w-0 bg-primary/50 group-hover:w-full transition-all duration-700 ease-out" />
      </div>
    </motion.div>
  );
}
