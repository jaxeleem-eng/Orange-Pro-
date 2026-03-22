import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <div className="min-h-screen text-white overflow-x-hidden bg-[#0A0A0A] relative">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10 pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-24"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-[#AAAAAA] max-w-2xl leading-relaxed border-l-2 border-primary pl-6">
                {subtitle}
              </p>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
