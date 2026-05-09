"use client";

import React from 'react';
import { motion } from 'framer-motion';

const suggestions = [
  "What is our current MRR?",
  "Which traffic source drives the most revenue?",
  "Active paying users",
  "What's our trial-to-paid conversion rate?",
  "Show our churn rate for the last 30 days.",
];

export default function NotSideProjectVisual() {
  return (
    <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 overflow-hidden max-[767px]:overflow-visible pointer-events-none">
      <div className="relative w-full max-w-[290px] flex flex-col gap-2.5 z-10">

        {/* Search / Input field */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-xl px-3.5 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-slate-200 flex items-center gap-2.5"
        >
          {/* Sparkle icon */}
          <svg className="w-4 h-4 text-[#6366f1] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" opacity="0.9"/>
            <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75L19 14z" opacity="0.7"/>
            <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5L5 17z" opacity="0.5"/>
          </svg>
          <span className="text-[12px] text-slate-400 font-medium">Ask your data a question...</span>
        </motion.div>

        {/* Suggestion chips */}
        <div className="flex flex-col gap-1.5">
          {suggestions.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              className="bg-[#edeef1] rounded-lg px-3 py-2 flex items-center justify-between gap-2"
            >
              <span className="text-[11px] text-slate-700 font-medium leading-tight">{text}</span>
              <svg className="w-3 h-3 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
