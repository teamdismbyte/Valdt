import React from 'react';

const MarqueeItem = () => (
  <div className="flex items-center gap-12 shrink-0">
    {/* Scalable Architecture */}
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-normal tracking-widest uppercase text-gray-500 whitespace-nowrap">Scalable Architecture</span>
    </div>

    <div className="w-[1px] h-4 bg-gray-200" />

    {/* Pre-sales Infrastructure */}
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-normal tracking-widest uppercase text-gray-500 whitespace-nowrap">Pre-sales Infrastructure</span>
    </div>

    <div className="w-[1px] h-4 bg-gray-200" />

    {/* Automated Lead Capture */}
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-normal tracking-widest uppercase text-gray-500 whitespace-nowrap">Automated Lead Capture</span>
    </div>

    <div className="w-[1px] h-4 bg-gray-200" />

    {/* Secure Payment Processing */}
    <div className="flex items-center gap-3">
      <span className="text-[10px] font-normal tracking-widest uppercase text-gray-500 whitespace-nowrap">Secure Payment Processing</span>
    </div>

    <div className="w-[1px] h-4 bg-gray-200" />
  </div>
);

const TechStackBanner = () => {
  return (
    <section className="w-full flex justify-center bg-white pt-16 lg:pt-32">
      <div className="w-full max-w-7xl px-6 lg:px-12 xl:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-6 pt-12 pb-6">
          {/* Fixed Prefix Label */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-900 whitespace-nowrap">Our Standards:</span>
            <div className="hidden lg:block w-[1px] h-4 bg-gray-200 ml-3" />
          </div>

          {/* Marquee Container */}
          <div className="w-full overflow-hidden group">
            <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
              {/* Group 1 */}
              <div className="flex items-center gap-12 pr-12 shrink-0">
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
              </div>
              {/* Group 2 (Identical for seamless loop) */}
              <div className="flex items-center gap-12 pr-12 shrink-0">
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
                <MarqueeItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackBanner;
