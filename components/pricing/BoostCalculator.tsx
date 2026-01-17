'use client';

import { useState } from 'react';
import { ranks } from './rankData';

// Helper to get icon path (matching your PriceCard logic)
const getRankIcon = (rankName: string) => {
  if (!rankName) return "";
  let name = rankName.trim();
  name = name.charAt(0).toUpperCase() + name.slice(1);
  const cleanName = name.replace(/\s+/g, '_');
  return `/ranks/${cleanName}_Rank.png`;
};

export default function BoostCalculator() {
  const [currentRank, setCurrentRank] = useState('iron1');
  const [desiredRank, setDesiredRank] = useState('iron2');
  const [partyBoost, setPartyBoost] = useState(false);
  const [rushBoost, setRushBoost] = useState(false);

  const currentData = ranks.find(r => r.id === currentRank);
  const desiredData = ranks.find(r => r.id === desiredRank);

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
    <div className="relative group p-8 md:p-12 bg-gradient-to-br from-[#1282FF]/10 to-transparent border border-[#1282FF]/20 rounded-[2.5rem] backdrop-blur-3xl shadow-2xl max-w-3xl mx-auto overflow-hidden transition-all duration-500 hover:border-[#1282FF]/40">
      
      {/* 1. BACKGROUND WATERMARKS - Large low opacity rank icons */}
      <div className="absolute -left-10 -bottom-10 w-64 h-64 opacity-[0.03] pointer-events-none rotate-12 transition-all duration-700 group-hover:scale-110">
        <img src={getRankIcon(currentData?.name || "")} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute -right-10 -top-10 w-80 h-80 opacity-[0.05] pointer-events-none -rotate-12 transition-all duration-700 group-hover:scale-110">
        <img src={getRankIcon(desiredData?.name || "")} alt="" className="w-full h-full object-contain" />
      </div>

      {/* 2. TACTICAL ACCENTS */}
      <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#1282FF]/20 rounded-tr-[2.5rem]" />
      <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-[#1282FF]/20 rounded-bl-[2.5rem]" />

      <div className="relative z-10 space-y-10">
        
        {/* 3. RANK PREVIEW HEADER - "The Journey" */}
        <div className="flex items-center justify-around bg-white/5 p-6 rounded-3xl border border-white/5 backdrop-blur-md relative overflow-hidden">
          {/* Subtle "Flow" Beam behind the arrow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-8 bg-[#1282FF]/10 blur-2xl rounded-full" />

          <div className="text-center space-y-2 relative z-10">
            <div className="relative w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-500">
              <img src={getRankIcon(currentData?.name || "")} alt="" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
            </div>
            <div className="font-rajdhani text-[10px] text-white/40 uppercase tracking-widest">Current</div>
          </div>

      {/* ADJUSTED: Larger, more aggressive Arrow transition */}
      <div className="flex flex-col items-center relative z-10 px-4">
        <div className="flex items-center gap-1 mb-1">
            <div className="h-[2px] w-4 bg-[#1282FF]/20 rounded-full" />
            <div className="h-[2px] w-8 bg-[#1282FF]/50 rounded-full" />
            <div className="h-[2px] w-4 bg-[#1282FF]/20 rounded-full" />
        </div>
        {/* Text-4xl size and Black weight for a "heavy" look */}
        <span className="text-[#1282FF] text-4xl font-black animate-pulse drop-shadow-[0_0_10px_#1282FF]">
          →
        </span>
        <div className="font-rajdhani text-[9px] font-bold text-[#1282FF] mt-1 tracking-[0.3em] uppercase opacity-60">Level Up</div>
      </div>

      <div className="text-center space-y-2 relative z-10">
        <div className="relative w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-500">
          <div className="absolute inset-0 bg-[#1282FF]/30 blur-2xl rounded-full animate-pulse" />
          <img src={getRankIcon(desiredData?.name || "")} alt="" className="relative w-full h-full object-contain drop-shadow-[0_0_20px_rgba(18,130,255,0.5)]" />
        </div>
        <div className="font-rajdhani text-[10px] text-[#1282FF] uppercase tracking-widest font-bold">Target</div>
      </div>
    </div>

        {/* 4. SELECTION GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-montserrat text-[10px] font-black text-[#1282FF] uppercase tracking-[0.2em] ml-1">
               <span className="w-1 h-1 bg-[#1282FF] rounded-full" /> Starting Point
            </label>
            <div className="relative">
              <select
                value={currentRank}
                onChange={(e) => setCurrentRank(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white font-rajdhani text-lg focus:outline-none focus:border-[#1282FF] transition-all appearance-none cursor-pointer"
              >
                {ranks.map(rank => (
                  <option key={rank.id} value={rank.id} className="bg-[#020617]">{rank.name}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#1282FF]"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg></div>
            </div>
          </div>

          <div className="space-y-3">
            <label className="flex items-center gap-2 font-montserrat text-[10px] font-black text-[#1282FF] uppercase tracking-[0.2em] ml-1">
               <span className="w-1 h-1 bg-[#1282FF] rounded-full" /> Target Rank
            </label>
            <div className="relative">
              <select
                value={desiredRank}
                onChange={(e) => setDesiredRank(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white font-rajdhani text-lg focus:outline-none focus:border-[#1282FF] transition-all appearance-none cursor-pointer"
              >
                {ranks.map(rank => (
                  <option key={rank.id} value={rank.id} className="bg-[#020617]">{rank.name}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 text-[#1282FF]"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" /></svg></div>
            </div>
          </div>
        </div>

        {/* 5. ADD-ONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { id: 'party', label: 'Party Boost', val: partyBoost, set: setPartyBoost, mult: 'x2.0' },
            { id: 'rush', label: 'Rush Boost', val: rushBoost, set: setRushBoost, mult: 'x1.2' }
          ].map((item) => (
            <label key={item.id} className={`flex items-center justify-between p-4 border rounded-2xl cursor-pointer transition-all duration-300 ${item.val ? 'bg-[#1282FF]/20 border-[#1282FF] shadow-[0_0_20px_rgba(18,130,255,0.1)]' : 'bg-white/5 border-white/5 hover:bg-white/10'}`}>
              <div className="flex items-center space-x-3">
                <input type="checkbox" checked={item.val} onChange={(e) => item.set(e.target.checked)} className="w-4 h-4 accent-[#1282FF]" />
                <span className="font-rajdhani text-lg font-bold text-white uppercase tracking-wide">{item.label}</span>
              </div>
              <span className={`font-montserrat text-xs font-bold ${item.val ? 'text-[#1282FF]' : 'text-white/20'}`}>{item.mult}</span>
            </label>
          ))}
        </div>

        {/* 6. FINAL PRICE */}
        <div className="pt-8 border-t border-[#1282FF]/20 text-center">
          {result.error ? (
            <div className="font-rajdhani text-[#1282FF] text-lg font-bold italic animate-pulse tracking-widest uppercase">Target must be higher than current</div>
          ) : result.total === null ? (
            <div className="space-y-1">
              <div className="font-montserrat text-5xl font-black text-white tracking-tighter italic">NEGOTIABLE</div>
              <p className="font-rajdhani text-[#1282FF] text-[10px] uppercase tracking-[0.3em]">Contact Support for High-Tier Pricing</p>
            </div>
          ) : (
            <div className="relative inline-block group/price">
              <div className="font-rajdhani text-white/30 text-[10px] uppercase tracking-[0.5em] mb-2 font-bold">Estimated Investment</div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-[#1282FF] text-2xl font-black font-montserrat">₱</span>
                <span className="text-7xl font-montserrat font-black text-white tracking-tighter drop-shadow-[0_0_25px_rgba(18,130,255,0.3)]">
                   {result.total.toLocaleString()}
                </span>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#1282FF] to-transparent mt-2 rounded-full opacity-50" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}