"use client";

const reviews = [
  {
    name: "Alex 'Viper' K.",
    rank: "Diamond III",
    text: "Legit and fast. I was stuck in Plat for months. XE Boosting got me to Diamond in 2 days. The booster was super chill too.",
    date: "2 days ago",
    verified: true
  },
  {
    name: "Jordan T.",
    rank: "Immortal I",
    text: "Best service in the PH. Zero lag, high win rate, and they used a VPN. My account felt safe the whole time. Highly recommended!",
    date: "1 week ago",
    verified: true
  },
  {
    name: "Marcus G.",
    rank: "Ascendant II",
    text: "Used the Party Boost add-on. Playing with a pro taught me more about game sense than any YouTube guide ever could.",
    date: "3 days ago",
    verified: true
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-[#020617] py-24 px-6 text-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1282FF]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-montserrat text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
            Customer <span className="text-[#1282FF]">Approval</span>
          </h2>
          <p className="font-rajdhani text-blue-200/60 text-lg md:text-xl max-w-2xl mx-auto">
            Real feedback from players who climbed the ranks with XE Boosting. 100% Verified Performance.
          </p>
          <div className="flex justify-center gap-1 mt-6 text-[#1282FF]">
             {[...Array(5)].map((_, i) => (
               <span key={i} className="text-2xl">★</span>
             ))}
             <span className="ml-3 font-rajdhani text-white font-bold">5.0 / 5.0 Rating</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-blue-900/10 border border-blue-500/10 rounded-3xl backdrop-blur-md transition-all duration-500 hover:border-[#1282FF]/40 hover:-translate-y-2"
            >
              {/* Verified Badge */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1 text-[#1282FF] text-sm">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[10px] font-montserrat font-black text-green-400 bg-green-400/10 px-2 py-1 rounded-full uppercase tracking-tighter border border-green-400/20">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Verified Boost
                  </span>
                )}
              </div>

              {/* Review Text */}
              <p className="font-rajdhani text-blue-100/80 text-lg leading-relaxed mb-8 italic">
                "{rev.text}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1282FF] to-blue-800 flex items-center justify-center font-montserrat font-black text-xl shadow-[0_0_15px_rgba(18,130,255,0.3)]">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-white text-sm uppercase tracking-tight">
                    {rev.name}
                  </h4>
                  <p className="font-rajdhani text-[#1282FF] text-xs font-bold uppercase tracking-widest">
                    Achieved {rev.rank}
                  </p>
                </div>
              </div>
              
              <span className="absolute bottom-8 right-8 font-rajdhani text-[10px] text-white/20 uppercase tracking-[0.2em]">
                {rev.date}
              </span>
            </div>
          ))}
        </div>

        {/* Legitimacy Proof Bar */}
        <div className="mt-20 py-8 px-4 border-y border-white/5 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="font-montserrat font-black text-xl tracking-tighter">TRUSTED BY 500+</div>
           <div className="font-montserrat font-black text-xl tracking-tighter">99% WIN RATE</div>
           <div className="font-montserrat font-black text-xl tracking-tighter">24/7 LIVE SUPPORT</div>
           <div className="font-montserrat font-black text-xl tracking-tighter">VPN SECURED</div>
        </div>
      </div>
    </section>
  );
}