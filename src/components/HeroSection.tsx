import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CodeRain } from "./CodeRain";

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center px-5 md:px-6 pt-24 md:pt-20 overflow-visible bg-[#0A0A0A] z-10">
      <div className="container mx-auto max-w-[1200px] relative z-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl space-y-10"
        >
          <motion.div variants={item} className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-10 top-1/2 -translate-y-1/2 w-[520px] h-[260px] pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(255, 107, 0, 0.10) 0%, rgba(255, 107, 0, 0) 70%)",
                filter: "blur(38px)",
              }}
            />
            <h1 className="text-[42px] md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              We Build the <span className="text-primary">AI Infrastructure</span> Your Business Actually Needs
            </h1>
          </motion.div>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-[#AAAAAA] leading-relaxed max-w-2xl"
          >
            OrangePro helps companies across every industry integrate AI to cut costs, automate operations, and scale without the complexity.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              to="/#contact"
              className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all text-lg w-full sm:w-auto text-center"
            >
              Book a Free Audit
            </Link>
            <a
              href="#how-it-works"
              className="border border-[#222222] text-white px-8 py-4 rounded-lg font-bold hover:bg-white/5 transition-all text-lg w-full sm:w-auto text-center"
            >
              See How It Works
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0A0A]">
        <div 
          className="absolute inset-0 z-10 opacity-40"
          style={{ 
            backgroundColor: "#0A0A0A",
            backgroundImage: "radial-gradient(circle, #222222 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }}
        />
        
        <CodeRain />
      </div>
    </section>
  );
}
