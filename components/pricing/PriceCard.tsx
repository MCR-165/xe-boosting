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
    <div className="bg-gray-800 p-6 rounded-lg border-2 border-gray-700 hover:border-red-500 transition-colors">
      <h3 className={`text-xl font-bold mb-4 bg-linear-to-r ${tierColor} bg-clip-text text-transparent`}>
        {tier} to {nextTier}
      </h3>
      
      <div className="space-y-3">
        {boosts.map((boost, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-sm">{boost.fromRank}</span>
              <span className="text-red-400">→</span>
              <span className="text-gray-300 text-sm">{boost.toRank}</span>
            </div>
            <span className="text-red-500 font-bold">
              {boost.price !== null ? `₱${boost.price}` : 'NEGOTIABLE'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}