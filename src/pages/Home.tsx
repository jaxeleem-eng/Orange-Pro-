import { AnimatedBackground } from "../components/AnimatedBackground";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { CategoryCard } from "../components/CategoryCard";
import { Testimonials } from "../components/Testimonials";
import { Brain, Settings, Database, Code, BarChart, Zap } from "lucide-react";

export default function Home() {
  const categories = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Process Automation",
      description: "Eliminate repetitive tasks with intelligent workflows that run 24/7 without error.",
      delay: 0.1,
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "System Management",
      description: "AI-driven monitoring and optimization for your entire software infrastructure.",
      delay: 0.2,
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Business Analytics",
      description: "Deep insights into the ins and outs of your operations to drive strategic growth.",
      delay: 0.3,
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Integration",
      description: "Seamlessly connect disparate tools and platforms with custom AI bridges.",
      delay: 0.4,
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Custom AI Models",
      description: "Tailored machine learning solutions trained specifically on your proprietary data.",
      delay: 0.5,
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficiency Audits",
      description: "Comprehensive analysis of your current stack to identify and fix bottlenecks.",
      delay: 0.6,
    },
  ];

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        
        <section className="py-24 px-4 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Solutions for <span className="text-primary">Modern Business</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                We don't just provide software; we provide intelligence. Transform how your business operates with our suite of AI-powered services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard
                  key={index}
                  icon={category.icon}
                  title={category.title}
                  description={category.description}
                  delay={category.delay}
                />
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      
      <footer className="py-12 border-t border-white/10 bg-black/20 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2024 OrangePro AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
