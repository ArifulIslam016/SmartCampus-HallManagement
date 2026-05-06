"use client";

import React, { useState } from "react";

const notices = [
  {
    text: "সকল বিভাগের শিক্ষার্থীদের ক্লাসে উপস্থিত থাকা বাধ্যতামূলক — অন্যথায় সেমিস্টার ফাইনাল পরীক্ষায় অংশগ্রহণ করতে দেওয়া হবে না।",
    tag: "জরুরি",
    type: "urgent",
  },
  {
    text: "All department students MUST maintain required class attendance — failing to do so will result in disqualification from the Semester Final Examination.",
    tag: "URGENT",
    type: "urgent",
  },
  {
    text: "Spring 2025 Semester Final Exam Routine will be published soon — stay tuned on the official portal.",
    tag: "INFO",
    type: "info",
  },
  {
    text: "Hall allotment for new students: submit applications at the Provost Office by 15 May 2025.",
    tag: "NOTICE",
    type: "info",
  },
  {
    text: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০ মে থেকে শুরু হবে — সকল হলের আবাসিক শিক্ষার্থীরা নিজ নিজ হলের প্রতিনিধিত্ব করবেন।",
    tag: "ইভেন্ট",
    type: "info",
  },
  {
    text: "Library card renewal deadline: 31 May 2025. Carry your student ID and last semester marksheet.",
    tag: "REMINDER",
    type: "info",
  },
];

export default function NoticeMarquee() {
  const [paused, setPaused] = useState(false);
  const items = [...notices, ...notices]; // Seamless loop

  return (
    <>
      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll-left 42s linear infinite;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] border-y-2 border-[#f59e0b] h-10 flex items-center overflow-hidden shadow-[0_0_18px_rgba(245,158,11,0.18)]">
        
        {/* Notice Label */}
        <div 
          className="relative z-10 flex-shrink-0 bg-[#f59e0b] text-[#0f172a] font-mono font-bold text-[10px] sm:text-[11px] tracking-[1.5px] uppercase px-3 sm:px-4 h-full flex items-center gap-1.5"
          style={{ clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0 100%)", paddingRight: '24px' }}
        >
          <span className="w-1.5 h-1.5 bg-[#0f172a] rounded-full animate-pulse" />
          Notice
        </div>

        {/* Notice Track */}
        <div className="flex-1 overflow-hidden h-full flex items-center [mask-image:linear-gradient(to_right,transparent_0%,black_4%,black_96%,transparent_100%)]">
          <div
            className={`flex items-center white-space-nowrap will-change-transform animate-scroll ${paused ? "paused" : ""}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {items.map((notice, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 sm:px-5 font-mono text-[11.5px] sm:text-[12.5px] text-[#e2e8f0] cursor-default hover:text-[#fde68a] transition-colors whitespace-nowrap">
                <span className="text-[#f59e0b] text-[13px]">▸</span>
                
                {/* Dynamic Tag Styling */}
                <span className={`rounded-[3px] text-[9px] font-bold tracking-wider px-1.5 py-0.5 uppercase border ${
                  notice.type === 'urgent' 
                  ? 'bg-red-500/15 text-red-400 border-red-500/30' 
                  : 'bg-[#f59e0b]/10 text-[#fbbf24] border-[#f59e0b]/30'
                }`}>
                  {notice.tag}
                </span>

                {notice.text}
                <span className="ml-2 text-[#334155] text-sm">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}