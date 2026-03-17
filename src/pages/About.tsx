import { PageLayout } from "../components/PageLayout";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  const values = [
    { title: "Precision", desc: "Every algorithm we deploy is calibrated for maximum impact." },
    { title: "Scalability", desc: "Solutions that grow as fast as your ambition." },
    { title: "Innovation", desc: "Pushing the boundaries of what's possible with AI." },
    { title: "Security", desc: "Enterprise-grade protection for your most sensitive data." },
  ];

  return (
    <PageLayout 
      title="About OrangePro" 
      subtitle="We are the architects of the new digital efficiency. A collective of engineers, data scientists, and strategists dedicated to upgrading the world's business infrastructure."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-light text-white">Our Mission</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              At OrangePro, we believe that efficiency is the ultimate competitive advantage. 
              Our mission is to democratize access to advanced AI tools, allowing businesses of all sizes 
              to operate with the speed and precision of tech giants.
            </p>
            <p className="text-gray-400 font-light leading-relaxed">
              We don't just build software; we build intelligence into the very fabric of your operations. 
              From automating mundane tasks to predicting market trends, our solutions are designed to 
              free your human talent to focus on creativity and strategy.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-light text-white">Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 10 }}
                  className="border-l border-white/10 pl-6 py-2 hover:border-primary transition-colors duration-300"
                >
                  <h4 className="text-xl text-white mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-500">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-lg blur-2xl opacity-50" />
          <div className="relative border border-white/10 bg-black/40 backdrop-blur-md p-8 md:p-12 space-y-8">
            <h3 className="text-2xl font-light text-white mb-8">Why Choose Us?</h3>
            
            {[
              "Proprietary AI Models trained on industry-specific data",
              "24/7 System Monitoring and Optimization",
              "Seamless Integration with existing tech stacks",
              "Dedicated Support Team of AI Specialists"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="mt-1 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                  <Check className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-300 font-light group-hover:text-white transition-colors">{item}</p>
              </div>
            ))}

            <div className="pt-8 mt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-4xl font-light text-white">98%</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Client Retention</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-white">10x</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">ROI Average</p>
                </div>
                <div>
                  <p className="text-4xl font-light text-white">50+</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Enterprise Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
