"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-navy-950">
      {/* Background Image — flipped horizontally */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="/images/hero-brogue.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110"
          style={{ transform: "scaleX(-1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/30" />
      </motion.div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Corner Decorations */}
      <div className="absolute top-24 left-6 md:left-8 w-16 h-16 border-l border-t border-white/10" />
      <div className="absolute bottom-12 right-6 md:right-8 w-16 h-16 border-r border-b border-white/10" />

      {/* Content — HORIZONTAL ALIGNED AT BOTTOM */}
      <motion.div
        className="relative z-10 h-full flex flex-col md:flex-row items-start md:items-end justify-end md:justify-between pb-24 md:pb-32 px-6 md:px-8 lg:px-16 text-left w-full"
        style={{ y: textY, opacity }}
      >
        <div className="max-w-3xl mb-12 md:mb-0 mr-8">
          <div
            className={`transition-all duration-1000 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-thin tracking-wide leading-[1.05]">
              Crafted for the
              <br />
              Discerning Gentleman
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-[900ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="font-body text-sm md:text-base font-light text-white/45 max-w-lg leading-relaxed mt-6">
              Handcrafted shoes and tailored apparel for those who
              appreciate precision, heritage, and timeless style.
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-[1100ms] w-full md:w-auto shrink-0 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a href="#collections" className="btn-light whitespace-nowrap">
            <span>Explore Collections</span>
            <svg className="w-4 h-4 text-white relative z-[1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
          <a href="#bespoke" className="btn-light whitespace-nowrap">
            <span>Book Consultation</span>
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
        <span className="font-body text-[0.6rem] tracking-[0.3em] uppercase text-white/30 font-light">
          Scroll
        </span>
        <div className="w-[1px] h-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-white/20" />
          <div
            className="absolute top-0 left-0 w-full bg-white/60"
            style={{ height: "40%", animation: "scrollLine 2s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { top: -40%; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}
