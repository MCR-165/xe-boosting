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
    /* Reduced p-6 to p-4 | rounded-3xl to rounded-2xl | reduced hover lift */
    <div className="group relative p-4 bg-blue-900/10 border border-blue-500/20 rounded-2xl backdrop-blur-md transition-all duration-500 hover:bg-[#1282FF]/10 hover:border-[#1282FF]/50 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]">
      
      {/* Header Section - Tightened mb-8 to mb-5 */}
      <div className="flex items-center justify-between mb-5 px-1">
        <h3 className="text-lg font-montserrat font-bold text-white tracking-tighter uppercase">
          {tier} <span className="text-white/20 text-[10px] align-middle mx-1 font-bold">{'>>'}</span> {nextTier}
        </h3>
        
        <div className="relative flex items-center justify-center">
          {/* Shrunk glow from w-12 to w-10 */}
          <div className={`absolute w-10 h-10 rounded-full bg-gradient-to-r ${tierColor} opacity-20 blur-lg animate-pulse`} />
          
          <div className="relative w-10 h-10 rounded-full flex items-center justify-center">
            <img 
              src={getHeaderIcon(nextTier.includes("Radiant") ? "Radiant" : tier)} 
              alt={tier}
              /* Shrunk header icon from w-12 to w-10 */
              className="relative w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] z-10"
              onError={(e) => { e.currentTarget.style.display = 'none' }} 
            />
          </div>
        </div>
      </div>
      
      {/* Boost List - Tightened space-y-3 to space-y-1 */}
      <div className="space-y-1 font-rajdhani">
        {boosts.map((boost, index) => (
          /* Reduced py-3 to py-2 | rounded-xl to rounded-lg */
          <div key={index} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all duration-300 rounded-lg px-2 group/row">
            <div className="flex items-center gap-3">
              {/* Shrunk row icons from w-10 to w-8 */}
              <div className="relative w-8 h-8">
                 <img src={getRankIcon(boost.fromRank)} alt={boost.fromRank} className="w-full h-full object-contain drop-shadow-[0_0_5px_rgba(255,255,255,0.2)] group-hover/row:scale-110 transition-transform" />
              </div>
              
              <span className="text-[#1282FF] text-sm font-bold animate-pulse">→</span>
              
              <div className="relative w-8 h-8">
                <img src={getRankIcon(boost.toRank)} alt={boost.toRank} className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(18,130,255,0.4)] group-hover/row:scale-110 transition-transform" />
              </div>
            </div>
            
            <div className="text-right">
              {/* Tightened price text from text-xl to text-lg */}
              <span className="text-white font-montserrat font-bold text-lg tracking-tighter transition-colors">
                {boost.price !== null ? `₱${boost.price}` : 'Negotiable'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}