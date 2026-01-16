export default function Contact() {
  return (
    <footer id="contact" className="relative bg-[#020617] pt-20 pb-10 px-6 text-white overflow-hidden border-t border-white/5">
      {/* Background Glow - Matches the rest of the site */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#1282FF]/50 to-transparent shadow-[0_0_20px_#1282FF]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="font-montserrat font-bold text-3xl tracking-tighter">
              XE <span className="text-[#1282FF]">Boosting</span>
            </h2>
            <p className="font-rajdhani text-blue-200/60 text-lg leading-relaxed max-w-sm">
              Premium gaming services for players who demand the best. Secure, fast, and professional rank distribution.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 uppercase tracking-widest text-white/90">Navigation</h4>
            <ul className="font-rajdhani space-y-3 text-blue-100/60 text-lg">
              <li><a href="#services" className="hover:text-[#1282FF] transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-[#1282FF] transition-colors">Pricing</a></li>
              {/* <li><a href="#testimonials" className="hover:text-[#1282FF] transition-colors">Testimonials</a></li> */}
              <li><a href="#faq" className="hover:text-[#1282FF] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Action Column */}
          <div className="bg-[#1282FF]/5 border border-[#1282FF]/20 p-8 rounded-2xl backdrop-blur-sm">
            <h4 className="font-montserrat font-bold text-lg mb-2 uppercase tracking-widest">Get Started</h4>
            <p className="font-rajdhani text-blue-200/60 mb-6 text-sm">
              Join 500+ gamers on our community server for 24/7 support.
            </p>
            <a
              href="https://discord.gg/yourlink"
              target="_blank"
              className="flex items-center justify-center gap-3 bg-[#1282FF] hover:bg-[#1282FF]/90 text-white font-montserrat font-black py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(18,130,255,0.4)] hover:scale-[1.02]"
            >
              <span>JOIN DISCORD</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_#4ade80]" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-rajdhani text-blue-200/40 text-sm">
            © 2026 XE Boosting. All rights reserved.
          </p>
          <div className="flex gap-6 font-rajdhani text-sm text-blue-200/40">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}