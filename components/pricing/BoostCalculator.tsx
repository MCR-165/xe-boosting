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
      return { total: 0, error: 'Desired rank must be higher than current rank' };
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
    <div className="bg-gray-800 p-6 rounded-lg border-2 border-red-500 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-6 text-center">Boost Calculator</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Current Rank</label>
          <select
            value={currentRank}
            onChange={(e) => setCurrentRank(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-red-500"
          >
            {ranks.map(rank => (
              <option key={rank.id} value={rank.id}>{rank.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Desired Rank</label>
          <select
            value={desiredRank}
            onChange={(e) => setDesiredRank(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 rounded px-4 py-2 text-white focus:outline-none focus:border-red-500"
          >
            {ranks.map(rank => (
              <option key={rank.id} value={rank.id}>{rank.name}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2 pt-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={partyBoost}
              onChange={(e) => setPartyBoost(e.target.checked)}
              className="w-5 h-5 accent-red-500"
            />
            <span>Party Boost <span className="text-red-400">(+200% price)</span></span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={rushBoost}
              onChange={(e) => setRushBoost(e.target.checked)}
              className="w-5 h-5 accent-red-500"
            />
            <span>Rush Boost <span className="text-red-400">(+120% price)</span></span>
          </label>
        </div>

        <div className="pt-6 border-t border-gray-700">
          {result.error ? (
            <div className="text-center text-red-400 text-lg">{result.error}</div>
          ) : result.total === null ? (
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-2">Total Price</div>
              <div className="text-4xl font-bold text-yellow-400">NEGOTIABLE</div>
              <div className="text-gray-400 text-sm mt-2">Contact us for Radiant boosting</div>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-gray-400 text-sm mb-2">Total Price</div>
              <div className="text-4xl font-bold text-red-500">₱{result.total.toFixed(2)}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}