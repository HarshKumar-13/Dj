"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import useReveal from "@/hooks/useReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-navy-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      <div className="w-full px-6 md:px-8 lg:px-16 relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between">
        <div className="mb-12 md:mb-0 max-w-2xl">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            className="font-body text-[0.65rem] font-medium tracking-[0.35em] uppercase text-white/50 mb-6"
          >
            Begin Your Journey
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-white leading-[1.05] mb-6"
          >
            Experience
            <br />
            Bespoke Excellence
          </motion.h2>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
            className="section-divider-light mb-8"
          />
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
            className="font-body text-base text-white/50 leading-relaxed max-w-md"
          >
            Schedule a private consultation at our atelier. Discover the
            Danny &amp; Jones difference.
          </motion.p>
        </div>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}
          className="flex flex-col sm:flex-row gap-4 shrink-0"
        >
          <a href="#" className="btn-light whitespace-nowrap">
            <span>Book Private Consultation</span>
            <svg className="w-4 h-4 text-white relative z-[1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
          <a href="mailto:atelier@dannyandjones.com" className="btn-light whitespace-nowrap">
            <span>Contact Atelier</span>
          </a>
        </motion.div>
      </div>

        {/* Trust Signals */}
        <div className="w-full px-6 md:px-8 lg:px-16 relative z-10 w-full max-w-none">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5}
            className="mt-16 pt-12 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            {["Private Appointments", "Global Shipping", "Lifetime Care", "Satisfaction Guaranteed"].map((item) => (
              <p key={item} className="font-body text-[0.6rem] tracking-[0.15em] uppercase text-white/30 font-light">
                {item}
              </p>
            ))}
          </motion.div>
        </div>
    </section>
  );
}
