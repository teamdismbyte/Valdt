"use client";

import React, { useState, useEffect } from 'react';

const brands = [
  { name: "Valdt.", isBrand: true },
  { 
    name: "Facebook",
    isFullImage: true,
    src: "/facebook-logo.png"
  },
  { 
    name: "Instagram",
    isFullImage: true,
    src: "/instagram-logo.png"
  },
  { 
    name: "Audience Network",
    isFullImage: true,
    src: "/audience-network.png"
  },
  { 
    name: "Messenger",
    isFullImage: true,
    src: "/messenger-logo.png"
  },
  { 
    name: "WhatsApp",
    isFullImage: true,
    src: "/whatsapp-logo.png"
  },
  { 
    name: "Threads",
    isFullImage: true,
    src: "/threads-icon.png"
  },
];

export default function TargetedAdsVisual() {
  const [currentIndex, setCurrentIndex] = useState(4); // Start at Valdt (index 4 in extended array)
  const [isTransitioning, setIsTransitioning] = useState(true);
  
  const cardWidth = 240; 
  const gap = 32;
  const itemWidth = cardWidth + gap;

  // Extend the array for a seamless infinite loop
  // 4 clones before, 7 original, 4 clones after
  const extendedBrands = [
    ...brands.slice(-4),
    ...brands,
    ...brands.slice(0, 4)
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= brands.length + 4) {
      setIsTransitioning(false); 
      setCurrentIndex(currentIndex - brands.length); 
    }
  };

  return (
    <div className="absolute w-[200%] left-[-50%] h-full flex items-center justify-center">
      
      {/* Carousel Container (No fade masks, sharp edges) */}
      <div className="absolute inset-0 w-full h-full flex items-center">
        {/* Carousel Track Anchor - Positioned exactly at the horizontal center */}
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2">
          <div 
            className={`flex items-center ${isTransitioning ? 'transition-transform duration-1000 ease-in-out' : ''}`}
            style={{ 
              // Shift left by half a card width + the index offset to precisely center the active card
              transform: `translateX(-${(cardWidth / 2) + currentIndex * itemWidth}px)`,
              gap: `${gap}px`
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedBrands.map((brand, index) => {
              if (brand.isFullImage) {
                return (
                  <div key={index} className="w-[240px] h-[240px] flex-shrink-0 bg-white border border-gray-100/80 flex items-center justify-center relative shadow-[0_10px_40px_rgb(0,0,0,0.04)] rounded-[12px] overflow-hidden">
                    <img src={brand.src} alt={brand.name} className="w-[85%] h-[85%] object-contain" />
                  </div>
                );
              }

              return (
                <div 
                  key={index}
                  className="w-[240px] h-[240px] flex-shrink-0 bg-white rounded-[12px] shadow-[0_10px_40px_rgb(0,0,0,0.04)] border border-gray-100/80 flex flex-col items-center justify-center p-6 gap-5"
                >
                  {brand.isBrand ? (
                    <span className="text-[46px] font-bold text-slate-900 text-center tracking-tight leading-tight drop-shadow-sm">
                      Valdt<span className="text-[#533afd]">.</span>
                    </span>
                  ) : (
                    <>
                      {brand.icon}
                      <span className="text-[20px] font-bold text-slate-700 text-center tracking-tight leading-tight">
                        {brand.name}
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
