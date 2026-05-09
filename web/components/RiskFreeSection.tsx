"use client";

import React from 'react';
import Link from 'next/link';

const FeatureCard = ({ title, description, cta, href }: { title: string, description: string, cta: string, href?: string }) => {
  const isInternal = href?.startsWith('/');
  
  const content = (
    <div className="flex flex-col items-start text-left group cursor-pointer">
      <h3 className="text-[17px] font-bold text-slate-900 mb-3 leading-snug">
        {title} <span className="font-normal text-slate-500">{description}</span>
      </h3>
      <div className="text-[#533afd] text-[15px] font-semibold flex items-center gap-1 group-hover:underline">
        {cta} <span>&gt;</span>
      </div>
    </div>
  );

  if (href) {
    if (isInternal) {
      return (
        <Link href={href}>
          {content}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

const DashboardVisual = () => {
  return (
    <div className="relative w-full mb-8 lg:mb-12 overflow-hidden rounded-xl border border-slate-100/50 shadow-sm isolation-auto aspect-[16/7.8] md:aspect-[16/7.8] lg:aspect-[16/7.8]">
      <img 
        src="/risk-free-visual.png" 
        alt="Dashboard Mockup Visual" 
        className="absolute inset-0 w-full h-full object-cover object-top scale-[1.02]" 
      />
    </div>
  );
};


export default function RiskFreeSection() {
  return (
    <section className="w-full flex justify-center py-20 lg:py-32 relative z-10 bg-slate-50/50">
      <div className="w-full max-w-7xl px-6 lg:px-12 xl:px-8">
        <div className="max-w-4xl mb-8 lg:mb-12">
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.8rem] leading-[1.2] font-medium text-slate-900 tracking-tight text-left mb-3">
            Build your business<br />
            without the risk
          </h2>
          <p className="text-slate-500 text-[16px] md:text-[18px] font-medium max-w-2xl">
            Launch fast and enter the market with minimal cost.
          </p>
        </div>

        {/* Top Hero Visual */}
        <DashboardVisual />

        {/* Responsive Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16">
          <div className="order-1 min-[912px]:order-3 lg:order-1 xl:order-1">
            <FeatureCard 
              title="Focus on the core."
              description="Skip the endless preparation. Launch fast before your window closes." 
              cta="View process"
              href="/process"
            />
          </div>
          <div className="order-2 lg:order-3 xl:order-2">
            <FeatureCard 
              title="Protect your capital."
              description="Stop burning cash on heavy upfront investments. Enter the market safely with minimal cost." 
              cta="View pricing"
              href="/process"
            />
          </div>
          <div className="order-3 min-[912px]:order-1 lg:order-2 xl:order-3">
            <FeatureCard 
              title="Minimize your risk."
              description="Equip our system to safely launch and operate your business in the real market." 
              cta="View examples"
              href="/process"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
