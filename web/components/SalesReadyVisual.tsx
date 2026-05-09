"use client";

import React, { useState, useEffect } from 'react';

const codeLines = [
  "import { setupProject } from '@valdt/core';",
  "",
  "const launchStrategy = {",
  "  appName: 'Valdt Validation',",
  "  techStack: ['Next.js', 'React', 'TailwindCSS'],",
  "  optimization: 'Conversion-driven',",
  "  abTesting: true,",
  "  isProductionReady: true",
  "};",
  "",
  "async function buildAndDeploy() {",
  "  console.log('Building sales-ready platform...');",
  "  await setupProject(launchStrategy);",
  "}",
  "buildAndDeploy();"
];

const highlight = (line: string) => {
  if (!line) return null;
  let html = line;
  
  // Light Theme Syntax Highlighting
  // Strings (single quotes) - Emerald
  html = html.replace(/'([^']*)'/g, "<span class='text-emerald-600'>'$1'</span>");
  
  // Keywords - Pink/Red
  ['import', 'from', 'const', 'async', 'function', 'await', 'return'].forEach(kw => {
    html = html.replace(new RegExp(`\\b${kw}\\b`, 'g'), `<span class='text-[#d73a49]'>${kw}</span>`);
  });
  
  // Booleans - Blue
  html = html.replace(/\btrue\b/g, "<span class='text-[#005cc5]'>true</span>");
  
  // Object Keys - Orange/Brown
  html = html.replace(/appName:/g, "<span class='text-[#e36209]'>appName</span>:");
  html = html.replace(/techStack:/g, "<span class='text-[#e36209]'>techStack</span>:");
  html = html.replace(/optimization:/g, "<span class='text-[#e36209]'>optimization</span>:");
  html = html.replace(/abTesting:/g, "<span class='text-[#e36209]'>abTesting</span>:");
  html = html.replace(/isProductionReady:/g, "<span class='text-[#e36209]'>isProductionReady</span>:");
  html = html.replace(/id:/g, "<span class='text-[#e36209]'>id</span>:");
  
  // Functions - Purple
  html = html.replace(/setupProject/g, "<span class='text-[#6f42c1]'>setupProject</span>");
  html = html.replace(/initAnalytics/g, "<span class='text-[#6f42c1]'>initAnalytics</span>");
  html = html.replace(/buildAndDeploy/g, "<span class='text-[#6f42c1]'>buildAndDeploy</span>");
  html = html.replace(/console\.log/g, "<span class='text-slate-800'>console</span><span class='text-slate-500'>.</span><span class='text-[#6f42c1]'>log</span>");

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

export default function SalesReadyVisual() {
  const [typedLines, setTypedLines] = useState<string[]>(Array(codeLines.length).fill(""));
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentLine >= codeLines.length) {
      setIsTyping(false);
      const timer = setTimeout(() => {
        setTypedLines(Array(codeLines.length).fill(""));
        setCurrentLine(0);
        setCurrentChar(0);
        setIsTyping(true);
      }, 4000); // Pause for 4 seconds before restarting loop
      return () => clearTimeout(timer);
    }

    const line = codeLines[currentLine];
    
    if (currentChar < line.length) {
      const timer = setTimeout(() => {
        setTypedLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = line.slice(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(c => c + 1);
      }, Math.random() * 20 + 10); // Random typing speed (faster for more lines)
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 120); // Small pause at the end of each line (faster)
      return () => clearTimeout(timer);
    }
  }, [currentLine, currentChar]);

  return (
    <div className="absolute inset-0 bg-transparent font-mono overflow-hidden pointer-events-none">
      
      {/* Outer L-line */}
      <div 
        className="absolute top-[10px] left-[16px] lg:top-[16px] lg:left-[24px] w-[200%] h-[200%] border-t border-l border-[#533afd]/15 rounded-tl-[44px]"
        style={{ WebkitMaskImage: 'radial-gradient(circle at 0 0, black 0%, transparent 35%)', maskImage: 'radial-gradient(circle at 0 0, black 0%, transparent 35%)' }}
      ></div>
      
      {/* Inner L-line */}
      <div 
        className="absolute top-[22px] left-[28px] lg:top-[32px] lg:left-[40px] w-[200%] h-[200%] border-t border-l border-[#533afd]/15 rounded-tl-[32px]"
        style={{ WebkitMaskImage: 'radial-gradient(circle at 0 0, black 0%, transparent 35%)', maskImage: 'radial-gradient(circle at 0 0, black 0%, transparent 35%)' }}
      ></div>

      {/* Code Text Content */}
      <div className="absolute top-[46px] left-[36px] md:left-[44px] lg:top-[64px] lg:left-[60px] flex flex-col text-[12px] md:text-[14px] lg:text-[15px] leading-[1.6] md:leading-[1.7] lg:leading-[1.7] text-slate-800 whitespace-pre">
        {typedLines.map((line, i) => {
          // Only render lines that have been reached
          if (i > currentLine) return null;

          return (
            <div key={i} className="flex min-h-[1.6em] md:min-h-[1.7em]">
              <span className="w-6 md:w-8 text-right pr-3 md:pr-4 text-slate-400 select-none opacity-50 shrink-0">
                {i + 1}
              </span>
              <span className="flex-1 break-all">
                {highlight(line)}
                {/* Blinking cursor at the end of the current typing line */}
                {i === currentLine && isTyping && (
                  <span className="inline-block w-[2px] h-[14px] md:h-[16px] lg:h-[18px] bg-[#533afd] ml-[2px] animate-pulse align-middle"></span>
                )}
                {/* Resting cursor when finished */}
                {!isTyping && i === codeLines.length - 1 && (
                  <span className="inline-block w-[2px] h-[14px] md:h-[16px] lg:h-[18px] bg-slate-500 ml-[2px] animate-pulse align-middle opacity-50 rounded-sm"></span>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
