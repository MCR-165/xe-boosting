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
    <div className="relative group p-8 bg-blue-900/10 border border-blue-500/20 rounded-3xl backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)] max-w-2xl mx-auto">
      {/* Decorative inner glow */}
      <div className="absolute inset-0 bg-blue-500/5 rounded-3xl pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-500" />
      
      <div className="relative z-10 space-y-6">
        {/* Input Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-rajdhani text-lg font-semibold text-blue-300 mb-2 uppercase tracking-wider">Current Rank</label>
            <select
              value={currentRank}
              onChange={(e) => setCurrentRank(e.target.value)}
              className="w-full bg-blue-950/40 border border-blue-500/20 rounded-xl px-4 py-3 text-white font-rajdhani focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all appearance-none cursor-pointer"
            >
              {ranks.map(rank => (
                <option key={rank.id} value={rank.id} className="bg-navy-950 text-white">{rank.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-rajdhani text-lg font-semibold text-blue-300 mb-2 uppercase tracking-wider">Desired Rank</label>
            <select
              value={desiredRank}
              onChange={(e) => setDesiredRank(e.target.value)}
              className="w-full bg-blue-950/40 border border-blue-500/20 rounded-xl px-4 py-3 text-white font-rajdhani focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all appearance-none cursor-pointer"
            >
              {ranks.map(rank => (
                <option key={rank.id} value={rank.id} className="bg-navy-950 text-white">{rank.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Checkboxes - Glass Style */}
        <div className="flex flex-col md:flex-row gap-4 pt-2">
          <label className="flex-1 flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all group/item">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={partyBoost}
                onChange={(e) => setPartyBoost(e.target.checked)}
                className="w-5 h-5 accent-blue-500 rounded border-none"
              />
              <span className="font-rajdhani text-blue-100">Party Boost</span>
            </div>
            <span className="font-montserrat text-[20px] font-black text-blue-400">+200%</span>
          </label>

          <label className="flex-1 flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl cursor-pointer hover:bg-white/10 transition-all group/item">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={rushBoost}
                onChange={(e) => setRushBoost(e.target.checked)}
                className="w-5 h-5 accent-blue-500 rounded border-none"
              />
              <span className="font-rajdhani text-blue-100">Rush Boost</span>
            </div>
            <span className="font-montserrat text-[20px] font-black text-blue-400">+120%</span>
          </label>
        </div>

        {/* Result Area */}
        <div className="pt-8 border-t border-white/5">
          {result.error ? (
            <div className="text-center font-rajdhani text-blue-400/80 text-lg animate-pulse">{result.error}</div>
          ) : result.total === null ? (
            <div className="text-center">
              <div className="font-rajdhani text-blue-200/40 text-xs uppercase tracking-[0.2em] mb-1">Estimate</div>
              <div className="font-montserrat text-4xl font-black text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.4)]">NEGOTIABLE</div>
              <div className="font-rajdhani text-blue-200/60 text-sm mt-2">Contact us for high-tier ranking</div>
            </div>
          ) : (
            <div className="text-center">
              <div className="font-rajdhani text-blue-200/40 text-xs uppercase tracking-[0.2em] mb-1">Total Price</div>
              <div className="font-montserrat text-5xl font-black text-white drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                ₱{result.total.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}