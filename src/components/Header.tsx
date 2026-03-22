import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const navigation = [
  { name: "Services", href: "/#services" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Industries", href: "/#industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/#contact" },
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
            style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
            className="hover:opacity-90 transition-opacity duration-300"
          >
            <div style={{ position: "relative", width: 44, height: 44, flexShrink: 0 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  background: "#FF6B00",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 26, fontWeight: 900, color: "#0A0A0A", lineHeight: 1 }}>
                  O
                </span>
              </div>
              <svg style={{ position: "absolute", top: 0, left: 44 }} width="20" height="44" viewBox="0 0 20 44" overflow="visible">
                <line x1="0" y1="8" x2="13" y2="1" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="0" r="3" fill="#FF6B00" />
                <line x1="0" y1="22" x2="14" y2="22" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" />
                <circle cx="17" cy="22" r="3" fill="#FF6B00" />
                <line x1="0" y1="36" x2="13" y2="43" stroke="#FF6B00" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="44" r="3" fill="#FF6B00" />
              </svg>
            </div>
            <span style={{ marginLeft: 28, fontSize: 22, fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.5px" }}>
              Orange<span style={{ color: "#FF6B00" }}>Pro</span>
            </span>
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
            to="/#contact"
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
            className="md:hidden fixed inset-0 bg-[#0A0A0A] z-[110] flex items-center justify-center pt-20"
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
                to="/#contact"
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
