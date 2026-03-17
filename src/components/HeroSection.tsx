import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="container mx-auto max-w-7xl z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-8 space-y-8"
        >
          <motion.div variants={item} className="flex items-center gap-4">
            <span className="h-[1px] w-12 bg-primary/60"></span>
            <span className="text-primary tracking-widest uppercase text-xs font-semibold">
              The Next Evolution
            </span>
          </motion.div>

          <motion.h1 variants={item} className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white leading-[0.9]">
            Orange<span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">Pro</span>
            <br />
            <span className="italic font-thin text-white/50">Intelligence</span>
          </motion.h1>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="lg:col-span-4 space-y-8 pb-4"
        >
          <motion.p
            variants={item}
            className="text-xl text-primary font-bold leading-relaxed border-l-2 border-primary/50 pl-6"
          >
            We architect the invisible infrastructure of tomorrow's businesses. 
            Seamless AI integration, process automation, and systemic efficiency upgrades.
          </motion.p>

          <motion.div variants={item} className="flex gap-6 pt-4 pl-6">
             <Link to="/audit" className="group flex items-center gap-2 text-white hover:text-primary transition-colors uppercase text-sm tracking-widest border-b border-white/20 hover:border-primary pb-1">
               Start Audit
               <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
             </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Chic minimalist grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
      </div>
    </section>
  );
}
