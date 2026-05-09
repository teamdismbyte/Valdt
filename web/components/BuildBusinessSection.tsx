import React from 'react';
import GlobeVisual from './GlobeVisual';
import NotSideProjectVisual from './NotSideProjectVisual';

export default function BuildBusinessSection() {
  return (
    <section className="w-full flex justify-center pt-20 lg:pt-32 pb-10 lg:pb-16 relative z-10 bg-white">
      <div className="w-full max-w-7xl px-6 lg:px-12 xl:px-8">
        {/* Header Section */}
        <div className="flex flex-col gap-4 items-start">
          <div className="max-w-2xl">
            <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.8rem] leading-[1.2] font-medium text-slate-900 tracking-tight text-left mb-3">
              We don't build websites<br />
              We build businesses
            </h2>
            <p className="text-slate-500 text-[16px] md:text-[18px] font-medium">
              Built by a founder, for founders.
            </p>
          </div>
        </div>

        {/* Asymmetric Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 mt-8 lg:mt-12">
          
          {/* Card 1: Top Left — Completely flexible */}
          <div className="md:col-span-7 bg-[#f7f8f9] rounded-xl p-6 lg:p-8 flex flex-col relative overflow-hidden h-[400px] lg:h-[480px]">
            <div className="relative z-10">
              <h3 className="text-[1.2rem] md:text-[1.05rem] lg:text-[1.3rem] font-semibold text-slate-900 mb-2">Completely flexible</h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-sm text-[15px] md:text-[11px] lg:text-[15px]">
                We build custom platforms that adapt perfectly<br className="hidden md:block" /> to your specific business needs and just work.
              </p>
            </div>

            {/* Browser Checkout Mockup — anchored bottom-right */}
            <div className="absolute right-0 bottom-0 w-[85%] max-w-[420px] pointer-events-none select-none translate-y-[12%] max-[767px]:scale-[0.85] max-[767px]:origin-bottom-right">
              {/* Browser chrome */}
              <div className="bg-white rounded-tl-2xl shadow-[0_-8px_40px_rgba(0,0,0,0.08)] border-t border-l border-slate-100 overflow-hidden">
                {/* Address bar */}
                <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-100 bg-[#fafafa]">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                    <div className="w-2 h-2 rounded-full bg-slate-200"></div>
                  </div>
                  <div className="flex-1 bg-white border border-slate-200 rounded-md flex items-center justify-center py-0.5 px-2 gap-1">
                    <svg className="w-2.5 h-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    <span className="text-[9px] text-slate-400 font-medium tracking-tight">valdt.app/checkout</span>
                  </div>
                </div>

                {/* Checkout content */}
                <div className="flex" style={{ fontSize: '0px' }}>
                  {/* Left: Form */}
                  <div className="flex-1 px-4 pt-3 pb-3 border-r border-slate-100">
                    {/* Brand */}
                    <p className="text-[10px] font-extrabold text-[#f97316] tracking-tight mb-2.5 uppercase">Valdt</p>

                    {/* Email */}
                    <p className="text-[8px] text-slate-500 font-medium mb-1">Email</p>
                    <div className="border border-slate-200 rounded-md px-2 py-1.5 mb-2 bg-white">
                      <span className="text-[8px] text-slate-400">John@example.com</span>
                    </div>

                    {/* Payment buttons */}
                    <div className="flex gap-1.5 mb-1.5">
                      <div className="flex-1 bg-black rounded-md py-1.5 flex items-center justify-center gap-1">
                        <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        <span className="text-[8px] text-white font-semibold">link</span>
                      </div>
                      <div className="flex-1 bg-black rounded-md py-1.5 flex items-center justify-center gap-1">
                        <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                        <span className="text-[8px] text-white font-semibold">Pay</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mb-2">
                      <div className="h-px flex-1 bg-slate-100"></div>
                      <span className="text-[7px] text-slate-400">oder</span>
                      <div className="h-px flex-1 bg-slate-100"></div>
                    </div>

                    {/* Payment method */}
                    <p className="text-[8px] text-slate-500 font-medium mb-1">Payment method</p>
                    <div className="border border-slate-200 rounded-md overflow-hidden mb-2">
                      {/* Row 1: Card — unselected */}
                      <div className="flex items-center gap-2 px-2 py-1.5 border-b border-slate-100">
                        <div className="w-3 h-3 rounded-full border-[1.5px] border-[#4f8ef7] flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4f8ef7]"></div>
                        </div>
                        <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3 text-slate-500" viewBox="0 0 20 14" fill="none">
                            <rect x="0.5" y="0.5" width="19" height="13" rx="2" stroke="currentColor" strokeWidth="1"/>
                            <rect x="0" y="3.5" width="20" height="3" fill="currentColor" opacity="0.4"/>
                            <rect x="2" y="9" width="4" height="1.5" rx="0.5" fill="currentColor"/>
                            <rect x="7" y="9" width="3" height="1.5" rx="0.5" fill="currentColor"/>
                          </svg>
                        </div>
                        <span className="text-[8px] text-slate-800 font-semibold">Card</span>
                      </div>
                      {/* Row 2: Klarna — selected */}
                      <div className="px-2 py-1.5 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full border border-slate-300 flex-shrink-0"></div>
                          <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M3 21h18"/>
                              <path d="M3 10h18"/>
                              <path d="M5 6l7-3 7 3"/>
                              <path d="M6 10v11"/>
                              <path d="M10 10v11"/>
                              <path d="M14 10v11"/>
                              <path d="M18 10v11"/>
                            </svg>
                          </div>
                          <span className="text-[8px] text-slate-700 font-medium">Bank</span>
                        </div>
                      </div>
                      {/* Row 3: Rechnung — unselected */}
                      <div className="flex items-center gap-2 px-2 py-1.5">
                        <div className="w-3 h-3 rounded-full border border-slate-300 flex-shrink-0"></div>
                        <div className="w-4 h-4 rounded-[3px] bg-[#f7931a] flex items-center justify-center flex-shrink-0">
                          <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z"/>
                          </svg>
                        </div>
                        <span className="text-[8px] text-slate-700 font-medium">Crypto</span>
                      </div>
                    </div>

                    {/* Weiter button */}
                    <div className="bg-slate-100 rounded-md py-1.5 flex items-center justify-center">
                      <span className="text-[8px] text-slate-500 font-semibold">Weiter</span>
                    </div>
                  </div>

                  {/* Right: Order summary */}
                  <div className="w-[42%] px-3 pt-3 pb-3 bg-[#fafafa]">
                    <p className="text-[8px] font-bold text-slate-700 mb-2 tracking-tight">Order Summary</p>
                    {/* Product */}
                    <div className="flex gap-1.5 mb-2.5">
                      <div className="w-9 h-9 rounded-md bg-slate-200 flex items-center justify-center overflow-hidden flex-shrink-0">
                        {/* Hoodie SVG simplified */}
                        <svg viewBox="0 0 40 40" className="w-7 h-7" fill="none">
                          <path d="M8 14 C8 14 12 10 16 9 L20 7 L24 9 C28 10 32 14 32 14 L30 22 L26 20 L26 34 L14 34 L14 20 L10 22 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="0.5"/>
                          <path d="M16 9 Q20 12 24 9" stroke="#334155" strokeWidth="0.5" fill="none"/>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[7px] font-semibold text-slate-800 leading-tight">T-Shirt</p>
                        <p className="text-[6.5px] text-slate-400">T-shirt Black</p>
                        <p className="text-[7px] font-bold text-slate-700 mt-0.5">$100</p>
                      </div>
                    </div>
                    {/* Totals */}
                    <div className="space-y-0.5 border-t border-slate-200 pt-1.5">
                      {[['Subtotal','$100'],['Tax','$10'],['Shipping','Free']].map(([k,v]) => (
                        <div key={k} className="flex justify-between">
                          <span className="text-[7px] text-slate-400">{k}</span>
                          <span className="text-[7px] text-slate-600 font-medium">{v}</span>
                        </div>
                      ))}
                      <div className="flex justify-between pt-0.5 border-t border-slate-200 mt-0.5">
                        <span className="text-[7px] font-bold text-slate-800">Total</span>
                        <span className="text-[7px] font-bold text-slate-800">$110</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Top Right */}
          <div className="md:col-span-5 bg-[#f7f8f9] rounded-xl p-6 lg:p-8 flex flex-col relative overflow-hidden h-[400px] lg:h-[480px]">
            <div className="relative z-10">
              <h3 className="text-[1.2rem] md:text-[1.05rem] lg:text-[1.3rem] font-semibold text-slate-900 mb-2">An extension of your team</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-[15px] md:text-[11px] lg:text-[15px]">
                Think of us as your in-house partners.<br className="hidden md:block" /> We work alongside you to build your vision.
              </p>
            </div>
            
            {/* Testimonial Fan Visual */}
            <div className="absolute bottom-0 left-0 right-0 top-[140px] md:top-[160px] lg:top-[110px] flex items-center justify-center overflow-hidden" style={{ perspective: '800px' }}>
              <div className="transform scale-[0.65] min-[390px]:scale-[0.75] min-[500px]:scale-[0.85] md:scale-[0.65] lg:scale-100 origin-center">
                <div className="flex items-center gap-4" style={{ transform: 'rotateX(12deg) rotateY(-32deg)' }}>

                {[
                  {
                    name: "Chloe T",
                    initials: "T",
                    title: "CEO, D2C Skincare Brand",
                    text: "The smartest way to launch a business. Best decision we've made from day one.",
                    color: "#f472b6",
                    offset: "translateZ(0px)"
                  },
                  {
                    name: "Alex R",
                    initials: "R",
                    title: "Founder, B2B SaaS Startup",
                    text: "True partners who actually work alongside you. It felt just like having our own internal team.",
                    color: "#6366f1",
                    offset: "translateZ(-30px) translateX(-20px) translateY(-10px)"
                  },
                  {
                    name: "Marcus L",
                    initials: "L",
                    title: "Director, Retail Business",
                    text: "Flawless execution from start to finish. We couldn't be more thankful for their dedication.",
                    color: "#2dd4bf",
                    offset: "translateZ(-60px) translateX(-40px) translateY(-20px)"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100/80 flex flex-col p-5 flex-shrink-0"
                    style={{ width: '250px', height: '180px', transform: item.offset }}>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-[13px] shadow-sm"
                        style={{ backgroundColor: item.color }}>
                        {item.initials}
                      </div>
                      <div className="flex flex-col">
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', lineHeight: 1 }}>{item.name}</span>
                        <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600, marginTop: '2px' }}>{item.title}</span>
                      </div>
                    </div>

                    <p style={{ fontSize: '12px', color: '#64748b', fontWeight: 500, lineHeight: 1.5 }}>
                      {item.text}
                    </p>
                  </div>
                ))}

              </div>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Left */}
          <div className="md:col-span-5 bg-[#f7f8f9] rounded-xl p-6 lg:p-8 flex flex-col relative overflow-hidden h-[400px] lg:h-[480px]">
            <div className="relative z-10">
              <h3 className="text-[1.2rem] md:text-[1.05rem] lg:text-[1.3rem] font-semibold text-slate-900 mb-2">Not a side project</h3>
              <p className="text-slate-500 font-medium leading-relaxed text-[15px] md:text-[11px] lg:text-[15px]">
                We don&apos;t build hobbies or simple projects.<br className="hidden md:block" /> We give you the solid foundation to run a serious business.
              </p>
            </div>
            <div className="relative flex-1 w-full mt-2 lg:mt-4 max-[767px]:mt-6 max-[400px]:w-[340px] max-[400px]:left-[50%] max-[400px]:-ml-[170px] md:w-[311px] md:left-[50%] md:-ml-[155px] lg:w-full lg:left-0 lg:ml-0 transform origin-top max-[330px]:scale-[0.7] max-[360px]:scale-[0.8] max-[400px]:scale-[0.9] md:translate-y-6 lg:translate-y-0 md:scale-[0.85] min-[912px]:scale-100 lg:scale-100">
              <NotSideProjectVisual />
            </div>
          </div>

          {/* Card 4: Bottom Right */}
          <div className="md:col-span-7 bg-[#f7f8f9] rounded-xl p-6 lg:p-8 flex flex-col relative overflow-hidden h-[400px] lg:h-[480px]">
            <div className="relative z-10 pointer-events-none">
              <h3 className="text-[1.2rem] md:text-[1.05rem] lg:text-[1.3rem] font-semibold text-slate-900 mb-2">Expand your reach</h3>
              <p className="text-slate-500 font-medium leading-relaxed max-w-sm text-[15px] md:text-[11px] lg:text-[15px]">
                Capture more market share<br className="hidden md:block" /> and drive continuous revenue growth.
              </p>
            </div>
            
            <div className="absolute inset-0 max-[767px]:translate-y-[40px] max-[767px]:scale-[0.9] max-[767px]:origin-center">
              <GlobeVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
