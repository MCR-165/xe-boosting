"use client";
import PriceCard from './pricing/PriceCard';
import BoostCalculator from './pricing/BoostCalculator';
import { priceCardData } from './pricing/rankData';

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#020617] py-5 px-4 text-white overflow-hidden">
      
      {/* --- BACKGROUND DECOR --- */}
      {/* Cyber Grid Pattern */}
      {/* <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#1282FF 1px, transparent 1px), linear-gradient(90deg, #1282FF 1px, transparent 1px)`, backgroundSize: '40px 40px' }} /> */}
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#1282FF]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-8">
          <h2 className="font-montserrat text-5xl md:text-6xl font-bold text-center mb-4 tracking-tighter uppercase">
            Pricing <span className="text-[#1282FF] drop-shadow-[0_0_15px_rgba(18,130,255,0.5)]">Packages</span>
          </h2>
          <p className="font-rajdhani text-center text-blue-200/60 text-lg md:text-xl max-w-2xl mx-auto tracking-tight">
            Professional grade performance per division climb.
          </p>
        </div>

        {/* --- PRICING GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
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

        {/* --- ADD-ONS SECTION --- */}
        <div className="mt-16 max-w-5xl mx-auto bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm relative">
          {/* Corner Accent */}
          <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[#1282FF]/30 rounded-tr-[2rem] pointer-events-none" />
          
          <div className="mb-10 text-center md:text-left">
            <h4 className="font-montserrat text-3xl font-bold text-white tracking-tighter uppercase flex items-center justify-center md:justify-start gap-3">
              <span className="w-8 h-[2px] bg-[#1282FF]" />
              Premium <span className="text-[#1282FF]">Add-ons</span>
            </h4>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Party Boost */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 hover:border-[#1282FF]/40 transition-all duration-500">
              <div className="flex justify-between items-start mb-3">
                <span className="font-montserrat text-3xl font-bold text-white uppercase italic tracking-tighter">Party Boost</span>
                <span className="font-rajdhani text-[#1282FF] font-bold text-xl">+200%</span>
              </div>
              <p className="font-rajdhani text-blue-100/60 text-sm leading-snug">
                Play alongside our pro boosters. No account sharing required—stay in total control of your journey.
              </p>
            </div>

            {/* Rush Boost */}
            <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/10 hover:border-[#1282FF]/40 transition-all duration-500">
              <div className="flex justify-between items-start mb-3">
                <span className="font-montserrat text-3xl font-bold text-white uppercase italic tracking-tighter">Rush Order</span>
                <span className="font-rajdhani text-[#1282FF] font-bold text-xl">+120%</span>
              </div>
              <p className="font-rajdhani text-blue-100/60 text-lg leading-snug">
                Skip the queue entirely. Your order becomes our top priority for the fastest possible completion.
              </p>
            </div>
          </div>
        </div>

        {/* --- CALCULATOR SECTION --- */}
        <div className="mt-20 relative">
          <div className="text-center mb-12">
            <h3 className="font-montserrat text-5xl font-bold tracking-tighter text-white uppercase">
              Rank <span className="text-[#1282FF]">Calculator</span>
            </h3>
            <p className="font-rajdhani text-blue-200/60 text-xl mt-4 max-w-2xl mx-auto leading-relaxed tracking-wide">
              Estimate your total cost instantly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative group">
             {/* Glow effect behind calculator */}
             <div className="absolute inset-0 bg-[#1282FF]/5 blur-[100px] rounded-full group-hover:bg-[#1282FF]/10 transition-all duration-1000" />
             <div className="relative">
                <BoostCalculator />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}