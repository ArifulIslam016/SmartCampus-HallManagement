"use client";

import { useRef, useState } from "react";

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

  // Backend থেকে আনতে চাইলে এই notices array টা
  // replace করো: const [notices, setNotices] = useState([]);
  // useEffect(() => { fetch('/api/notices').then(...) }, []);

  const items = [...notices, ...notices]; // seamless loop

  return (
    <div className="notice-wrapper">
      <div className="notice-label">
        <span className="pulse-dot" />
        Notice
      </div>

      <div className="notice-track">
        <div
          className={`notice-scroll ${paused ? "paused" : ""}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {items.map((notice, i) => (
            <span key={i} className="notice-item">
              <span className="arrow">▸</span>
              <span className={`tag ${notice.type}`}>{notice.tag}</span>
              {notice.text}
              <span className="divider">◆</span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .notice-wrapper {
          width: 100%;
          background: linear-gradient(90deg, #0f172a 0%, #1e293b 40%, #0f172a 100%);
          border-top: 2px solid #f59e0b;
          border-bottom: 2px solid #f59e0b;
          height: 40px;
          display: flex;
          align-items: center;
          overflow: hidden;
          box-shadow: 0 0 18px rgba(245, 158, 11, 0.18);
        }

        .notice-label {
          flex-shrink: 0;
          background: #f59e0b;
          color: #0f172a;
          font-family: "IBM Plex Mono", monospace;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0 14px 0 12px;
          height: 100%;
          display: flex;
          align-items: center;
          gap: 6px;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 100%, 0 100%);
          padding-right: 24px;
        }

        .pulse-dot {
          width: 7px;
          height: 7px;
          background: #0f172a;
          border-radius: 50%;
          animation: pulse 1.2s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        .notice-track {
          flex: 1;
          overflow: hidden;
          height: 100%;
          display: flex;
          align-items: center;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 4%,
            black 96%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 4%,
            black 96%,
            transparent 100%
          );
        }

        .notice-scroll {
          display: flex;
          align-items: center;
          white-space: nowrap;
          animation: scroll-left 42s linear infinite;
          will-change: transform;
        }

        .notice-scroll.paused {
          animation-play-state: paused;
        }

        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .notice-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0 20px;
          font-family: "IBM Plex Mono", monospace;
          font-size: 12.5px;
          color: #e2e8f0;
          cursor: default;
          transition: color 0.2s;
        }

        .notice-item:hover {
          color: #fde68a;
        }

        .arrow {
          color: #f59e0b;
          font-size: 13px;
        }

        .tag {
          border-radius: 3px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          padding: 2px 5px;
          text-transform: uppercase;
        }

        .tag.urgent {
          background: rgba(239, 68, 68, 0.15);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .tag.info {
          background: rgba(245, 158, 11, 0.12);
          color: #fbbf24;
          border: 1px solid rgba(245, 158, 11, 0.3);
        }

        .divider {
          color: #334155;
          font-size: 14px;
          margin-left: 8px;
        }

        @media (max-width: 640px) {
          .notice-label {
            font-size: 9px;
            padding-right: 20px;
            padding-left: 8px;
          }
          .notice-item {
            font-size: 11.5px;
            padding: 0 14px;
          }
        }
      `}</style>
    </div>
  );
}