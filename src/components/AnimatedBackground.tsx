import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0A0A0A] pointer-events-none">
      {/* Static Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 107, 0, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 0, 0.5) 1px, transparent 1px)`, 
          backgroundSize: '80px 80px' 
        }}
      />

      {/* Animated Glows */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full"
      />

      {/* Radial overlay to darken edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#0A0A0A_80%)]" />
    </div>
  );
}
