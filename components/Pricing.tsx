import PriceCard from './pricing/PriceCard';
import BoostCalculator from './pricing/BoostCalculator';
import { priceCardData } from './pricing/rankData';

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#020617] py-20 px-4 text-white overflow-hidden">
      {/* Background Glow to maintain the Mesh aesthetic */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-blue-600/5 blur-[120px] z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading - Montserrat */}
        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400">
          Pricing Packages
        </h2>
        
        {/* Descriptive Text - Rajdhani */}
        <p className="font-rajdhani text-center text-blue-200/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Choose your rank boost package below. Professional grade performance per division climb.
        </p>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

{/* Add-ons Info - Refined & Modern */}
<div className="mt-16 max-w-4xl mx-auto">
  {/* Header & New Description */}
  <div className="mb-8 text-center md:text-left">
    <h4 className="font-montserrat text-2xl font-bold text-blue-100 tracking-tight flex items-center justify-center md:justify-start gap-2">
      <span className="text-blue-400"></span>Add-on Services
    </h4>
    <p className="font-rajdhani text-blue-200/60 text-sm mt-1">
      Enhance your boosting experience with our premium add-ons
    </p>
  </div>
  
      <div className="grid md:grid-cols-2 gap-4">
        {/* Party Boost Item */}
        <div className="group p-5 rounded-2xl bg-blue-900/10 border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300">
          <div className="flex justify-between items-start mb-1">
            <span className="font-montserrat text-4xl font-bold text-white tracking-tight">Party Boost</span>
            <span className="font-montserrat text-blue-400 font-black text-medium tracking-widest">+200% PRICE</span>
          </div>
          <p className="font-rajdhani text-blue-100/60 text-sm leading-tight">
            Play alongside our pro boosters. No account sharing required—stay in control.
          </p>
        </div>

        {/* Rush Boost Item */}
        <div className="group p-5 rounded-2xl bg-blue-900/10 border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300">
          <div className="flex justify-between items-start mb-1">
            <span className="font-montserrat text-4xl font-bold text-white tracking-tight">Rush Boost</span>
            <span className="font-montserrat text-blue-400 font-black text-medium tracking-widest">+120% PRICE</span>
          </div>
          <p className="font-rajdhani text-blue-100/60 leading-tight">
            Skip the queue. Your order becomes our top priority for the fastest possible completion.
          </p>
        </div>
      </div>
    </div>

{/* Calculator Section */}
<div className="mt-20">
  <div className="text-center mb-10">
    <h3 className="font-montserrat text-3xl font-bold tracking-tight text-white uppercase">
      Price Calculator
    </h3>
    <div className="h-1.5 w-16 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mt-3 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
    
    {/* New Description */}
    <p className="font-rajdhani text-blue-200/60 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
      Estimate your total cost instantly. Select your <span className="text-blue-400 font-semibold">Current Rank</span> and your 
      <span className="text-blue-400 font-semibold"> Desired Goal</span> to see our competitive rates.
    </p>
  </div>

  {/* Calculator Component */}
  <div className="max-w-4xl mx-auto">
    <BoostCalculator />
  </div>
</div>
      </div>
    </section>
  );
}