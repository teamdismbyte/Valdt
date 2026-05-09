import React from 'react';

export default function SubmitIdeaVisual() {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center relative mt-0 lg:mt-2 pointer-events-none">
      <div className="w-[260px] sm:w-[280px] bg-white rounded-[20px] shadow-lg shadow-gray-200/50 p-4 flex flex-col gap-3 relative z-10 border border-gray-100">
        
        <div className="flex flex-col gap-1">
          <label className="text-[9px] text-gray-400 font-bold tracking-wider uppercase ml-1">Your Idea</label>
          <div className="bg-gray-50/80 rounded-[14px] p-3 border border-gray-100/50">
             <p className="text-[12px] text-gray-800 leading-relaxed font-medium">
               I’m building a B2B SaaS for automated client onboarding. I have the core concept but need a tech partner for fast execution.
             </p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-[9px] text-gray-400 font-bold tracking-wider uppercase ml-1">Primary Goal</label>
          <div className="bg-gray-50/80 rounded-[14px] p-3 border border-gray-100/50">
             <p className="text-[12px] text-gray-800 leading-relaxed font-medium">
               Launch a functional MVP within 3 weeks and start acquiring early users.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}
