"use client";
import { useState } from "react";

const faqData = [
  {
    question: "Is Valorant boosting safe?",
    answer: "Absolutely. We prioritize account security above all else. Our boosters use high-quality VPNs to match your local IP address and follow strict protocols to ensure your account remains undetected and secure."
  },
  {
    question: "How long does it take to complete my boost?",
    answer: "Speed depends on the size of the boost, but most orders are started within 30 minutes. A standard division climb typically takes 24-48 hours depending on your current MMR."
  },
  {
    question: "Can I play with the booster?",
    answer: "Yes! By selecting our 'Party Boost' add-on, you can play on your own account alongside our pro boosters. No account sharing is required for this service."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept a wide range of secure payments including GCash, Maya, PayPal, and various payment methods. Contact us on Discord for specific local payment options."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "Customer satisfaction is our goal. If there is an issue with your boost, contact our 24/7 Discord support. We offer partial or full refunds depending on the progress of the order."
  },
  {
    question: "Do you offer discounts for multiple boosts?",
    answer: "Yes! We offer loyalty rewards and bulk discounts. If you are ordering more than 3 divisions or boosting multiple accounts, message us for a custom quote."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#020617] py-24 px-6 text-white overflow-hidden">
      {/* Tactical Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#1282FF]/20 to-transparent" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#1282FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
            Frequently Asked <span className="text-[#1282FF] drop-shadow-[0_0_15px_rgba(18,130,255,0.4)]">Questions</span>
          </h2>
          <p className="font-rajdhani text-blue-200/50 text-lg md:text-xl tracking-wide">
            Protocol & Operations Intel
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`group relative transition-all duration-500 rounded-xl border ${
                openIndex === index 
                ? "bg-blue-600/[0.07] border-[#1282FF]/40 shadow-[0_0_40px_rgba(18,130,255,0.1)]" 
                : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              {/* Left "Status" Bar Indicator */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 rounded-l-xl ${
                openIndex === index ? "bg-[#1282FF] shadow-[0_0_15px_#1282FF]" : "bg-transparent"
              }`} />

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none relative overflow-hidden"
              >
                <div className="flex items-center gap-5">
                  {/* Question Number/Index */}
                  <span className={`font-rajdhani text-xs font-bold transition-colors ${
                    openIndex === index ? "text-[#1282FF]" : "text-white/20"
                  }`}>
                    0{index + 1}
                  </span>
                  
                  <span className={`font-montserrat text-lg font-bold tracking-tight transition-colors ${
                    openIndex === index ? "text-white" : "text-white/80 group-hover:text-white"
                  }`}>
                    {item.question}
                  </span>
                </div>

                <div className={`relative w-6 h-6 flex items-center justify-center transition-transform duration-500 ${
                  openIndex === index ? "rotate-180" : ""
                }`}>
                   <div className={`absolute h-0.5 w-4 bg-[#1282FF] transition-all ${openIndex === index ? "opacity-100" : "opacity-50"}`} />
                   <div className={`absolute h-4 w-0.5 bg-[#1282FF] transition-all ${openIndex === index ? "opacity-0" : "opacity-50"}`} />
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-16 pb-8 pt-2 font-rajdhani text-blue-100/60 text-lg leading-relaxed tracking-wide relative">
                  {/* Subtle Scanline Effect inside open answer */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1282FF]/5 to-transparent pointer-events-none opacity-20" />
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Prompt */}
        <div className="mt-20 text-center">
          <div className="inline-block p-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full mb-8" />
          <p className="font-rajdhani text-blue-200/30 uppercase tracking-[0.3em] text-sm">
            Got any questions? <a href="#contact" className="text-[#1282FF] hover:text-white transition-colors font-bold border-b border-[#1282FF]/30 pb-1 ml-2">Contact Us</a>
          </p>
        </div>
      </div>
    </section>
  );
}