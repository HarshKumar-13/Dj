"use client";

import { useState, useEffect } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 800);
    }, 3200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`preloader ${exiting ? "preloader-exit" : ""}`}>
      {/* Subtle corner accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-white/10" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-white/10" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-white/10" />

      <div className="preloader-monogram">
        <span className="letter letter-d">D</span>
        <span className="letter letter-amp">&amp;</span>
        <span className="letter letter-j">J</span>
      </div>

      <div className="preloader-brand-name">Danny &amp; Jones</div>

      <div className="preloader-line" />

      <div className="preloader-tagline">Bespoke Craftsmanship Since Inception</div>
    </div>
  );
}
