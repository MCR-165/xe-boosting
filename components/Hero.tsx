"use client";
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#020617]"
    >
      {/* Interactive Radial Glow Follower */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.18), transparent 80%)`
        }}
      />

      {/* Static Background Gradient Mesh */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-navy-950 via-[#0a192f] to-[#020617]" />

      <div className="z-10 px-4 max-w-5xl">
        {/* Main Title */}
      <h1 className="font-montserrat text-6xl md:text-8xl font-bold leading-tight pb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-600 drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">
        XE Boosting
      </h1>

        {/* Multi-line Description */}
        <p className="font-rajdhani text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Professional Game Boosting Services. <br className="hidden md:block" /> 
          Fast, secure, and reliable. Climb the ranks with our expert <br className="hidden md:block" />
          players and <span className="text-blue-400 font-bold border-b-2 border-blue-500/30">
            achieve your dream rank today.
          </span>
        </p>

        {/* Stylish Glowing Button */}
        <div className="mb-12">
          <a
            href="https://discord.gg/yourlink"
            target="_blank"
            className="group relative inline-flex items-center justify-center px-6 py-3 font-black text-white transition-all duration-300 bg-blue-700 rounded-xl hover:bg-blue-600 shadow-[0_0_20px_rgba(29,78,216,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.7)] hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Join Discord Server
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-500" />
          </a>
        </div>

        {/* Trust Tags Section */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 border border-blue-500/20 rounded-full backdrop-blur-sm">
            <span className="text-xl">🛡️</span>
            <span className="text-sm tracking-wide text-blue-200">100% Safe & Secure</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 border border-blue-500/20 rounded-full backdrop-blur-sm">
            <span className="text-xl">⚡</span>
            <span className="text-sm tracking-wide text-blue-200">24/7 Fast Service</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-900/20 border border-blue-500/20 rounded-full backdrop-blur-sm">
            <span className="text-xl">⭐</span>
            <span className="text-sm tracking-wide text-blue-200">100% Happy Customers</span>
          </div>
        </div>
      </div>

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
    </section>
  );
}