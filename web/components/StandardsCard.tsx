import React from 'react';

const StandardsCard = () => {
  return (
    <div className="w-full max-w-7xl px-6 lg:px-12 xl:px-8 mx-auto mt-12 lg:mt-16 mb-24 lg:mb-32">
      <div className="w-full h-auto min-h-[8rem] lg:h-40 rounded-xl bg-[#f8f9fb] border border-gray-100 p-6 py-8 md:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0 overflow-hidden relative group transition-all duration-500">
        {/* Premium Background Visuals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Subtle Gradients */}
          <div className="absolute top-[-50%] right-[-10%] w-[400px] h-[400px] bg-[#533afd]/5 rounded-full blur-[100px] transition-colors duration-700" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] bg-pink-500/[0.03] rounded-full blur-[80px]" />
          
          {/* Grid/Dot Pattern */}
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        </div>

        <div className="relative z-10 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#533afd] animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#533afd] uppercase">VALDT STANDARD</span>
          </div>
          <h2 className="text-[clamp(14px,4.5vw,20px)] md:text-3xl font-bold text-slate-900 tracking-tight whitespace-nowrap">
            The complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#533afd] to-purple-600">system for founders</span>
          </h2>
          <p className="text-slate-500 text-[clamp(10px,3.2vw,13px)] md:text-sm font-medium mt-1 md:mt-0 whitespace-nowrap">
            From idea to revenue, launch your real business.
          </p>

        </div>

        <div className="hidden lg:flex flex-col gap-3 md:gap-4 relative z-10 translate-x-0 lg:translate-x-8 opacity-90 origin-right select-none pointer-events-none w-full lg:w-auto">
          {/* Row 1 */}
          <div className="flex items-center justify-end lg:justify-start gap-2 md:gap-3 whitespace-nowrap w-full lg:w-auto translate-x-6 lg:translate-x-24">
            <div className="w-28 h-9 rounded-full shadow-sm overflow-hidden bg-cover bg-center shrink-0"
                 style={{ backgroundImage: 'url(/notion-bg.png)' }}>
            </div>
            <div className="w-28 h-9 rounded-full shadow-sm overflow-hidden bg-cover bg-center shrink-0"
                 style={{ backgroundImage: 'url(/slack-bg.png)' }}>
            </div>
            <div className="w-28 h-9 rounded-full shadow-sm overflow-hidden bg-cover bg-center shrink-0"
                 style={{ backgroundImage: 'url(/stripe-bg.png)' }}>
            </div>
            <div className="w-28 h-9 rounded-full shadow-sm overflow-hidden bg-cover bg-center shrink-0"
                 style={{ backgroundImage: 'url(/salesforce-bg.png)' }}>
            </div>
          </div>
          {/* Row 2 */}
          <div className="flex items-center justify-end lg:justify-start gap-2 md:gap-3 whitespace-nowrap w-full lg:w-auto translate-x-10 lg:translate-x-40">
            <div className="w-28 h-9 rounded-full shadow-sm overflow-hidden bg-cover bg-center shrink-0"
                 style={{ backgroundImage: 'url(/calendly-bg.png)' }}>
            </div>
            <div className="w-28 h-9 rounded-full shadow-sm overflow-hidden bg-cover bg-center shrink-0"
                 style={{ backgroundImage: 'url(/zapier-bg.png)' }}>
            </div>
            <div className="w-28 h-9 rounded-full shadow-sm overflow-hidden bg-cover bg-center shrink-0"
                 style={{ backgroundImage: 'url(/messenger-bg.png)' }}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandardsCard;
