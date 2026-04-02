"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";
import useReveal from "@/hooks/useReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Craftsmanship() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  const parallaxY = useParallax(imageRef, 0.1);

  return (
    <section
      id="craftsmanship"
      ref={sectionRef}
      className="relative py-20 md:py-32 overflow-hidden bg-navy-950"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay muted loop playsInline
        >
          <source
            src="https://videos.pexels.com/video-files/3214148/3214148-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/70 to-navy-950/90" />
      </div>

      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="w-full px-6 md:px-8 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <div>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={0}
              className="font-body text-[0.65rem] font-medium tracking-[0.35em] uppercase text-white/50 mb-4"
            >
              The Atelier
            </motion.p>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={1}
              className="font-display text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-thin text-white leading-[1.1] mb-8"
            >
              Designed By You.<br />
              Crafted By Danny & Jones.
            </motion.h2>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={2}
              className="section-divider-light mb-8"
            />
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={3}
              className="font-body text-base md:text-lg text-white/70 leading-relaxed max-w-xl space-y-4 mb-10"
            >
              <p>
                Customisation at Danny & Jones is not an option &mdash; it is the essence of the experience. Every shoe and suit is carefully shaped around your personality, preferences, and fit, transforming a product into a personal signature.
              </p>
              <p>
                From material selection to handcrafted finishing, every detail reflects you.
              </p>
              <p className="text-white/90 italic font-light pt-2">
                Unbox something that carries your identity.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={4}
              className="mt-6"
            >
              <a href="#" className="btn-light w-fit inline-flex items-center gap-3">
                <span>Create Your Signature Piece</span>
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right — Featured Image with parallax */}
          <div ref={imageRef} className="relative overflow-hidden">
            <motion.div
              className="aspect-[4/5] relative img-hover-zoom"
              style={{ y: parallaxY }}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay muted loop playsInline
              >
                <source src="/videos/customisation.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-navy-950/20" />
            </motion.div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <button className="pointer-events-auto w-20 h-20 rounded-full border border-white/30 flex items-center justify-center group hover:border-white/60 hover:bg-white/10 transition-all duration-300">
                <svg className="w-6 h-6 text-white ml-1 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
