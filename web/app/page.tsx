import TechStackBanner from "@/components/TechStackBanner";
import WhatWeDo from "@/components/WhatWeDo";
import RiskFreeSection from "@/components/RiskFreeSection";
import BuildBusinessSection from "@/components/BuildBusinessSection";
import FoundersNote from "@/components/FoundersNote";
import CarouselSection from "@/components/CarouselSection";
import SubmitIdeaVisual from "@/components/SubmitIdeaVisual";
import StandardsCard from "@/components/StandardsCard";

import PricingSection from "@/components/PricingSection";

import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden relative font-sans">
      {/* Header */}
      <header className="w-full flex justify-center py-5 relative z-20">
        <div className="w-full max-w-7xl flex items-center justify-between px-6 lg:px-12 xl:px-8">
          <div className="flex items-center gap-8">
            <span className="font-bold text-2xl tracking-tighter">Valdt</span>
          </div>
          <div className="flex items-center gap-5 text-[15px] font-medium">
            <Link 
              href="/apply"
              className="bg-[#533afd] text-white px-4 py-1.5 rounded-[4px] shadow-sm hover:bg-slate-900 transition flex items-center gap-2 font-bold whitespace-nowrap text-[13px]"
            >
              Apply Now
              <svg 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="w-4 h-4"
              >
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="w-full flex justify-center relative pt-24 pb-20 lg:pb-32 z-10">
        <div className="hidden lg:block absolute right-0 top-0 w-[60%] h-[120%] -z-10 pointer-events-none">
          <div className="absolute top-[0%] left-[20%] w-[500px] h-[500px] bg-[#ffa5d8] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
          <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#9089fc] rounded-full mix-blend-multiply filter blur-[140px] opacity-70"></div>
        </div>
        <div className="hidden md:block lg:hidden absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[0%] right-[0%] w-[450px] h-[450px] bg-[#ffa5d8] rounded-full mix-blend-multiply filter blur-[110px] opacity-70"></div>
          <div className="absolute top-[15%] right-[-10%] w-[550px] h-[550px] bg-[#9089fc] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        </div>
        <div className="block md:hidden absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-[-5%] right-[-20%] w-[350px] h-[350px] bg-[#ffa5d8] rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
          <div className="absolute top-[15%] right-[-30%] w-[450px] h-[450px] bg-[#9089fc] rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        </div>

        <div className="w-full max-w-7xl px-6 lg:px-12 xl:px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col items-start pt-4">
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[4.8rem] leading-[1.05] font-bold text-slate-900 tracking-tight mb-8">
              Launch It<br />
              Before You<br />
              <span className="text-[#533afd]">Spend It</span>
            </h1>
            <p className="text-[1.1rem] md:text-[1.2rem] lg:text-[1.3rem] text-slate-600 leading-relaxed max-w-lg mb-10 font-medium">
              Built by founders, for founders.<br />
              <span className="text-[#533afd]">Sell it</span> before you build it.
            </p>
            <div className="flex items-center gap-3 lg:gap-4">
              <Link 
                href="/apply"
                className="bg-[#533afd] text-white px-4 lg:px-5 py-2 rounded-[4px] text-[14px] lg:text-[15px] font-semibold shadow-md hover:bg-slate-900 transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                Get started <span className="text-xs">&gt;</span>
              </Link>
              <Link 
                href="#pricing"
                className="flex items-center gap-2 lg:gap-3 border border-slate-200 bg-white px-4 lg:px-5 py-2 rounded-[4px] text-[14px] lg:text-[15px] font-semibold text-slate-600 hover:border-slate-300 hover:text-black transition-colors shadow-sm whitespace-nowrap"
              >
                Explore our pricing {">"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Tech Stack Banner */}
      <TechStackBanner />
      
      <StandardsCard />


      
      {/* What We Actually Do Section */}
      <section className="w-full flex justify-center py-16 lg:py-24 relative z-10 bg-slate-50/50">
        <div className="w-full max-w-7xl px-6 lg:px-12 xl:px-8">
          <div className="max-w-4xl mb-8 lg:mb-12">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.8rem] leading-[1.2] font-medium text-slate-900 tracking-tight text-left mb-3">
              What we actually do
            </h2>
            <p className="text-slate-500 text-[3.8vw] min-[361px]:text-[16px] md:text-[18px] font-medium max-w-2xl whitespace-nowrap">
              Everything an early-stage startup needs.
            </p>
          </div>
          <WhatWeDo />
        </div>
      </section>

      <RiskFreeSection />
      <BuildBusinessSection />
      <FoundersNote />
      <CarouselSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />

    </main>
  );
}