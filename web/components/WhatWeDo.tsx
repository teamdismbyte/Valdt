"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TargetedAdsVisual from './TargetedAdsVisual';
import OutreachListVisual from './OutreachListVisual';
import SalesReadyVisual from './SalesReadyVisual';

const steps = [
  {
    id: '01',
    title: 'Idea & Strategy',
    description: 'We discuss your idea and build a clear market entry strategy.',
    mockup: 'strategy'
  },
  {
    id: '02',
    title: 'Sales-Ready Build',
    description: 'We build exactly what you need to start selling.',
    mockup: 'landing'
  },
  {
    id: '03',
    title: 'Targeted Paid Ads',
    description: 'We run ads to drive targeted traffic to your site.',
    mockup: 'campaign'
  },
  {
    id: '04',
    title: 'Targeted Outreach List',
    description: 'We supply a targeted lead list to jumpstart your cold sales.',
    mockup: 'leads'
  },

];

const StrategyChat = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const runSequence = async () => {
      while (isMounted) {
        setStep(0);
        await new Promise(r => setTimeout(r, 600));
        if (!isMounted) break; setStep(1); // Msg 1 (Client) appears
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted) break; setStep(2); // Valdt Typing
        await new Promise(r => setTimeout(r, 2000));
        if (!isMounted) break; setStep(3); // Msg 2 (Valdt)
        await new Promise(r => setTimeout(r, 2000));
        if (!isMounted) break; setStep(4); // Client Typing
        await new Promise(r => setTimeout(r, 2000));
        if (!isMounted) break; setStep(5); // Msg 3 (Client)
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted) break; setStep(6); // Valdt Typing
        await new Promise(r => setTimeout(r, 2000));
        if (!isMounted) break; setStep(7); // Msg 4 (Valdt)
        
        await new Promise(r => setTimeout(r, 5000)); // Pause before loop
        if (!isMounted) break; setStep(0); // Reset to empty
      }
    };
    runSequence();
    return () => { isMounted = false; };
  }, []);

  const messages = [
    { id: 1, sender: 'client', text: "I have a solid concept, but I need a partner to actually launch it and get the first users.", showAt: 1 },
    { id: 2, sender: 'valdt', text: "Bring the idea. We’ll handle the strategy, build the system, and make sure it's ready to sell.", showAt: 3 },
    { id: 3, sender: 'client', text: "Love it. What about driving actual traffic and sales?", showAt: 5 },
    { id: 4, sender: 'valdt', text: "We cover that too. You'll launch with active ads and a custom lead list ready to pitch.", showAt: 7 },
  ];

  return (
    <div className="w-full flex flex-col z-10">
      {/* Chat Area */}
      <div className="w-full flex flex-col">
        <div className="flex flex-col gap-3 sm:gap-5 w-full">
          <AnimatePresence initial={false}>
            {messages.filter(m => step >= m.showAt).map((msg) => (
              <motion.div
                key={msg.id}
                layout
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 250, damping: 25 }}
                className={`flex w-full ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex flex-col max-w-[85%]`}>
                  {/* Bubble */}
                  <div className={`px-4 sm:px-5 py-3 sm:py-4 rounded-2xl text-[13px] sm:text-[15px] font-medium leading-relaxed shadow-sm ${
                    msg.sender === 'client' 
                      ? 'bg-white text-slate-700 border border-slate-100 rounded-br-sm' 
                      : 'bg-[#533afd] text-white rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {(step === 2 || step === 4 || step === 6) && (
              <motion.div
                key="typing"
                layout
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.3 }}
                className={`flex w-full ${step === 4 ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex flex-col max-w-[85%]`}>
                  <div className={`px-4 sm:px-5 py-3 sm:py-4 rounded-2xl flex items-center gap-1.5 shadow-sm ${
                    step === 4 ? 'bg-white border border-slate-100 rounded-br-sm' : 'bg-[#533afd] rounded-bl-sm'
                  }`}>
                    <motion.div className={`w-1.5 h-1.5 rounded-full ${step === 4 ? 'bg-slate-300' : 'bg-white/60'}`} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                    <motion.div className={`w-1.5 h-1.5 rounded-full ${step === 4 ? 'bg-slate-300' : 'bg-white/60'}`} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                    <motion.div className={`w-1.5 h-1.5 rounded-full ${step === 4 ? 'bg-slate-300' : 'bg-white/60'}`} animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const MockupContainer = ({ type }: { type: string }) => {
  return (
    <div className="w-full aspect-square md:aspect-auto md:h-[500px] lg:h-[540px] bg-[#f8f9fb] rounded-xl p-2 md:p-8 lg:p-10 flex items-center justify-center relative overflow-hidden transition-all duration-700 border border-gray-100">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[300px] h-[300px] bg-[#533afd] rounded-full blur-[100px]" />
      </div>

      {(type !== 'leads' && type !== 'strategy' && type !== 'landing' && type !== 'campaign') ? (
        <div className="w-full max-w-[500px] bg-white rounded-xl shadow-2xl shadow-slate-200 border border-slate-100 p-6 relative z-10 transition-all duration-500 transform scale-100">
          {/* Header bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            </div>
            <div className="px-3 py-1 bg-slate-50 text-[10px] text-slate-400 rounded-full font-mono uppercase tracking-wider">
              Valdt Dashboard
            </div>
          </div>
        </div>
      ) : (
        <div className="relative z-10 w-full h-full flex items-center justify-center p-0 md:p-4 lg:p-8">
          <div className="relative shrink-0 w-[150%] sm:w-[130%] aspect-square md:w-[125%] lg:w-full md:h-[125%] lg:h-full md:aspect-auto flex items-center justify-center transform scale-[0.66] max-[390px]:scale-[0.55] sm:scale-[0.76] md:scale-[0.8] lg:scale-100 origin-center">
            {type === 'strategy' && (
              <StrategyChat />
            )}
            {type === 'campaign' && (
              <TargetedAdsVisual />
            )}
            {type === 'landing' && (
              <SalesReadyVisual />
            )}
            {type === 'leads' && (
              <OutreachListVisual />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function WhatWeDo() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-16 items-start">
      {/* Left List */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(index)}
            className={`w-full text-left p-6 lg:p-8 rounded-xl border transition-all duration-300 group flex flex-col gap-1.5 md:gap-3 relative ${
              activeStep === index 
                ? 'bg-white border-slate-200 shadow-xl shadow-slate-100' 
                : 'bg-white border-slate-200 shadow-xl shadow-slate-100 md:bg-transparent md:border-transparent md:shadow-none md:opacity-50 md:hover:opacity-80'
            }`}
          >
            {/* Mobile Visual */}
            <div className={`md:hidden w-full overflow-hidden transition-all duration-500 ease-in-out max-h-[800px] opacity-100 mb-4`}>
              <div className="w-full pointer-events-none">
                <MockupContainer type={step.mockup} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className={`hidden md:inline-block text-[13px] font-bold font-mono transition-colors ${
                activeStep === index ? 'text-[#533afd]' : 'text-[#533afd] md:text-slate-400'
              }`}>
                {step.id}.
              </span>
              <h3 className={`text-lg font-semibold md:font-bold transition-colors ${
                activeStep === index ? 'text-slate-900' : 'text-slate-900 md:text-slate-600'
              }`}>
                {step.title}
              </h3>
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
              activeStep === index ? 'max-h-40 opacity-100 mt-0 md:mt-2' : 'max-h-40 opacity-100 mt-0 md:mt-2 md:max-h-0 md:opacity-0 md:mt-0'
            }`}>
              <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Right Visual (Desktop only) */}
      <div className="hidden md:block relative md:sticky md:top-24 h-fit">
        <MockupContainer type={steps[activeStep].mockup} />
      </div>
    </div>
  );
}
