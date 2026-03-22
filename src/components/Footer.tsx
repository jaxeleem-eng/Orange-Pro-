import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="py-20 border-t border-[#222222] bg-[#0A0A0A] relative z-10">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-white mb-6 block">
              Orange<span className="text-primary">Pro</span>
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