"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function ApplyPage() {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('processing');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const startTime = Date.now();
      const response = await fetch('https://formspree.io/f/mbdwyvan', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, 1000 - elapsedTime);
      
      if (response.ok) {
        setTimeout(() => {
          setStatus('success');
        }, remainingTime);
      } else {
        setStatus('idle');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('idle');
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#533afd]/10 relative font-sans scrollbar-gutter-stable overflow-x-hidden">
      {/* Background Gradient */}
      <div className="hidden lg:block absolute right-0 top-0 w-[60%] h-[800px] pointer-events-none">
        <div className="absolute top-[0%] left-[20%] w-[500px] h-[500px] bg-[#ffa5d8] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#9089fc] rounded-full mix-blend-multiply filter blur-[140px] opacity-70"></div>
      </div>
      <div className="hidden md:block lg:hidden absolute inset-0 pointer-events-none">
        <div className="absolute top-[0%] right-[0%] w-[450px] h-[450px] bg-[#ffa5d8] rounded-full mix-blend-multiply filter blur-[110px] opacity-70"></div>
        <div className="absolute top-[15%] right-[-10%] w-[550px] h-[550px] bg-[#9089fc] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
      </div>
      <div className="block md:hidden absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] right-[-20%] w-[350px] h-[350px] bg-[#ffa5d8] rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        <div className="absolute top-[15%] right-[-30%] w-[450px] h-[450px] bg-[#9089fc] rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
      </div>

      {/* Header */}
      <header className="w-full flex justify-center py-5 relative z-20">
        <div className="w-full max-w-7xl flex items-center justify-between px-6 lg:px-12 xl:px-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="font-bold text-2xl tracking-tighter text-slate-900">
              Valdt
            </Link>
          </div>
          <div className="flex items-center gap-5 text-[15px] font-medium">
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="pt-24 md:pt-48 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
            
            {/* Left Column: Copy */}
            <div className="flex flex-col justify-between h-full">
              <div>
                <h2 className="text-[2.5rem] min-[390px]:text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.05] font-bold text-slate-900 tracking-tight text-left mb-4 md:mb-6">
                  From idea to<br />
                  <span className="text-[#533afd]">market</span>
                </h2>
                <p className="text-slate-600 text-[1.1rem] md:text-[20px] font-medium max-w-lg leading-relaxed">
                  Start with less risk.<br />
                  The best time is right now.
                </p>
                
                <div className="mt-9 md:mt-12 space-y-4">
                  <p className="text-slate-900 font-bold text-[16px] md:text-[18px] mb-4">Who we work with:</p>
                  <div className="flex items-start gap-3 text-slate-600">
                    <span className="text-[#533afd] font-bold shrink-0 mt-0.5">•</span>
                    <p className="text-[14px] md:text-[16px]">Serious founders only.</p>
                  </div>
                  <div className="flex items-start gap-3 text-slate-600">
                    <span className="text-[#533afd] font-bold shrink-0 mt-0.5">•</span>
                    <p className="text-[14px] md:text-[16px]">Real business, not endless planning.</p>
                  </div>
                  <div className="flex items-start gap-3 text-slate-600">
                    <span className="text-[#533afd] font-bold shrink-0 mt-0.5">•</span>
                    <p className="text-[14px] md:text-[16px]">Execution, not just ideas.</p>
                  </div>
                </div>
              </div>

              {/* Footer inside Left Col for Desktop */}
              <div className="mt-20 lg:mt-32 hidden lg:flex flex-wrap items-center gap-5 text-[14px] text-slate-500 font-medium">
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

            {/* Right Column: Dashboard Form Card */}
            <div className="w-full max-w-[600px] lg:ml-auto bg-white rounded-xl border border-slate-100 p-6 md:p-8 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col text-slate-900 relative min-h-[500px] justify-center transition-all duration-500">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#533afd]/5 rounded-full blur-2xl -z-10"></div>
              
              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-10 animate-in fade-in zoom-in duration-500">
                  <h3 className="text-[1.5rem] md:text-[2rem] font-bold tracking-tight text-slate-900 leading-[1.2] mb-3">
                    Let&apos;s get to work
                  </h3>
                  <p className="text-slate-500 text-[14px] md:text-[16px] font-medium max-w-none md:max-w-md">
                    We&apos;ll review it and email you within 24 hours.
                  </p>
                  <Link 
                    href="/"
                    className="mt-10 text-[14px] font-bold text-[#533afd] hover:text-slate-900 transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <div className="mb-8 md:mb-10">
                    <h3 className="text-[1.5rem] md:text-[2rem] font-bold tracking-tight text-slate-900 leading-[1.2] mb-2">
                      How We Work
                    </h3>
                    <p className="text-slate-500 text-[13px] md:text-[15px] font-medium">
                      Drop your idea below. <br className="block md:hidden" />
                      We&apos;ll review it and reply via email.
                    </p>
                  </div>

                  <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>

                    <div className="space-y-3">
                      <label htmlFor="name" className="text-[11px] md:text-[12px] font-bold text-slate-400 uppercase tracking-[0.2em] pl-1">
                        What is your name?
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-6 py-3.5 md:py-4 text-[14px] md:text-[15px] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-[#533afd]/30 focus:bg-white transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="email" className="text-[11px] md:text-[12px] font-bold text-slate-400 uppercase tracking-[0.2em] pl-1">
                        What is your email?
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        required
                        placeholder="Enter your email address"
                        className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-6 py-3.5 md:py-4 text-[14px] md:text-[15px] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-[#533afd]/30 focus:bg-white transition-all shadow-sm"
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="idea" className="text-[11px] md:text-[12px] font-bold text-slate-400 uppercase tracking-[0.2em] pl-1">
                        What is your business or idea?
                      </label>
                      <textarea 
                        id="idea"
                        name="idea"
                        required
                        placeholder="Tell us about what you're building..."
                        rows={5}
                        className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-6 py-3.5 md:py-4 text-[14px] md:text-[15px] text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-[#533afd]/30 focus:bg-white transition-all shadow-sm resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={status === 'processing'}
                      className={`w-full bg-[#533afd] text-white font-bold py-4 md:py-5 rounded-xl text-[15px] md:text-[16px] transition-all duration-300 shadow-[0_10px_30px_rgba(83,58,253,0.2)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] mt-4 active:scale-[0.98] flex items-center justify-center gap-3 ${status === 'processing' ? 'opacity-80 cursor-not-allowed' : 'hover:bg-slate-900'}`}
                    >
                      {status === 'processing' ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        'Request a Free Assessment'
                      )}
                    </button>
                  </form>
                </>
              )}

            </div>

            {/* Mobile Footer */}
            <div className="mt-8 lg:hidden flex flex-wrap items-center gap-5 text-[14px] text-slate-500 font-medium">
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
        </div>
      </section>
    </main>
  );
}
