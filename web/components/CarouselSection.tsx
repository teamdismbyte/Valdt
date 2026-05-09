"use client";

import React, { useState, useEffect } from 'react';

const CARDS = [
  {
    id: 1,
    projectTitle: "The Sunglasses Project",
    problemTitle: "The Challenge: Inventory Risk",
    problemSub: "How do we prove people will actually buy this, before spending a single dollar on manufacturing?",
    metrics: [
      { label: "Inventory Cost:", value: "$0", primary: false },
      { label: "Checkout Intent:", value: "12.5%", primary: false },
      { label: "Projected ROAS:", value: "1800%+", primary: true },
    ],
    detailedTitle: "The Sunglasses Project",
    detailedTagline: "Launching a physical product without the inventory gamble",
    url: "https://grippy-kr.netlify.app/",
    contextSideText: "Most founders buy inventory and pray. We did the opposite.\nWe launched a dedicated brand store and pushed it to the real market.\nWe proved people were actually ready to buy—allowing us to secure a\ncustomer pipeline and control inventory before manufacturing a single unit.",
    detailedSections: [
      {
        title: "The inventory gamble",
        content: "The biggest risk in launching a physical brand is upfront manufacturing.\nToo many founders rely on gut feelings or polite compliments from friends.\nBut launching based on assumptions is a gamble.\n\nBy the time you manufacture the product, build a website, and prepare for launch,\nmonths have passed—and you are already tens of thousands of dollars in the hole\nbefore making a single sale."
      },
      {
        title: "Sell first, manufacture second",
        content: "To eliminate this risk, we completely flipped the timeline: we sold the product first.\n\nEven without physical inventory, we used technology to create high-quality product images,\nand built a fully functional brand store.\n\nWe wanted to see if real customers would actually hit the buy button.\nBy doing this, we figured out the actual demand,\nsecured a list of potential customers,\nand gained the ability to manage our inventory flexibly."
      },
      {
        title: "Proving the profit model",
        content: "We didn't just test market demand; we proved the entire profit model.\nThe campaign achieved a 12.5% checkout conversion rate and yielded over 1,800% ROAS.\n\nEven with the most conservative cost estimates,\nwe locked in a massive 77% net margin per unit.\n\nWe proved this is a highly lucrative business\nsecuring real buyer contacts before touching any inventory."
      }
    ],
    foundersNote: {
      title: "Founder's Note: The new standard for physical retail",
      sections: [
        {
          subtitle: "PROVE DEMAND & ADJUST PRODUCTION",
          content: "Building a storefront to sell existing inventory\nis the old way of launching a physical brand.\n\nBy launching the site first, we don't just capture demand.\nWe figure out exactly what people are willing to pay for.\n\nWe track exact conversions to dynamically adjust\nproduction volumes before manufacturing."
        },
        {
          subtitle: "SMART CASH FLOW CONTROL",
          content: "This turns physical retail from a guessing game\ninto a perfectly calibrated cash flow engine.\n\nIt’s capital efficiency at its absolute peak.\nYou secure the customer base and lock in margins.\n\nThen, you only deploy cash into physical inventory\nthat the real market has already validated."
        }
      ]
    },
    footerMetrics: [
      { label: "NET PROFIT MARGIN", value: "77%" },
      { label: "CHECKOUT CONVERSION RATE", value: "12.5%" },
      { label: "VALIDATED ROAS", value: "1,800%+" }
    ]
  },
  {
    id: 2,
    projectTitle: "The Unsub Project",
    problemTitle: "The Challenge: The Build Trap",
    problemSub: "Will people actually pay a recurring fee for this, or are we just coding a useless feature? We tested the logic first",
    metrics: [
      { label: "WASTED ENGINEERING:", value: "0", primary: false },
      { label: "Subscription Intent:", value: "3.4%", primary: false },
      { label: "Capital Saved:", value: "$10,000+", primary: true },
    ],
    detailedTitle: "The Unsub Project",
    detailedTagline: "Securing the customer pipeline before writing a single line of code",
    url: "https://subsync-so.netlify.app/",
    contextSideText: "Building a SaaS is expensive. Launching a platform\nwithout secured buyers is a catastrophic mistake.\nInstead of rushing into development, we launched a\nhigh-fidelity front-end as our go-to-market engine.\nBy driving targeted traffic to a hard paywall, we didn't just validate demand—\nwe secured an actual customer pipeline before provisioning a single server.",
    detailedSections: [
      {
        title: "The expensive trap of traditional development",
        content: "Founders often pay agencies tens of thousands of dollars,\nburning massive capital before facing the real market.\n\nWithout a sharp, validated edge, the launched product\nbecomes just another easily replaceable alternative.\n\nWith their budget depleted and the architecture fixed,\nthey cannot adapt to user feedback and quietly fail."
      },
      {
        title: "Engineering only the essential core",
        content: "We isolated the sharp pain point and stripped away the fat,\nengineering only the absolute core logic of the product.\n\nWe deployed this hyper-focused utility to the real market,\nsecuring a solid base of recurring monthly subscribers.\n\nBy serving this initial cohort and tracking their behavior,\nwe flexibly adapted our roadmap based on actual feedback."
      },
      {
        title: "Acquiring paying customers",
        content: "We launched the product as a monthly subscription service.\nInstead of gathering free users, we generated actual revenue.\n\nThe campaign achieved a solid 3.4% checkout conversion.\nThis proved that users will actually open their wallets.\n\nWe successfully captured actual recurring revenue upfront.\nThis is how you build a profitable business without risk."
      }
    ],
    foundersNote: {
      title: "Founder's Note: Why we pivoted to B2B",
      sections: [
        {
          subtitle: "THE LIMITS OF B2C",
          content: "A 3.4% conversion rate proved our product works.\nBut data showed individuals churn after one use.\nWe realized a one-time utility cannot survive as\na long-term business. We needed a deeper market."
        },
        {
          subtitle: "TRUE RECURRING REVENUE",
          content: "We found the real answer in B2B. Companies bleed\ncash every month on abandoned software accounts.\nThis is a real pain point that justifies a platform.\nWe pivoted to B2B IT admins for recurring revenue."
        }
      ]
    },
    footerMetrics: [
      { label: "WASTED ENGINEERING", value: "0" },
      { label: "CHECKOUT CONVERSION", value: "3.4%" },
      { label: "UPFRONT CAPITAL SAVED", value: "$10K+" }
    ]
  },
  {
    id: 3,
    projectTitle: "The Index Project",
    problemTitle: "The Challenge: The Scraping Trap",
    problemSub: "Most founders build massive databases and pray. We validated the core structure before committing resources",
    metrics: [
      { label: "Ad Spend:", value: "$0", primary: false },
      { label: "Startups Analyzed:", value: "7", primary: false },
      { label: "Manual Maintenance:", value: "0", primary: true },
    ],
    detailedTitle: "The Index Project",
    detailedTagline: "Proving the data structure before writing any code",
    url: "https://ledgrkr.netlify.app/",
    contextSideText: "Most founders hoard data and figure it out later. We did the opposite.\nWe built a simple interface to test the data structure first.\nNo public launch. No expensive development.\nWe validated the exact flow before writing a single line of code.",
    detailedSections: [
      {
        title: "The expensive database trap",
        content: "Building a data product usually means burning months on backend development.\nFounders scrape massive amounts of data first, hoping to organize it later.\n\nBut without a clear structure, this just creates an unusable mess.\nBy the time you realize the structure is wrong, fixing it is an expensive nightmare."
      },
      {
        title: "Structure first, database second",
        content: "To avoid this risk, we flipped the process.\nWe built the structure before the database.\n\nIn just 48 hours, we launched a simple frontend\nand manually mapped 17 data points for exactly 7 startups.\n\nNo automated scraping. No backend coding.\nWe proved our categorization worked perfectly before spending a dime on development."
      },
      {
        title: "Zero-risk development",
        content: "We didn't just design a nice layout.\nWe proved the entire data model.\n\nOnce the structure is validated with a small sample,\nbuilding the actual database is just execution.\n\nYou no longer burn your budget on unproven assumptions.\nYou only pay for engineering when the data flow is already proven to work."
      }
    ],
    foundersNote: {
      title: "Founder's Note: Structure before scale",
      sections: [
        {
          subtitle: "THE DATA TRAP",
          content: "Building a data product isn't about volume.\nIt's about structure.\n\nMost teams collect massive amounts of data upfront,\nhoping to organize it later.\nThat just creates a massive mess.\n\nIf your foundation is broken,\nadding more data just means more chaos."
        },
        {
          subtitle: "PROVING THE FOUNDATION",
          content: "We spent zero dollars on marketing,\nbecause traffic wasn't the goal.\n\nWe manually organized data for just 7 startups\nto test our structure first.\nYou don't pour money into a leaky pipe.\n\nOnce the core structure is proven,\nscaling up is just simple execution."
        }
      ]
    },
    footerMetrics: [
      { label: "WASTED DEVELOPMENT", value: "$0" },
      { label: "CURATED STARTUPS", value: "7" },
      { label: "DATA POINTS MAPPED", value: "17+" }
    ]
  },
  {
    id: 4,
    projectTitle: "The Flaw Project",
    problemTitle: "The Challenge: The Positioning Trap",
    problemSub: "Don't build features. Find the gap where competitors fail. We uncover the 'Flaw' that makes you the only choice",
    metrics: [
      { label: "Market Guesswork:", value: "0", primary: false },
      { label: "Competitor Vulnerabilities:", value: "Found", primary: false },
      { label: "Positioning Strategy:", value: "100%", primary: true },
    ],
    detailedTitle: "The Flaw Project",
    detailedTagline: "Stealing market share by fixing what competitors break",
    url: "https://flawbase.netlify.app/",
    contextSideText: "Most founders blindly copy competitors. We did the opposite.\nWe analyzed your closest rivals, hunting their 1-star reviews.\nWe turned those exact flaws into a simple, targeted attack plan.\nYou don't need a massive budget. You just need to know where they fail.",
    detailedSections: [
      {
        title: "The copycat trap",
        content: "Building a product by copying competitors is a guaranteed way to fail.\nFounders waste time building identical features, hoping to win on price.\n\nBut customers don't switch just because a new product is slightly cheaper.\nThey stick to the established brands they already trust.\nIf you offer a similar alternative, you will always lose."
      },
      {
        title: "Exploiting the blind spots",
        content: "To break that trust, you can't compete on features. You must attack their flaws.\nThat’s why we launched Flawbase. A highly targeted report, not a complex software.\n\nWe analyze your closest rivals and hunt down their worst reviews.\nWe find the exact pain points that established brands are completely ignoring.\nThis creates the perfect opening to carve out your niche market."
      },
      {
        title: "Your exact attack plan",
        content: "We don't just give you raw data. We give you a weapon.\nBy analyzing these exact flaws, we build a clear, step-by-step strategy.\n\nInstead of fighting established brands head-on, you launch directly into their blind spots.\nThis is how you steal unsatisfied customers and dominate your niche,\nwithout needing a massive budget."
      }
    ],
    foundersNote: {
      title: "Founder's Note: Compete on flaws, not price",
      sections: [
        {
          subtitle: "THE PRICE TRAP",
          content: "Customers don't care if your product\nis slightly cheaper.\n\nThey buy from the established brands\nthey already know and trust.\n\nIf you copy features and lower the price,\nyou are just running a race to the bottom."
        },
        {
          subtitle: "THE FLAW WEAPON",
          content: "The only way to break that trust\nis to solve exactly what they hate.\n\nYour best product roadmap is hidden\nin your competitor's exact flaws.\n\nDon't guess what the market wants.\nBuild what existing brands fail to provide."
        }
      ]
    },
    footerMetrics: [
      { label: "WASTED ON WRONG FEATURES", value: "$0" },
      { label: "CRITICAL FLAWS WEAPONIZED", value: "10+" },
      { label: "EXACT ATTACK PLAN", value: "1" }
    ]
  },
];

function ProjectModal({ project, onClose }: { project: typeof CARDS[0], onClose: () => void }) {
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  if (!project) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - startY;
    const isAtTop = scrollRef.current ? scrollRef.current.scrollTop <= 0 : true;

    // If we're at the top of the content and pulling down, drag the modal
    if (isAtTop && deltaY > 0) {
      // Prevent content scrolling while dragging the modal down
      if (e.cancelable) e.preventDefault();
      setDragY(deltaY);
    } else if (dragY > 0) {
      // If we were dragging and move back up, reduce dragY before scrolling content
      const newDragY = Math.max(0, deltaY);
      setDragY(newDragY);
      if (newDragY > 0 && e.cancelable) e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (dragY > 120) {
      onClose();
    }
    setDragY(0);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex justify-center items-end md:items-start pt-0 md:pt-32 pb-0 md:pb-32 px-0 md:px-8"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-none md:max-w-[1162px] h-[92vh] md:h-auto bg-white rounded-t-2xl rounded-b-none md:rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-full md:slide-in-from-bottom-8 duration-500 md:my-auto outline-none"
        style={{ 
          transform: dragY > 0 ? `translateY(${dragY}px)` : undefined,
          transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Mobile Drag Handle Area */}
        <div className="w-full flex justify-center pt-4 pb-2 md:hidden">
          <div className="w-12 h-1.5 bg-slate-200 rounded-full" />
        </div>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-slate-900/10 text-slate-900 hover:bg-slate-900/20 transition-colors z-20 md:flex hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto custom-scrollbar"
        >
          <div className="pt-0 px-5 pb-12 md:pt-8 md:px-10 lg:pt-10 lg:px-14">
            
            {/* Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-8 md:mb-12">
              <div className="lg:col-span-6">
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-1 md:mb-2">
                  {project.detailedTitle}
                </h2>
                <p className="text-base text-slate-600 mb-3 md:mb-6 font-normal leading-snug">
                  {project.detailedTagline}
                </p>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#533afd] text-base font-semibold underline underline-offset-4 hover:text-[#422edb] transition-colors"
                >
                  {project.url.replace(/^https?:\/\//, '')}
                </a>
              </div>
              <div className="lg:col-span-6 flex items-start">
                <p className="text-[13px] md:text-[14px] text-slate-500 leading-relaxed font-normal">
                  {project.contextSideText.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}<br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>

            {/* Strategic Sections */}
            <div className="flex flex-col">
              {project.detailedSections?.map((section, idx) => (
                <div key={idx} className={`${idx !== 0 ? 'mt-6 pt-4' : ''}`}>
                  <h3 className="text-[1.3rem] md:text-[1.5rem] font-bold text-slate-900 mb-3 tracking-tight">
                    {section.title}
                  </h3>
                  <div className="text-slate-600 leading-relaxed font-normal text-[15px] md:text-[16px] max-w-3xl whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Founder's Note Section */}
            {"foundersNote" in project && project.foundersNote && (
              <div className="mt-12 pt-12 border-t border-slate-100">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 italic mb-6 tracking-tight">
                  {project.foundersNote.title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                  {project.foundersNote.sections.map((noteSection, sIdx) => (
                    <div key={sIdx} className="space-y-4">
                      <h4 className="text-[10px] md:text-[11px] font-bold text-slate-400 tracking-[0.15em] uppercase">
                        {noteSection.subtitle}
                      </h4>
                      <p className="text-slate-600 text-[15px] md:text-[16px] leading-relaxed whitespace-pre-line font-normal">
                        {noteSection.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Metrics Section */}
            {"footerMetrics" in project && project.footerMetrics && (
              <div className="mt-14 pt-10 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.footerMetrics.map((metric, mIdx) => (
                  <div key={mIdx} className="flex flex-col">
                    <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-[11px] md:text-[12px] font-bold text-slate-400 tracking-[0.1em] uppercase">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

export default function CarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof CARDS[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(CARDS.length - 1, prev + 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    
    if (distance > 50) handleNext(); // swipe left -> next card
    if (distance < -50) handlePrev(); // swipe right -> prev card
    
    setTouchStart(null);
  };

  const getCardStyle = (index: number) => {
    const offset = index - activeIndex;
    const isActive = offset === 0;
    
    const progress = activeIndex / (CARDS.length - 1); 

    return {
      zIndex: 10 - Math.abs(offset),
      '--desktop-left': `${progress * 100}%`,
      '--desktop-transform': `translateX(calc(-${progress * 100}% + ${offset} * (100% + 32px)))`,
      '--mobile-left': '0%',
      '--mobile-transform': `translateX(calc(${offset} * (100% + 16px)))`,
      opacity: isActive ? 1 : 0.4,
      filter: isActive ? 'brightness(1)' : 'brightness(0.5) blur(1px)',
      transition: 'all 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
    } as React.CSSProperties;
  };

  return (
    <section className={`w-full flex-col pt-16 pb-28 lg:pt-24 lg:pb-36 bg-[#16161e] relative overflow-hidden font-sans ${selectedProject ? 'z-[100]' : 'z-10'}`}>
      
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-8">
        <div className="flex items-center justify-between mb-6 lg:mb-10">
          <h2 className="text-[1.5rem] md:text-[2rem] lg:text-[2.8rem] leading-[1.2] font-medium text-white tracking-tight text-left">
            Proof of Execution
          </h2>
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-[6px] border border-white/10 transition-colors ${activeIndex === 0 ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-white/5 text-white hover:bg-white/10'}`}
              aria-label="Previous card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
              </svg>
            </button>
            <button 
              onClick={handleNext}
              disabled={activeIndex === CARDS.length - 1}
              className={`w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-[6px] border border-white/10 transition-colors ${activeIndex === CARDS.length - 1 ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-white/5 text-white hover:bg-white/10'}`}
              aria-label="Next card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`hidden lg:block absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-[#16161e] via-[#16161e]/80 to-transparent z-20 pointer-events-none transition-opacity duration-500 ${activeIndex === 0 ? 'opacity-0' : 'opacity-100'}`} />
      <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-[#16161e] via-[#16161e]/80 to-transparent z-20 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 xl:px-8">
        <div 
          className="relative w-full h-[500px] md:h-[550px]"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {CARDS.map((card, index) => {
            const style = getCardStyle(index);
            const isActive = activeIndex === index;
            
            return (
              <div
                key={card.id}
                onClick={() => isActive && setSelectedProject(card)}
                className={`absolute top-0 w-[88vw] max-w-[300px] md:max-w-[340px] lg:max-w-[380px] h-full bg-[#111111] border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-2xl px-6 pt-5 pb-7 md:px-7 md:pt-5 md:pb-9 flex flex-col overflow-hidden origin-center will-change-transform [left:var(--mobile-left)] [transform:var(--mobile-transform)] lg:[left:var(--desktop-left)] lg:[transform:var(--desktop-transform)] ${isActive ? 'cursor-pointer hover:border-white/20 hover:shadow-white/[0.02] transition-all duration-300' : ''}`}
                style={style}
              >
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="relative z-10 flex-shrink-0 mb-2">
                  <h3 className="text-white text-2xl md:text-[26px] font-semibold tracking-tight mb-2">
                    {card.projectTitle}
                  </h3>
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="relative z-10 bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 md:p-5 flex-shrink-0 shadow-inner">
                    <div className="text-white font-medium mb-1 text-[15px]">
                      {card.problemTitle}
                    </div>
                    <div className="text-[#a1a1aa] text-[14px] leading-relaxed mb-4">
                      {card.problemSub}
                    </div>
                    
                    <div className="space-y-3">
                      {card.metrics.map((m, i) => (
                        <div 
                          key={i} 
                          className={`flex justify-between items-center ${i !== card.metrics.length - 1 ? 'border-b border-white/5 pb-3' : ''}`}
                        >
                          <span className="text-[#8e8e93] text-[14px]">{m.label}</span>
                          <span className={`font-bold text-[16px] md:text-[18px] ${m.primary ? 'text-[#8a42ff] drop-shadow-[0_0_8px_rgba(138,66,255,0.4)]' : 'text-white'}`}>
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 pt-2 flex items-center">
                  <button 
                    className="text-[#8a42ff] hover:text-[#a875ff] transition-colors font-medium text-[14px] flex items-center gap-1.5 outline-none focus-visible:underline"
                    tabIndex={isActive ? 0 : -1}
                  >
                    View project <span className="font-bold">&gt;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Portal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Custom scrollbar style for the modal - hidden for seamless look */}
      <style jsx global>{`
        .custom-scrollbar {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .custom-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
      `}</style>
    </section>
  );
}
