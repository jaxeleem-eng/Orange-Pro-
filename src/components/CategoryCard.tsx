import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

interface CategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function CategoryCard({ icon, title, description }: CategoryCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative h-full flex flex-col justify-between border border-[#222222] bg-[#141414] p-8 rounded-lg hover:-translate-y-2 hover:bg-[#1A1A1A] transition-all duration-500 ease-in-out"
      onMouseMove={handleMouseMove}
    >
      {/* Orange glow spotlight on hover */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 rounded-lg"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 107, 0, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* Subtle bottom border glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10 space-y-6">
        <div className="text-primary">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold tracking-tight text-white">
          {title}
        </h3>
        
        <p className="text-[#888888] text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
