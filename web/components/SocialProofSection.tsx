import React from 'react';

const SocialProofSection = () => {
  return (
    <section className="w-full flex justify-center pt-4 pb-8 bg-white">
      <div className="w-full max-w-7xl px-6 lg:px-12 xl:px-8">
        <div className="bg-[#f8f9fa] rounded-xl p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col justify-between py-2">
            <h2 className="text-[1.8rem] lg:text-[2.2rem] font-medium leading-[1.1] text-slate-900 tracking-tight max-w-[90%]">
              Join 100+ of the world's most ambitious founders building 5x faster than the average startup.
            </h2>
            
            <button className="flex items-center gap-2 text-slate-500 font-medium hover:text-slate-900 transition-colors mt-8 group text-sm">
              View our case studies
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Right Featured Card */}
          <div className="lg:w-1/2 relative rounded-xl overflow-hidden group min-h-[300px]">
            <img 
              src="/neon_stay_fast.png" 
              alt="Stay Fast" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Overlay Content */}
            <div className="relative h-full p-8 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center p-1">
                  <svg viewBox="0 0 24 24" fill="none" className="text-[#ff0080]">
                    <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" fill="currentColor" />
                  </svg>
                </div>
                <span className="text-white font-bold text-xs tracking-widest uppercase">Valdt Founders</span>
              </div>
              
              <div className="flex flex-col">
                <span className="text-white text-[5rem] lg:text-[6rem] font-bold leading-none tracking-tighter">7 mo</span>
                <p className="text-white/90 text-[15px] font-medium leading-snug mt-2 max-w-[280px]">
                  Average time to reach $50k MRR with our infrastructure.
                </p>
              </div>
            </div>
            
            {/* Close button style (aesthetic only) */}
            <button className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
