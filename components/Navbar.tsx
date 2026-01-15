"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#020617]/70 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        }
      `}
      
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-6 text-white">
        
        {/* Brand */}
        <h1 className="font-montserrat font-bold text-2xl tracking-tighter">
          XE <span className="text-blue-500">Boosting</span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex space-x-8 font-rajdhani font-semibold uppercase tracking-wider text-sm">
          <a href="#services" className="hover:text-blue-400 transition-colors">
            Services
          </a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-blue-400 transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">
            FAQ
          </a>
          <a
            href="#contact"
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
