import { PageLayout } from "../components/PageLayout";
import { motion } from "framer-motion";
import { Settings, Database, Code, Zap, Users, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "AI Strategy & Audit",
      description: "Comprehensive analysis of your current operations to identify high-impact AI opportunities and create a strategic roadmap for implementation.",
      features: ["Operational Review", "ROI Projections", "Risk Assessment", "Implementation Roadmap"]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Workflow Automation",
      description: "End-to-end automation of repetitive business processes using advanced AI agents and intelligent bots to free up your human talent.",
      features: ["Process Mapping", "Bot Development", "Agent Orchestration", "Performance Monitoring"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "AI Tool Integration",
      description: "Seamlessly connecting industry-leading AI tools into your existing software stack to enhance productivity and data flow across your organization.",
      features: ["API Integration", "Custom Connectors", "Data Syncing", "Legacy Support"]
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Custom AI Builds",
      description: "Bespoke AI solutions and proprietary models tailored specifically to your business data, addressing complex challenges unique to your industry.",
      features: ["Model Training", "Custom NLP", "Computer Vision", "Generative AI"]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Staff AI Training",
      description: "Empowering your workforce with the knowledge and skills to leverage AI tools effectively, safely, and creatively in their daily tasks.",
      features: ["Workshops", "Best Practices", "Security Protocols", "Continuous Learning"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Ongoing AI Support",
      description: "Continuous monitoring, maintenance, and optimization of your AI infrastructure to ensure peak performance and long-term scalability.",
      features: ["24/7 Monitoring", "Regular Updates", "Performance Tuning", "Tech Support"]
    },
  ];

  return (
    <PageLayout 
      title="Our Services" 
      subtitle="We offer a comprehensive suite of AI-powered solutions designed to upgrade every aspect of your business operations."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 border border-[#222222] hover:border-primary/50 bg-[#141414] transition-all duration-300 rounded-lg relative overflow-hidden"
          >
            <div className="mb-6">{service.icon}</div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            
            <p className="text-[#AAAAAA] text-base leading-relaxed mb-8 border-b border-[#222222] pb-8">
              {service.description}
            </p>
            
            <ul className="space-y-3">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-sm text-[#888888]">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
