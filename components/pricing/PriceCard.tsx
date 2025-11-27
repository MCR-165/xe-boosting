interface PriceCardProps {
  fromRank: string;
  toRank: string;
  price: number | null;
}

export default function PriceCard({ fromRank, toRank, price }: PriceCardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-red-500 transition-colors">
      <div className="text-sm text-gray-400 mb-1">
        {fromRank} → {toRank}
      </div>
      <div className="text-2xl font-bold text-red-500">
        {price !== null ? `₱${price}` : 'NEGOTIABLE'}
      </div>
    </div>
  );
}