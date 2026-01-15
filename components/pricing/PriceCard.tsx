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

export default function PriceCard({ tier, tierColor, nextTier, boosts }: PriceCardProps) {
  return (
    <div className="group relative p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl backdrop-blur-md transition-all duration-500 hover:bg-blue-500/10 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)]">
      
      {/* Tier Heading - Montserrat */}
      <h3 className={`text-2xl font-montserrat font-bold mb-6 bg-gradient-to-r ${tierColor} bg-clip-text text-transparent tracking-tighter uppercase`}>
        {tier} <span className="text-white/30 text-sm align-middle mx-1 font-medium">to</span> {nextTier}
      </h3>
      
      {/* Boost List - Rajdhani */}
      <div className="space-y-4 font-rajdhani">
        {boosts.map((boost, index) => (
          <div 
            key={index} 
            className="flex items-center justify-between pb-2 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors rounded-lg px-2"
          >
            <div className="flex items-center gap-3">
              <span className="text-blue-100/80 text-lg font-medium tracking-wide">
                {boost.fromRank}
              </span>
              <span className="text-blue-400 font-bold animate-pulse">→</span>
              <span className="text-blue-100/80 text-lg font-medium tracking-wide">
                {boost.toRank}
              </span>
            </div>

            {/* Price - Montserrat for impact */}
            <span className="text-white font-montserrat font-bold text-xl drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
              {boost.price !== null ? `₱${boost.price}` : 'NEGOTIABLE'}
            </span>
          </div>
        ))}
      </div>

      {/* Subtle Glow Effect inside the card */}
      <div className="absolute top-0 right-0 -mr-2 -mt-2 w-16 h-16 bg-blue-500/5 blur-2xl rounded-full group-hover:bg-blue-500/15 transition-all duration-500" />
    </div>
  );
}