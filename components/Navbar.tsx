"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${
          scrolled
            ? "bg-[#020617]/80 backdrop-blur-xl py-3 border-b border-[#1282FF]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-6 border-b border-transparent"
        }
      `}
    >
      {/* Bottom accent line that only appears when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#1282FF]/50 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 text-white">
        
        {/* Brand - Updated to your custom Blue */}
        <h1 className="font-montserrat font-bold text-2xl tracking-tighter cursor-pointer">
          XE <span className="text-[#1282FF] drop-shadow-[0_0_8px_rgba(18,130,255,0.4)]">Boosting</span>
        </h1>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-10 font-rajdhani font-bold uppercase tracking-[0.15em] text-xs">
          <a href="#services" className="text-white/70 hover:text-[#1282FF] transition-all duration-300">
            Services
          </a>
          <a href="#pricing" className="text-white/70 hover:text-[#1282FF] transition-all duration-300">
            Pricing
          </a>
          {/* <a href="#testimonials" className="text-white/70 hover:text-[#1282FF] transition-all duration-300">
            Reviews
          </a> */}
          <a href="#faq" className="text-white/70 hover:text-[#1282FF] transition-all duration-300">
            FAQ
          </a>
          
          {/* CTA Button in Nav */}
          <a
            href="#contact"
            className="relative group px-6 py-2 overflow-hidden rounded-lg bg-[#1282FF]/10 border border-[#1282FF]/50 text-white transition-all duration-300 hover:bg-[#1282FF] hover:shadow-[0_0_20px_rgba(18,130,255,0.5)]"
          >
            <span className="relative z-10 font-montserrat font-black italic tracking-tighter">CONTACT</span>
          </a>
        </div>
      </div>
    </nav>
  );
}