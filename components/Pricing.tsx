import PriceCard from './pricing/PriceCard';
import BoostCalculator from './pricing/BoostCalculator';
import { priceCardData } from './pricing/rankData';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-900 p-8 md:p-20 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Pricing</h2>
        <p className="text-center text-gray-400 mb-12">
          Choose your rank boost package below. Prices are per division climb.
        </p>

        {/* Calculator Section */}
        <div className="mb-16">
          <BoostCalculator />
        </div>

        {/* Pricing Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8">Price List</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {priceCardData.map((card) => (
              <PriceCard
                key={card.tier}
                tier={card.tier}
                tierColor={card.tierColor}
                nextTier={card.nextTier}
                boosts={card.boosts}
              />
            ))}
          </div>
        </div>

        {/* Add-ons Info */}
        <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
          <h4 className="text-xl font-bold mb-4">Add-on Services</h4>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Party Boost</span>
              <span className="text-red-400 font-bold">+200% Price</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Rush Boost</span>
              <span className="text-red-400 font-bold">+120% Price</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}