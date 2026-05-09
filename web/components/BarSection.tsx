"use client";

import React from "react";
import Link from "next/link";

export default function BarSection() {
  const partners = [
    {
      name: "Marriott",
      logo: (
        <span className="text-[#B1000E] font-serif text-xl italic font-bold tracking-tighter">
          Marriott
        </span>
      ),
    },
    {
      name: "Figma",
      logo: (
        <span className="text-black font-semibold text-[17px] tracking-tight">
          Figma
        </span>
      ),
    },
    {
      name: "Woo",
      logo: (
        <span className="text-[#7F54B3] font-extrabold text-2xl tracking-tighter">
          woo
        </span>
      ),
    },
    {
      name: "Vercel",
      logo: (
        <span className="text-black font-semibold text-[17px] flex items-center gap-1">
          <span className="text-[12px]">▲</span> Vercel
        </span>
      ),
    },
    {
      name: "Uber",
      logo: (
        <span className="text-black font-medium text-2xl tracking-tighter">
          Uber
        </span>
      ),
    },
    {
      name: "Anthropic",
      logo: (
        <span className="text-black font-serif text-[11px] font-bold tracking-[0.2em] uppercase">
          Anthropic
        </span>
      ),
    },
    {
      name: "Lightspeed",
      logo: (
        <span className="text-[#E02424] font-bold text-[15px] tracking-tight flex items-center gap-1">
          <span className="text-xl leading-none">⬡</span> lightspeed
        </span>
      ),
    },
  ];

  return (
    <section className="w-full flex justify-center py-12 lg:py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-slate-50/50 rounded-3xl p-8 lg:p-10 border border-slate-100/50 relative overflow-hidden group">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#533afd]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <ul className="flex-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-4 w-full">
            {partners.map((partner, index) => (
              <li
                key={index}
                className="flex-shrink-0 flex items-center justify-center py-4 md:py-8 px-2 bg-transparent opacity-50 hover:opacity-100 transition-opacity duration-300"
              >
                {partner.logo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
