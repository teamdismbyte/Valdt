"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function OutreachListVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <div className="relative w-full max-w-[440px] h-[340px] mx-auto mt-4">
        
        {/* Top Card (Back) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="absolute top-[20px] left-1/2 -translate-x-1/2 w-[84%] bg-white rounded-[14px] shadow-sm border border-gray-200/60 px-5 pt-5 pb-10 z-10"
        >
          <h3 className="font-bold text-[18px] text-[#b64b29] tracking-tight mb-1">Decision Makers Only</h3>
          <p className="text-[14.5px] text-[#b64b29] opacity-80 tracking-wide font-medium">Skip the generic info@ emails. Get direct access to Founders and VPs.</p>
        </motion.div>

        {/* Middle Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute top-[85px] left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-[14px] shadow-md border border-gray-200/80 px-5 pt-5 pb-10 z-20"
        >
          <h3 className="font-bold text-[18px] text-[#825a2c] tracking-tight mb-1">Laser-Targeted ICP</h3>
          <p className="text-[14.5px] text-[#825a2c] opacity-80 tracking-wide font-medium">No spray-and-pray. Every lead is carefully curated to match your exact Ideal Customer Profile.</p>
        </motion.div>

        {/* Bottom Card (Front) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute top-[150px] left-1/2 -translate-x-1/2 w-full bg-white rounded-[14px] shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-gray-200/90 p-5 z-30"
        >
          <h3 className="font-bold text-[20px] text-[#156b3e] tracking-tight mb-1.5">High Buyer Intent</h3>
          <p className="text-[15px] text-gray-600/90 tracking-wide leading-relaxed mb-3.5 pr-2 font-medium">
            Pitch to prospects already searching for your exact solution.
          </p>
          <div className="flex items-center gap-1.5 text-[#156b3e]">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[15px] font-semibold tracking-wide">Sales-Ready</span>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
