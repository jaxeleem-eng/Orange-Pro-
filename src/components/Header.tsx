import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Industries", href: "#industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out border-b",
        scrolled 
          ? "bg-[#0A0A0A]/70 backdrop-blur-xl py-3 border-border/50" 
          : "bg-[#0A0A0A]/40 backdrop-blur-md py-6 border-transparent"
      )}
    >
      <div className="container mx-auto px-5 md:px-6 flex items-center">
        <div className="flex-1 flex items-center">
          <Link 
            to="/" 
            className={cn(
              "font-bold tracking-tight text-white hover:opacity-90 transition-all duration-300",
              scrolled ? "text-xl" : "text-2xl"
            )}
          >
            Orange<span className="text-primary">Pro</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-10">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium transition-all duration-300 hover:text-white",
                scrolled ? "text-xs" : "text-sm",
                location.pathname === item.href ? "text-white" : "text-secondary"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex flex-1 justify-end">
          <Link
            to="/contact"
            className={cn(
              "bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 inline-block",
              scrolled ? "px-5 py-2 text-xs" : "px-6 py-2.5 text-sm"
            )}
          >
            Book a Free Audit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-[#0A0A0A] z-[90] flex items-center justify-center pt-20"
          >
            <nav className="flex flex-col items-center gap-8 px-6 w-full max-w-sm">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-2xl font-bold text-white hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Link
                to="/contact"
                className="bg-primary text-white w-full py-4 rounded-lg text-center text-lg font-bold mt-4 hover:bg-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book a Free Audit
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
