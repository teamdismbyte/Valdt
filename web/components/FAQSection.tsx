'use client';

import React, { useState } from 'react';

const FAQ_DATA = [
  {
    id: 1,
    qEn: "How is this different from a freelancer or a dev agency?",
    aEn: "They drag out hours just to build a product.\nWe deliver a complete market-entry setup with ads and leads for one fixed price."
  },
  {
    id: 2,
    qEn: "What if nobody actually wants my product?",
    aEn: "Then we celebrate. You just saved months of wasted time and thousands of dollars.\nYou can walk away cleanly, or use the data to find what they actually want."
  },
  {
    id: 3,
    qEn: "What type of businesses do you work with?",
    aEn: "We build launch setups for everything from software to physical goods and offline businesses.\nIf your idea needs paying customers, our system can test it."
  },
  {
    id: 4,
    qEn: "Do I need to have everything figured out before we start?",
    aEn: "Specifics are great, but a rough idea is perfectly fine too.\nWe’ll jump on a call to flesh it out and build the exact strategy together."
  },
  {
    id: 5,
    qEn: "How fast can we actually launch?",
    aEn: "Usually 2-4 weeks. We limit clients to give you 1-on-1 undivided focus.\nThis ensures a lightning-fast launch with zero compromise on quality."
  },
  {
    id: 6,
    qEn: "Are there any monthly fees or hidden costs?",
    aEn: "Zero. You pay us exactly $0 in monthly fees.\nFor ads, you simply set your own budget and pay the platforms directly."
  },
  {
    id: 7,
    qEn: "Do I own all the assets and data?",
    aEn: "100%. Everything we build belongs to you. We take zero equity.\nYou keep the landing page, the ad data, and the entire lead list."
  },
  {
    id: 8,
    qEn: "Do you offer revisions on the design or copy?",
    aEn: "Our goal is to get you into the market, not stuck in the editing room.\nTo ensure a fast and cost-effective launch, we do not accept revisions once work begins."
  },
  {
    id: 9,
    qEn: "What is your refund policy?",
    aEn: "Once we kick off, we dedicate 100% of our focus and resources to your project.\nDue to this intensive nature, we do not offer refunds after work begins."
  },
  {
    id: 10,
    qEn: "What kind of projects do you turn down?",
    aEn: "We say no to slow, bloated builds filled with unnecessary features.\nIf you prioritize endless coding over actual market validation, we are not the right fit."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full flex justify-center py-24 lg:py-32 relative z-10 bg-white font-sans">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - FAQ Content */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Section Header */}
            <div className="mb-6 lg:mb-10">
              <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.8rem] leading-[1.2] font-medium text-slate-900 tracking-tight text-left max-w-2xl">
                Frequently asked questions
              </h2>
            </div>

        {/* Accordion Container */}
        <div className="flex flex-col border-t border-slate-200">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div 
                key={faq.id} 
                className="border-b border-slate-200"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-4 lg:py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-[15px] font-medium text-slate-900 group-hover:text-slate-600 transition-colors duration-200 pr-8">
                    {faq.qEn}
                  </span>
                  
                  {/* Simple Chevron Icon */}
                  <div className="flex-shrink-0 text-slate-900">
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Collapsible Answer */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-3 pr-8 md:pr-14">
                      <p className="text-[14px] leading-[1.6] text-slate-600 whitespace-pre-line">
                        {faq.aEn}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
            </div>
          </div>

          {/* Right Column - Placeholder Sticky Card */}
          <div className="lg:col-span-5 sticky top-16 lg:top-22">
            <div className="w-full rounded-xl bg-[#f8f9fb] p-8 lg:p-10 border border-slate-100/50 shadow-sm overflow-hidden flex flex-col text-slate-900 relative group">
              <div>
                <h3 className="text-[1.8rem] lg:text-[2.2rem] font-medium tracking-tight text-slate-900 leading-[1.2]">
                  Beyond the FAQ
                </h3>
              </div>
              
              <div className="flex flex-col w-full mt-8 relative z-10">
                {[
                  { 
                    label: "LinkedIn", 
                    value: "View Profile", 
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    ), 
                    link: "https://www.linkedin.com/in/dawonkang/" 
                  },
                  { 
                    label: "X (Twitter)", 
                    value: "View Updates", 
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/>
                      </svg>
                    ), 
                    link: "https://x.com/DRAWN_CO" 
                  },
                  { 
                    label: "Discord", 
                    value: "Join Community", 
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.923 2.991.076.076 0 0 0 .082-.027c.454-.622.853-1.285 1.196-1.986a.076.076 0 0 0-.041-.105 13.11 13.11 0 0 1-1.848-.88.077.077 0 0 1-.004-.129c.125-.094.252-.191.37-.291a.072.072 0 0 1 .075-.01c3.87 1.774 8.085 1.774 11.91 0a.073.073 0 0 1 .075.01c.12.1.246.197.37.291a.077.077 0 0 1-.004.129 12.06 12.06 0 0 1-1.848.88.076.076 0 0 0-.041.106c.343.701.742 1.364 1.196 1.986a.076.076 0 0 0 .082.027 19.863 19.863 0 0 0 5.942-2.991.077.077 0 0 0 .031-.057c.5-5.143-.852-9.63-3.6-13.66a.066.066 0 0 0-.031-.027zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.947 2.419-2.157 2.419zm7.974 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
                      </svg>
                    ), 
                    link: "https://discord.gg/gF3HAPjQJf" 
                  },
                  { 
                    label: "Email", 
                    value: "run@valdt.app", 
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    ), 
                    link: "mailto:run@valdt.app" 
                  }
                ].map((item, index) => (
                  <div 
                    key={item.label}
                    className="flex items-center justify-between w-full py-2.5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-slate-600">{item.icon}</div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                        <span className="text-[13px] text-slate-900 font-medium">{item.value}</span>
                      </div>
                    </div>
                    <a 
                      href={item.link}
                      target={item.link.startsWith('http') ? "_blank" : undefined}
                      rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm hover:scale-105 transition-transform cursor-pointer shadow-sm"
                    >
                      →
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
