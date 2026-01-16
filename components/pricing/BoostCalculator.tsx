'use client';

import { useState } from 'react';
import { ranks } from './rankData';

export default function BoostCalculator() {
  const [currentRank, setCurrentRank] = useState('iron1');
  const [desiredRank, setDesiredRank] = useState('iron2');
  const [partyBoost, setPartyBoost] = useState(false);
  const [rushBoost, setRushBoost] = useState(false);

  const calculatePrice = () => {
    const currentIndex = ranks.findIndex(r => r.id === currentRank);
    const desiredIndex = ranks.findIndex(r => r.id === desiredRank);

    if (desiredIndex <= currentIndex) {
      return { total: 0, error: 'Goal rank must be higher than current' };
    }

    if (ranks[desiredIndex].price === null) {
      return { total: null, error: null };
    }

    let total = 0;
    for (let i = currentIndex + 1; i <= desiredIndex; i++) {
      total += ranks[i].price as number;
    }

    let multiplier = 1;
    if (partyBoost) multiplier *= 2;
    if (rushBoost) multiplier *= 1.2;

    return { total: total * multiplier, error: null };
  };

  const result = calculatePrice();

  return (
    <div className="relative group p-10 bg-[#1282FF]/5 border border-[#1282FF]/20 rounded-[2rem] backdrop-blur-xl shadow-[0_0_50px_rgba(18,130,255,0.1)] max-w-2xl mx-auto overflow-hidden">
      {/* Dynamic Background Ornament */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#1282FF]/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 space-y-8">
        {/* Title Tag */}
        <div className="flex justify-center">
          <span className="px-4 py-1 rounded-full bg-[#1282FF]/10 border border-[#1282FF]/30 text-[#1282FF] font-rajdhani text-xs font-bold tracking-[0.3em] uppercase">
            Instant Quote Generator
          </span>
        </div>

        {/* Input Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="block font-montserrat text-xs font-black text-[#1282FF] uppercase tracking-widest ml-1">Current Rank</label>
            <div className="relative">
              <select
                value={currentRank}
                onChange={(e) => setCurrentRank(e.target.value)}
                className="w-full bg-blue-950/20 border border-white/10 rounded-2xl px-5 py-4 text-white font-rajdhani text-lg focus:outline-none focus:border-[#1282FF] focus:ring-1 focus:ring-[#1282FF] transition-all appearance-none cursor-pointer"
              >
                {ranks.map(rank => (
                  <option key={rank.id} value={rank.id} className="bg-[#020617] text-white">{rank.name}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#1282FF]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="block font-montserrat text-xs font-black text-[#1282FF] uppercase tracking-widest ml-1">Desired Rank</label>
            <div className="relative">
              <select
                value={desiredRank}
                onChange={(e) => setDesiredRank(e.target.value)}
                className="w-full bg-blue-950/20 border border-white/10 rounded-2xl px-5 py-4 text-white font-rajdhani text-lg focus:outline-none focus:border-[#1282FF] focus:ring-1 focus:ring-[#1282FF] transition-all appearance-none cursor-pointer"
              >
                {ranks.map(rank => (
                  <option key={rank.id} value={rank.id} className="bg-[#020617] text-white">{rank.name}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#1282FF]">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Multipliers - Updated Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className={`flex items-center justify-between p-5 border rounded-2xl cursor-pointer transition-all duration-300 ${partyBoost ? 'bg-[#1282FF]/10 border-[#1282FF]' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={partyBoost}
                onChange={(e) => setPartyBoost(e.target.checked)}
                className="w-5 h-5 accent-[#1282FF] rounded border-none"
              />
              <span className="font-rajdhani text-lg font-bold text-white">Party Boost</span>
            </div>
            <span className={`font-montserrat text-lg font-black ${partyBoost ? 'text-[#1282FF]' : 'text-white/20'}`}>x2.0</span>
          </label>

          <label className={`flex items-center justify-between p-5 border rounded-2xl cursor-pointer transition-all duration-300 ${rushBoost ? 'bg-[#1282FF]/10 border-[#1282FF]' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={rushBoost}
                onChange={(e) => setRushBoost(e.target.checked)}
                className="w-5 h-5 accent-[#1282FF] rounded border-none"
              />
              <span className="font-rajdhani text-lg font-bold text-white">Rush Boost</span>
            </div>
            <span className={`font-montserrat text-lg font-black ${rushBoost ? 'text-[#1282FF]' : 'text-white/20'}`}>x1.2</span>
          </label>
        </div>

        {/* Result Area */}
        <div className="pt-8 mt-4 border-t border-white/5">
          {result.error ? (
            <div className="text-center font-rajdhani text-[#1282FF] text-lg font-bold italic animate-pulse">{result.error}</div>
          ) : result.total === null ? (
            <div className="text-center group-hover:scale-105 transition-transform duration-500">
              <div className="font-rajdhani text-blue-200/40 text-xs uppercase tracking-[0.4em] mb-2 font-black">Estimate Status</div>
              <div className="font-montserrat text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#1282FF]">NEGOTIABLE</div>
              <p className="font-rajdhani text-blue-200/60 text-sm mt-3 uppercase tracking-widest">Connect with us for Immortal+ Ranking</p>
            </div>
          ) : (
            <div className="text-center group-hover:scale-105 transition-transform duration-500">
              <div className="font-rajdhani text-blue-200/40 text-xs uppercase tracking-[0.4em] mb-2 font-black">Estimated Total</div>
              <div className="font-montserrat text-7xl font-black text-white inline-block relative">
                <span className="text-[#1282FF] text-3xl absolute -left-10 top-2">₱</span>
                {result.total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#1282FF] rounded-full blur-sm opacity-50" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}