"use client";

import React from 'react';
import Link from 'next/link';
import FinalCTASection from '@/components/FinalCTASection';

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#533afd]/10 relative font-sans scrollbar-gutter-stable overflow-x-clip">
      <section className="relative overflow-hidden">
        {/* Background Gradient - positioned inside overflow-hidden container */}
        <div className="hidden lg:block absolute right-0 top-0 w-[60%] h-[800px] pointer-events-none">
          <div className="absolute top-[0%] left-[20%] w-[500px] h-[500px] bg-[#ffa5d8] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
          <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-[#9089fc] rounded-full mix-blend-multiply filter blur-[140px] opacity-70"></div>
        </div>
        <div className="hidden md:block lg:hidden absolute inset-0 pointer-events-none">
          <div className="absolute top-[0%] right-[0%] w-[450px] h-[450px] bg-[#ffa5d8] rounded-full mix-blend-multiply filter blur-[110px] opacity-70"></div>
          <div className="absolute top-[15%] right-[-10%] w-[550px] h-[550px] bg-[#9089fc] rounded-full mix-blend-multiply filter blur-[120px] opacity-70"></div>
        </div>
        <div className="block md:hidden absolute inset-0 pointer-events-none">
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

        {/* Hero Section Content */}
        <div className="pt-32 md:pt-48 pb-20 relative z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-8">
            <div className="max-w-3xl">
              <h1 className="text-[1.65rem] min-[390px]:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-8 leading-[1.1] whitespace-nowrap">
                The Founder&apos;s Playbook
              </h1>
              <p className="text-[0.95rem] min-[390px]:text-base lg:text-lg text-slate-500 leading-relaxed font-normal">
                Building a business is brutal. I packed the hardest lessons from <br className="hidden md:block" />
                my own journey into this exact playbook. Now, I use these same rules <br className="hidden md:block" />
                to help you build and validate without the painful trial and error.
              </p>
            </div>

            {/* Image Box Placeholder */}
            <div className="mt-10 relative w-full max-w-5xl aspect-[16/10] md:aspect-[21/9] rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
              <img 
                src="/images/playbook-hero.png" 
                alt="Founder's Playbook Hero" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid Container (Outer section to allow sticky) */}
      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-8">
          <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-40 items-start">
            
            {/* Left Column: Body Text (Prose) */}
            <div className="lg:col-span-7 xl:col-span-8">
              <div className="space-y-3 text-base lg:text-lg text-slate-500 leading-relaxed font-normal max-w-4xl">
                <p>
                  I, too, am driven by success, and I am still running toward it today.
                </p>
                <p>
                  I’ve learned my lessons by paying my dues to the market through countless successes and failures. Sometimes I spent endless hours building what I thought was necessary. Other times, I poured money into what I was sure would succeed. But time doesn&apos;t wait, and my judgments were sometimes wrong.
                </p>
                <p>
                  I realized that simply working hard on something doesn&apos;t mean you are doing the right work. Ultimately, if you don&apos;t put it out into the world, it&apos;s just an idea. It&apos;s just a hobby.
                </p>
                <p>
                  I have packed all my accumulated know-how into this playbook—from core market strategy and ad setups to targeted email lists. My goal is simple: to help you prove your potential and safely establish your business in the real market.
                </p>

                {/* Integrated Market Headline */}
                <div className="pt-20">
                  <h2 className="text-[1.3rem] min-[390px]:text-2xl lg:text-3xl font-medium text-slate-900 tracking-tight mb-4 leading-[1.1]">
                    The market doesn&apos;t wait for perfect
                  </h2>
                  <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-normal opacity-80">
                    <p>
                      Speed is your only true competitive advantage. While others are busy polishing every detail of a product nobody has asked for, you should be in the market, collecting real data and proving your assumptions with actual transactions.
                    </p>
                    <p>
                      Even the best ideas have an expiration date. Spend too much time preparing, and the market simply moves on without you. You’re taught to build every feature and perfect every detail before showing it to anyone. But spending months on things that don’t drive revenue isn&apos;t just a waste of time—it kills your momentum. We cut the fluff. We do exactly what needs to be done to get you live, and absolutely nothing else.
                    </p>
                  </div>
                </div>

                {/* Updated Subheading: Extract the Absolute Core */}
                <div className="pt-14">
                  <h2 className="text-[1.3rem] min-[390px]:text-2xl lg:text-3xl font-medium text-slate-900 tracking-tight mb-4 leading-[1.1]">
                    Extract the absolute core
                  </h2>
                  <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-normal opacity-80">
                    <p>
                      We don&apos;t just start building blindly. Everything begins with real conversations. We talk until we uncover the exact strategy and direction behind your idea.
                    </p>
                    <p>
                      Once that strategy is clear, we ruthlessly cut out the noise. We strip away the unimportant details and focus 100% of our energy on the absolute core. This is how we compress your timeline. By completely ignoring what doesn&apos;t matter right now, we build exactly what you need to hit the market fast and land safely.
                    </p>
                  </div>

                  {/* Visual Card: Extract Core */}
                  <div className="mt-10 relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                    <img 
                      src="/images/extract-core.png" 
                      alt="Extract Core Visual" 
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* New Strategic Section: Business isn't a gamble */}
                <div className="pt-20">
                  <h2 className="text-[1.3rem] min-[390px]:text-2xl lg:text-3xl font-medium text-slate-900 tracking-tight mb-4 leading-[1.1]">
                    Business isn&apos;t a gamble
                  </h2>
                  <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-normal opacity-80">
                    <p>
                      Many founders waste their money building heavy products they assume customers want. But hoping the market will just blindly buy what you&apos;ve built is a gamble, not a strategy. Making money is the goal, but spending it smart is what keeps you alive. Instead of burning your runway on over-preparation, you need to step into the real market with only the absolute essentials.
                    </p>
                  </div>
                </div>

                {/* New Subheading: Strategize before you spend */}
                <div className="pt-14">
                  <h2 className="text-[1.3rem] min-[390px]:text-2xl lg:text-3xl font-medium text-slate-900 tracking-tight mb-4 leading-[1.1]">
                    Strategize before you spend
                  </h2>
                  <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-normal opacity-80">
                    <p>
                      We don&rsquo;t act like a typical agency that just takes your order and burns your cash. We execute purely based on the strategy we defined together. We identify exactly what your business needs to actually land in the market&mdash;and we ignore everything else. By cutting out the fluff, we help you launch smartly on a budget that actually makes sense.
                    </p>
                  </div>

                  {/* Visual Card: Strategize */}
                  <div className="mt-10 relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                    <img 
                      src="/images/strategize.png" 
                      alt="Strategize Visual" 
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Final Strategic Section: Minimize the risk. Maximize the odds */}
                <div className="pt-20">
                  <h2 className="text-[1.3rem] min-[390px]:text-2xl lg:text-3xl font-medium text-slate-900 tracking-tight mb-4 leading-[1.1]">
                    Minimize the risk. Maximize the odds
                  </h2>
                  <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-normal opacity-80">
                    <p>
                      Launching a business shouldn&apos;t be a test of how much pain you can endure or how much cash you can burn. It should be a calculated strike.
                    </p>
                    <p>
                      When you control your time and capital, you drop the risk of failure and actually give your idea a fighting chance. We built this playbook so you can stop guessing and start proving. Take the absolute core of your idea, step into the real market, and land safely.
                    </p>
                  </div>
                </div>

                {/* Final Subheading: Rules for a safe market landing */}
                <div className="pt-14">
                  <h2 className="text-[1.3rem] min-[390px]:text-2xl lg:text-3xl font-medium text-slate-900 tracking-tight mb-4 leading-[1.1]">
                    Rules for a safe market landing
                  </h2>
                  <div className="space-y-6 text-base lg:text-lg text-slate-500 leading-relaxed font-normal opacity-80">
                    <p>Key takeaways every founder should remember:</p>
                    <ul className="space-y-3">
                      <li className="flex gap-4">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                        <p>
                          <strong>Speed over perfection.</strong> The market doesn&apos;t wait. Compress your timeline and step into the real market fast.
                        </p>
                      </li>
                      <li className="flex gap-4">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                        <p>
                          <strong>Protect your runway.</strong> Stop burning cash on endless preparation. Enter the market safely with a budget that actually makes sense.
                        </p>
                      </li>
                      <li className="flex gap-4">
                        <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0" />
                        <p>
                          <strong>Extract the absolute core.</strong> Cut the fluff. Build exactly what you need to actually launch, and ignore everything else.
                        </p>
                      </li>
                    </ul>
                    <div className="pt-2 pb-10">
                      <Link 
                        href="/apply"
                        className="group flex items-center gap-3 text-slate-900 font-medium hover:text-[#533afd] transition-colors"
                      >
                        <span className="text-lg transition-transform group-hover:translate-x-1">➔</span>
                        <span className="underline decoration-1 underline-offset-[6px]">Ready to launch smart? Tell us what you&apos;re building</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Meta Info (Sidebar) */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col pt-2 border-t lg:border-t-0 border-slate-100 lg:pt-0 lg:sticky lg:top-32 lg:self-start h-fit">
              {/* Social Icons */}
              <div className="flex items-center gap-6 mb-6 text-slate-400">
                <a 
                  href="https://www.linkedin.com/in/dawonkang/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-slate-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/DRAWN_CO" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-slate-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.494h2.039L6.486 3.24H4.298l13.311 17.407z"/>
                  </svg>
                </a>
                <a 
                  href="https://discord.gg/gF3HAPjQJf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-slate-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.923 2.991.076.076 0 0 0 .082-.027c.454-.622.853-1.285 1.196-1.986a.076.076 0 0 0-.041-.105 13.11 13.11 0 0 1-1.848-.88.077.077 0 0 1-.004-.129c.125-.094.252-.191.37-.291a.072.072 0 0 1 .075-.01c3.87 1.774 8.085 1.774 11.91 0a.073.073 0 0 1 .075.01c.12.1.246.197.37.291a.077.077 0 0 1-.004.129 12.06 12.06 0 0 1-1.848.88.076.076 0 0 0-.041.106c.343.701.742 1.364 1.196 1.986a.076.076 0 0 0 .082.027 19.863 19.863 0 0 0 5.942-2.991.077.077 0 0 0 .031-.057c.5-5.143-.852-9.63-3.6-13.66a.066.066 0 0 0-.031-.027zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.947 2.419-2.157 2.419zm7.974 0c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:run@valdt.app" 
                  className="hover:text-slate-900 transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>

              {/* Meta Info List */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-1 opacity-80">FRAMEWORK</h4>
                  <p className="text-[14px] text-slate-500">Valdt Playbook</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-1 opacity-80">OUR APPROACH</h4>
                  <p className="text-[14px] text-slate-500">Core-only, fast launch</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-1 opacity-80">CORE TOOLS</h4>
                  <p className="text-[14px] text-slate-500">Ads, Emails & Strategy</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-1 opacity-80">WE PREVENT</h4>
                  <p className="text-[14px] text-slate-500">Burning cash on over-preparation</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-900 mb-1 opacity-80">THE GOAL</h4>
                  <p className="text-[14px] text-slate-500">Safe market landing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTASection />
    </main>
  );
}
