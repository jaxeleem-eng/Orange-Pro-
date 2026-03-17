import { PageLayout } from "../components/PageLayout";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Work() {
  const projects = [
    {
      title: "FinTech Automation",
      client: "Global Banking Corp",
      category: "Process Automation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      description: "Automated 85% of loan processing workflows, reducing approval times from 3 days to 4 hours."
    },
    {
      title: "Supply Chain AI",
      client: "Logistics Pro",
      category: "System Management",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop",
      description: "Implemented predictive inventory management, cutting waste by 30% and optimizing delivery routes."
    },
    {
      title: "Healthcare Data Bridge",
      client: "MedTech Solutions",
      category: "Software Integration",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
      description: "Unified patient records across 5 legacy systems into a single, secure, AI-accessible database."
    },
    {
      title: "Retail Intelligence",
      client: "Fashion Retailer",
      category: "Business Analytics",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
      description: "Deployed computer vision in-store to analyze foot traffic and optimize product placement in real-time."
    }
  ];

  return (
    <PageLayout 
      title="Selected Work" 
      subtitle="A showcase of how we've transformed businesses across industries through intelligent automation and strategic AI deployment."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-6">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
              />
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-primary text-xs uppercase tracking-widest mb-2">{project.category}</p>
                <h3 className="text-3xl font-light text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.client}</p>
              </div>
              <ArrowUpRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            
            <p className="text-gray-400 font-light mt-4 leading-relaxed max-w-md">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-24 text-center">
        <h3 className="text-2xl font-light text-white mb-6">Ready to upgrade your business?</h3>
        <Link 
          to="/contact" 
          className="inline-block border border-white/20 px-8 py-4 text-sm uppercase tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
        >
          Start a Project
        </Link>
      </div>
    </PageLayout>
  );
}
