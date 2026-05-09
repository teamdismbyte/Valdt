"use client";
import React, { useState } from 'react';
import CustomModal from './CustomModal';

export default function PricingSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="pricing" className="w-full flex justify-center py-20 lg:py-32 relative z-10 bg-white font-sans">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 items-start mb-8 lg:mb-12">
          <div className="max-w-2xl">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.8rem] leading-[1.2] font-medium text-slate-900 tracking-tight text-left mb-3">
              The complete launch system
            </h2>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 w-full">
          
          {/* Card 1 - Starter */}
          <div className="relative w-full rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row transition-all duration-300 overflow-hidden group shadow-sm">
            
            {/* Left Content - Title, Price & CTA */}
            <div className="flex-1 bg-[#f7f8f9] p-5 lg:p-6 flex flex-col items-start gap-6 border-b md:border-b-0 md:border-r border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 w-full text-left">Starter</h3>
              <div className="w-full flex flex-col items-start gap-1">
                <span className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 block">$990</span>
                <span className="text-slate-400 line-through text-lg font-medium block">$1,500</span>
                <span className="text-slate-400 text-xs lg:text-sm font-medium block tracking-tight">Limited time pricing</span>
              </div>
              <div className="w-full mt-auto">
                <a 
                  href="https://www.paypal.com/ncp/payment/YV6T3YHFDUBFC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full justify-center flex items-center gap-2 px-6 md:px-3 xl:px-6 py-3 md:py-2.5 xl:py-3 bg-slate-900 text-white font-bold rounded-lg text-[15px] md:text-[13px] xl:text-[15px] md:whitespace-nowrap xl:whitespace-normal hover:bg-slate-800 transition-all duration-300 shadow-md"
                >
                  Get started
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Features */}
            <div className="flex-[1.2] px-6 lg:px-8 pt-5 lg:pt-6 pb-4 lg:pb-5 flex flex-col items-start bg-white">
              <div className="flex flex-col gap-1 mb-4 lg:mb-5">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.15em]">Early Traction</span>
                <p className="text-[14px] lg:text-[15px] font-medium text-slate-500 leading-[1.4] max-w-[280px]">
                  Start acquiring customers and generating actual cash flow.
                </p>
              </div>
              
              <div className="w-[calc(100%+4rem)] lg:w-[calc(100%+5rem)] -mx-8 lg:-mx-10 border-t border-slate-100 mb-4 lg:mb-5" />

              <div className="flex flex-col gap-2 lg:gap-2.5">
                {[
                  "1:1 Launch Strategy",
                  "Sales-Ready Website",
                  "Ad Campaign Setup",
                  "Targeted Lead List"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-slate-500 shrink-0 md:hidden xl:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-500 font-medium text-[14px] md:text-[12px] xl:text-[15px] md:tracking-tight xl:tracking-normal md:whitespace-nowrap xl:whitespace-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 - Pro */}
          {/* Card 2 - Pro */}
          <div className="relative w-full rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row transition-all duration-300 overflow-hidden group shadow-sm">

            {/* Left Content - Title, Price & CTA */}
            <div className="flex-1 bg-[#f7f8f9] p-5 lg:p-6 flex flex-col items-start gap-6 border-b md:border-b-0 md:border-r border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 w-full text-left">Pro</h3>
              <div className="w-full flex flex-col items-start gap-1">
                <span className="text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 block">$1,998</span>
                <span className="text-slate-400 line-through text-lg font-medium block">$3,500</span>
                <span className="text-slate-400 text-xs lg:text-sm font-medium block tracking-tight">Limited time pricing</span>
              </div>
              <div className="w-full mt-auto">
                <a 
                  href="https://www.paypal.com/ncp/payment/WXRFDAKM8AE8A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full justify-center flex items-center gap-2 px-6 md:px-3 xl:px-6 py-3 md:py-2.5 xl:py-3 bg-[#533afd] text-white font-bold rounded-lg text-[15px] md:text-[13px] xl:text-[15px] md:whitespace-nowrap xl:whitespace-normal hover:bg-slate-900 transition-all duration-300 shadow-md"
                >
                  Get started
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Features */}
            <div className="flex-[1.2] px-6 lg:px-8 pt-5 lg:pt-6 pb-4 lg:pb-5 flex flex-col items-start bg-white">
              <div className="flex flex-col gap-1 mb-4 lg:mb-5">
                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-[0.15em]">CORE MVP LAUNCH</span>
                <p className="text-[14px] lg:text-[15px] font-medium text-slate-500 leading-[1.4] max-w-[280px]">
                  Bring your core product to market and start driving sales.
                </p>
              </div>
              
              <div className="w-[calc(100%+4rem)] lg:w-[calc(100%+5rem)] -mx-8 lg:-mx-10 border-t border-slate-100 mb-4 lg:mb-5" />

              <div className="flex flex-col gap-2 lg:gap-2.5">
                {[
                  "1:1 Launch Strategy",
                  "Functional Core MVP",
                  "Sales-Ready Website",
                  "Ad Campaign Setup",
                  "Targeted Lead List"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-slate-500 shrink-0 md:hidden xl:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-500 font-medium text-[14px] md:text-[12px] xl:text-[15px] md:tracking-tight xl:tracking-normal md:whitespace-nowrap xl:whitespace-normal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>




        </div>

        {/* Card 3 - Enterprise/Custom (Wide) */}
        <div className="mt-8 relative w-full rounded-xl bg-white border border-slate-200 flex flex-col md:flex-row transition-all duration-300 overflow-hidden group shadow-sm">
          {/* Left Content - Title & CTA */}
          <div className="flex-1 bg-[#f7f8f9] p-5 md:p-7 lg:p-8 flex flex-col justify-between items-start border-b md:border-b-0 md:border-r border-slate-200">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Custom</h3>
              <p className="text-slate-500 font-medium text-[15px] max-w-xs">
                For unique requirements<br />and fully tailored solutions.
              </p>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="mt-8 group/btn w-full justify-center md:w-auto px-8 py-3 bg-slate-900 text-white font-bold rounded-lg text-[15px] hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
            >
              Book a Call
              <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          {/* Right Content - Features */}
          <div className="flex-[2] p-7 lg:p-8 bg-white grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-slate-900 font-bold text-[16px]">Bespoke Workflows</span>
              <p className="text-slate-500 text-[14px]">We build fully tailored customer journeys<br />and operational systems.</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-900 font-bold text-[16px]">Seamless Integrations</span>
              <p className="text-slate-500 text-[14px]">Connect your platform with the essential tools<br />that power your business.</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-900 font-bold text-[16px]">Built for Scale</span>
              <p className="text-slate-500 text-[14px]">Engineered to support massive volume<br />without compromising performance.</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-slate-900 font-bold text-[16px]">Founder-to-Founder</span>
              <p className="text-slate-500 text-[14px]">Partner directly with our founding team<br />to design and execute your strategy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
