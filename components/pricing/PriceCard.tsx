"use client";

interface RankBoost {
  fromRank: string;
  toRank: string;
  price: number | null;
}

interface PriceCardProps {
  tier: string;
  tierColor: string;
  nextTier: string;
  boosts: RankBoost[];
}

const getRankIcon = (rankName: string) => {
  if (!rankName) return "";
  let name = rankName.trim();
  name = name.charAt(0).toUpperCase() + name.slice(1);
  const cleanName = name.replace(/\s+/g, '_');
  return `/ranks/${cleanName}_Rank.png`; 
};

export default function PriceCard({ tier, tierColor, nextTier, boosts }: PriceCardProps) {
  
  const getHeaderIcon = (tierName: string) => {
    const iconMap: Record<string, string> = {
      "Iron": "Iron_3", "Bronze": "Bronze_3", "Silver": "Silver_3",
      "Gold": "Gold_3", "Platinum": "Platinum_3", "Diamond": "Diamond_3",
      "Ascendant": "Ascendant_3", "Immortal": "Immortal_3", "Radiant": "Radiant"
    };
    const cleanTier = tierName.replace(/[0-9]/g, '').trim();
    const fileName = iconMap[cleanTier] || cleanTier;
    return `/ranks/${fileName}_Rank.png`;
  };

  return (
    <div className="group relative p-5 bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 rounded-2xl backdrop-blur-xl transition-all duration-500 hover:border-[#1282FF]/40 hover:-translate-y-1.5 shadow-2xl overflow-hidden">
      
      {/* 1. Tactical Corner Accents */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#1282FF]/0 group-hover:border-[#1282FF]/30 transition-all duration-700 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/0 group-hover:border-white/10 transition-all duration-700 rounded-bl-2xl" />

      {/* 2. Dynamic Header */}
      <div className="flex items-end justify-between mb-6 px-1">
        <div>
          <div className="flex items-center gap-2 mb-1">
             <span className="w-1.5 h-1.5 rounded-full bg-[#1282FF] animate-pulse" />
             <span className="font-rajdhani text-[10px] font-bold tracking-[0.3em] text-[#1282FF] uppercase">Standard Tier</span>
          </div>
          <h3 className="text-xl font-montserrat font-bold text-white tracking-tighter uppercase italic leading-none">
            {tier} <span className="text-[#1282FF]/40 not-italic font-light">/</span> {nextTier}
          </h3>
        </div>
        
        <div className="relative group/icon">
          {/* RESTORED: animate-pulse on the glow background */}
          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${tierColor} opacity-20 blur-xl animate-pulse group-hover/icon:opacity-40 transition-opacity duration-500`} />
          <img 
            src={getHeaderIcon(nextTier.includes("Radiant") ? "Radiant" : tier)} 
            alt={tier}
            className="relative w-12 h-12 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] z-10 transition-transform duration-500 group-hover/icon:scale-110"
            onError={(e) => { e.currentTarget.style.display = 'none' }} 
          />
        </div>
      </div>
  
      {/* 3. Refined Boost List */}
      <div className="space-y-1.5 font-rajdhani">
        {boosts.map((boost, index) => (
          <div key={index} className="flex items-center justify-between py-2.5 px-3 border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all duration-300 rounded-xl group/row">
            <div className="flex items-center gap-3">
              
              {/* Origin Rank (Subtle) */}
              <div className="flex items-center gap-2 opacity-40 group-hover/row:opacity-100 transition-opacity">
                <img src={getRankIcon(boost.fromRank)} alt={boost.fromRank} className="w-6 h-6 object-contain grayscale group-hover/row:grayscale-0 transition-all" />
                <span className="text-[12px] font-medium uppercase tracking-wider hidden md:block">
                  {boost.fromRank}
                </span>
              </div>
              
              <div className="flex flex-col items-center">
                {/* UPDATED: "TO" text instead of "GO" */}
                <span className="text-[#1282FF] text-[10px] font-bold leading-none opacity-40 uppercase tracking-tighter">To</span>
                <span className="text-[#1282FF] text-xs font-black animate-pulse">→</span>
              </div>
              
              {/* Destination Rank (Highlight) */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#1282FF]/20 blur-md rounded-full opacity-0 group-hover/row:opacity-100 transition-opacity" />
                  <img src={getRankIcon(boost.toRank)} alt={boost.toRank} className="relative w-8 h-8 object-contain drop-shadow-[0_0_10px_rgba(18,130,255,0.5)] group-hover/row:scale-110 transition-transform" />
                </div>
                <span className="text-white text-[14px] font-bold uppercase tracking-tight">
                  {boost.toRank}
                </span>
              </div>
            </div>
            
            {/* Price Tag */}
            <div className="bg-[#1282FF]/5 px-3 py-1 rounded-lg border border-[#1282FF]/10 group-hover/row:bg-[#1282FF]/10 group-hover/row:border-[#1282FF]/30 transition-all">
              <span className="font-montserrat font-bold text-sm tracking-tighter text-white group-hover/row:text-[#1282FF] transition-colors">
                {boost.price !== null ? `₱${boost.price}` : 'QUOTE'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom Scanline Effect */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#1282FF]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-1000" />
    </div>
  );
}