export default function Services() {
  return (
    <section id="services" className="relative bg-[#020617] text-white overflow-hidden">
      {/* Optional: Subtle background glow to match Hero */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-blue-600/10 blur-[120px] z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-center mb-12 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="group flex flex-col p-8 bg-blue-900/10 border border-blue-500/20 rounded-2xl backdrop-blur-md hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">⚔️</div>
            <h3 className="font-montserrat text-xl font-bold mb-3 text-blue-100 tracking-tight">Rank Boosting</h3>
            <p className="font-rajdhani text-lg text-blue-200/70 leading-relaxed font-light">
              Fast & secure boosting to your desired rank. Professional players at your service.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="group flex flex-col p-8 bg-blue-900/10 border border-blue-500/20 rounded-2xl backdrop-blur-md hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">🎓</div>
            <h3 className="font-montserrat text-xl font-bold mb-3 text-blue-100 tracking-tight">Coaching</h3>
            <p className="font-rajdhani text-lg text-blue-200/70 leading-relaxed font-light">
              1-on-1 coaching sessions with top-tier players. Master your favorite champions.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="group flex flex-col p-8 bg-blue-900/10 border border-blue-500/20 rounded-2xl backdrop-blur-md hover:bg-blue-500/10 hover:border-blue-500/40 transition-all duration-300">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="font-montserrat text-xl font-bold mb-3 text-blue-100 tracking-tight">Placements</h3>
            <p className="font-rajdhani text-lg text-blue-200/70 leading-relaxed font-light">
              Guaranteed performance in your placement matches to start the season right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}