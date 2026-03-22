import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-20 border-t border-[#222222] bg-[#0A0A0A] relative z-10">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }} className="mb-6 inline-flex">
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
            <p className="text-[#888888] max-w-sm">
              The UK's leading AI integration consultancy. Building efficient, scalable infrastructure for the modern enterprise.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/about" className="text-[#888888] hover:text-white transition-colors">About</Link>
              <a href="/#services" className="text-[#888888] hover:text-white transition-colors">Services</a>
              <Link to="/contact" className="text-[#888888] hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact</h4>
            <p className="text-[#888888] mb-2">London, UK</p>
            <a href="#" className="text-[#888888] hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        <div className="pt-8 border-t border-[#222222] text-[#888888] text-sm flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 OrangePro AI. All rights reserved.</p>
          <p>Made with precision for the AI era.</p>
        </div>
      </div>
    </footer>
  );
}
