"use client";
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation delay utility
  const getDelay = (index: number) => ({
    transitionDelay: `${index * 150}ms`,
  });

  return (
    <section 
      id="hero" 
      className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-[#020617]"
    >
      {/* 1. Interactive Radial Glow Follower */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          background: isLoaded 
            ? `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(18, 130, 255, 0.15), transparent 80%)`
            : 'none'
        }}
      />

      {/* 2. Animated Background Grid with Parallax */}
      {/* FIX: We only apply the transform if isLoaded is true to prevent Hydration mismatch */}
      <div 
        className="absolute inset-0 opacity-[0.05] z-0 pointer-events-none transition-transform duration-500 ease-out"
        style={{ 
          backgroundImage: `linear-gradient(#1282FF 1px, transparent 1px), linear-gradient(90deg, #1282FF 1px, transparent 1px)`, 
          backgroundSize: '60px 60px',
          transform: isLoaded 
            ? `translate(${(mousePos.x - window.innerWidth / 2) / 50}px, ${(mousePos.y - window.innerHeight / 2) / 50}px)`
            : 'translate(0px, 0px)'
        }} 
      />

      {/* 3. Subtle Scanline Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-[1] pointer-events-none bg-[length:100%_4px,3px_100%]" />

      {/* Hero Content Wrapper */}
      <div className="relative z-10 px-6 max-w-5xl flex flex-col items-center">
        
        {/* Animated Badge */}
        <div 
          style={getDelay(1)}
          className={`mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1282FF]/10 border border-[#1282FF]/30 animate-pulse transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="w-2 h-2 rounded-full bg-[#1282FF]" />
          <span className="font-rajdhani text-xs font-bold tracking-[0.2em] text-[#1282FF] uppercase">
            Valorant Rank Boosting Services
          </span>
        </div>

        {/* Main Title */}
        <h1 
          style={getDelay(2)}
          className={`font-montserrat font-bold text-5xl md:text-8xl leading-none tracking-tighter text-white transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          XE <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1282FF] to-blue-700 drop-shadow-[0_0_30px_rgba(18,130,255,0.5)]">Boosting</span>
        </h1>

        {/* Sub-headline */}
        <p 
          style={getDelay(3)}
          className={`font-rajdhani text-blue-100/60 text-xl md:text-2xl max-w-2xl mt-6 mb-10 leading-relaxed tracking-wide transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          Dominate the lobby. Secure your <span className="text-white font-bold">Dream Rank</span> with the most elite professional boosters in the region.
        </p>

        {/* Primary Action Button */}
        <div 
          style={getDelay(4)}
          className={`flex flex-col sm:flex-row gap-4 mb-9 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <a
            href="https://discord.gg/yourlink"
            target="_blank"
            className="group relative inline-flex items-center justify-center px-9 py-3 font-montserrat font-bold text-white transition-all duration-300 bg-[#1282FF] rounded-2xl shadow-[0_0_25px_rgba(18,130,255,0.4)] hover:shadow-[0_0_50px_rgba(18,130,255,0.6)] hover:-translate-y-1 uppercase tracking-tight"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start Your Climb
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1282FF] to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
          </a>
        </div>

        {/* Compact Trust Tags */}
        <div 
          style={getDelay(5)}
          className={`flex flex-wrap justify-center gap-3 w-full max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors">
            <svg className="w-4 h-4 text-[#1282FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-rajdhani text-[11px] font-bold tracking-[0.15em] text-blue-100 uppercase">VPN Secured</span>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors">
            <svg className="w-4 h-4 text-[#1282FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-rajdhani text-[11px] font-bold tracking-[0.15em] text-blue-100 uppercase">Instant Start</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition-colors">
            <svg className="w-4 h-4 text-[#1282FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="font-rajdhani text-[11px] font-bold tracking-[0.15em] text-blue-100 uppercase">Duo Queue</span>
          </div>
        </div>
      </div>
    </section>
  );
}