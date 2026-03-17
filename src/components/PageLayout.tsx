import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";
import { Header } from "./Header";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed border-l border-primary/50 pl-6">
                {subtitle}
              </p>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </div>
      </main>
      
      <footer className="py-12 border-t border-white/5 bg-black/40 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6 text-center md:text-left text-gray-600 text-xs uppercase tracking-widest">
          <p>© 2024 OrangePro AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
