"use client";

import React from 'react';

export default function FoundersNote() {
  return (
    <section className="w-full flex justify-center pb-20 lg:pb-32 bg-white relative z-10">
      <div className="w-full max-w-7xl px-6 lg:px-12 xl:px-8">
        
        <div className="w-full flex items-stretch">
          {/* Vertical Line */}
          <div className="w-[4px] bg-slate-900 flex-shrink-0 mr-6 md:mr-10 rounded-full" />
          
          <div className="flex flex-col flex-1">
            {/* Note Content */}
            <div className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.65] text-[#4a5568] font-medium italic mb-8 space-y-3">
              <p>
                &ldquo;Business is just solving one problem after another.
              </p>
              <p>
                Built by a founder, for founders.
              </p>
              <p>
                I packed this system with exactly what you need to start solving yours.&rdquo;
              </p>
            </div>

            {/* Author Info */}
            <div className="text-[16px] md:text-[18px] text-slate-900 font-semibold">
              — Dawon, Founder
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
