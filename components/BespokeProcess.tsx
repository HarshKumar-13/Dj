"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import useReveal from "@/hooks/useReveal";

const testimonials = [
  {
    quote: "The most comfortable and elegant shoes I've ever worn on the red carpet. Absolute perfection.",
    author: "Daniel Craig",
    role: "Actor"
  },
  {
    quote: "Danny & Jones understand the true meaning of bespoke. Every detail is painstakingly crafted to my exact style.",
    author: "David Beckham",
    role: "Athlete & Style Icon"
  },
  {
    quote: "A masterpiece of craftsmanship. They don't just make shoes, they create wearable art.",
    author: "Idris Elba",
    role: "Actor & Director"
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function BespokeProcess() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  const parallaxY = useParallax(imageRef, 0.1);

  return (
    <section
      id="bespoke"
      ref={sectionRef}
      className="bg-gray-100 py-20 md:py-32 overflow-hidden"
    >
      <div className="w-full px-6 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Video with parallax */}
          <div ref={imageRef} className="relative overflow-hidden order-2 lg:order-1 h-full min-h-[400px]">
            <motion.div
              className="absolute inset-0 w-full h-full img-hover-zoom"
              style={{ y: parallaxY }}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay muted loop playsInline
              >
                <source src="/videos/star-testimonials.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-navy-950/10" />
            </motion.div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button className="pointer-events-auto w-20 h-20 rounded-full border border-white/50 flex items-center justify-center group hover:border-white hover:bg-white/20 transition-all duration-300">
                <svg className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right — Testimonials */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
              className="font-body text-[0.65rem] font-medium tracking-[0.35em] uppercase text-navy-300 mb-4"
            >
              Client Testimonials
            </motion.p>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-navy-500 leading-[1.05] mb-4"
            >
              Trusted By
              <br />
              Global Icons
            </motion.h2>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              className="section-divider mb-12"
            />

            {/* Celebrity Quotes */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
              className="space-y-8 md:space-y-12"
            >
              {testimonials.map((test, i) => (
                <motion.div
                  key={test.author}
                  variants={fadeUp}
                  custom={3 + i}
                  className="group"
                >
                  <p className="font-display text-xl md:text-2xl font-normal text-navy-500 mb-4 leading-relaxed group-hover:text-navy-400 transition-colors duration-300">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                  <div>
                    <span className="font-body text-sm font-medium tracking-[0.1em] uppercase text-navy-500">
                      {test.author}
                    </span>
                    <span className="font-body text-xs text-navy-300 ml-3 border-l border-navy-500/20 pl-3">
                      {test.role}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={8}
              className="mt-12"
            >
              <a href="#contact" className="btn-primary">
                <span>Join The Icons</span>
                <svg className="btn-arrow w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
