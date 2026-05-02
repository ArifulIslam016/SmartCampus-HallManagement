"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/mr9S118D/Graphic-Arts-Institute1.jpg",
    badge: "Smart Campus Initiative",
    title: "Empowering Future",
    highlight: "Innovators",
    subtitle:
      "Government Graphic Arts Institute — where creativity meets technology. A modern campus experience for the next generation.",
    cta: "Explore Campus",
    ctaSecondary: "View Departments",
  },
  {
    id: 2,
    image: "https://i.ibb.co/q3jQwkZC/Graphic-Arts-Institute2.jpg",
    badge: "Academic Excellence",
    title: "Shaping Minds,",
    highlight: "Building Futures",
    subtitle:
      "Three specialized departments offering cutting-edge diploma programs in technology and creative arts.",
    cta: "Apply Now",
    ctaSecondary: "Learn More",
  },
  {
    id: 3,
    image: "https://i.ibb.co/3YQ5Xnz0/Graphic-Arts-Institute3.jpg",
    badge: "Hall Management",
    title: "Comfortable Living,",
    highlight: "Better Learning",
    subtitle:
      "Seamless hall management system — from room allocation to daily facilities, all in one smart platform.",
    cta: "Hall Portal",
    ctaSecondary: "Know More",
  },
  
];

const AUTOPLAY_INTERVAL = 5000;

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setProgress(0);
      setTimeout(() => {
        setCurrent(index);
        setAnimating(false);
      }, 500);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [next]);

  // Progress bar
  useEffect(() => {
    setProgress(0);
    const start = Date.now();
    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / AUTOPLAY_INTERVAL) * 100, 100);
      setProgress(pct);
      if (pct >= 100) clearInterval(tick);
    }, 30);
    return () => clearInterval(tick);
  }, [current]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-[#0a0f1e]">
      {/* Background Images here */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={s.image}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e]/90 via-[#0a0f1e]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* Decorative Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div
            className={`max-w-2xl transition-all duration-500 ${
              animating
                ? "opacity-0 translate-y-6"
                : "opacity-100 translate-y-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#f4a726] animate-pulse" />
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase text-[#f4a726]"
                style={{ fontFamily: "'Rajdhani', sans-serif" }}
              >
                {slide.badge}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white mb-2"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              {slide.title}
            </h1>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                background: "linear-gradient(90deg, #f4a726, #e05c2a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {slide.highlight}
            </h1>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg text-white/70 leading-relaxed mb-10 max-w-xl"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                className="group relative overflow-hidden px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide text-white transition-all duration-300"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  background: "linear-gradient(135deg, #f4a726, #e05c2a)",
                  letterSpacing: "0.08em",
                }}
              >
                <span className="relative z-10">{slide.cta}</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              </button>

              <button
                className="px-8 py-3.5 rounded-lg font-semibold text-sm tracking-wide text-white border border-white/25 hover:border-white/60 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                {slide.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              i === current
                ? "w-10 h-2.5 bg-white/30"
                : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
            }`}
          >
            {i === current && (
              <span
                className="absolute top-0 left-0 h-full bg-[#f4a726] rounded-full"
                style={{ width: `${progress}%`, transition: "width 0.05s linear" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prev}
        aria-label="Previous Slide"
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
      >
        <svg
          className="w-4 h-4 text-white group-hover:-translate-x-0.5 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next Slide"
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
      >
        <svg
          className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Counter */}
      <div
        className="absolute top-1/2 right-8 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <span
          className="text-3xl font-black text-white"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {String(current + 1).padStart(2, "0")}
        </span>
        <div className="w-px h-10 bg-white/30" />
        <span
          className="text-sm font-medium text-white/40"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          {String(slides.length).padStart(2, "0")}
        </span>
      </div>

      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </section>
  );
}