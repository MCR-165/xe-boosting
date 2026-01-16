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
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#1282FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
            Frequently Asked <span className="text-[#1282FF]">Questions</span>
          </h2>
          <p className="font-rajdhani text-blue-200/60 text-lg md:text-xl">
            Everything you need to know about our Valorant boosting services.
          </p>
          <div className="h-1 w-20 bg-[#1282FF] mx-auto mt-6 rounded-full shadow-[0_0_15px_#1282FF]" />
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index}
              className={`group transition-all duration-300 rounded-2xl border ${
                openIndex === index 
                ? "bg-blue-900/20 border-[#1282FF]/50 shadow-[0_0_30px_rgba(18,130,255,0.15)]" 
                : "bg-white/5 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-montserrat text-lg font-bold tracking-tight transition-colors ${
                  openIndex === index ? "text-[#1282FF]" : "text-white"
                }`}>
                  {item.question}
                </span>
                <span className={`transform transition-transform duration-300 text-[#1282FF] text-2xl ${
                  openIndex === index ? "rotate-45" : "rotate-0"
                }`}>
                  +
                </span>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 font-rajdhani text-blue-100/70 text-lg leading-relaxed border-t border-white/5 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Prompt */}
        <div className="mt-16 text-center">
          <p className="font-rajdhani text-blue-200/40">
            Still have questions? <a href="#contact" className="text-[#1282FF] hover:underline font-bold">Ask us on Discord</a>
          </p>
        </div>
      </div>
    </section>
  );
}