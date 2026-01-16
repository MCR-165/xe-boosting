export default function Services() {
  return (
    <section id="services" className="relative bg-[#020617] py-24 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-2/3 bg-[#1282FF]/5 blur-[120px] z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-8">
        <h2 className="font-montserrat text-3xl md:text-5xl font-bold tracking-tighter uppercase text-white">
          Premium <span className="text-[#1282FF] drop-shadow-[0_0_15px_rgba(18,130,255,0.5)]">Services</span>
        </h2>
          <div className="h-1.5 w-20 bg-[#1282FF] mx-auto mt-4 rounded-full shadow-[0_0_15px_#1282FF]" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Service Card 1: Rank Boosting */}
          <div className="group relative flex flex-col p-10 bg-blue-900/10 border border-blue-500/20 rounded-3xl backdrop-blur-md hover:bg-blue-500/10 hover:border-[#1282FF]/50 transition-all duration-500 hover:-translate-y-2">
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-[#1282FF]/10 text-[#1282FF] group-hover:bg-[#1282FF] group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(18,130,255,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="font-montserrat text-2xl font-bold mb-4 text-white tracking-tight">Rank Boosting</h3>
            <p className="font-rajdhani text-lg text-blue-100/60 leading-relaxed tracking-tight">
              Precision climbing for any rank. Secure your desired division with our high-winrate professional roster.
            </p>
          </div>

          {/* Service Card 2: Duo Queuing */}
          <div className="group relative flex flex-col p-10 bg-blue-900/10 border border-blue-500/20 rounded-3xl backdrop-blur-md hover:bg-blue-500/10 hover:border-[#1282FF]/50 transition-all duration-500 hover:-translate-y-2">
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-[#1282FF]/10 text-[#1282FF] group-hover:bg-[#1282FF] group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(18,130,255,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="font-montserrat text-2xl font-bold mb-4 text-white tracking-tight">Duo Queuing</h3>
            <p className="font-rajdhani text-sm text-blue-100/60 leading-relaxed tracking-tight">
              Play alongside a pro. Learn high-level mechanics and game sense while maintaining full account control.
            </p>
          </div>

          {/* Service Card 3: Placements */}
          <div className="group relative flex flex-col p-10 bg-blue-900/10 border border-blue-500/20 rounded-3xl backdrop-blur-md hover:bg-blue-500/10 hover:border-[#1282FF]/50 transition-all duration-500 hover:-translate-y-2">
            <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-[#1282FF]/10 text-[#1282FF] group-hover:bg-[#1282FF] group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(18,130,255,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-montserrat text-2xl font-bold mb-4 text-white tracking-tight">Placements</h3>
            <p className="font-rajdhani text-lg text-blue-100/60 leading-relaxed tracking-tight">
              Secure the best possible start. Our top-tier performers ensure high MMR placement for the new season.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}