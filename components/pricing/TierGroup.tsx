import PriceCard from './PriceCard';
import { tierColors } from './rankData';

interface TierGroupProps {
  tier: string;
  cards: Array<{
    fromRank: string;
    toRank: string;
    price: number | null;
  }>;
}

export default function TierGroup({ tier, cards }: TierGroupProps) {
  return (
    <div className="mb-8">
      <div className={`bg-linear-to-r ${tierColors[tier as keyof typeof tierColors]} text-white px-4 py-2 rounded-t-lg font-bold text-lg`}>
        {tier}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-850 rounded-b-lg">
        {cards.map((card, index) => (
          <PriceCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}