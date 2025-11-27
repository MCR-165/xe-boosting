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
  // This component is no longer needed with the new design
  // Keeping it for backwards compatibility but not used
  return null;
}