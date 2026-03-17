import { PageLayout } from "../components/PageLayout";
import { motion } from "framer-motion";
import { Settings, Database, Code, BarChart, Zap, Brain } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Process Automation",
      description: "Our core offering. We identify repetitive, high-volume tasks within your organization and deploy intelligent bots to handle them. From data entry to invoice processing, we free up your human capital.",
      features: ["Workflow Analysis", "Bot Development", "24/7 Execution", "Error Reduction"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "System Management",
      description: "Comprehensive oversight of your digital infrastructure. Our AI monitors server health, application performance, and security threats in real-time, often resolving issues before they impact users.",
      features: ["Proactive Monitoring", "Auto-Scaling", "Security Patching", "Downtime Prevention"]
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Business Analytics",
      description: "Turn raw data into actionable strategy. We implement advanced analytics dashboards that provide deep insights into customer behavior, operational efficiency, and market trends.",
      features: ["Custom Dashboards", "Predictive Modeling", "Real-time Reporting", "Trend Analysis"]
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Software Integration",
      description: "Make your tools talk to each other. We build custom API bridges and middleware to ensure seamless data flow between your CRM, ERP, and other business applications.",
      features: ["API Development", "Legacy System Support", "Data Synchronization", "Platform Migration"]
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Custom AI Models",
      description: "Solutions as unique as your business. We train proprietary machine learning models on your specific data sets to solve complex problems that off-the-shelf AI cannot address.",
      features: ["Model Training", "NLP Solutions", "Computer Vision", "Generative AI"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Efficiency Audits",
      description: "The first step to transformation. Our experts conduct a thorough review of your current technology stack and workflows to identify bottlenecks and opportunities for AI implementation.",
      features: ["Stack Review", "Workflow Mapping", "ROI Calculation", "Roadmap Creation"]
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
            className="group p-8 border border-white/5 hover:border-primary/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 rounded-sm relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              {service.icon}
            </div>
            
            <div className="mb-6">{service.icon}</div>
            
            <h3 className="text-2xl font-light text-white mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8 border-b border-white/10 pb-8">
              {service.description}
            </p>
            
            <ul className="space-y-3">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-wider">
                  <span className="w-1 h-1 bg-primary rounded-full" />
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
