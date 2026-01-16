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
      "Iron": "Iron_3",
      "Bronze": "Bronze_3",
      "Silver": "Silver_3",
      "Gold": "Gold_3",
      "Platinum": "Platinum_3",
      "Diamond": "Diamond_3",
      "Ascendant": "Ascendant_3",
      "Immortal": "Immortal_3",
      "Radiant": "Radiant"
    };

    const cleanTier = tierName.replace(/[0-9]/g, '').trim();
    const fileName = iconMap[cleanTier] || cleanTier;
    
    return `/ranks/${fileName}_Rank.png`;
  };

  return (
    <div className="group relative p-4 bg-blue-900/10 border border-blue-500/20 rounded-2xl backdrop-blur-md transition-all duration-500 hover:bg-[#1282FF]/10 hover:border-[#1282FF]/50 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
      
      {/* Header Section */}
      <div className="flex items-center justify-between mb-5 px-1">
        <h3 className="text-lg font-montserrat font-bold text-white tracking-tighter uppercase">
          {tier} <span className="text-white/20 text-[10px] align-middle mx-1 font-bold">{'>>'}</span> {nextTier}
        </h3>
        
        <div className="relative flex items-center justify-center">
          <div className={`absolute w-10 h-10 rounded-full bg-gradient-to-r ${tierColor} opacity-20 blur-lg animate-pulse`} />
          <div className="relative w-10 h-10 rounded-full flex items-center justify-center">
            <img 
              src={getHeaderIcon(nextTier.includes("Radiant") ? "Radiant" : tier)} 
              alt={tier}
              className="relative w-10 h-10 object-contain drop-shadow-[0_0_12px_rgba(18,130,255,0.5)] z-10"
              onError={(e) => { e.currentTarget.style.display = 'none' }} 
            />
          </div>
        </div>
      </div>
  
      {/* Boost List */}
      <div className="space-y-1 font-rajdhani">
        {boosts.map((boost, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all duration-300 rounded-lg px-2 group/row">
            <div className="flex items-center gap-2">
              
              {/* From Rank Bundle */}
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7">
                  {/* Added drop-shadow for primary rank glow */}
                  <img src={getRankIcon(boost.fromRank)} alt={boost.fromRank} className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(18,130,255,0.4)] group-hover/row:scale-110 transition-transform" />
                </div>
                {/* Changed font-medium to font-normal for a thinner look */}
                <span className="text-white/70 text-[15px] font-medium hidden sm:block tracking-wide">
                  {boost.fromRank}
                </span>
              </div>
              
              <span className="text-[#1282FF] text-xs font-medium animate-pulse">→</span>
              
              {/* To Rank Bundle */}
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7">
                  {/* Consistent glow for destination rank */}
                  <img src={getRankIcon(boost.toRank)} alt={boost.toRank} className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(18,130,255,0.4)] group-hover/row:scale-110 transition-transform" />
                </div>
                {/* Changed font-medium to font-normal for a thinner look */}
                <span className="text-white text-[15px] font-bold hidden sm:block tracking-wide">
                  {boost.toRank}
                </span>
              </div>
            </div>
            
            {/* Price Section with Blue Glow */}
            <div className="text-right ml-2">
              <span className="font-montserrat font-bold text-base tracking-tighter text-[#FFFFFF]/80 drop-shadow-[0_0_8px_rgba(18,130,255,0.6)] transition-all duration-300">
                {boost.price !== null ? `₱${boost.price}` : 'Negotiable'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}