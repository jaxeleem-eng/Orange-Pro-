import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Work from "@/pages/Work";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<div className="text-center text-xl text-white pt-40">Contact Page - Coming Soon</div>} />
        <Route path="/audit" element={<div className="text-center text-xl text-white pt-40">Audit Page - Coming Soon</div>} />
      </Routes>
    </Router>
  );
}
