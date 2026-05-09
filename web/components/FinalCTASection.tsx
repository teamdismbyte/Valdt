import Link from 'next/link';

export default function FinalCTASection() {
  return (
    <section id="contact" className="w-full flex justify-center pt-10 pb-32 lg:pt-16 lg:pb-48 relative z-10 bg-slate-50/50 font-sans overflow-hidden">
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: High-Impact Copy & Footer */}
          <div className="flex flex-col justify-between h-full">
            
            {/* Top Area: Main Copy */}
            <div>
              <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.8rem] leading-[1.2] font-medium text-slate-900 tracking-tight text-left mb-4">
                Ready for market clarity?
              </h2>
              <p className="text-slate-500 text-[16px] md:text-[18px] font-medium max-w-lg mb-8">
                Your market is waiting.<br />
                Let&apos;s go prove your idea with real signals.
              </p>
              
              <Link 
                href="/apply"
                className="inline-flex items-center gap-2 bg-[#533afd] text-white px-6 py-2.5 rounded-[4px] text-[14px] font-bold shadow-lg shadow-[#533afd]/20 hover:bg-slate-900 transition-all duration-300 active:scale-[0.98]"
              >
                Start now {">"}
              </Link>
            </div>

            {/* Bottom Area: Minimalist Footer */}
            <div className="mt-16 lg:mt-32 flex flex-wrap items-center gap-5 text-[14px] text-slate-500 font-medium">
              <span className="text-slate-600">© Valdt. Built for founders.</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://right-impatiens-a00.notion.site/Terms-Conditions-358d4a94bc8380c79ee9f61643af6551?source=copy_link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors duration-200"
                >
                  Terms of service
                </a>
                <span className="text-slate-300">·</span>
                <a 
                  href="https://right-impatiens-a00.notion.site/Privacy-Policy-358d4a94bc838052ade2e61703a4c2b5?source=copy_link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

          </div>

          <div className="hidden lg:block h-full"></div>
        </div>
      </div>
    </section>
  );
}
