"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const shoes = [
  {
    name: "The Oxford",
    subtitle: "Timeless Formality",
    description: "Hand-lasted and Goodyear welted. The pinnacle of formal footwear.",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80",
    cardDefault: "/images/Danny & Jones product card images/Prod 1_default.png",
    cardHover: "/images/Danny & Jones product card images/Prod 1_hover.png",
  },
  {
    name: "The Brogue",
    subtitle: "Distinguished Character",
    description: "Intricate perforations meet impeccable construction.",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80",
    cardDefault: "/images/Danny & Jones product card images/Prod 2_default.png",
    cardHover: "/images/Danny & Jones product card images/Prod 2_hover.png",
  },
  {
    name: "The Chelsea",
    subtitle: "Refined Versatility",
    description: "Sleek, elastic-sided boots for the modern gentleman.",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    cardDefault: "/images/Danny & Jones product card images/Prod 3_default.png",
    cardHover: "/images/Danny & Jones product card images/Prod 3_hover.png",
  },
  {
    name: "The Tuxedo",
    subtitle: "Evening Elegance",
    description: "Patent leather perfection for black-tie occasions.",
    image: "https://images.unsplash.com/photo-1621996659490-3275b4d0d951?w=800&q=80",
    cardDefault: "/images/Danny & Jones product card images/Prod 4_default.png",
    cardHover: "/images/Danny & Jones product card images/Prod 4_hover.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Collections() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const featured = shoes[currentIndex];

  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start end", "end start"],
  });

  const bannerY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const bannerScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  return (
    <section id="collections" className="bg-brand-offwhite overflow-hidden">
      {/* ── Hero Banner — Carousel ── */}
      <div ref={bannerRef} className="relative h-[calc(60vh+20px)] md:h-[calc(75vh+20px)] overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{ y: bannerY, scale: bannerScale }}
          >
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

            {/* Banner Content — left aligned */}
            <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-8 lg:px-16 pb-12 md:pb-20">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-[0.65rem] font-medium tracking-[0.35em] uppercase text-white/50 mb-3"
              >
                {featured.subtitle}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-white leading-[0.95] mb-4"
              >
                {featured.name}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="font-body text-sm md:text-base text-white/60 max-w-md mb-8"
              >
                {featured.description}
              </motion.p>
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="btn-light w-fit"
              >
                <span>Discover</span>
                <svg className="w-4 h-4 relative z-[1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + 3) % 3)}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors z-20 opacity-0 group-hover:opacity-100 duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % 3)}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors z-20 opacity-0 group-hover:opacity-100 duration-300"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 right-6 md:right-8 lg:right-16 flex gap-3 z-20">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-12 h-[2px] transition-all duration-300 ${
                i === currentIndex ? "bg-white" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Product Cards Section ── */}
      <div className="px-6 md:px-8 lg:px-16 py-16 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-body text-[0.65rem] font-medium tracking-[0.35em] uppercase text-navy-300 mb-3"
        >
          Signature Footwear
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-thin text-navy-500 leading-[1.05] mb-12"
        >
          The Collection
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {shoes.map((shoe, i) => (
            <motion.div
              key={shoe.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              className="group cursor-pointer"
            >
              <div className="img-hover-zoom aspect-[3/4] relative mb-5 overflow-hidden bg-white transition-all duration-500">
                <img
                  src={shoe.cardDefault}
                  alt={shoe.name}
                  className="w-full h-full object-contain absolute inset-0 z-0 transition-opacity duration-500"
                />
                <img
                  src={shoe.cardHover}
                  alt={shoe.name + " hover"}
                  className="w-full h-full object-contain absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-navy-500/0 group-hover:bg-navy-500/10 transition-all duration-500 z-20" />
                <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                  <span className="font-body text-[0.55rem] font-medium tracking-[0.2em] uppercase text-navy-500">
                    Customize
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-display text-xl md:text-2xl font-light text-navy-500 group-hover:text-navy-400 transition-colors duration-300">
                    {shoe.name}
                  </h4>
                  <p className="font-body text-[0.55rem] font-medium tracking-[0.2em] uppercase text-navy-300 mt-1">
                    {shoe.subtitle}
                  </p>
                </div>
                <p className="font-body text-sm text-navy-500 mt-1">
                  £{350 + i * 50}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <a href="#" className="inline-flex items-center gap-3 group border border-navy-500/20 px-8 py-4 hover:bg-navy-500 hover:text-white transition-all duration-500">
            <span className="font-body text-[0.65rem] font-medium tracking-[0.2em] uppercase">
              View Entire Collection
            </span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </motion.div>

        {/* ── Bespoke Customization Section ── */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.8 }}
  className="mt-24 md:mt-32 border-t border-navy-500/10 pt-20"
>
  <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
    
    {/* Left Content */}
    <div>
      <p className="font-body text-[0.65rem] font-medium tracking-[0.35em] uppercase text-navy-300 mb-3">
        Bespoke Experience
      </p>

      <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-thin text-navy-500 leading-[1.05] mb-6">
        Design Your Own Pair
      </h3>

      <p className="font-body text-sm md:text-base text-navy-400 max-w-xl leading-7 mb-8">
        A truly personal creation — choose your leather, sole,
        finish, stitching, and silhouette to craft footwear that
        reflects your identity with uncompromising elegance.
      </p>

      <div className="flex flex-wrap gap-3 mb-10">
        {[
          "Leather",
          "Sole",
          "Finish",
          "Monogram",
          "Color",
          "Lining",
        ].map((item) => (
          <span
            key={item}
            className="border border-navy-500/15 px-4 py-2 font-body text-[0.6rem] tracking-[0.2em] uppercase text-navy-400"
          >
            {item}
          </span>
        ))}
      </div>

      <a
        href="/bespoke"
        className="inline-flex items-center gap-3 group border border-navy-500/20 px-8 py-4 hover:bg-navy-500 hover:text-white transition-all duration-500"
      >
        <span className="font-body text-[0.65rem] font-medium tracking-[0.2em] uppercase">
          Start Customizing
        </span>
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
        </svg>
      </a>
    </div>

    {/* Right Visual */}
    <div className="relative">
      <div className="aspect-[4/5] overflow-hidden bg-white">
        <img
          src="\images\hero-brogue.jpg"
          alt="Custom made shoes"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>

      <div className="absolute top-6 left-6 bg-white/95 px-4 py-2">
        <span className="font-body text-[0.55rem] tracking-[0.2em] uppercase text-navy-500">
          Handcrafted
        </span>
      </div>

    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
}
