"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useParallax, useScrollScale } from "@/hooks/useParallax";
import useReveal from "@/hooks/useReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Heritage() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useReveal(sectionRef);

  const parallaxY = useParallax(imageRef, 0.12);
  const scale = useScrollScale(imageRef, 1.06);

  return (
    <section
      id="heritage"
      ref={sectionRef}
      className="relative bg-white py-20 md:py-32 overflow-hidden"
    >
      <div className="w-full px-6 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={0}
              className="font-body text-[0.65rem] font-medium tracking-[0.35em] uppercase text-navy-300 mb-4"
            >
              Our Heritage
            </motion.p>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={1}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-navy-500 leading-[1.05] mb-8"
            >
              Where Tradition
              <br />
              Meets Mastery
            </motion.h2>
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={2}
              className="section-divider mb-8"
            />
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} custom={3}
              className="font-body text-base md:text-lg text-navy-300 leading-relaxed mb-10 max-w-xl"
            >
              Our master craftsmen blend decades of expertise with time-honoured
              techniques and contemporary precision to create shoes of
              uncompromising quality.
            </motion.p>

          </div>

          {/* Right — Image with parallax */}
          <div ref={imageRef} className="overflow-hidden">
            <motion.div
              className="aspect-[4/5] w-full img-hover-zoom"
              style={{ y: parallaxY, scale }}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay muted loop playsInline
              >
                <source src="/videos/heritage.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
