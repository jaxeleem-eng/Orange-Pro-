import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "COO",
    company: "Global Banking Corp",
    content: "OrangePro's AI integration transformed our workflow. Approval times dropped from days to hours, and our team is more productive than ever.",
    rating: 5,
  },
  {
    name: "David Miller",
    role: "VP of Engineering",
    company: "TechCorp",
    content: "The efficiency audits identified bottlenecks we didn't even know existed. Our ROI has been incredible, and the implementation was seamless.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Supply Chain Director",
    company: "Logistics Pro",
    content: "The predictive models they built for our inventory management cut waste by 30%. A true game-changer for our logistics operations.",
    rating: 5,
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 relative z-10 border-t border-white/5 bg-white/[0.02]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-primary/60"></span>
            <span className="text-primary tracking-widest uppercase text-xs font-semibold">
              Client Success
            </span>
            <span className="h-[1px] w-12 bg-primary/60"></span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Trusted by <span className="text-primary">Industry Leaders</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 border border-white/10 bg-black/40 backdrop-blur-sm hover:bg-black/60 transition-all duration-500 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed font-light mb-8 italic group-hover:text-gray-300 transition-colors">
                "{testimonial.content}"
              </p>
              
              <div className="mt-auto">
                <p className="text-white font-medium">{testimonial.name}</p>
                <p className="text-primary text-sm uppercase tracking-wider mt-1">
                  {testimonial.role} <span className="text-gray-600 mx-1">|</span> {testimonial.company}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary/50 group-hover:w-full transition-all duration-700 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
