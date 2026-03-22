import { AnimatedBackground } from "../components/AnimatedBackground";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { CategoryCard } from "../components/CategoryCard";
import { Settings, Database, Code, Zap, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Footer } from "../components/Footer";

export default function Home() {
  const location = useLocation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI Strategy & Audit",
      description: "Comprehensive analysis of your current operations to identify high-impact AI opportunities.",
      delay: 0.1,
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Workflow Automation",
      description: "End-to-end automation of repetitive business processes using advanced AI agents.",
      delay: 0.2,
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI Tool Integration",
      description: "Seamlessly connecting industry-leading AI tools into your existing software stack.",
      delay: 0.3,
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom AI Builds",
      description: "Bespoke AI solutions and models tailored to your specific business data and needs.",
      delay: 0.4,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Staff AI Training",
      description: "Empowering your team with the skills to leverage AI tools effectively and safely.",
      delay: 0.5,
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ongoing AI Support",
      description: "Continuous monitoring, maintenance, and optimization of your AI infrastructure.",
      delay: 0.6,
    },
  ];

  const steps = [
    { number: "01", title: "Audit", description: "We deep-dive into your business to find inefficiencies." },
    { number: "02", title: "Strategy", description: "A tailored roadmap for AI implementation." },
    { number: "03", title: "Build", description: "Developing and deploying your AI infrastructure." },
    { number: "04", title: "Scale", description: "Continuous optimization for maximum growth." },
  ];

  const industries = [
    "Retail", "Finance", "Legal", "Healthcare", "Hospitality", 
    "Construction", "Logistics", "Marketing", "HR", "Education",
    "Manufacturing", "Real Estate", "E-commerce", "Travel"
  ];

  const stats = [
    { label: "Saved for Clients", value: "£2M+" },
    { label: "Integrations Delivered", value: "40+" },
    { label: "Avg. Efficiency Gain", value: "60%" },
  ];

  const testimonials = [
    {
      quote:
        "OrangePro completely transformed how our team operates. We've saved over 20 hours a week on admin alone — it's been a game changer.",
      name: "Sarah Mitchell",
      title: "Operations Director, Apex Retail Group",
    },
    {
      quote:
        "We were sceptical about AI at first, but the OrangePro team made the whole process simple and the results spoke for themselves. Costs down 35% in 3 months.",
      name: "James Thornton",
      title: "CEO, Thornton Legal",
    },
    {
      quote:
        "The audit alone was worth its weight in gold. They found inefficiencies we didn't even know existed and built solutions that just work.",
      name: "Priya Sharma",
      title: "Head of Operations, Nova Logistics",
    },
  ];

  const businessOptions = useMemo(
    () => ["Small Business", "Medium Business", "Large Business", "Enterprise"],
    []
  );

  const [form, setForm] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.hash]);

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (!form.fullName.trim()) nextErrors.fullName = "Full Name is required.";
    if (!form.companyName.trim()) nextErrors.companyName = "Company Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email Address is required.";
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.businessType) nextErrors.businessType = "Please select an option.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");
    setStatusMessage("");

    const nextErrors = validate();
    setFormErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");

    try {
      const emailjs = (window as unknown as { emailjs?: { send?: (serviceId: string, templateId: string, params: Record<string, unknown>) => Promise<unknown> } }).emailjs;
      if (!emailjs?.send) {
        setStatus("error");
        setStatusMessage("Something went wrong. Please email us directly at info@orangepro.co.uk");
        return;
      }

      await emailjs.send("service_l2uyrix", "template_enbua0m", {
        from_name: form.fullName,
        company: form.companyName,
        from_email: form.email,
        phone: form.phone || "N/A",
        business_type: form.businessType,
        message: form.message,
      });

      setStatus("success");
      setStatusMessage("Thank you! We'll be in touch within 24 hours.");
      setForm({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        businessType: "",
        message: "",
      });
      setFormErrors({});
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please email us directly at info@orangepro.co.uk");
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden relative">
      <AnimatedBackground />
      <Header />
      
      <main className="relative z-10">
        <HeroSection />
        
        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 px-5 md:px-6">
          <div className="container mx-auto max-w-[1200px]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert AI Services</h2>
              <p className="text-[#888888] max-w-2xl text-lg">
                We provide the technical expertise and strategic vision to transform your business with AI.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <CategoryCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    delay={service.delay}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-32 px-5 md:px-6 border-y border-[#222222] bg-[#111111]">
          <div className="container mx-auto max-w-[1200px]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
              <p className="text-[#888888] max-w-2xl text-lg">
                A clear, proven delivery process designed to move fast without sacrificing quality.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
            >
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-[#222222] z-0" />
              
              {steps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative z-10">
                  <div className="text-primary text-5xl font-bold mb-6 bg-[#111111] inline-block pr-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-[#888888]">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-20 md:py-32 px-5 md:px-6">
          <div className="container mx-auto max-w-[1200px]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Every Industry</h2>
              <p className="text-[#888888] max-w-2xl text-lg">
                AI isn't just for tech companies. We help businesses across all sectors scale efficiently.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="flex flex-wrap justify-start gap-4"
            >
              {industries.map((industry, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="px-6 py-3 rounded-full border border-primary/60 text-white transition-all duration-300 cursor-default bg-[#141414] hover:bg-primary/10 hover:border-primary hover:text-white"
                >
                  {industry}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-20 md:py-32 px-5 md:px-6 border-y border-[#222222]">
          <div className="container mx-auto max-w-[1200px]">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="text-6xl font-bold text-primary mb-4">{stat.value}</div>
                  <div className="text-[#888888] uppercase tracking-widest text-sm font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 md:py-32 px-5 md:px-6">
          <div className="container mx-auto max-w-[1200px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-14"
            >
              <h2 className="text-[42px] font-bold text-white">What Our Clients Say</h2>
              <div className="mt-4 h-px w-16 bg-primary" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {testimonials.map((t) => (
                <motion.div
                  key={t.name}
                  variants={fadeInUp}
                  className="group relative border border-[#222222] border-l-primary/70 bg-[#141414] p-8 rounded-lg transition-all duration-500 ease-in-out hover:-translate-y-1 hover:bg-[#1A1A1A] hover:shadow-[0_0_0_1px_rgba(255,107,0,0.25),0_0_30px_rgba(255,107,0,0.08)] h-full flex flex-col"
                >
                  <div className="flex items-center gap-1 text-primary text-sm mb-6">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>

                  <p className="text-[#AAAAAA] leading-relaxed mb-8 flex-1">
                    “{t.quote}”
                  </p>

                  <div className="pt-6 border-t border-[#222222] mt-auto">
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-[#888888] text-sm mt-1">{t.title}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <div className="px-5 md:px-6">
          <div className="container mx-auto max-w-[1200px]">
            <div className="h-px bg-primary/80" />
          </div>
        </div>

        {/* Final CTA Section */}
        <section className="py-20 md:py-32 px-5 md:px-6">
          <div className="container mx-auto max-w-[1200px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-2xl"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Build a Smarter Business?</h2>
              <p className="text-[#888888] text-xl mb-12">
                Join the forward-thinking companies already using OrangePro to lead their industry.
              </p>
              <Link
                to="/#contact"
                className="bg-primary text-white px-10 py-5 rounded-lg font-bold hover:bg-primary/90 transition-all text-xl inline-block"
              >
                Book a Free Audit
              </Link>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-32 px-5 md:px-6 scroll-mt-28">
          <div className="container mx-auto max-w-[1200px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mb-14"
            >
              <h2 className="text-[42px] font-bold text-white">Contact</h2>
              <div className="mt-4 h-px w-16 bg-primary" />
              <p className="text-[#888888] max-w-2xl text-lg mt-6">
                Book your free audit and we’ll reply within 24 hours.
              </p>
            </motion.div>

            <div className="border border-[#222222] bg-[#141414] rounded-lg p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Full Name</label>
                    <input
                      value={form.fullName}
                      onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
                      className="w-full bg-[#0F0F0F] border border-[#222222] rounded-lg px-4 py-3 text-white placeholder:text-[#666666] focus:outline-none focus:border-primary"
                      placeholder="Your name"
                      required
                    />
                    {formErrors.fullName && <div className="text-red-400 text-sm mt-2">{formErrors.fullName}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Company Name</label>
                    <input
                      value={form.companyName}
                      onChange={(e) => setForm((p) => ({ ...p, companyName: e.target.value }))}
                      className="w-full bg-[#0F0F0F] border border-[#222222] rounded-lg px-4 py-3 text-white placeholder:text-[#666666] focus:outline-none focus:border-primary"
                      placeholder="Your company"
                      required
                    />
                    {formErrors.companyName && <div className="text-red-400 text-sm mt-2">{formErrors.companyName}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Email Address</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                      className="w-full bg-[#0F0F0F] border border-[#222222] rounded-lg px-4 py-3 text-white placeholder:text-[#666666] focus:outline-none focus:border-primary"
                      placeholder="you@company.co.uk"
                      required
                    />
                    {formErrors.email && <div className="text-red-400 text-sm mt-2">{formErrors.email}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">Phone Number (optional)</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-[#0F0F0F] border border-[#222222] rounded-lg px-4 py-3 text-white placeholder:text-[#666666] focus:outline-none focus:border-primary"
                      placeholder="+44 7..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">What best describes your business?</label>
                    <select
                      value={form.businessType}
                      onChange={(e) => setForm((p) => ({ ...p, businessType: e.target.value }))}
                      className="w-full bg-[#0F0F0F] border border-[#222222] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                      required
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      {businessOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {formErrors.businessType && <div className="text-red-400 text-sm mt-2">{formErrors.businessType}</div>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">Tell us about your business and what you'd like help with</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className="w-full bg-[#0F0F0F] border border-[#222222] rounded-lg px-4 py-3 text-white placeholder:text-[#666666] focus:outline-none focus:border-primary min-h-[140px]"
                    placeholder="What are you trying to automate or improve?"
                    required
                  />
                  {formErrors.message && <div className="text-red-400 text-sm mt-2">{formErrors.message}</div>}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Book My Free Audit"}
                  </button>

                  {statusMessage && (
                    <div className={status === "success" ? "text-green-500 font-bold" : status === "error" ? "text-red-400 font-bold" : "text-[#AAAAAA]"}>
                      {statusMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
